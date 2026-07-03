/* ============================================================
   БЕЗ ГРАДУСА — data + CSS-glass builder + hash router
   ============================================================ */

const BEERS = [
  {
    id: "guinness-00",
    n: 1,
    name: "Guinness 0.0",
    brewery: "Guinness · Дублин",
    country: "Ирландия", flag: "🇮🇪",
    style: "Сухой стаут",
    abv: "0,0 %", temp: "6–8 °C", glassLabel: "Пинтовый бокал",
    glass: "pint",
    liquid: "#1a110c", liquid2: "#3c1f13", foam: "#E9DCC0", foamH: .24, haze: 0,
    accent: "#6E3A22",
    tagline: "Чёрное бархатное — теперь без единого промилле.",
    story: "Легендарный ирландский стаут варят в Дублине с 1759 года — и вот он наконец стал безалкогольным. Guinness 0.0 варят точно так же, как классический Draught, а на последнем этапе бережно удаляют спирт, так что фирменный характер остаётся на месте. Азотная подача даёт ту самую плотную кремовую пену, как у капучино.",
    aroma: "Жареный ячмень, кофе, какао и лёгкая нотка свежего хлеба.",
    taste: "Сухо и обжаренно: горький шоколад, эспрессо, немного карамели. Тело неожиданно гладкое и «кремовое».",
    finish: "Сухое, чуть горьковатое послевкусие с кофейной горчинкой — совсем не сладкое.",
    look: [
      "Обрати внимание на плотную бежевую пену и её «водопад» при наливе.",
      "Ищи вкус жареного зерна — это не солод, а именно обжарка, как у кофе.",
      "Тело гладкое, почти сливочное, хотя пиво тёмное и сухое."
    ],
    styleNote: "Стаут — тёмный эль на жареном ячмене. Ирландский «сухой» стаут (в отличие от сладких молочных) почти не сладкий: он про кофе и горький шоколад, а не про десерт.",
    serve: "Прохладным, <b>6–8 °C</b>, в широком бокале. Хорош к устрицам, тушёному мясу и тёмному шоколаду."
  },
  {
    id: "vandestreek-playground",
    n: 2,
    name: "Playground IPA",
    brewery: "vandeStreek · Утрехт",
    country: "Нидерланды", flag: "🇳🇱",
    style: "IPA",
    abv: "0,5 %", temp: "6–8 °C", glassLabel: "Бокал-тюльпан",
    glass: "tulip",
    liquid: "#D99A2B", liquid2: "#EAB94E", foam: "#F3EAD2", foamH: .14, haze: .15,
    accent: "#B5701A",
    tagline: "Хмель во весь голос — но без похмелья.",
    story: "Голландская крафтовая пивоварня из Утрехта, помешанная на хмеле. Playground — их безалкогольная IPA в американском стиле: максимум ароматного хмеля и уверенная горчинка, при этом всего 0,5 %.",
    aroma: "Грейпфрут, цитрусовая цедра, сосновая смолка и намёк на тропики.",
    taste: "Сочная цитрусовая горечь на фоне подсушенного солода. Свежо и смолисто.",
    finish: "Долгое горьковатое послевкусие — классическая «хмелевая» сухость IPA.",
    look: [
      "Горечь здесь — главная роль; распробуй, как она нарастает к концу глотка.",
      "Аромат хмеля яркий даже без алкоголя — сначала понюхай, потом пей.",
      "Цвет золотисто-янтарный, чуть мутноватый."
    ],
    styleNote: "IPA (India Pale Ale) — стиль, где хмель выведен на первый план: много аромата (цитрус, хвоя, тропики) и заметная горечь. Это противоположность мягкому лагеру.",
    serve: "<b>6–8 °C</b>, в бокале-тюльпане. К острой еде, бургерам и зрелым сырам."
  },
  {
    id: "jever-fun",
    n: 3,
    name: "Jever Fun",
    brewery: "Jever · Фрисландия",
    country: "Германия", flag: "🇩🇪",
    style: "Пилснер",
    abv: "< 0,5 %", temp: "4–6 °C", glassLabel: "Высокий бокал",
    glass: "pils",
    liquid: "#E6BE33", liquid2: "#F0D566", foam: "#F6EFD9", foamH: .10, haze: 0,
    accent: "#8C7418",
    tagline: "Северогерманская горчинка в чистом виде.",
    story: "Jever — пивоварня с ветреного севера Германии, из Фрисландии, знаменитая самым сухим и горьким пилснером страны. Fun — её безалкогольная версия с тем же бескомпромиссным характером.",
    aroma: "Свежий травянистый хмель, злаки и лёгкая лимонная нотка.",
    taste: "Сухо, чётко, с выразительной хмелевой горчинкой. Никакой сладости.",
    finish: "Чистое, сухое, «покусывающее» послевкусие.",
    look: [
      "Это эталон немецкой горечи — сравни её с мягким лагером вроде Estrella.",
      "Тело лёгкое, пиво очень питкое и освежающее.",
      "Бледно-золотистый цвет и белая пена."
    ],
    styleNote: "Немецкий пилснер — светлый лагер с акцентом на благородный хмель: сухой, горьковатый, хрустящий. Северный стиль, как у Jever, — самый горький из всех.",
    serve: "Хорошо охлаждённым, <b>4–6 °C</b>, в высоком бокале. К рыбе, салатам и лёгким закускам."
  },
  {
    id: "estrella-free-damm",
    n: 4,
    name: "Free Damm",
    brewery: "Estrella Damm · Барселона",
    country: "Испания", flag: "🇪🇸",
    style: "Средиземноморский лагер",
    abv: "0,0 %", temp: "4–5 °C", glassLabel: "Бокал для лагера",
    glass: "pils",
    liquid: "#E4B93F", liquid2: "#EED06B", foam: "#F6EFD9", foamH: .11, haze: 0,
    accent: "#B0872A",
    tagline: "Средиземноморское солнце в стакане.",
    story: "Барселонская Damm варит Estrella с 1876 года. Free Damm — безалкогольная версия их средиземноморского лагера, созданная, чтобы пить под солнцем и не пьянеть.",
    aroma: "Медовые злаки, немного сена и лёгкая цветочная нотка.",
    taste: "Мягко и слегка солодово-сладко, аккуратная горчинка, округлое тело.",
    finish: "Короткое, чистое, освежающее.",
    look: [
      "Здесь солод чуть слаще и мягче — сравни с сухим Jever.",
      "Баланс важнее яркости: ничего не выпирает, всё гладко.",
      "Золотистый цвет, умеренная пена."
    ],
    styleNote: "Средиземноморский лагер — мягкий, сбалансированный, чуть солодовый, сделан для лёгкого питья в жару. Горечи меньше, чем у немецкого пилснера.",
    serve: "Очень холодным, <b>4–5 °C</b>. К тапас, морепродуктам и паэлье."
  },
  {
    id: "clausthaler",
    n: 5,
    name: "Clausthaler",
    brewery: "Clausthaler · Франкфурт",
    country: "Германия", flag: "🇩🇪",
    style: "Безалкогольный лагер",
    abv: "< 0,5 %", temp: "5–7 °C", glassLabel: "Кружка / бокал",
    glass: "pils",
    liquid: "#E0AE34", liquid2: "#ECC862", foam: "#F5EDD6", foamH: .12, haze: .05,
    accent: "#A87A20",
    tagline: "Дедушка всех безалкогольных сортов.",
    story: "Немецкий Clausthaler — один из первых в мире безалкогольных сортов (1979) и до сих пор эталон жанра. Классический золотистый лагер, сваренный так, чтобы алкоголь почти не образовывался.",
    aroma: "Хлебный солод, немного мёда и травянистого хмеля.",
    taste: "Округлое солодовое тело, мягкая горчинка, всё сбалансированно.",
    finish: "Чистое, слегка зерновое послевкусие.",
    look: [
      "Тут легче всего поймать ту самую «суслянную», хлебную нотку — типичный признак безалкогольного пива.",
      "Баланс солода и горечи — золотая середина, эталон стиля.",
      "Насыщенно-золотистый цвет."
    ],
    styleNote: "Немецкий безалкогольный лагер в духе «хельлес» — светлое, солодовое, мягкое пиво. Clausthaler показывает, каким был жанр в самом начале.",
    serve: "<b>5–7 °C</b>, в кружке или бокале. Универсально — почти к любой еде."
  },
  {
    id: "baladin-botanic-blanche",
    n: 6,
    name: "Botanic Blanche",
    brewery: "Baladin · Пьемонт",
    country: "Италия", flag: "🇮🇹",
    style: "Витбир (белый эль)",
    abv: "0,0 %", temp: "4–6 °C", glassLabel: "Широкий бокал",
    glass: "tulip",
    liquid: "#E7D77F", liquid2: "#F1E7A8", foam: "#FBF6E6", foamH: .18, haze: .55,
    accent: "#9C8A34",
    tagline: "Пшеничное облако с ромашкой и апельсином.",
    story: "Итальянская Baladin — легенда крафта из Пьемонта. Её линейка Botanic сварена вообще без алкоголя (0,0 %) и «прошита» травами. Blanche — бельгийский белый эль с итальянским акцентом: ромашка, цитрус, специи.",
    aroma: "Ромашка, апельсиновая цедра, немного кориандра и злаков.",
    taste: "Мягко, свежо, слегка цитрусово; лёгкая пшеничная кислинка и травяные ноты.",
    finish: "Сухое, освежающее, с зерновым хвостиком.",
    look: [
      "Мутность — это нормально и правильно: витбир варят с пшеницей и не фильтруют.",
      "Ищи ромашку и апельсин — это «ботаническая» подпись Baladin.",
      "Пена белая и пышная, цвет бледно-соломенный, мутный."
    ],
    styleNote: "Витбир (бельгийское «белое») — пшеничный эль со специями: традиционно апельсиновая цедра и кориандр. Лёгкий, освежающий, слегка пряный. Мутность — часть стиля.",
    serve: "<b>4–6 °C</b>, в широком бокале. К салатам, козьему сыру и рыбе."
  },
  {
    id: "baladin-botanic-ipa",
    n: 7,
    name: "Botanic IPA",
    brewery: "Baladin · Пьемонт",
    country: "Италия", flag: "🇮🇹",
    style: "Ботаническая IPA",
    abv: "0,0 %", temp: "6–8 °C", glassLabel: "Бокал-тюльпан",
    glass: "tulip",
    liquid: "#CE8A2C", liquid2: "#E0A64E", foam: "#F4EAD0", foamH: .14, haze: .22,
    accent: "#A65E1E",
    tagline: "Итальянская IPA на травах, ноль градуса.",
    story: "Вторая безалкогольная работа Baladin: IPA, сваренная традиционным способом, а затем дополненная ботаникой — пассифлорой и горечавкой — вместе с итальянским хмелем и цитрусом. Полностью 0,0 %.",
    aroma: "Цитрус, цедра, травы и лёгкая хмелевая смолка.",
    taste: "Яркая цитрусовая горечь с травяной горчинкой от горечавки и чистым злаковым фоном.",
    finish: "Сухое, уверенно горькое послевкусие.",
    look: [
      "Сравни горечь с Playground: у Baladin она более «травяная» из-за горечавки.",
      "Пассифлора и горечавка — необычные добавки; попробуй их поймать.",
      "Янтарный цвет, лёгкая дымка."
    ],
    styleNote: "IPA — стиль про хмель и горечь. «Ботаническая» версия добавляет к хмелю настоящие травы, делая горечь сложнее и ароматнее.",
    serve: "<b>6–8 °C</b>, в тюльпане. К пряной кухне, жареному и твёрдым сырам."
  },
  {
    id: "la-trappe-epos",
    n: 8,
    name: "La Trappe Epos",
    brewery: "De Koningshoeven · Беркел-Энсхот",
    country: "Нидерланды", flag: "🇳🇱",
    style: "Траппист (блонд)",
    abv: "0,0 %", temp: "6–8 °C", glassLabel: "Бокал-кубок",
    glass: "tulip",
    liquid: "#E0B24A", liquid2: "#ECC876", foam: "#F6EFD8", foamH: .16, haze: .38,
    accent: "#B07A22",
    tagline: "Первый в мире монастырский 0,0 %.",
    story: "La Trappe — настоящее траппистское пиво, которое варят монахи аббатства Конингсхувен в Нидерландах. Epos — их прорыв: первый в мире светлый мутный траппист с 0,0 % алкоголя.",
    aroma: "Фруктовые дрожжевые ноты, немного специй, груша и цитрус.",
    taste: "Мягко и слегка фруктово, с характерной «монастырской» дрожжевой пряностью и лёгким телом.",
    finish: "Сухое, чуть пряное послевкусие.",
    look: [
      "Секрет вкуса — дрожжи: они дают фруктово-пряные ноты (груша, гвоздика), а не хмель.",
      "Мутный светлый цвет — так и задумано.",
      "«Траппист» — знак подлинности: варится только внутри монастыря."
    ],
    styleNote: "Траппист — пиво, сваренное в стенах траппистского монастыря. Блонды и трипели славятся сложными дрожжевыми ароматами: фрукты, специи, мёд. Здесь — впервые без алкоголя.",
    serve: "<b>6–8 °C</b>, в бокале-кубке. К белому мясу, сырам или просто само по себе."
  },
  {
    id: "waterland-gulpy-glennis",
    n: 9,
    name: "Gulpy Glennis",
    brewery: "Waterland · Монникендам",
    country: "Нидерланды", flag: "🇳🇱",
    style: "Стаут (органик)",
    abv: "0,3 %", temp: "6–9 °C", glassLabel: "Широкий бокал",
    glass: "pint",
    liquid: "#1e120e", liquid2: "#452216", foam: "#E4D3B4", foamH: .22, haze: 0,
    accent: "#5A2E1C",
    tagline: "Органический стаут с кофе и какао.",
    story: "Небольшая органическая пивоварня Waterland из Монникендама под Амстердамом. Gulpy Glennis — их характерный безалкогольный стаут (0,3 %) с кремовым телом и глубокими жжёными нотами.",
    aroma: "Кофе, какао, жареное зерно и лёгкая карамель.",
    taste: "Кремово и обжаренно: тёмный шоколад, эспрессо, немного сладковатой карамели.",
    finish: "Мягко-горькое, шоколадное послевкусие.",
    look: [
      "Сравни с Guinness: у Glennis тело чуть слаще и «шоколаднее».",
      "Органические ингредиенты — приятный бонус.",
      "Почти чёрный цвет, бежевая пена."
    ],
    styleNote: "Стаут — тёмный эль на жареном ячмене. Разные стауты играют между горьким кофе и сладким шоколадом; этот ближе к сливочно-шоколадному краю.",
    serve: "<b>6–9 °C</b>, в широком бокале. К десертам, шоколаду и тушёному мясу."
  },
  {
    id: "vandestreek-funhouse",
    n: 10,
    name: "Funhouse NEIPA",
    brewery: "vandeStreek · Утрехт",
    country: "Нидерланды", flag: "🇳🇱",
    style: "NEIPA (мутная IPA)",
    abv: "0,5 %", temp: "6–8 °C", glassLabel: "Бокал-тюльпан",
    glass: "tulip",
    liquid: "#E39B3A", liquid2: "#EDB55E", foam: "#F5EBD3", foamH: .16, haze: .60,
    accent: "#C06A1E",
    tagline: "Сочный, мутный, тропический — почти смузи.",
    story: "Ещё одна работа утрехтской vandeStreek: Funhouse — безалкогольная NEIPA (нью-инглендская IPA). Хмель здесь даёт не горечь, а сочный тропический аромат, а тело выходит мягким и мутным.",
    aroma: "Манго, маракуйя, ананас и апельсин — как фруктовый сок.",
    taste: "Сочно и мягко, тропические фрукты, минимум горечи, округлое «сочное» тело.",
    finish: "Мягкое, фруктовое, почти сладкое послевкусие.",
    look: [
      "Мутность здесь нарочитая и густая — отсюда прозвище «сок».",
      "Обрати внимание, что горечи почти нет — только фруктовый аромат хмеля.",
      "Сравни с Playground: та же пивоварня, но совсем другой характер IPA."
    ],
    styleNote: "NEIPA (New England IPA) — молодой стиль: нарочито мутный, мягкий, с тропическим хмелевым ароматом и почти без горечи. Полная противоположность сухой West Coast IPA.",
    serve: "<b>6–8 °C</b>, в тюльпане. К азиатской кухне, курице и фруктам."
  },
  {
    id: "iki-green-tea-zero",
    n: 11,
    name: "iKi Green Tea Zero",
    brewery: "iKi Beer",
    country: "Бельгия", flag: "🇧🇪",
    style: "Эль с зелёным чаем",
    abv: "0,0 %", temp: "5–8 °C", glassLabel: "Винный / тюльпан",
    glass: "tulip",
    liquid: "#B9B24E", liquid2: "#CFC873", foam: "#F1EFD6", foamH: .12, haze: .28,
    accent: "#6E7A32",
    tagline: "Бельгийский эль с японской душой.",
    story: "iKi — бельгийское пиво, вдохновлённое Японией: его варят с органическим зелёным чаем сенча. Green Tea Zero — безалкогольная версия (0,0 %) с чаем и имбирём.",
    aroma: "Зелёный чай, свежие травы, лёгкий имбирь и цитрус.",
    taste: "Легко и необычно: чайная терпкость, травяные ноты, тёплый имбирный акцент.",
    finish: "Сухое, чайно-травяное послевкусие с намёком на имбирь.",
    look: [
      "Это самый необычный образец в наборе — ищи именно чайную терпкость.",
      "Зелёный чай даёт лёгкую «вяжущесть» (танины), как в самом чае.",
      "Зеленовато-золотистый оттенок."
    ],
    styleNote: "Экспериментальный эль с добавлением зелёного чая. Чайные танины и имбирь делают вкус свежим, травяным и совсем не похожим на классическое пиво.",
    serve: "<b>5–8 °C</b>, в винном или тюльпановом бокале. К суши, салатам и лёгкой азиатской еде."
  },
  {
    id: "bitburger-alkoholfrei",
    n: 12,
    name: "Bitburger 0,0",
    brewery: "Bitburger · Битбург",
    country: "Германия", flag: "🇩🇪",
    style: "Пилснер",
    abv: "0,0 %", temp: "4–6 °C", glassLabel: "Высокий бокал",
    glass: "pils",
    liquid: "#E6C13C", liquid2: "#F0D268", foam: "#F6EFD9", foamH: .12, haze: 0,
    accent: "#A67C1C",
    tagline: "Чистый немецкий пилснер, без градуса.",
    story: "Bitburger — одна из самых популярных пивоварен Германии. Их безалкогольный пилснер сухой, освежающий и очень питкий, с фирменной благородной горчинкой.",
    aroma: "Травянистый хмель, свежие злаки и лёгкая цветочная нотка.",
    taste: "Сухо и чисто, с выразительной, но не резкой горчинкой и лёгким телом.",
    finish: "Чистое, сухое, освежающее послевкусие.",
    look: [
      "Классический пилснер-эталон: сравни его баланс с более горьким Jever.",
      "Очень освежающее — «сессионное» пиво для жары.",
      "Светло-золотистый цвет, плотная белая пена."
    ],
    styleNote: "Немецкий пилснер — светлый лагер с чистым солодовым телом и благородной хмелевой горчинкой. Сухой, хрустящий, освежающий.",
    serve: "<b>4–6 °C</b>, в высоком бокале. К колбаскам, кренделям и лёгким блюдам."
  }
];

