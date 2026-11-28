/* ===========================================================================
   CATALOGO DA VAPOREX
   ===========================================================================
   O DONO EDITA PELO PAINEL: /admin.html (senha). O painel reescreve SO' o
   bloco VAPOREX_CATALOGO abaixo, em formato JSON, e publica sozinho.
   Comentario escrito DENTRO desse bloco se perde na proxima publicacao do
   painel; os blocos de sabores e da loja nao sao tocados.

   Este e' o unico arquivo que precisa ser editado para mexer no catalogo.
   Mexer aqui NAO arrisca o site: se tiver erro de digitacao, a loja avisa na
   tela em vez de abrir vazia.

   DEPOIS DE EDITAR: preco e sabores mudam na tela na hora. Para o GOOGLE ver a
   mudanca (preco nos resultados de busca, textos), rode de novo o gerador:
       node gerar.js

   COMO EDITAR
     preco         -> numero, com PONTO no lugar da virgula: 110.00
                      null = "Preco a definir" e NAO da' para comprar
     sabores       -> texto simples; ou {nome:"X", estoque:false} = esgotado
     destaque      -> selo em cima da foto. "" = sem selo
     slug          -> o endereco da pagina (ignite-v155 -> ignite-v155.html).
                      NAO MUDE depois de publicado: o Google ja guardou o link.
     seo_titulo    -> o titulo azul no Google. Ate ~60 caracteres.
     seo_descricao -> o texto cinza embaixo dele. Ate ~155 caracteres.
     ficha         -> ficha tecnica. Linha com null NAO aparece no site.

   SO' O QUE FOI CONFIRMADO ESTA ESCRITO. Puffs vieram de lojas brasileiras;
   tela, modos e acabamento foram lidos nas fotos. Bateria (mAh), nicotina e
   recarga NAO foram confirmados em fonte confiavel e estao null: preencha
   olhando a caixa. Ficha errada e' pior que ficha curta.
   =========================================================================== */

