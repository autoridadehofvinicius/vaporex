/* ===========================================================================
   GERADOR — escreve as paginas que o Google le.

       node gerar.js

   Rode de novo sempre que mudar produtos.js (preco, texto, sabor). Escreve:
     index.html            pagina inicial, com todos os produtos
     <slug>.html           uma pagina por produto (ignite-v155.html ...)
     sitemap.xml           lista de paginas para o Google (precisa de site_url)
     robots.txt

   POR QUE GERAR EM VEZ DE SO' JS: o Google le melhor o que ja vem escrito no
   HTML. Titulo, descricao, preco e dados estruturados precisam estar na
   pagina antes de qualquer JS rodar — inclusive para a previa do link no
   WhatsApp, que nao roda JS nenhum.

   O HTML do catalogo sai do render.js, o mesmo arquivo que o navegador usa:
   a pagina gerada e a pagina viva nunca divergem. E a montagem das paginas
   fica em paginas.js, que o painel do dono (admin.html) tambem usa.
   =========================================================================== */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const AQUI = __dirname;
const ctx = {console};
ctx.window = ctx; ctx.globalThis = ctx;
vm.createContext(ctx);
for (const f of ['produtos.js', 'render.js', 'paginas.js'])
  vm.runInContext(fs.readFileSync(path.join(AQUI, f), 'utf8'), ctx, {filename: f});

const r = ctx.VPX_PAGINAS();
for (const a of r.avisos) console.warn('  aviso: ' + a);
for (const [nome, txt] of Object.entries(r.arquivos))
  fs.writeFileSync(path.join(AQUI, nome), txt);
console.log('gerado: ' + Object.keys(r.arquivos).join(', '));