/* ------------------------------------------------------------
   CSS glass builder
   ------------------------------------------------------------ */
function glassHTML(b, big) {
  const bubbleCount = b.glass === "pint" ? 4 : 6;
  let bubbles = "";
  for (let i = 0; i < bubbleCount; i++) {
    const left = 20 + Math.random() * 58;
    const dur = (2.6 + Math.random() * 2.4).toFixed(2);
    const delay = (Math.random() * 3).toFixed(2);
    const size = (3 + Math.random() * 2.5).toFixed(1);
    bubbles += `<i style="left:${left}%;--bd:${dur}s;--bdl:${delay}s;width:${size}px;height:${size}px"></i>`;
  }
  const style = `--liquid:${b.liquid};--liquid2:${b.liquid2};--foam:${b.foam};--foamH:${b.foamH};--haze:${b.haze}`;
  return `
    <div class="glass glass--${b.glass}${big ? " glass--big" : ""}" style="${style}" aria-hidden="true">
      <div class="glass__vessel">
        <div class="glass__liquid"></div>
        <div class="glass__foam"></div>
        <div class="glass__haze"></div>
        <div class="glass__bubbles">${bubbles}</div>
        <div class="glass__shine"></div>
      </div>
      <div class="glass__base"></div>
    </div>`;
}