window.VAPOREX_CATALOGO = [
  {
    "modelo": "IGNITE FROZEN",
    "slug": "ignite-frozen",
    "foto": "assets/produtos/ignite-frozen.png",
    "puffs": "20000",
    "preco": 104.9,
    "destaque": "SÓ GELADOS",
    "seo_titulo": "IGNITE FROZEN em Umuarama: 20000 puffs | Vaporex",
    "seo_descricao": "IGNITE FROZEN com 20000 puffs e 2 sabores. Entrega em Umuarama até 1h e pagamento na entrega.",
    "subtitulo": "Pod descartável de 20.000 puffs",
    "resumo": "O Ignite V Frozen Icy (também identificado como Ignite V200 Frozen) é um pod descartável recarregável da linha gelada da Ignite, com capacidade anunciada de até 20.000 puffs e foco em refrescância contínua.",
    "pontos": [],
    "descricao": [
      "O Ignite V Frozen Icy (também identificado como Ignite V200 Frozen) é um pod descartável recarregável da linha gelada da Ignite, com capacidade anunciada de até 20.000 puffs e foco em refrescância contínua."
    ],
    "ficha": {},
    "sabores": [
      "MENTHOL",
      "MORANGO GELADO"
    ]
  },
  {
    "modelo": "Ignite V300",
    "slug": "ignite-v300",
    "foto": "assets/produtos/ignite-v300.png",
    "puffs": "30.000",
    "preco": 124.9,
    "destaque": "Tela colorida",
    "seo_titulo": "Ignite V300 em Umuarama: 30.000 puffs com tela | Vaporex",
    "seo_descricao": "Ignite V300 com 30.000 puffs, tela colorida com bateria e líquido em % e modo Boost. 7 sabores, entrega em Umuarama em até 1h.",
    "subtitulo": "Pod descartável de 30.000 puffs com tela colorida",
    "resumo": "Tela colorida que mostra bateria e líquido em porcentagem, sem adivinhação. Rende quase o dobro do V155 e tem modo Boost para mais vapor e mais sabor.",
    "pontos": [
      "Tela colorida com bateria e líquido em %",
      "30.000 puffs, quase o dobro do V155",
      "Modo Boost",
      "Sabor que só tem nele: Blueberry Strawberry Coconut"
    ],
    "descricao": [
      "O Ignite V300 é para quem quer saber exatamente quanto ainda tem. A tela colorida mostra bateria e líquido em porcentagem, em número, e não em tracinhos que você precisa adivinhar.",
      "Com 30.000 puffs, ele rende quase o dobro do V155 e dura bem mais entre uma compra e outra. O modo Boost aumenta a potência quando você quer uma tragada mais cheia e com mais sabor.",
      "São 7 sabores, com destaque para os gelados de fruta, como Banana Ice e Strawberry Ice, e para o Blueberry Strawberry Coconut, mirtilo e morango com fundo de coco, que na Vaporex só tem nesse modelo."
    ],
    "ficha": {
      "Visor": "Tela colorida, em %",
      "Modos": "Boost",
      "Bateria": null,
      "Nicotina": null,
      "Recarga": null
    },
    "sabores": [
      "ABACAXI E MANGA",
      "ABACAXI,KIWI E PITAYA",
      "PESSÊGO E MANGA",
      "BANANA E AGUA DE COCO",
      "ICY MINT",
      "MENTHOL",
      "BLUEBERRY, MORANGO E COCO",
      "ALOE GRAPE",
      "MORANGO E BANANA"
    ]
  },
  {
    "modelo": "Ignite V400 Ice",
    "slug": "ignite-v400-ice",
    "foto": "assets/produtos/ignite-v400-ice.png",
    "puffs": "40.000",
    "preco": 134.9,
    "destaque": "Maior duração",
    "seo_titulo": "Ignite V400 Ice em Umuarama: 40.000 puffs | Vaporex",
    "seo_descricao": "Ignite V400 Ice com 40.000 puffs, o pod que mais dura na Vaporex. 6 sabores, como Sakura Grape e Grape Mix. Entrega em Umuarama em até 1h.",
    "subtitulo": "Pod descartável de 40.000 puffs, o que mais dura na loja",
    "resumo": "O pod que mais dura na loja, com mais que o dobro do V155. Para quem prefere comprar menos vezes, com três versões de uva no cardápio.",
    "pontos": [
      "40.000 puffs, a maior duração da loja",
      "Mais que o dobro do V155",
      "Indicador de bateria e de líquido",
      "Três versões de uva"
    ],
    "descricao": [
      "O Ignite V400 Ice é o pod de maior duração da Vaporex: 40.000 puffs, mais que o dobro do V155. É para quem não quer ficar trocando de aparelho toda hora e prefere comprar menos vezes.",
      "O indicador na lateral mostra quanto resta de bateria e de líquido. O acabamento claro, em tom gelo, deixa o aparelho fácil de achar na mochila ou no carro.",
      "A linha tem 6 sabores, com três opções para quem gosta de uva: Grape, Grape Mix e Sakura Grape, uva com um toque floral de flor de cerejeira. Para quem prefere mentolado, tem Mint e Menthol."
    ],
    "ficha": {
      "Visor": "Indicador lateral",
      "Acabamento": "Claro, tom gelo",
      "Bateria": null,
      "Nicotina": null,
      "Recarga": null
    },
    "sabores": [
      "Strawberry Kiwi",
      "Sakura Grape",
      "Grape Mix",
      "Grape",
      "Strawberry Ice",
      "Strawberry Watermelon",
      "Watermelon ice"
    ]
  },
  {
    "modelo": "Ignite V400 Mix",
    "slug": "ignite-v400-mix",
    "foto": "assets/produtos/ignite-v400-mix.png",
    "puffs": "40.000",
    "preco": 134.9,
    "destaque": "Dois sabores",
    "seo_titulo": "Ignite V400 Mix em Umuarama: 2 sabores em 1 pod | Vaporex",
    "seo_descricao": "Ignite V400 Mix: dois sabores no mesmo pod e 40.000 puffs. 7 combinações, como Cherry + Grape. Entrega em Umuarama em até 1h.",
    "subtitulo": "Pod descartável de 40.000 puffs com dois sabores",
    "resumo": "Dois sabores no mesmo aparelho, para quem enjoa de um só. Mesma duração do V400 Ice, com 7 duplas já combinadas.",
    "pontos": [
      "Dois sabores no mesmo pod",
      "40.000 puffs, a maior duração da loja",
      "7 combinações",
      "Indicador de bateria e de líquido"
    ],
    "descricao": [
      "O Ignite V400 Mix junta dois sabores no mesmo aparelho, para quem enjoa de um sabor só. Cada opção da lista já vem com a dupla definida, como Cherry + Grape ou Watermelon Ice + Grape Ice.",
      "Com 40.000 puffs, ele empata com o V400 Ice como o pod de maior duração da loja, e o indicador na lateral mostra quanto resta de bateria e de líquido.",
      "São 7 combinações. Seis delas levam uva em um dos lados; a Mighty Melon + Menthol é a dupla para quem gosta de fruta com mentolado."
    ],
    "ficha": {
      "Sabores por aparelho": "2",
      "Visor": "Indicador lateral",
      "Bateria": null,
      "Nicotina": null,
      "Recarga": null
    },
    "sabores": [
      "Cherry + Grape",
      "Framboesa + Uva",
      "Uva + Pessêgo",
      "Icy Mint + Uva c/ Pessêgo",
      "Melão Mentolado + Menthol",
      "Blueberry + Morango",
      "Abacaxi e coco"
    ]
  },
  {
    "modelo": "NIK BAR",
    "slug": "nik-bar",
    "foto": "assets/produtos/nik-bar.png",
    "puffs": "10000",
    "preco": 74.9,
    "destaque": "Custo benefício",
    "seo_titulo": "NIK BAR em Umuarama: 10000 puffs | Vaporex",
    "seo_descricao": "NIK BAR com 10000 puffs e 4 sabores. Entrega em Umuarama até 1h e pagamento na entrega.",
    "subtitulo": "Pod descartável de 10000 puffs",
    "resumo": "💨 Sabor e praticidade para o seu dia a dia.",
    "pontos": [],
    "descricao": [],
    "ficha": {},
    "sabores": [
      "Menthol",
      "Grape ice",
      "Pineapple ice",
      "Cherry watermelon",
      "Watermelon ice"
    ]
  },
  {
    "modelo": "BATERIA LIFE POD 3 COM ADAPTADOR",
    "slug": "bateria-life-pod-3-com-adaptador",
    "foto": "assets/produtos/bateria-life-pod-3-com-adaptador.png",
    "puffs": "0",
    "preco": 69.9,
    "destaque": "BATERIA LIFE POD",
    "seo_titulo": "BATERIA LIFE POD 3 COM ADAPTADOR em Umuarama: 0 puffs | Vaporex",
    "seo_descricao": "BATERIA LIFE POD 3 COM ADAPTADOR com 0 puffs e 1 sabores. Entrega em Umuarama até 1h e pagamento na entrega.",
    "subtitulo": "Bateria recarregável para o Life Pod 3",
    "resumo": "• Capacidade de Bateria: 1400 mAh (com carregamento rápido via USB-C).\n• Visor / Indicador: Possui visor colorido ou tela indicadora de nível de bateria.",
    "pontos": [],
    "descricao": [
      "• Capacidade de Bateria: 1400 mAh (com carregamento rápido via USB-C).\n• Visor / Indicador: Possui visor colorido ou tela indicadora de nível de bateria."
    ],
    "ficha": {},
    "sabores": [
      "BATERIA LIFE POD 1400mha"
    ]
  },
  {
    "modelo": "LIFE POD 10K",
    "slug": "life-pod-10k",
    "foto": "assets/produtos/life-pod-10k.png",
    "puffs": "10000",
    "preco": 84.9,
    "destaque": "SABOR INDISCÚTIVEL",
    "seo_titulo": "LIFE POD 10K em Umuarama: 10000 puffs | Vaporex",
    "seo_descricao": "LIFE POD 10K com 10000 puffs e 4 sabores. Entrega em Umuarama até 1h e pagamento na entrega.",
    "subtitulo": "Pod descartável de 10000 puffs",
    "resumo": "Compacto, moderno e ideal para quem busca praticidade no dia a dia! O Life Pod 10K oferece uma experiência diferenciada, com design portátil, fácil de transportar e pensado para acompanhar você em qualquer momento.\n\n✅ Design moderno e compacto\n✅ Praticidade para o dia a dia\n✅ Fácil de transportar\n✅ Estilo e conveniência em um só produto",
    "pontos": [],
    "descricao": [],
    "ficha": {},
    "sabores": [
      "Morango e cocô",
      "Chiclete de Uva",
      "Chiclete de Morango",
      "Pêseego e Manga",
      "Love 66",
      "Chilclete de Cereja",
      "Cereja e Limão",
      "Uva Gelada",
      "Uva verde",
      "Maracujá Gelado",
      "Maracujá e Manga",
      "Watermelon Ice",
      "Chiclete de Melancia",
      "Banoffe",
      "Miami Mint",
      "Chiclete de menta",
      "Halls de Amora"
    ]
  },
  {
    "modelo": "LIFE POD 20K",
    "slug": "life-pod-20k",
    "foto": "assets/produtos/life-pod-20k.png",
    "puffs": "20000",
    "preco": 99.9,
    "destaque": "SABOR INDISCÚTIVEL",
    "seo_titulo": "LIFE POD 20K em Umuarama: 20000 puffs | Vaporex",
    "seo_descricao": "LIFE POD 20K com 20000 puffs e 10 sabores. Entrega em Umuarama até 1h e pagamento na entrega.",
    "subtitulo": "Pod descartável de 20000 puffs",
    "resumo": "LIFE POD 20K\n\nDesign moderno, praticidade e estilo em um só produto! O Life Pod 20K é uma opção para quem busca um dispositivo com visual diferenciado e formato portátil.\n\n✅ Design moderno\n✅ Visual diferenciado\n✅ Praticidade para transportar\n\n",
    "pontos": [],
    "descricao": [],
    "ficha": {},
    "sabores": [
      "CHICLETE DE MARACUJÁ",
      "MELANCIA E LIMÃO",
      "CHICLETE DE MENTA",
      "UVA VERDE",
      "MANGA E MELÃO",
      "CHICLETE DE MELÃO",
      "CHICLETE DE MANGA",
      "MANGA GELADA",
      "MORANGO E KIWI",
      "CHICLETE DE BLUEBERRY",
      "MAÇA VERDE",
      "LOVE 66",
      "MIAMI MINT",
      "MARACUJÁ GELADO",
      "HALLS DE MENTA"
    ]
  },
  {
    "modelo": "LIFE POD SK",
    "slug": "life-pod-sk",
    "foto": "assets/produtos/life-pod-sk.png",
    "puffs": "18000",
    "preco": 99.9,
    "destaque": "LANÇAMENTO",
    "seo_titulo": "LIFE POD SK em Umuarama: 18000 puffs | Vaporex",
    "seo_descricao": "LIFE POD SK com 18000 puffs e 5 sabores. Entrega em Umuarama até 1h e pagamento na entrega.",
    "subtitulo": "Pod descartável de 18.000 puffs",
    "resumo": "",
    "pontos": [],
    "descricao": [],
    "ficha": {},
    "sabores": [
      "HALLS DE AMORA",
      "HALLS DE MENTA",
      "HALLS DE CEREJA",
      "MARACUJÁ E MANGA",
      "TROPICAL ICE"
    ]
  },
  {
    "modelo": "BLACK SHEEP SHEEP SLATE",
    "slug": "black-sheep-sheep-slate",
    "foto": "assets/produtos/black-sheep-sheep-slate.png",
    "puffs": "15000",
    "preco": 84.9,
    "destaque": "LANÇAMENTO EXCLUSIVO",
    "seo_titulo": "BLACK SHEEP SHEEP SLATE em Umuarama: 15000 puffs | Vaporex",
    "seo_descricao": "BLACK SHEEP SHEEP SLATE com 15000 puffs e 5 sabores. Entrega em Umuarama até 1h e pagamento na entrega.",
    "subtitulo": "Pod descartável de 15.000 puffs",
    "resumo": "Custo benefício entregando o que há de melhor!",
    "pontos": [],
    "descricao": [
      "Custo benefício entregando o que há de melhor!"
    ],
    "ficha": {},
    "sabores": [
      "UVA GELADA",
      "MARACUJÁ GELADO",
      "MENTHOL",
      "MELANCIA GELADA",
      "MORANGO E KIWI GELADO"
    ]
  },
  {
    "modelo": "ELF BAR 15K",
    "slug": "elf-bar-15k",
    "foto": "assets/produtos/elf-bar-15k.png",
    "puffs": "15000",
    "preco": 84.9,
    "destaque": "CUSTO BENEFÍCIO",
    "seo_titulo": "ELF BAR 15K em Umuarama: 15000 puffs | Vaporex",
    "seo_descricao": "ELF BAR 15K com 15000 puffs e 9 sabores. Entrega em Umuarama até 1h e pagamento na entrega.",
    "subtitulo": "Pod descartável de 15000 puffs",
    "resumo": "Design moderno, estilo marcante e praticidade em um só dispositivo! O Elf Bar 15K é uma opção para quem busca um produto compacto, com visual diferenciado e fácil de transportar.",
    "pontos": [],
    "descricao": [],
    "ficha": {},
    "sabores": [
      "MORANGO E KIWI",
      "MORANGO E MELANCIA",
      "MELANCIA",
      "CHICLETE DE UVA",
      "ABACAXI GELADO",
      "MANGA GELADA",
      "ICY MINT",
      "MIAMI MINT",
      "MARACUJÁ E GOIABA"
    ]
  },
  {
    "modelo": "RESISTÊNCIA XROS",
    "slug": "resistencia-xros",
    "foto": "assets/produtos/resistencia-xros.png",
    "puffs": "0",
    "preco": 40,
    "destaque": "COIL",
    "seo_titulo": "RESISTÊNCIA XROS em Umuarama | Vaporex",
    "seo_descricao": "RESISTÊNCIA XROS e 2 sabores. Entrega em Umuarama até 1h e pagamento na entrega.",
    "subtitulo": "Resistência de reposição para o XROS",
    "resumo": "RESISTÊNCIA PARA A LINHA XROS UNIVERSAL",
    "pontos": [],
    "descricao": [],
    "ficha": {},
    "sabores": [
      "0,7",
      "0,8"
    ]
  },
  {
    "modelo": "BLVK 35MG",
    "slug": "blvk-35mg",
    "foto": "assets/produtos/blvk-35mg.png",
    "puffs": "0",
    "preco": 99.9,
    "destaque": "DIVERSOS SABORES",
    "seo_titulo": "Essência BLVK Nic Salt 35mg em Umuarama | Vaporex",
    "seo_descricao": "Essência BLVK Nic Salt 35mg em vários sabores. Entrega em Umuarama até 1h e pagamento na entrega.",
    "subtitulo": "Essência Nic Salt 35mg",
    "resumo": "Conheça as essências BLVK, com diferentes opções de aromas e sabores para quem busca variedade e qualidade.",
    "pontos": [],
    "descricao": [
      "Conheça as essências BLVK, com diferentes opções de aromas e sabores para quem busca variedade e qualidade."
    ],
    "ficha": {},
    "sabores": [
      "SPEARMINT ORIGINAL (LIDER DE VENDAS)",
      "GRAPE MENTHOL (LINHA DIAMOND)",
      "MELON MENTHOL (LINHA DIAMOND)",
      "GRAPE BERRY  (LINHA FROST)",
      "PASSION GUAVA  (LINHA FROST)",
      "GRAPE APPLE  (LINHA FUSION)"
    ]
  },
  {
    "modelo": "BLVK 50MG",
    "slug": "blvk-50mg",
    "foto": "assets/produtos/blvk-50mg.png",
    "puffs": "0",
    "preco": 99.9,
    "destaque": "GRANDE VARIEDADE",
    "seo_titulo": "Essência BLVK Nic Salt 50mg em Umuarama | Vaporex",
    "seo_descricao": "Essência BLVK Nic Salt 50mg em vários sabores. Entrega em Umuarama até 1h e pagamento na entrega.",
    "subtitulo": "Essência Nic Salt 50mg",
    "resumo": "Conheça as essências BLVK, com diferentes opções de aromas e sabores para quem busca variedade e qualidade.",
    "pontos": [],
    "descricao": [
      "Conheça as essências BLVK, com diferentes opções de aromas e sabores para quem busca variedade e qualidade."
    ],
    "ficha": {},
    "sabores": [
      "SPEARMINT ORIGINAL (LIDER DE VENDAS)"
    ]
  }
];

