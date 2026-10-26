/* ===========================================================================
   LOJA — comportamento: porta de idade, busca, carrinho, pagina do produto e
   pedido pelo WhatsApp. Vale para TODAS as paginas (inicio e produtos); cada
   trecho so' roda se o elemento dele existir na pagina.

   O HTML ja chega pronto do gerador (para o Google ler). Aqui o catalogo e'
   redesenhado com os dados de produtos.js, para preco e estoque mudarem na
   hora sem precisar gerar de novo.

   Tudo acontece no navegador do cliente. Nao ha servidor, nao ha pagamento
   online e nenhum dado do cliente sai daqui a nao ser dentro da mensagem que
   ELE mesmo envia pelo WhatsApp.

   O CARRINHO SOBREVIVE A RECARGA E A TROCA DE PAGINA (localStorage): quem
   abre um produto, volta e abre outro nao perde o que ja escolheu.
   =========================================================================== */
(function(){
var V = window.VPX;
var LOJA = window.VAPOREX_LOJA || {};
var CAT = window.VAPOREX_CATALOGO;
var esc = V.esc, moeda = V.moeda;
var ZAP = 'https://wa.me/' + (LOJA.whatsapp || '');
var CARRINHO = [];
try { CARRINHO = JSON.parse(localStorage.getItem('vpx_carrinho') || '[]'); } catch(e){}

function $(id){ return document.getElementById(id); }
function salvar(){
  try { localStorage.setItem('vpx_carrinho', JSON.stringify(CARRINHO)); } catch(e){}
}
function semAcento(t){
  return String(t).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');
}
function qtdModelo(m){
  return CARRINHO.filter(function(x){ return x.nome === m.modelo; })
                 .reduce(function(s,x){ return s + x.qtd; }, 0);
}
/* A chave de um item do carrinho e' sempre "Modelo|Sabor": soma quantidade do
   mesmo sabor e diferencia dois sabores do mesmo aparelho. */
function adicionar(m, sabor, qtd){
  var chave = m.modelo + '|' + sabor;
  var achou = CARRINHO.filter(function(x){ return x.chave === chave; })[0];
  if (achou) achou.qtd += qtd;
  else CARRINHO.push({chave:chave, nome:m.modelo, sabor:sabor, preco:m.preco,
                      foto:m.foto || '', qtd:qtd});
  salvar(); pinta();
}

/* ------------------------------------------------------- porta de idade */
var porta = $('porta');
function abrirLoja(){ porta.hidden = true; $('loja').hidden = false; pinta(); }
try { if (localStorage.getItem('vpx_18') === 'sim') abrirLoja(); } catch(e){}
$('tem18').onclick = function(){
  try { localStorage.setItem('vpx_18','sim'); } catch(e){}
  abrirLoja();
};
$('nao18').onclick = function(){
  porta.innerHTML = '<div class="cx"><p class="idade-t">Volte quando fizer 18</p>' +
    '<p>Esta loja é exclusiva para maiores de 18 anos.</p></div>';
};

/* ------------------------------------------------------ catalogo (inicio)
   Busca por SABOR, que e' como o cliente pensa ("tem de uva?"). Procura no
   nome em ingles e na traducao, entao "uva" acha Grape Ice.
   Busca e ordem redesenham a prateleira; adicionar ao carrinho NAO (so'
   atualiza contadores): redesenhar apagaria o sabor ja escolhido nos outros
   cartoes. */
var lista = $('lista-produtos');
function montarCatalogo(){
  if (!lista) return;
  if (window.SEM_CATALOGO || !Array.isArray(CAT) || !CAT.length){
    lista.innerHTML = '<div class="nada">O catálogo não carregou. ' +
      '<a href="' + esc(ZAP) + '" target="_blank" rel="noopener">Chame no WhatsApp</a> ' +
      'que a loja passa o que tem.</div>';
    return;
  }
  var termo = semAcento(($('busca').value || '').trim());
  var ordem = $('ordem').value;
  var itens = CAT.map(function(m, i){
    var achados = null;
    if (termo){
      achados = (m.sabores || []).map(V.normSabor).filter(function(s){
        var inf = V.sabor(s.nome);
        return semAcento(s.nome + ' ' + inf.pt).indexOf(termo) > -1;
      }).map(function(s){ return s.nome; });
    }
    return {m:m, i:i, achados:achados};
  }).filter(function(x){ return !termo || x.achados.length; });

  if (ordem === 'puffs') itens.sort(function(a,b){ return V.numPuffs(b.m) - V.numPuffs(a.m); });
  if (ordem === 'menor') itens.sort(function(a,b){ return (a.m.preco||1e9) - (b.m.preco||1e9); });
  if (ordem === 'maior') itens.sort(function(a,b){ return (b.m.preco||0) - (a.m.preco||0); });

  lista.innerHTML = itens.length
    ? itens.map(function(x){ return V.cartao(x.m, x.i, x.achados, qtdModelo(x.m)); }).join('')
    : '<div class="nada">Nenhum modelo tem esse sabor no momento. ' +
      '<a href="' + esc(ZAP) + '" target="_blank" rel="noopener">Pergunte no WhatsApp</a> ' +
      'se chega em breve.</div>';
}
if (lista){
  $('busca').addEventListener('input', montarCatalogo);
  $('ordem').addEventListener('change', function(){
    this.parentNode.classList.toggle('vazio', !this.value);
    montarCatalogo();
  });
  montarCatalogo();
}

/* -------------------------------------------------- adicionar pelo cartao
   Vale no inicio e nos "outros modelos" da pagina de produto. */
document.addEventListener('change', function(e){
  var s = e.target.closest('.escolha .sel select'); if (!s) return;
  s.parentNode.classList.toggle('vazio', !s.value);
  s.parentNode.classList.remove('falta');
  var nc = $('nc-' + s.dataset.m);
  if (nc && nc.classList.contains('aviso-erro')){ nc.classList.remove('aviso-erro'); atualizaCartoes(); }
});
function confirmaBotao(b, texto, volta){
  b.textContent = texto; b.classList.add('feito');
  clearTimeout(b._t);
  b._t = setTimeout(function(){ b.textContent = volta; b.classList.remove('feito'); }, 1400);
}
document.addEventListener('click', function(e){
  var b = e.target.closest('.add'); if (!b || b.disabled) return;
  var i = +b.dataset.m, m = CAT[i]; if (!m) return;
  var sel = $('sel-' + i), sabor = sel && sel.value;
  /* Sem sabor, o pedido chegaria "1x Ignite V155" e o dono teria de perguntar
     qual — perdendo o tempo que a entrega em 1h nao tem. */
  if (!sabor){
    sel.parentNode.classList.add('falta');
    sel.focus();
    var nc = $('nc-' + i);
    nc.textContent = 'Escolha o sabor antes de adicionar';
    nc.classList.add('aviso-erro');
    return;
  }
  adicionar(m, sabor, 1);
  confirmaBotao(b, 'Adicionado', 'Adicionar');
  /* o select volta ao vazio: quem leva dois sabores escolhe o proximo direto */
  sel.value = ''; sel.parentNode.classList.add('vazio');
});

/* ----------------------------------------------------- pagina do produto */
var pp = $('pp');
var PQ = {};
if (pp && CAT){
  /* Acha o modelo pelo SLUG, nao pela posicao: o produtos.js vem sempre
     fresco e a pagina pode estar guardada no navegador ha 10 min. Se o dono
     reordenou ou removeu modelos no painel nesse meio tempo, a posicao velha
     apontaria para OUTRO produto. */
  var I = pp.dataset.slug ? CAT.map(function(m){ return m.slug; }).indexOf(pp.dataset.slug) : +pp.dataset.i;
  var PM = CAT[I];
  /* redesenha com os dados de agora: preco e estoque que o dono mudou no
     painel valem mesmo com a pagina guardada */
  if (PM) pp.innerHTML = V.paginaProduto(PM, I, CAT, LOJA);
  else pp.innerHTML = '<div class="w nada" style="padding:64px 0">Este modelo saiu do catálogo. ' +
    '<a href="index.html#catalogo">Veja os modelos disponíveis</a>.</div>';

  pp.addEventListener('click', function(e){
    var p = e.target.closest('[data-pq]');
    if (p){
      var k = +p.dataset.k;
      var q = Math.max(0, (PQ[k] || 0) + (+p.dataset.pq));
      PQ[k] = q;
      $('pq-' + k).textContent = q;
      var li = p.closest('li');
      li.classList.toggle('tem', q > 0);
      li.querySelector('[data-pq="-1"]').disabled = q < 1;
      botaoProduto();
      return;
    }
    if (e.target.id === 'prod-add') adicionarDoProduto();
  });
}
function botaoProduto(){
  var n = 0;
  Object.keys(PQ).forEach(function(k){ n += PQ[k]; });
  var b = $('prod-add');
  b.disabled = !n;
  b.textContent = n ? 'Adicionar ' + n + (n === 1 ? ' item' : ' itens') + ' por ' +
    moeda(n * PM.preco) : 'Escolha pelo menos um sabor';
}
function adicionarDoProduto(){
  var n = 0;
  Object.keys(PQ).forEach(function(k){
    var q = PQ[k]; if (!q) return;
    adicionar(PM, V.normSabor(PM.sabores[k]).nome, q); n += q;
  });
  if (!n) return;
  /* zera as quantidades e abre o carrinho: o cliente ve o que entrou e o
     caminho para fechar, em vez de ficar na duvida se funcionou */
  PQ = {};
  pp.querySelectorAll('.sabores li').forEach(function(li, k){
    li.classList.remove('tem');
    $('pq-' + k).textContent = '0';
    li.querySelector('[data-pq="-1"]').disabled = true;
  });
  botaoProduto();
  verCarrinho();
}

/* ------------------------------------------------------------- totais */
function total(){
  return CARRINHO.reduce(function(s,x){ return s + x.preco * x.qtd; }, 0)
    + (CARRINHO.length ? Number(LOJA.taxa_entrega || 0) : 0);
}
function pecas(){ return CARRINHO.reduce(function(s,x){ return s + x.qtd; }, 0); }
function atualizaCartoes(){
  (CAT || []).forEach(function(m, i){
    var nc = $('nc-' + i);
    if (!nc || nc.classList.contains('aviso-erro')) return;
    var n = qtdModelo(m);
    nc.textContent = n ? n + ' no carrinho' : '';
  });
}
function pinta(){
  atualizaCartoes();
  var n = pecas();
  $('contador').textContent = n;
  $('contador').classList.toggle('zero', !n);
  $('barra-pecas').textContent = n === 1 ? '1 item no pedido' : n + ' itens no pedido';
  $('barra-total').textContent = moeda(total());
  /* Na pagina do produto a barra nao aparece: la' o botao preso no pe e' o
     "Adicionar", e as duas barras empilhadas cobriam um quarto da tela do
     celular. O carrinho continua no icone do topo e abre sozinho ao
     adicionar. */
  $('barra').hidden = !CARRINHO.length || !porta.hidden || !!$('pp');
}

/* -------------------------------------------------------------- folha */
var folha = $('folha'), corpo = $('folha-corpo'), titulo = $('folha-titulo');
function fecharFolha(){ folha.hidden = true; document.body.classList.remove('travado'); }
function mostraFolha(){ folha.hidden = false; document.body.classList.add('travado'); }
$('folha-fechar').onclick = fecharFolha;
folha.addEventListener('click', function(e){ if (e.target === folha) fecharFolha(); });
document.addEventListener('keydown', function(e){
  if (e.key === 'Escape' && !folha.hidden) fecharFolha();
});

function verCarrinho(){
  titulo.textContent = 'Seu pedido';
  if (!CARRINHO.length){
    corpo.innerHTML = '<div class="folha-vazia">Seu carrinho está vazio.<br>' +
      '<a class="bt" href="index.html#catalogo" id="ir-catalogo">Ver os modelos</a></div>';
  } else {
    corpo.innerHTML = CARRINHO.map(function(x,i){
      return '<div class="linha-item">' +
        '<div class="mini">' + (x.foto ? '<img src="' + esc(x.foto) + '" alt="">' : '') + '</div>' +
        '<div class="n">' + esc(x.nome) + '</div>' +
        '<div class="v">' + moeda(x.preco * x.qtd) + '</div>' +
        (x.sabor ? '<div class="s">' + esc(x.sabor) + '</div>' : '') +
        '<div class="passo"><button data-m="-1" data-i="' + i + '" aria-label="Diminuir">−</button>' +
        '<span class="q">' + x.qtd + '</span>' +
        '<button data-m="1" data-i="' + i + '" aria-label="Aumentar">+</button>' +
        '<button class="tirar" data-x="' + i + '">Remover</button></div></div>';
    }).join('') +
    '<div class="linha-taxa"><span>Entrega</span><span>' +
      (Number(LOJA.taxa_entrega) > 0 ? moeda(LOJA.taxa_entrega) : 'Grátis') + '</span></div>' +
    '<div class="total"><span class="r">Total</span><span class="v">' +
      moeda(total()) + '</span></div>' +
    '<button class="bt enviar" id="ir-dados">Preencher entrega</button>';
  }
  mostraFolha();
}
$('abrir-carrinho').onclick = verCarrinho;
$('barra-ir').onclick = function(){ verCarrinho(); };
/* link "index.html#pedido" (vindo de outra pagina) ja abre o carrinho */
if (location.hash === '#pedido' && porta.hidden) verCarrinho();

corpo.addEventListener('click', function(e){
  var m = e.target.closest('[data-m]');
  if (m){
    var i = +m.dataset.i;
    CARRINHO[i].qtd += (+m.dataset.m);
    if (CARRINHO[i].qtd < 1) CARRINHO.splice(i,1);
    salvar(); pinta(); verCarrinho(); return;
  }
  var x = e.target.closest('[data-x]');
  if (x){ CARRINHO.splice(+x.dataset.x,1); salvar(); pinta(); verCarrinho(); return; }
  if (e.target.id === 'ir-dados') verDados();
  if (e.target.id === 'ir-catalogo') fecharFolha();
});

/* --------------------------------------------------------- formulario */
function verDados(){
  if (!CARRINHO.length) return;
  if (Number(LOJA.pedido_minimo) > 0 && total() < Number(LOJA.pedido_minimo)){
    titulo.textContent = 'Pedido mínimo';
    corpo.innerHTML = '<div class="folha-vazia">O pedido mínimo é ' +
      moeda(LOJA.pedido_minimo) + '. Adicione mais um item para fechar.</div>';
    mostraFolha(); return;
  }
  titulo.textContent = 'Dados da entrega';
  corpo.innerHTML =
    '<form id="form-pedido" novalidate>' +
      campo('nome','Seu nome','text','Nome e sobrenome','name') +
      campo('fone','Seu WhatsApp','tel','(44) 9 9999-9999','tel') +
      campo('rua','Rua','text','Nome da rua','address-line1') +
      '<div class="dupla">' + campo('numero','Número','text','123','') +
        campo('bairro','Bairro','text','Bairro','address-level3') + '</div>' +
      campo('complemento','Complemento (opcional)','text','Apto, bloco, casa dos fundos','address-line2') +
      campo('referencia','Ponto de referência (opcional)','text','Perto de quê?','') +
      '<div class="campo"><label for="pagamento">Forma de pagamento</label>' +
        '<select id="pagamento"><option>Pix na entrega</option>' +
        '<option>Dinheiro</option><option>Cartão na entrega</option></select></div>' +
      '<div class="campo" id="cx-troco" hidden><label for="troco">Troco para quanto?</label>' +
        '<input id="troco" type="text" inputmode="decimal" placeholder="Ex.: 100"></div>' +
      '<div class="campo"><label for="obs">Observação (opcional)</label>' +
        '<textarea id="obs" placeholder="Algo que a loja precise saber"></textarea></div>' +
      '<button type="submit" class="bt enviar">Enviar pedido pelo WhatsApp</button>' +
      '<div class="aviso-form">O WhatsApp abre com o pedido escrito. ' +
      '<b>Toque em enviar lá dentro</b> para a loja receber.</div>' +
    '</form>';
  $('pagamento').onchange = function(){ $('cx-troco').hidden = this.value !== 'Dinheiro'; };
  $('form-pedido').onsubmit = enviar;
  mostraFolha();
}
function campo(idc,rot,tipo,ph,ac){
  return '<div class="campo"><label for="' + idc + '">' + rot + '</label>' +
    '<input id="' + idc + '" type="' + tipo + '" placeholder="' + ph + '"' +
    (ac ? ' autocomplete="' + ac + '"' : '') + '></div>';
}

/* O telefone do CLIENTE e' so' para a loja ligar de volta. O que precisa ser
   conferido e' o numero da LOJA, em produtos.js. */
function enviar(ev){
  ev.preventDefault();
  var v = function(i){ return ($(i).value || '').trim(); };
  var obrig = [['nome','seu nome'],['fone','seu WhatsApp'],['rua','a rua'],
               ['numero','o número'],['bairro','o bairro']];
  document.querySelectorAll('.erro').forEach(function(e){ e.remove(); });
  obrig.forEach(function(p){ $(p[0]).style.borderColor = ''; });
  var faltou = obrig.filter(function(p){ return !v(p[0]); });
  faltou.forEach(function(p){
    var el = $(p[0]), m = document.createElement('div');
    m.className = 'erro'; m.textContent = 'Preencha ' + p[1];
    el.parentNode.appendChild(m);
    el.style.borderColor = 'var(--erro)';
  });
  if (faltou.length){ $(faltou[0][0]).focus(); return; }

  var L = [];
  L.push('*NOVO PEDIDO · VAPOREX*');
  L.push('');
  CARRINHO.forEach(function(x){
    L.push(x.qtd + 'x ' + x.nome + (x.sabor ? ' — ' + x.sabor : '') +
           '  (' + moeda(x.preco * x.qtd) + ')');
  });
  if (Number(LOJA.taxa_entrega) > 0) L.push('Taxa de entrega: ' + moeda(LOJA.taxa_entrega));
  L.push('');
  L.push('*TOTAL: ' + moeda(total()) + '*');
  L.push('');
  L.push('*Entrega*');
  L.push('Nome: ' + v('nome'));
  L.push('WhatsApp: ' + v('fone'));
  L.push('Endereço: ' + v('rua') + ', ' + v('numero') + ' — ' + v('bairro'));
  if (v('complemento')) L.push('Complemento: ' + v('complemento'));
  if (v('referencia')) L.push('Referência: ' + v('referencia'));
  L.push('Pagamento: ' + $('pagamento').value +
    ($('pagamento').value === 'Dinheiro' && v('troco') ? ' (troco para ' + v('troco') + ')' : ''));
  if (v('obs')) L.push('Obs.: ' + v('obs'));

  window.open(ZAP + '?text=' + encodeURIComponent(L.join('\n')), '_blank');
  CARRINHO = []; salvar(); pinta();
  confirmado();
}

/* Nao diz "pedido recebido": o site nao sabe se o cliente tocou em enviar no
   WhatsApp. Diz o que ainda falta, se faltar. */
function confirmado(){
  titulo.textContent = '';
  corpo.innerHTML =
    '<div class="ok"><div class="marca">✓</div>' +
    '<h2>Pedido pronto no WhatsApp</h2>' +
    '<p>Se você já tocou em enviar por lá, a loja recebeu e começa a separar.</p>' +
    '<div class="prazo">Previsão de entrega<b>' + esc(LOJA.prazo_entrega || 'em breve') + '</b></div>' +
    '<p>O WhatsApp não abriu? Fale com a loja por aqui:</p>' +
    '<a class="bt" href="' + esc(ZAP) + '" target="_blank" rel="noopener">Falar com a loja</a>' +
    '<p style="margin-top:16px;font-size:14px;color:var(--fraco)">' +
      esc(LOJA.whatsapp_exibicao || '') + '</p></div>';
  mostraFolha();
}

pinta();
})();