const pad = (n) => String(n).padStart(2, "0");
const byId = (id) => BEERS.find((b) => b.id === id);

/* ------------------------------------------------------------
   Views
   ------------------------------------------------------------ */
function homeView() {
  const cards = BEERS.map((b, i) => `
    <a class="card" href="#/beer/${b.id}" style="--i:${i}" aria-label="${b.name}, ${b.style}">
      <span class="card__num">${pad(b.n)}</span>
      <span class="card__flag">${b.flag}</span>
      ${glassHTML(b, false)}
      <span class="card__name">${b.name}</span>
      <span class="card__brewery">${b.brewery}</span>
      <span class="card__style">${b.style}</span>
    </a>`).join("");

  return `
  <section class="view">
    <div class="hero">
      <div class="hero__intro">
        <p class="hero__eyebrow kicker">Дегустационный дневник · 12 сортов</p>
        <h1 class="hero__title">Ноль&nbsp;градуса,<br><em>сто процентов</em><br>вкуса.</h1>
        <p class="hero__lead">Двенадцать безалкогольных сортов пива со всей Европы — от ирландского стаута до итальянской IPA на травах. Здесь коротко про каждый: <strong>что это, чем интересно и на что обратить внимание.</strong></p>
      </div>
      <aside class="hero__note">
        <p>Алина, ты хотела разобраться в пиве — вот тебе двенадцать безалкогольных сортов на пробу. Пей по одному, не спеша, читай подсказки и решай, что тебе по душе.</p>
        <p class="hero__sign">С любовью, Дилан</p>
      </aside>
    </div>

    <div class="primer">
      <div class="primer__item">
        <span class="primer__num">01</span>
        <h3>Что это вообще?</h3>
        <p>Настоящее пиво, где почти нет алкоголя — обычно не больше 0,5 %, а часто ровно 0,0 %. Столько же бывает в спелом банане.</p>
      </div>
      <div class="primer__item">
        <span class="primer__num">02</span>
        <h3>Чем отличается</h3>
        <p>Часто чуть слаще и с лёгкой «хлебной» ноткой несброженного солода. Тело легче, пена мягче. Это фирменная примета жанра.</p>
      </div>
      <div class="primer__item">
        <span class="primer__num">03</span>
        <h3>Как пробовать</h3>
        <p>Налей в бокал, понюхай, сделай первый глоток. Оцени цвет, аромат, тело и послевкусие — не спеша.</p>
      </div>
      <div class="primer__more">
        <a href="#/guide">Открыть путеводитель по дегустации →</a>
      </div>
    </div>

    <div class="flight-head">
      <h2>Флайт из&nbsp;двенадцати</h2>
      <span class="mono">нажми на бокал →</span>
    </div>
    <div class="flight">${cards}</div>
  </section>`;
}

