/* ===========================================================================
   PAGINAS — monta o texto de todas as paginas do site a partir de produtos.js.

   Roda nos DOIS lugares: no gerador do computador (gerar.js, que grava os
   arquivos) e no painel do dono (admin.html, que publica no GitHub direto do
   navegador). Um montador so': o que o dono publica pelo painel sai identico
   ao que sai daqui, e nao existe "versao do painel" para divergir.

   Devolve {arquivos: {nome: texto}, avisos: [...]}. Erro de conferencia
   (slug invalido, repetido) LANCA excecao: melhor nao publicar que publicar
   quebrado.
   =========================================================================== */
(function(g){
g.VPX_PAGINAS = function(){
const avisos = [];
const V = g.VPX, CAT = g.VAPOREX_CATALOGO, L = g.VAPOREX_LOJA, esc = V.esc;
const SITE = (L.site_url || '').replace(/\/?$/, L.site_url ? '/' : '');
const abs = p => SITE ? SITE + p : p;
const cidade = L.cidade || '';

/* ------------------------------------------------------------ conferencia
   Erro aqui para a geracao: melhor nao publicar que publicar quebrado. */
const slugs = new Set();
for (const m of CAT){
  if (!m.slug || !/^[a-z0-9-]+$/.test(m.slug)) throw new Error(`slug invalido em ${m.modelo}`);
  if (slugs.has(m.slug)) throw new Error(`slug repetido: ${m.slug}`);
  slugs.add(m.slug);
  if ((m.seo_titulo || '').length > 65) avisos.push(`  aviso: titulo de ${m.modelo} tem ${m.seo_titulo.length} caracteres; o Google corta perto de 60`);
  if ((m.seo_descricao || '').length > 160) avisos.push(`  aviso: descricao de ${m.modelo} tem ${m.seo_descricao.length} caracteres; o Google corta perto de 155`);
}

/* ------------------------------------------------------------ esqueleto */
function pagina({titulo, descricao, url, imagem, tipo, jsonld, corpo, dataI}){
  return `<!doctype html>
<!-- GERADO por gerar.js a partir de produtos.js. Nao edite aqui: edite
     produtos.js (ou render.js/gerar.js) e rode "node gerar.js". -->
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(titulo)}</title>
<meta name="description" content="${esc(descricao)}">
<meta name="robots" content="index,follow,max-image-preview:large">
${SITE ? `<link rel="canonical" href="${esc(abs(url))}">\n` : ''}<meta property="og:locale" content="pt_BR">
<meta property="og:site_name" content="Vaporex Vape Store">
<meta property="og:type" content="${tipo}">
<meta property="og:title" content="${esc(titulo)}">
<meta property="og:description" content="${esc(descricao)}">
${SITE ? `<meta property="og:url" content="${esc(abs(url))}">
<meta property="og:image" content="${esc(abs(imagem))}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
` : ''}<meta name="theme-color" content="#0C120E">
<link rel="icon" href="assets/emblema.jpg">
<link rel="apple-touch-icon" href="assets/emblema.jpg">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,400..900&display=swap">
<link rel="stylesheet" href="loja.css">
${jsonld.map(j => `<script type="application/ld+json">\n${JSON.stringify(j, null, 1)}\n</script>`).join('\n')}
</head>
<body>
${V.porta()}

<div id="loja" hidden>
${V.cabecalho(L)}
<main${dataI != null ? ` id="pp" data-i="${dataI}"` : ''}>
${corpo}
</main>
${V.rodape(L)}
</div>

${V.folhas()}

<script src="produtos.js" onerror="window.SEM_CATALOGO=1"></script>
<script src="render.js"></script>
<script src="loja.js"></script>
</body>
</html>
`;
}

/* ------------------------------------------------------- dados estruturados
   Dizem ao Google, sem ambiguidade, o que e' produto, preco e loja. E' o que
   permite o preco e a disponibilidade aparecerem no resultado da busca. */
const loja = {
  '@type': 'Store',
  '@id': abs('#loja'),
  name: 'Vaporex Vape Store',
  url: abs(''),
  image: abs('assets/logo.jpg'),
  telephone: '+' + L.whatsapp,
  priceRange: 'R$ ' + Math.min(...CAT.filter(V.temPreco).map(m => m.preco)).toFixed(0) +
              '–' + Math.max(...CAT.filter(V.temPreco).map(m => m.preco)).toFixed(0),
  paymentAccepted: 'Pix, dinheiro, cartão',
  address: {'@type': 'PostalAddress', addressLocality: cidade, addressRegion: L.estado || '',
            addressCountry: 'BR'},
  areaServed: {'@type': 'City', name: cidade}
};
function produtoLD(m){
  const nm = V.partesNome(m.modelo);
  const o = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: m.modelo,
    sku: m.slug,
    image: [abs(m.foto)],
    description: (m.descricao || []).join(' '),
    brand: {'@type': 'Brand', name: nm.fab},
    additionalProperty: [{'@type': 'PropertyValue', name: 'Puffs', value: m.puffs}]
  };
  if (V.temPreco(m)) o.offers = {
    '@type': 'Offer',
    url: abs(V.link(m)),
    priceCurrency: 'BRL',
    price: m.preco.toFixed(2),
    availability: V.disponiveis(m).length ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
    itemCondition: 'https://schema.org/NewCondition',
    seller: {'@id': abs('#loja')},
    areaServed: {'@type': 'City', name: cidade}
  };
  return o;
}

/* ------------------------------------------------------------ inicio */
const faixa = CAT.map(V.numPuffs).filter(Boolean);
const milMin = Math.min(...faixa) / 1000, milMax = Math.max(...faixa) / 1000;
const nSab = CAT.reduce((s, m) => s + (m.sabores || []).length, 0);

const corpoInicio = `
  <section class="capa" id="inicio">
    <div class="fundo"></div>
    <div class="arte" role="img" aria-label="Vaporex Vape Store"></div>
    <div class="dentro w">
      <div class="texto">
        <h1>Pods Ignite na sua porta em ${esc(L.prazo_entrega || 'pouco tempo')}</h1>
        <p>Pod descartável Ignite com entrega em ${esc(cidade)}. ${CAT.length} modelos, de
          ${milMin} mil a ${milMax} mil puffs. Você escolhe o aparelho e o sabor, manda o
          pedido pelo WhatsApp e paga quando chegar.</p>
        <div class="acoes">
          <a class="bt" href="#catalogo">Ver os modelos</a>
          <a class="bt-sec" href="https://wa.me/${esc(L.whatsapp)}" target="_blank" rel="noopener">Pedir pelo WhatsApp</a>
        </div>
      </div>
    </div>
  </section>

  ${V.garantias(L)}

  <section class="cat w" id="catalogo">
    <div class="cat-cab">
      <div>
        <h2>Modelos</h2>
        <p class="sub">${CAT.length} aparelhos e ${nSab} sabores. Preço por unidade.</p>
      </div>
      <div class="ferramentas">
        <label class="busca">
          <span class="sr">Procurar sabor</span>
          ${V.ICONE.busca}
          <input id="busca" type="search" placeholder="Procure um sabor: uva, menta, melancia" autocomplete="off">
        </label>
        <div class="sel ordem">
          <select id="ordem" aria-label="Ordenar">
            <option value="">Ordem da loja</option>
            <option value="puffs">Maior duração</option>
            <option value="menor">Menor preço</option>
            <option value="maior">Maior preço</option>
          </select>
        </div>
      </div>
    </div>
    <div class="prateleira" id="lista-produtos">
${CAT.map((m, i) => V.cartao(m, i)).join('\n')}
    </div>
  </section>

  <section class="secao" id="como-pedir"><div class="w">
    <h2>Como pedir</h2>
    <ol class="passos">
      <li><b>Escolha modelo e sabor</b>Pode misturar modelos e levar vários sabores
        do mesmo aparelho no mesmo pedido.</li>
      <li><b>Preencha o endereço</b>Nome, telefone e onde entregar. Sem cadastro e
        sem cartão: o site não cobra nada.</li>
      <li><b>Toque em enviar no WhatsApp</b>A mensagem abre pronta. O pedido só chega
        à loja depois que você envia.</li>
    </ol>
  </div></section>

  <section class="secao" id="duvidas"><div class="w duvidas">
    <div class="lado">
      <h2>Dúvidas</h2>
      <p>Não achou a resposta? Pergunte direto para a loja.</p>
      <a class="bt-sec" href="https://wa.me/${esc(L.whatsapp)}" target="_blank" rel="noopener">Chamar no WhatsApp</a>
    </div>
    <div>${V.duvidasHtml(L)}</div>
  </div></section>`;

const arquivos = {};
function grava(nome, txt){ arquivos[nome] = txt; }

grava('index.html', pagina({
  titulo: `Pod Ignite em ${cidade} com entrega em ${String(L.prazo_entrega || '').replace(/^até\s*/, '')} | Vaporex`,
  descricao: `Pods descartáveis Ignite com entrega em ${cidade} em ${L.prazo_entrega}: V155, V300, V400 e mais, de ${milMin} mil a ${milMax} mil puffs. Pedido pelo WhatsApp, pagamento na entrega.`,
  url: '', imagem: 'assets/og/inicio.jpg', tipo: 'website',
  jsonld: [
    {'@context': 'https://schema.org', ...loja},
    {'@context': 'https://schema.org', '@type': 'ItemList', name: 'Pods Ignite',
     itemListElement: CAT.map((m, i) => ({'@type': 'ListItem', position: i + 1,
       url: abs(V.link(m)), name: m.modelo}))},
    {'@context': 'https://schema.org', '@type': 'FAQPage',
     mainEntity: V.duvidas(L).map(d => ({'@type': 'Question', name: d[0],
       acceptedAnswer: {'@type': 'Answer', text: d[1]}}))}
  ],
  corpo: corpoInicio
}));

/* ------------------------------------------------------------ produtos */
CAT.forEach((m, i) => {
  grava(V.link(m), pagina({
    titulo: m.seo_titulo || `${m.modelo} em ${cidade} | Vaporex`,
    descricao: m.seo_descricao || m.resumo || '',
    url: V.link(m), imagem: `assets/og/${m.slug}.jpg`, tipo: 'product',
    jsonld: [
      produtoLD(m),
      {'@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
        {'@type': 'ListItem', position: 1, name: 'Início', item: abs('')},
        {'@type': 'ListItem', position: 2, name: 'Modelos', item: abs('#catalogo')},
        {'@type': 'ListItem', position: 3, name: m.modelo, item: abs(V.link(m))}]}
    ],
    corpo: V.paginaProduto(m, i, CAT, L),
    dataI: i
  }));
});

/* ------------------------------------------------------------ sitemap */
grava('robots.txt', `User-agent: *\nAllow: /\n${SITE ? `Sitemap: ${SITE}sitemap.xml\n` : ''}`);
if (SITE){
  const hoje = new Date().toISOString().slice(0, 10);
  grava('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${['', ...CAT.map(V.link)].map(u => `  <url><loc>${esc(SITE + u)}</loc><lastmod>${hoje}</lastmod></url>`).join('\n')}
</urlset>
`);
} else {
  avisos.push('  aviso: site_url vazio em produtos.js. Sem ele nao ha sitemap, canonical nem');
  avisos.push('         imagem de previa no WhatsApp. Preencha quando o endereco existir.');
}
return {arquivos: arquivos, avisos: avisos};
};
})(typeof window !== 'undefined' ? window : globalThis);
