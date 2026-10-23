/* ===========================================================================
   RENDER — monta o HTML da loja a partir de produtos.js.

   E' o MESMO arquivo no navegador e no gerador (gerar.js). Assim a pagina que
   o Google le (escrita pelo gerador) e a que o cliente ve depois que o JS roda
   saem da mesma funcao, e nunca divergem. Por isso aqui nao tem DOM: so'
   funcoes que recebem dados e devolvem texto.
   =========================================================================== */
(function(g){
var V = g.VPX = {};

V.esc = function(t){
  return String(t == null ? '' : t).replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
};
V.moeda = function(v){
  /* sem toLocaleString: o Node do gerador pode nao ter os dados de pt-BR e
     escreveria "89.90" na pagina que o Google le */
  var n = Number(v || 0).toFixed(2).split('.');
  return 'R$ ' + n[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ',' + n[1];
};
var esc = V.esc, moeda = V.moeda;

/* "Ignite V155" -> fabricante "Ignite" + codigo "V155". O codigo aparece
   grande; o nome inteiro vai para o carrinho, o pedido e o Google. */
V.partesNome = function(nome){
  var m = /^(\S+)\s+(.+)$/.exec(nome || '');
  return m ? {fab:m[1], cod:m[2]} : {fab:'', cod:nome || ''};
};
/* Sabor pode vir como texto ou como {nome, estoque:false}. */
V.normSabor = function(s){
  return (typeof s === 'string') ? {nome:s, estoque:true}
                                 : {nome:(s && s.nome) || '', estoque:s.estoque !== false};
};
V.temPreco = function(m){ return typeof m.preco === 'number' && m.preco > 0; };
V.numPuffs = function(m){ return Number(String(m.puffs || '0').replace(/\D/g,'')) || 0; };
V.disponiveis = function(m){
  return (m.sabores || []).map(V.normSabor).filter(function(s){ return s.estoque; });
};
V.link = function(m){ return m.slug + '.html'; };

/* Traducao e nota do sabor. Dupla do V400 Mix ("A + B") e' montada com os
   dois lados, sem precisar cadastrar cada combinacao. */
V.sabor = function(nome){
  var S = g.VAPOREX_SABORES || {};
  var lados = String(nome).split(' + ');
  if (lados.length === 1){
    var s = S[nome] || {};
    return {pt:s.pt || '', nota:s.nota || ''};
  }
  var pts = lados.map(function(l){ return (S[l.trim()] || {}).pt || l.trim(); });
  return {pt: pts.join(' + '),
          nota: 'De um lado ' + pts[0] + '; do outro, ' + pts.slice(1).join(' e ') + '.'};
};

/* ------------------------------------------------------------- cartao
   Foto e nome sao LINKS de verdade para a pagina do produto: e' por eles que
   o Google chega nas paginas e entende o que cada uma e'. */
V.cartao = function(m, i, achados, noCar){
  var nm = V.partesNome(m.modelo), url = V.link(m);
  var opcoes = '<option value="">Escolha o sabor</option>' +
    (m.sabores || []).map(function(s){
      var sb = V.normSabor(s), pt = V.sabor(sb.nome).pt;
      return '<option value="' + esc(sb.nome) + '"' + (sb.estoque ? '' : ' disabled') + '>' +
        esc(sb.nome) + (pt ? ' (' + esc(pt) + ')' : '') +
        (sb.estoque ? '' : ', esgotado') + '</option>';
    }).join('');

  return '<article class="modelo">' +
    '<a class="foto" href="' + url + '">' +
      (m.destaque ? '<span class="selo">' + esc(m.destaque) + '</span>' : '') +
      (m.foto ? '<img src="' + esc(m.foto) + '" alt="' + esc(m.modelo) +
        ', pod descartável de ' + esc(m.puffs) + ' puffs" loading="lazy" width="560" height="560">' : '') +
    '</a>' +
    '<div class="fab">' + esc(nm.fab) + '</div>' +
    '<h3><a href="' + url + '">' + esc(nm.cod) + '</a></h3>' +
    (m.subtitulo ? '<p class="subtitulo">' + esc(m.subtitulo) + '</p>' : '') +
    (m.resumo ? '<p class="resumo">' + esc(m.resumo) + '</p>' : '') +
    /* os diferenciais em lista: e' o que o cliente compara entre um cartao e
       outro, e lista se le na diagonal, paragrafo nao */
    (m.pontos && m.pontos.length ? '<ul class="pontos">' + m.pontos.map(function(p){
      return '<li>' + esc(p) + '</li>'; }).join('') + '</ul>' : '') +
    '<div class="ficha-curta">' +
      (m.puffs ? '<span><b>' + esc(m.puffs) + '</b> puffs</span>' : '') +
      '<span><b>' + V.disponiveis(m).length + '</b> sabores</span></div>' +
    (achados && achados.length
      ? '<div class="achou">Tem ' + achados.map(esc).join(', ') + '</div>' : '') +
    '<div class="linha-preco">' +
      (V.temPreco(m) ? '<span class="preco">' + moeda(m.preco) + '</span>'
                     : '<span class="sem-preco">Preço a definir</span>') +
      '<a class="ver" href="' + url + '">Ver detalhes<span class="sr"> do ' +
        esc(m.modelo) + '</span></a>' +
    '</div>' +
    '<div class="escolha">' +
      /* O select NUNCA e' desabilitado, mesmo sem preco: travado, a setinha
         nao abria e o site parecia quebrado. Sem preco, bloqueia so' o botao. */
      '<div class="sel vazio"><select id="sel-' + i + '" data-m="' + i + '"' +
        ' aria-label="Sabor do ' + esc(m.modelo) + '">' + opcoes + '</select></div>' +
      '<button class="bt add" data-m="' + i + '"' + (V.temPreco(m) ? '' : ' disabled') +
        '>Adicionar</button>' +
      '<div class="no-carrinho" id="nc-' + i + '" aria-live="polite">' +
        (noCar ? noCar + ' no carrinho' : '') + '</div>' +
    '</div>' +
  '</article>';
};

/* -------------------------------------------------- pagina do produto */
V.ficha = function(m){
  var linhas = [];
  if (m.puffs) linhas.push(['Duração', m.puffs + ' puffs']);
  linhas.push(['Sabores disponíveis', String(V.disponiveis(m).length)]);
  var f = m.ficha || {};
  Object.keys(f).forEach(function(k){
    if (f[k] != null && f[k] !== '') linhas.push([k, f[k]]);
  });
  linhas.push(['Marca', V.partesNome(m.modelo).fab]);
  return '<table class="tabela"><tbody>' + linhas.map(function(l){
    return '<tr><th scope="row">' + esc(l[0]) + '</th><td>' + esc(l[1]) + '</td></tr>';
  }).join('') + '</tbody></table>';
};

/* Lista de sabores com quantidade em cada um: quem leva tres sabores monta
   tudo de uma vez. A nota de cada sabor e' texto util para o cliente e para o
   Google ao mesmo tempo. */
V.listaSabores = function(m){
  var compra = V.temPreco(m);
  return '<ul class="sabores">' + (m.sabores || []).map(function(s, k){
    var sb = V.normSabor(s), inf = V.sabor(sb.nome);
    return '<li class="' + (sb.estoque ? '' : 'esgotado') + '">' +
      '<div class="nm"><b>' + esc(sb.nome) + '</b>' +
        (sb.estoque ? (inf.nota ? '<span>' + esc(inf.nota) + '</span>'
                                : (inf.pt ? '<span>' + esc(inf.pt) + '</span>' : ''))
                    : '<span>Esgotado no momento</span>') + '</div>' +
      '<div class="passo">' +
        '<button data-pq="-1" data-k="' + k + '" aria-label="Menos ' + esc(sb.nome) + '" disabled>−</button>' +
        '<span class="q" id="pq-' + k + '">0</span>' +
        '<button data-pq="1" data-k="' + k + '" aria-label="Mais ' + esc(sb.nome) + '"' +
          (sb.estoque && compra ? '' : ' disabled') + '>+</button>' +
      '</div></li>';
  }).join('') + '</ul>';
};

V.paginaProduto = function(m, i, CAT, LOJA){
  var nm = V.partesNome(m.modelo);
  var prazo = LOJA.prazo_entrega || 'breve';
  var outros = CAT.map(function(o, j){ return [o, j]; })
    .filter(function(x){ return x[1] !== i; })
    /* os vizinhos de duracao primeiro: quem olha o V155 compara com V80 e
       Frozen, nao com o V400 */
    .sort(function(a, b){
      return Math.abs(V.numPuffs(a[0]) - V.numPuffs(m)) - Math.abs(V.numPuffs(b[0]) - V.numPuffs(m));
    }).slice(0, 3);

  return '<nav class="trilha w" aria-label="Você está em">' +
      '<a href="index.html">Início</a><span aria-hidden="true">/</span>' +
      '<a href="index.html#catalogo">Modelos</a><span aria-hidden="true">/</span>' +
      '<span aria-current="page">' + esc(m.modelo) + '</span></nav>' +

    '<div class="pp-topo w">' +
      '<div class="pp-foto"><div class="foto">' +
        (m.destaque ? '<span class="selo">' + esc(m.destaque) + '</span>' : '') +
        (m.foto ? '<img src="' + esc(m.foto) + '" alt="' + esc(m.modelo) + ', ' +
          esc((m.subtitulo || '').toLowerCase()) + '" width="560" height="560">' : '') +
      '</div></div>' +
      '<div class="pp-info">' +
        '<div class="fab">' + esc(nm.fab) + '</div>' +
        '<h1><span class="sr">' + esc(nm.fab) + ' </span>' + esc(nm.cod) + '</h1>' +
        (m.subtitulo ? '<p class="subtitulo">' + esc(m.subtitulo) + '</p>' : '') +
        (V.temPreco(m)
          ? '<div class="preco">' + moeda(m.preco) + '</div>' +
            '<div class="pagto">Pague na entrega: Pix, dinheiro ou cartão</div>'
          : '<div class="sem-preco">Preço a definir. Chame no WhatsApp.</div>') +
        (m.pontos && m.pontos.length ? '<ul class="pontos">' + m.pontos.map(function(p){
          return '<li>' + esc(p) + '</li>'; }).join('') + '</ul>' : '') +
        '<h2 class="pp-h">Escolha os sabores</h2>' +
        V.listaSabores(m) +
        '<div class="rodape-prod">' +
          '<button class="bt" id="prod-add" disabled>Escolha pelo menos um sabor</button>' +
          '<div class="dica">Entrega em ' + esc(LOJA.cidade || 'sua cidade') + ' em ' +
            esc(prazo) + '</div>' +
        '</div>' +
      '</div>' +
    '</div>' +

    '<section class="pp-sobre w">' +
      '<div>' +
        '<h2>Sobre o ' + esc(m.modelo) + '</h2>' +
        (m.descricao || []).map(function(p){ return '<p>' + esc(p) + '</p>'; }).join('') +
      '</div>' +
      '<div>' +
        '<h2>Ficha técnica</h2>' + V.ficha(m) +
      '</div>' +
    '</section>' +

    '<section class="pp-outros w">' +
      '<h2>Compare com outros modelos</h2>' +
      '<div class="prateleira">' + outros.map(function(x){
        return V.cartao(x[0], x[1]);
      }).join('') + '</div>' +
    '</section>';
};

/* -------------------------------------------------- pecas da pagina */
var ICONE = {
  relogio:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  carteira:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M16 12.5h2"/><path d="M3 9h18"/></svg>',
  conversa:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><path d="M4 5h16v11H9l-5 4V5z"/></svg>',
  sacola:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 7h12l-1 13H7L6 7z"/><path d="M9 7a3 3 0 0 1 6 0"/></svg>',
  busca:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>'
};
V.ICONE = ICONE;

function zap(L){ return 'https://wa.me/' + (L.whatsapp || ''); }
function gratis(L){ return !(Number(L.taxa_entrega) > 0); }
function onde(L){ return L.area_entrega || L.cidade || ''; }

V.porta = function(){
  /* Fica no HTML e nao e' criada por JS: se o JS falhar, a porta continua
     fechada em vez de a loja abrir liberada. */
  return '<div class="idade" id="porta"><div class="cx">' +
    '<p class="idade-t">Você tem 18 anos ou mais?</p>' +
    '<p>Esta loja vende produtos com nicotina, proibidos para menores de 18 anos.</p>' +
    '<div class="bts"><button class="bt" id="tem18">Sim, tenho 18 ou mais</button>' +
    '<button class="bt-sec" id="nao18">Não</button></div>' +
    '<div class="lei">Contém nicotina, substância que causa dependência.</div>' +
  '</div></div>';
};

V.cabecalho = function(L){
  /* no celular a segunda metade some: inteira, a faixa quebrava em duas
     linhas e empurrava a loja para baixo */
  return '<div class="aviso">' + (gratis(L) ? 'Entrega grátis' : 'Entrega') +
      (L.cidade ? ' em ' + esc(L.cidade) : '') + ' em ' + esc(L.prazo_entrega || 'breve') +
      '<span class="so-largo"> e pagamento só na entrega</span></div>' +
    '<header class="topo"><div class="faixa w">' +
      '<a class="logo" href="index.html"><img src="assets/emblema.jpg" alt="" width="38" height="38">' +
        '<span>Vaporex</span></a>' +
      '<nav aria-label="Seções">' +
        '<a href="index.html#catalogo">Modelos</a>' +
        '<a href="index.html#como-pedir">Como pedir</a>' +
        '<a href="index.html#duvidas">Dúvidas</a></nav>' +
      '<button class="bt-carrinho" id="abrir-carrinho" aria-label="Abrir carrinho">' +
        ICONE.sacola + '<span class="n zero" id="contador">0</span></button>' +
    '</div></header>';
};

V.garantias = function(L){
  var g2 = [
    [ICONE.relogio, 'Entrega em ' + esc(L.prazo_entrega || 'breve'),
      (gratis(L) ? 'Grátis' : 'Taxa de ' + moeda(L.taxa_entrega)) +
      (onde(L) ? ' em ' + esc(onde(L)) : ', direto no seu endereço')],
    [ICONE.carteira, 'Pague só na entrega', 'Pix, dinheiro ou cartão. O site não pede cartão.'],
    [ICONE.conversa, 'Pedido pelo WhatsApp', 'Sem cadastro e sem senha. Você fala direto com a loja.']
  ];
  return '<div class="garantias"><ul class="w">' + g2.map(function(x){
    return '<li>' + x[0] + '<div><b>' + x[1] + '</b>' + x[2] + '</div></li>';
  }).join('') + '</ul></div>';
};

V.duvidas = function(L){
  var cid = L.cidade || 'sua cidade';
  return [
    ['Quanto tempo demora a entrega?',
     'Até ' + String(L.prazo_entrega || '').replace(/^até\s*/,'') + ' em ' + cid +
     ', contando a partir do momento em que a loja recebe sua mensagem no WhatsApp.'],
    ['Entregam no meu bairro?', L.area_entrega
      ? 'A loja entrega em ' + L.area_entrega + '. Ficou na dúvida? Mande o bairro no WhatsApp antes de pedir.'
      : 'A loja entrega em ' + cid + '. Mande seu bairro no WhatsApp antes de pedir e a loja confirma na hora.'],
    ['Como eu pago?', 'Na entrega, por Pix, dinheiro ou cartão. Se for pagar em dinheiro, ' +
     'avise no pedido para quanto precisa de troco.'],
    ['Preciso criar conta?', 'Não. Você escolhe os produtos, preenche o endereço e o pedido ' +
     'vai pronto para o WhatsApp da loja.'],
    ['Qual pod Ignite dura mais?', 'O Ignite V400 Ice e o V400 Mix, com 40.000 puffs cada. ' +
     'Depois vêm o V300 (30.000), o Frozen (20.000), o V155 (15.500) e o V80 (8.000). Puff é ' +
     'cada tragada; quantos dias isso dá depende de quanto você usa.'],
    ['Qual a diferença entre o V400 Ice e o V400 Mix?', 'Os dois têm 40.000 puffs. O Ice tem ' +
     'um sabor por aparelho; o Mix tem dois sabores no mesmo pod, já combinados.'],
    ['Posso levar sabores e modelos diferentes?', 'Pode. Monte o carrinho com o que quiser: ' +
     'tudo vai na mesma mensagem e chega na mesma entrega.'],
    ['Enviei o pedido. E agora?', 'A loja responde pelo WhatsApp confirmando e o pedido sai ' +
     'para entrega. Se o WhatsApp não abriu, chame a loja pelo botão de atendimento.']
  ];
};
V.duvidasHtml = function(L){
  return V.duvidas(L).map(function(d){
    return '<details><summary>' + esc(d[0]) + '</summary><p>' + esc(d[1]) + '</p></details>';
  }).join('');
};

V.rodape = function(L){
  return '<footer><div class="w">' +
    '<div class="colunas">' +
      '<div><div class="marca"><img src="assets/emblema.jpg" alt="" width="50" height="50">' +
        '<span>Vaporex Vape Store</span></div>' +
        '<p>Pods Ignite com entrega em ' + esc(L.prazo_entrega || 'breve') +
          (L.cidade ? ' em ' + esc(L.cidade) + (L.estado ? '-' + esc(L.estado) : '') : '') +
          '. Pedido pelo WhatsApp, pagamento na entrega.</p></div>' +
      '<div><h2 class="rod-h">Atendimento</h2><ul>' +
        '<li><a href="' + zap(L) + '" target="_blank" rel="noopener">WhatsApp ' +
          esc(L.whatsapp_exibicao || '') + '</a></li>' +
        (L.horario ? '<li>' + esc(L.horario) + '</li>' : '') +
      '</ul></div>' +
      '<div><h2 class="rod-h">Modelos</h2><ul>' +
        (g.VAPOREX_CATALOGO || []).map(function(m){
          return '<li><a href="' + V.link(m) + '">' + esc(m.modelo) + '</a></li>';
        }).join('') +
      '</ul></div>' +
    '</div>' +
    '<p class="lei">Venda proibida para menores de 18 anos. Contém nicotina, substância que ' +
      'causa dependência. O pagamento é feito na entrega; este site não cobra nada nem ' +
      'guarda seus dados.</p>' +
  '</div></footer>';
};

V.folhas = function(){
  return '<div class="barra-fixa" id="barra" hidden><div class="faixa">' +
      '<div><div class="tt" id="barra-pecas">Seu pedido</div>' +
      '<div class="vv" id="barra-total">R$ 0,00</div></div>' +
      '<button class="bt" id="barra-ir">Ver pedido</button></div></div>' +
    '<div class="folha" id="folha" hidden>' +
      '<div class="painel" role="dialog" aria-modal="true" aria-labelledby="folha-titulo">' +
        '<div class="cabeca"><h2 id="folha-titulo">Seu pedido</h2>' +
        '<button class="fechar" id="folha-fechar" aria-label="Fechar">&times;</button></div>' +
        '<div id="folha-corpo"></div></div></div>';
};

})(typeof window !== 'undefined' ? window : globalThis);