function detailView(b) {
  const idx = BEERS.indexOf(b);
  const prev = BEERS[(idx - 1 + BEERS.length) % BEERS.length];
  const next = BEERS[(idx + 1) % BEERS.length];

  const chips = [
    ["Стиль", b.style],
    ["Крепость", b.abv],
    ["Подача", b.temp],
    ["Бокал", b.glassLabel]
  ].map(([k, v]) => `<div class="chip"><span>${k}</span><b>${v}</b></div>`).join("");

  const look = b.look.map((l) => `<li>${l}</li>`).join("");

  return `
  <section class="view detail" style="--accent:${b.accent}">
    <div class="detail__top">
      <a class="backlink" href="#/">← Ко всему флайту</a>
      <span class="detail__count"><b>${pad(b.n)}</b> / 12</span>
    </div>

    <div class="detail__hero">
      <div class="detail__stage">
        <span class="detail__id">№ ${pad(b.n)}</span>
        <span class="detail__flag">${b.flag}</span>
        ${glassHTML(b, true)}
      </div>
      <div class="detail__intro">
        <p class="kicker">${b.country} · ${b.style}</p>
        <h1 class="detail__name">${b.name}</h1>
        <p class="detail__brewery">${b.brewery}</p>
        <p class="detail__tagline">${b.tagline}</p>
        <div class="chips">${chips}</div>
      </div>
    </div>

    <div class="detail__body">
      <div class="prose">
        <h3>История</h3>
        <p class="lead">${b.story}</p>

        <h3>Дегустация</h3>
        <div class="notes">
          <div class="note"><span class="note__label">Аромат</span><span class="note__val">${b.aroma}</span></div>
          <div class="note"><span class="note__label">Вкус</span><span class="note__val">${b.taste}</span></div>
          <div class="note"><span class="note__label">Финиш</span><span class="note__val">${b.finish}</span></div>
        </div>

        <h3>Чем отличается стиль</h3>
        <p>${b.styleNote}</p>
      </div>

      <aside class="aside">
        <h4>На что обратить внимание</h4>
        <ul class="lookfor">${look}</ul>
        <p class="serve">${b.serve}</p>
      </aside>
    </div>

    <nav class="detail__nav">
      <a class="pn pn--prev" href="#/beer/${prev.id}">
        <span class="pn__arrow">←</span>
        <span>
          <span class="pn__dir">Предыдущее</span>
          <span class="pn__name">${prev.name}</span>
        </span>
      </a>
      <a class="pn pn--next" href="#/beer/${next.id}">
        <span>
          <span class="pn__dir">Следующее</span>
          <span class="pn__name">${next.name}</span>
        </span>
        <span class="pn__arrow">→</span>
      </a>
    </nav>
  </section>`;
}

