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
    "modelo": "Ignite V155",
    "slug": "ignite-v155",
    "foto": "assets/produtos/ignite-v155.png",
    "puffs": "15.500",
    "preco": 89.9,
    "destaque": "Mais fino",
    "seo_titulo": "Ignite V155 em Umuarama: 15.500 puffs | Vaporex",
    "seo_descricao": "Ignite V155 Ultra Slim com 15.500 puffs, modos Eco e Boost e 11 sabores. Entrega em Umuarama em até 1h e pagamento na entrega.",
    "subtitulo": "Pod descartável ultrafino de 15.500 puffs",
    "resumo": "O pod mais fino da Ignite: cabe no bolso sem fazer volume. Tem visor de bateria e líquido e dois modos, o Eco, que rende mais, e o Boost, de tragada mais cheia.",
    "pontos": [
      "O mais fino da linha Ignite",
      "Visor de bateria e de líquido",
      "Modos Eco e Boost",
      "11 sabores, a maior variedade da loja"
    ],
    "descricao": [
      "O Ignite V155 Ultra Slim é o pod mais fino da linha Ignite. O corpo achatado cabe no bolso da calça sem fazer volume e quase não pesa na mão: é o modelo de quem leva o pod para todo lado.",
      "No visor da frente você acompanha quanto resta de bateria e de líquido, então ele não acaba de surpresa no meio do dia. E você escolhe como ele trabalha: o modo Eco usa menos potência e faz o pod render mais; o Boost aumenta a potência para uma tragada mais cheia, com mais vapor e mais sabor.",
      "São 15.500 puffs e 11 sabores, a maior variedade da loja. Tem fruta com gelo, como Grape Ice e Pineapple Ice, combinações como Kiwi Passion Fruit Guava e os mentolados puros, Menthol e Icy Mint."
    ],
    "ficha": {
      "Visor": "Bateria e líquido",
      "Modos": "Eco e Boost",
      "Formato": "Ultrafino",
      "Bateria": null,
      "Nicotina": null,
      "Recarga": null
    },
    "sabores": [
      "Grape Ice",
      "Strawberry Kiwi",
      "Strawberry Banana",
      "Banana Ice",
      "Watermelon Dragon Fruit",
      "Kiwi Passion Fruit Guava",
      "Green Apple"
    ]
  },
  {
    "modelo": "Ignite V300",
    "slug": "ignite-v300",
    "foto": "assets/produtos/ignite-v300.png",
    "puffs": "30.000",
    "preco": 109.9,
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
      "BANANA GELADA",
      "ICY MINT",
      "MENTHOL",
      "MELANCIA GELADA",
      "ABACAXI E MANGA",
      "ABACAXI GELADO",
      "ABACAXI,KIWI E PITAYA",
      "PESSÊGO E MANGA",
      "MORANGO E KIWI GELADO",
      "CEREJA GELADA",
      "MORANGO GELADO",
      "MAÇA VERDE"
    ]
  },
  {
    "modelo": "Ignite V400 Ice",
    "slug": "ignite-v400-ice",
    "foto": "assets/produtos/ignite-v400-ice.png",
    "puffs": "40.000",
    "preco": 129.9,
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
      "Mint",
      "Menthol",
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
    "preco": 129.9,
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
      "Icy Mint + Peach Grape",
      "Cherry + Grape",
      "Strawberry Grape Ice + Kiwi Watermelon Ice",
      "Watermelon Ice + Grape Ice",
      "Strawberry Lemon + Grape Ice",
      "Banana Cherry + Grape Ice"
    ]
  },
  {
    "modelo": "Ignite V80",
    "slug": "ignite-v80",
    "foto": "assets/produtos/ignite-v80.png",
    "puffs": "8.000",
    "preco": 89.9,
    "destaque": "",
    "seo_titulo": "Ignite V80 em Umuarama: pod de 8.000 puffs | Vaporex",
    "seo_descricao": "Ignite V80 com 8.000 puffs: compacto e sem nada para configurar. 6 sabores, como Passion Fruit Sour Kiwi. Entrega em Umuarama em até 1h.",
    "subtitulo": "Pod descartável compacto de 8.000 puffs",
    "resumo": "O mais direto da linha: tira da caixa e usa, sem modo nem tela. Compacto, é o pod reserva ideal para o carro ou a mochila.",
    "pontos": [
      "Compacto, sem nada para configurar",
      "8.000 puffs",
      "Sabor que só tem nele: Passion Fruit Sour Kiwi",
      "Bom como pod reserva"
    ],
    "descricao": [
      "O Ignite V80 é o modelo mais direto da linha: tira da caixa e usa, sem modo nem tela para configurar. O formato compacto vai fácil no bolso.",
      "Com 8.000 puffs, é uma boa escolha como pod reserva, para deixar no carro ou na mochila, ou para testar um sabor novo antes de levar um aparelho maior.",
      "Tem 6 sabores, incluindo o Passion Fruit Sour Kiwi, maracujá com kiwi azedinho, que na Vaporex só tem nesse modelo."
    ],
    "ficha": {
      "Formato": "Compacto",
      "Bateria": null,
      "Nicotina": null,
      "Recarga": null
    },
    "sabores": [
      "Strawberry Ice",
      "Grape Ice",
      "Strawberry Kiwi"
    ]
  },
  {
    "modelo": "Ignite Frozen",
    "slug": "ignite-frozen",
    "foto": "assets/produtos/ignite-frozen.png",
    "puffs": "20.000",
    "preco": 99.9,
    "destaque": "Só gelados",
    "seo_titulo": "Ignite Frozen (V200) em Umuarama: 20.000 puffs | Vaporex",
    "seo_descricao": "Ignite Frozen com 20.000 puffs e só sabores gelados: Grape Ice, Watermelon Ice, Menthol e Icy Mint. Entrega em Umuarama em até 1h.",
    "subtitulo": "Pod descartável de 20.000 puffs com sabores gelados",
    "resumo": "A linha gelada da Ignite: todo sabor vem com gelo ou menta. Fica entre o V155 e o V300 em duração, com acabamento azul metálico.",
    "pontos": [
      "Só sabores gelados",
      "20.000 puffs",
      "Indicador de bateria e de líquido",
      "Também vendido como Ignite V200"
    ],
    "descricao": [
      "O Ignite Frozen, também vendido como Ignite V200, é a linha gelada da Ignite: todos os sabores vêm com gelo ou menta, com aquele final refrescante na tragada.",
      "Com 20.000 puffs, fica entre o V155 e o V300 em duração, e o indicador na lateral mostra quanto resta de bateria e de líquido. O acabamento azul metálico combina com a proposta gelada.",
      "São 4 sabores: Grape Ice e Watermelon Ice para quem quer fruta com gelo, Menthol e Icy Mint para quem quer frescor puro."
    ],
    "ficha": {
      "Também chamado de": "Ignite V200",
      "Visor": "Indicador lateral",
      "Acabamento": "Azul metálico",
      "Bateria": null,
      "Nicotina": null,
      "Recarga": null
    },
    "sabores": [
      "Grape Ice",
      "Watermelon Ice",
      "Menthol",
      "Icy Mint"
    ]
  },
  {
    "modelo": "NIK BAR",
    "slug": "nik-bar",
    "foto": "assets/produtos/nik-bar.png",
    "puffs": "10000",
    "preco": 69.9,
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
      "Strawberry KIwi",
      "Cherry watermelon",
      "Watermelon ice"
    ]
  },
  {
    "modelo": "NIK BAR 30K",
    "slug": "nik-bar-30k",
    "foto": "assets/produtos/nik-bar-30k.png",
    "puffs": "30000",
    "preco": 89.9,
    "destaque": "INDESCRITÍVEL",
    "seo_titulo": "NIK BAR 30K em Umuarama: 30000 puffs | Vaporex",
    "seo_descricao": "NIK BAR 30K com 30000 puffs e 1 sabores. Entrega em Umuarama até 1h e pagamento na entrega.",
    "subtitulo": "Pod descartável de 30000 puffs",
    "resumo": "\n\n💨 Potência, sabor e estilo em uma só experiência.\n⚡ Até 30.000 puffs*\n✨ Design moderno e praticidade para o seu dia a dia.",
    "pontos": [],
    "descricao": [
      "Outro custo benefício que cabe no seu bolso!"
    ],
    "ficha": {},
    "sabores": [
      "Grape ice"
    ]
  },
  {
    "modelo": "LIFE POD 10K",
    "slug": "life-pod-10k",
    "foto": "assets/produtos/life-pod-10k.png",
    "puffs": "10000",
    "preco": 79.9,
    "destaque": "SABOR INDISCÚTIVEL",
    "seo_titulo": "LIFE POD 10K em Umuarama: 10000 puffs | Vaporex",
    "seo_descricao": "LIFE POD 10K com 10000 puffs e 4 sabores. Entrega em Umuarama até 1h e pagamento na entrega.",
    "subtitulo": "Pod descartável de 10000 puffs",
    "resumo": "Compacto, moderno e ideal para quem busca praticidade no dia a dia! O Life Pod 10K oferece uma experiência diferenciada, com design portátil, fácil de transportar e pensado para acompanhar você em qualquer momento.\n\n✅ Design moderno e compacto\n✅ Praticidade para o dia a dia\n✅ Fácil de transportar\n✅ Estilo e conveniência em um só produto",
    "pontos": [],
    "descricao": [],
    "ficha": {},
    "sabores": [
      "Maracujá e Manga",
      "Morango e cocô",
      "Melancia",
      "Morango e Melancia"
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
      "HALLS DE MENTA",
      "CHICLETE DE MARACUJÁ",
      "MAÇA VERDE",
      "MELANCIA E LIMÃO",
      "HALLS DE AMORA",
      "MIAMI MINT",
      "CHICLETE DE MENTA",
      "CHICLETE DE BLUEBERRY"
    ]
  },
  {
    "modelo": "ELF BAR 15K",
    "slug": "elf-bar-15k",
    "foto": "assets/produtos/elf-bar-15k.png",
    "puffs": "15000",
    "preco": 79.9,
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
    "preco": 35,
    "destaque": "COIL",
    "seo_titulo": "RESISTÊNCIA XROS em Umuarama | Vaporex",
    "seo_descricao": "RESISTÊNCIA XROS e 2 sabores. Entrega em Umuarama até 1h e pagamento na entrega.",
    "subtitulo": "Pod descartável",
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
    "modelo": "Ignite Shisha",
    "slug": "ignite-shisha",
    "foto": "assets/produtos/ignite-shisha.png",
    "puffs": "40000",
    "preco": 129.9,
    "destaque": "DIFERENCIADO",
    "seo_titulo": "Ignite Shisha em Umuarama: 40000 puffs | Vaporex",
    "seo_descricao": "Ignite Shisha com 40000 puffs e 1 sabores. Entrega em Umuarama até 1h e pagamento na entrega.",
    "subtitulo": "Pod descartável de 40000 puffs",
    "resumo": "Estilo, praticidade e um design diferenciado! O Ignite Shisha se destaca pelo visual moderno e formato portátil, ideal para quem busca uma opção prática e cheia de personalidade.",
    "pontos": [],
    "descricao": [
      "Estilo, praticidade e um design diferenciado! O Ignite Shisha se destaca pelo visual moderno e formato portátil, ideal para quem busca uma opção prática e cheia de personalidade."
    ],
    "ficha": {},
    "sabores": [
      "TRIPLLE MINT"
    ]
  },
  {
    "modelo": "IGNITE V500",
    "slug": "ignite-v500",
    "foto": "assets/produtos/ignite-v500.png",
    "puffs": "50000",
    "preco": 139.9,
    "destaque": "Maior Durabilidade",
    "seo_titulo": "IGNITE V500 em Umuarama: 50000 puffs | Vaporex",
    "seo_descricao": "IGNITE V500 com 50000 puffs e 6 sabores. Entrega em Umuarama até 1h e pagamento na entrega.",
    "subtitulo": "Pod descartável de 50000 puffs",
    "resumo": "Potência, estilo e praticidade em um só dispositivo!\nO Ignite V500 é ideal para quem busca uma experiência diferenciada, design moderno e muita personalidade.",
    "pontos": [],
    "descricao": [
      "Potência, estilo e praticidade em um só dispositivo!\nO Ignite V500 é ideal para quem busca uma experiência diferenciada, design moderno e muita personalidade."
    ],
    "ficha": {},
    "sabores": [
      "Cool menthol(Menta suave)",
      "Manga e Maracujá",
      "Abacaxi e Manga",
      "Morango e Kiwi",
      "Melancia e Kiwi",
      "Pessêgo e Uva"
    ]
  },
  {
    "modelo": "BLVK 35MG",
    "slug": "blvk-35mg",
    "foto": "assets/produtos/blvk-35mg.png",
    "puffs": "35000",
    "preco": 89.9,
    "destaque": "DIVERSOS SABORES",
    "seo_titulo": "BLVK 35MG em Umuarama: 35000 puffs | Vaporex",
    "seo_descricao": "BLVK 35MG com 35000 puffs e 14 sabores. Entrega em Umuarama até 1h e pagamento na entrega.",
    "subtitulo": "Pod descartável de 35000 puffs",
    "resumo": "Conheça as essências BLVK, com diferentes opções de aromas e sabores para quem busca variedade e qualidade.",
    "pontos": [],
    "descricao": [
      "Conheça as essências BLVK, com diferentes opções de aromas e sabores para quem busca variedade e qualidade."
    ],
    "ficha": {},
    "sabores": [
      "SPEARMINT ORIGINAL (LIDER DE VENDAS)",
      "CHERRY MENTHOL (LINHA DIAMOND)",
      "GRAPE MENTHOL (LINHA DIAMOND)",
      "MELON MENTHOL (LINHA DIAMOND)",
      "SPEARMINT MENTHOL (LINHA DIAMOND)",
      "BLUE LEMON ICE (LINHA FROST)",
      "GRAPE BERRY  (LINHA FROST)",
      "MANGO PINEAPPLE  (LINHA FROST)",
      "PASSION GUAVA  (LINHA FROST)",
      "PEACH GUAVA  (LINHA FROST)",
      "GRAPE APPLE  (LINHA FUSION)",
      "DOUBLE KIWI (LINHA JUST JUICE)",
      "GRAPE KIWI  (LINHA JUST JUICE)",
      "KIWI PASSION  (LINHA JUST JUICE)"
    ]
  },
  {
    "modelo": "BLVK 50MG",
    "slug": "blvk-50mg",
    "foto": "assets/produtos/blvk-50mg.png",
    "puffs": "35000",
    "preco": 89.9,
    "destaque": "GRANDE VARIEDADE",
    "seo_titulo": "BLVK 50MG em Umuarama: 35000 puffs | Vaporex",
    "seo_descricao": "BLVK 50MG com 35000 puffs e 14 sabores. Entrega em Umuarama até 1h e pagamento na entrega.",
    "subtitulo": "Pod descartável de 35000 puffs",
    "resumo": "Conheça as essências BLVK, com diferentes opções de aromas e sabores para quem busca variedade e qualidade.",
    "pontos": [],
    "descricao": [
      "Conheça as essências BLVK, com diferentes opções de aromas e sabores para quem busca variedade e qualidade."
    ],
    "ficha": {},
    "sabores": [
      "SPEARMINT ORIGINAL (LIDER DE VENDAS)",
      "CHERRY MENTHOL (LINHA DIAMOND)",
      "GRAPE MENTHOL (LINHA DIAMOND)",
      "BLUE LEMON ICE (LINHA FROST)",
      "GRAPE BERRY (LINHA FROST)",
      "MANGO PINEAPPLE (LINHA FROST)",
      "PASSION GUAVA (LINHA FROST)",
      "PEACH GUAVA (LINHA FROST)",
      "GRAPE APPLE (LINHA FUSION)",
      "DOUBLE KIWI (LINHA JUST JUICE)",
      "GRAPE KIWI (LINHA JUST JUICE",
      "KIWI PASSION (LINHA JUST JUICE)",
      "MELON MENTHOL (LINHA DIAMOND)",
      "SPEARMINT MENTHOL (LINHA DIAMOND)"
    ]
  },
  {
    "modelo": "IGNITE V400",
    "slug": "ignite-v400",
    "foto": "assets/produtos/ignite-v400.png",
    "puffs": "40000",
    "preco": 139.9,
    "destaque": "LANÇAMENTO",
    "seo_titulo": "IGNITE V400 em Umuarama: 40000 puffs | Vaporex",
    "seo_descricao": "IGNITE V400 com 40000 puffs e 3 sabores. Entrega em Umuarama até 1h e pagamento na entrega.",
    "subtitulo": "Pod descartável de 40000 puffs",
    "resumo": "",
    "pontos": [],
    "descricao": [],
    "ficha": {},
    "sabores": [
      "GRAPE ICE",
      "MIAMI MINT",
      "COOL MENTHOL"
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
  site_url: "https://autoridadehofvinicius.github.io/vaporex/"
};