/* ------------------------------------------------------------- sabores ---
   Traducao e nota de cada sabor. Aparecem embaixo do nome na pagina do
   produto e entram na busca da loja ("uva" acha Grape Ice). Tambem e' texto
   que o Google le. Sabor que nao estiver aqui aparece so' com o nome.
   Para o V400 Mix ("A + B") nao precisa cadastrar a dupla: cada lado e'
   procurado aqui separado. */
window.VAPOREX_SABORES = {
  "Grape Ice":            {pt: "uva gelada",            nota: "Uva doce com final gelado."},
  "Grape":                {pt: "uva",                   nota: "Uva doce, sem gelo."},
  "Grape Mix":            {pt: "mix de uvas",           nota: "Mistura de variedades de uva."},
  "Sakura Grape":         {pt: "uva com flor de cerejeira", nota: "Uva com um toque floral de flor de cerejeira."},
  "Peach Grape":          {pt: "pêssego e uva",         nota: "Pêssego maduro com uva."},
  "Strawberry Kiwi":      {pt: "morango e kiwi",        nota: "Morango doce com o azedinho do kiwi."},
  "Strawberry Banana":    {pt: "morango e banana",      nota: "Morango com banana, cremoso como vitamina."},
  "Strawberry Ice":       {pt: "morango gelado",        nota: "Morango doce com final gelado."},
  "Strawberry Lemon":     {pt: "morango e limão",       nota: "Morango com limão, doce e cítrico."},
  "Strawberry Grape Ice": {pt: "morango e uva gelados", nota: "Morango e uva com gelo."},
  "Pineapple Ice":        {pt: "abacaxi gelado",        nota: "Abacaxi com final gelado."},
  "Banana Ice":           {pt: "banana gelada",         nota: "Banana madura com final gelado."},
  "Banana Cherry":        {pt: "banana e cereja",       nota: "Banana com cereja."},
  "Cherry":               {pt: "cereja",                nota: "Cereja doce."},
  "Watermelon Ice":       {pt: "melancia gelada",       nota: "Melancia com final gelado."},
  "Watermelon Dragon Fruit": {pt: "melancia e pitaya",  nota: "Melancia com pitaya, frutado e leve."},
  "Kiwi Watermelon Ice":  {pt: "kiwi e melancia gelados", nota: "Kiwi e melancia com gelo."},
  "Kiwi Passion Fruit Guava": {pt: "kiwi, maracujá e goiaba", nota: "Tropical e azedinho: kiwi, maracujá e goiaba."},
  "Passion Fruit Sour Kiwi":  {pt: "maracujá e kiwi azedinho", nota: "Maracujá com kiwi azedinho."},
  "Blueberry Strawberry Coconut": {pt: "mirtilo, morango e coco", nota: "Mirtilo e morango com fundo de coco."},
  "Green Apple":          {pt: "maçã verde",            nota: "Maçã verde, azedinha e refrescante."},
  "Mighty Melon":         {pt: "melão",                 nota: "Melão doce."},
  "Icy Mint":             {pt: "menta gelada",          nota: "Menta com gelo extra."},
  "Mint":                 {pt: "menta",                 nota: "Menta fresca."},
  "Menthol":              {pt: "mentol",                nota: "Mentol clássico, refrescante."}
};