function guideView() {
  return `
  <section class="view guide">
    <div class="guide__head">
      <p class="kicker">Путеводитель</p>
      <h1>Как читать безалкогольное пиво</h1>
      <p>Короткая шпаргалка: чем этот жанр отличается от обычного пива и на что обращать внимание, когда пробуешь.</p>
    </div>

    <div class="guide__section">
      <h2><span class="n">01</span> Что такое «безалкогольное» пиво?</h2>
      <p>Это настоящее пиво, в котором почти нет алкоголя — обычно не больше 0,5 %, а часто ровно 0,0 %. Для сравнения: примерно столько же спирта бывает в спелом банане или стакане кефира.</p>
      <p>Варят его тремя способами: останавливают брожение раньше времени, используют особые дрожжи, которые почти не производят спирт, или варят обычное пиво и потом бережно удаляют алкоголь — выпариванием или через мембраны. Вкус и аромат при этом стараются сохранить.</p>
    </div>

    <div class="guide__section">
      <h2><span class="n">02</span> Чем оно отличается на вкус?</h2>
      <p>Часто безалкогольное пиво чуть слаще и с лёгкой «хлебной» или «суслянной» ноткой — это вкус несброженного солода, того самого, из чего обычно получается спирт. Тело бывает легче, а пена — чуть менее стойкой.</p>
      <p>Современные сорта уже почти неотличимы от обычных, но эта мягкая сладость — их фирменная примета. Ярче всего ты заметишь её в светлых лагерах вроде Clausthaler.</p>
    </div>

    <div class="guide__section">
      <h2><span class="n">03</span> На что обращать внимание</h2>
      <ol class="steps">
        <li><b>Цвет.</b> Посмотри на просвет: от бледно-соломенного до чернильно-чёрного.</li>
        <li><b>Аромат.</b> Сначала понюхай, слегка покрути бокал. Аромат — это половина вкуса.</li>
        <li><b>Первый глоток.</b> Сладко или сухо? Горько или мягко?</li>
        <li><b>Тело.</b> Лёгкое и водянистое или плотное и кремовое?</li>
        <li><b>Послевкусие.</b> Что остаётся: горчинка, сладость, фрукты, кофе?</li>
      </ol>
    </div>

    <div class="guide__section">
      <h2><span class="n">04</span> Пара советов</h2>
      <ul class="tips">
        <li>Температура решает всё: слишком холодное глушит аромат. Тёмным сортам дай пару минут согреться.</li>
        <li>Наливай в бокал, а не пей из банки — так раскрывается аромат и появляется пена.</li>
        <li>Пробуй от лёгкого к тёмному: начни с пилснеров, а стауты оставь на финал.</li>
      </ul>
    </div>

    <div class="guide__cta">
      <a href="#/">← Вернуться к флайту</a>
    </div>
  </section>`;
}

/* ------------------------------------------------------------
   Router
   ------------------------------------------------------------ */
const app = document.getElementById("app");

function setActiveNav(route) {
  document.querySelectorAll(".topnav a").forEach((a) => {
    const nav = a.getAttribute("data-nav");
    const on = (nav === "guide" && route === "guide") ||
               (nav === "flight" && route !== "guide");
    a.classList.toggle("is-active", on);
  });
}

function render() {
  const hash = location.hash.replace(/^#\/?/, "");
  const parts = hash.split("/").filter(Boolean);

  let route = "home";
  if (parts[0] === "guide") route = "guide";
  else if (parts[0] === "beer") route = "beer";

  if (route === "beer") {
    const b = byId(parts[1]);
    if (b) { app.innerHTML = detailView(b); setActiveNav("flight"); }
    else { location.hash = "#/"; return; }
  } else if (route === "guide") {
    app.innerHTML = guideView();
    setActiveNav("guide");
  } else {
    app.innerHTML = homeView();
    setActiveNav("flight");
  }

  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  bindDetailGestures();
}

/* keyboard + touch navigation between beers on detail pages */
function currentBeer() {
  const parts = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
  return parts[0] === "beer" ? byId(parts[1]) : null;
}
function go(delta) {
  const b = currentBeer();
  if (!b) return;
  const idx = BEERS.indexOf(b);
  const t = BEERS[(idx + delta + BEERS.length) % BEERS.length];
  location.hash = `#/beer/${t.id}`;
}
document.addEventListener("keydown", (e) => {
  if (!currentBeer()) return;
  if (e.key === "ArrowRight") go(1);
  else if (e.key === "ArrowLeft") go(-1);
  else if (e.key === "Escape") location.hash = "#/";
});

let touchX = null, touchY = null;
function bindDetailGestures() {
  const view = app.querySelector(".detail");
  if (!view) return;
  view.addEventListener("touchstart", (e) => {
    touchX = e.changedTouches[0].clientX;
    touchY = e.changedTouches[0].clientY;
  }, { passive: true });
  view.addEventListener("touchend", (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    const dy = e.changedTouches[0].clientY - touchY;
    if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) * 1.6) {
      go(dx < 0 ? 1 : -1);
    }
    touchX = touchY = null;
  }, { passive: true });
}

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", render);
if (document.readyState !== "loading") render();