/* ---------------------------------------------------------------- loja ---
   Dados que aparecem no site, na mensagem do pedido e no Google. */
window.VAPOREX_LOJA = {
  /* CONFERIR: o numero passado, (44) 9182-0629, tem 8 digitos depois do DDD e
     celular tem 9. Assumi que falta o 9 na frente. Com numero errado o link do
     WhatsApp nao abre conversa e NENHUM pedido chega. */
  whatsapp: "5544991820629",
  whatsapp_exibicao: "(44) 99182-0629",

  cidade: "Umuarama",
  estado: "PR",
  prazo_entrega: "até 1h",
  area_entrega: "",        /* ex.: "toda Umuarama" — vazio usa so' a cidade */
  horario: "",             /* ex.: "Todos os dias, das 10h às 23h" — vazio nao mostra */
  taxa_entrega: 0,         /* 0 = mostra "Entrega grátis" */
  pedido_minimo: 0,        /* 0 = sem minimo */

  /* Endereco PUBLICO do site, com barra no fim. Ex.:
       "https://vaporex.com.br/"  ou  "https://usuario.github.io/vaporex/"
     Sem ele o gerador nao consegue montar o sitemap nem a imagem que aparece
     quando o link e' colado no WhatsApp (os dois exigem endereco completo). */
  site_url: "https://vaporexumuvape.com.br/"
};
