"use strict";

const db = [
    {
        "id": 1,
        "brand": "Gorilla",
        "flavor": "Original",
        "rating": 2,
        "description": "Классический вкус энергетика с посредственным балансом кислотности и сладости."
    },
    {
        "id": 2,
        "brand": "Gorilla",
        "flavor": "Sugar Free",
        "rating": 1,
        "description": "До отвращения неприятный привкус подсластителей."
    },
    {
        "id": 3,
        "brand": "Gorilla",
        "flavor": "Extra Energy",
        "rating": 1,
        "description": "Представьте что в оригинальный «Gorilla» добавили пару ложек растворимого кофе и как следует перемешали. Мерзость."
    },
    {
        "id": 4,
        "brand": "Gorilla",
        "flavor": "Lychee Pear",
        "rating": 3,
        "description": "Лёгкие вкус и аромат личи. Небольшой перебор по сладости."
    },
    {
        "id": 5,
        "brand": "Gorilla",
        "flavor": "Orange",
        "rating": 2,
        "description": "Смахивает на «Mirinda» с нотами манго. Приторный."
    },
    {
        "id": 6,
        "brand": "Gorilla",
        "flavor": "Peach Apricot",
        "rating": 2,
        "description": "Абрикос доминирует над персиком. Неприятный привкус подсластителей."
    },
    {
        "id": 7,
        "brand": "Gorilla",
        "flavor": "Mango Coconut",
        "rating": 3,
        "description": "Сбалансированные вкусы кокоса и манго. Небольшой перебор по сладости."
    },
    {
        "id": 8,
        "brand": "Gorilla",
        "flavor": "Mint",
        "rating": 1,
        "description": "Слабый аромат мяты и ничего более. Разочарование."
    },
    {
        "id": 9,
        "brand": "Gorilla",
        "flavor": "Dragon Fruit Pineapple",
        "rating": 2,
        "description": "Ожидал чего-то необычного, но ощущается лишь ананас. Небольшой перебор по сладости."
    },
    {
        "id": 10,
        "brand": "Adrenaline Rush",
        "flavor": "Original",
        "rating": 3,
        "description": "Приятный вкус апельсина и других фруктов."
    },
    {
        "id": 11,
        "brand": "Adrenaline Rush",
        "flavor": "VitPower Ягоды",
        "rating": 2,
        "description": "Вкус ягод, напоминает красную смородину. Не очень приятно пьётся."
    },
    {
        "id": 12,
        "brand": "Adrenaline Rush",
        "flavor": "VitPower Апельсин",
        "rating": 3,
        "description": "Вкус апельсинового сока с нотками апельсиновых леденцов."
    },
    {
        "id": 13,
        "brand": "Adrenaline Rush",
        "flavor": "Zero Sugar Silver Energy",
        "rating": 2,
        "description": "Вкус смеси тропических фруктов и подсластителей. Неприятно приторный."
    },
    {
        "id": 14,
        "brand": "Adrenaline Rush",
        "flavor": "Game Fuel Charged Candy",
        "rating": 4,
        "description": "Классический вкус энергетика с нотками то ли леденцов, то ли сахарной ваты."
    },
    {
        "id": 15,
        "brand": "Adrenaline Rush",
        "flavor": "Game Fuel Mango Storm",
        "rating": 2,
        "description": "Вкус мультифруктового сока с нотками манго."
    },
    {
        "id": 16,
        "brand": "Burn",
        "flavor": "Original",
        "rating": 4,
        "description": "Ягодный вкус. Обволакивающая сладость. Лёгкая горчинка."
    },
    {
        "id": 17,
        "brand": "Burn",
        "flavor": "Apple Kiwi",
        "rating": 4,
        "description": "Вкус и аромат зелёного яблока. Напоминает яблочную конфету «Кислинка»."
    },
    {
        "id": 18,
        "brand": "Burn",
        "flavor": "Tropical Mix",
        "rating": 2,
        "description": "Приторный вкус смеси тропических фруктов. Обволакивающая сладость."
    },
    {
        "id": 19,
        "brand": "Burn",
        "flavor": "Peach Mango",
        "rating": 2,
        "description": "Посредственный вкус персика с нотками манго и подсластителей."
    },
    {
        "id": 20,
        "brand": "Burn",
        "flavor": "Dark Energy",
        "rating": 2,
        "description": "Вкус цитрусовых с какими-то неприятными нотками. В меру кислый, в меру сладкий."
    },
    {
        "id": 21,
        "brand": "Burn",
        "flavor": "Gold Rush",
        "rating": 3,
        "description": "Классический вкус энергетика с дополнительной ароматической ноткой."
    },
    {
        "id": 22,
        "brand": "Red Bull",
        "flavor": "Original",
        "rating": 2,
        "description": "Сладковатый конфетный вкус. Мало газов."
    },
    {
        "id": 23,
        "brand": "Red Bull",
        "flavor": "Summer Edition Juneberry",
        "rating": 3,
        "description": "Сладковатый ягодный вкус. Вкуснее «Red Bull Original», но ничего выдающегося."
    },
    {
        "id": 24,
        "brand": "Red Bull",
        "flavor": "Summer Edition Watermelon",
        "rating": 3,
        "description": "Приятный вкус арбуза. Вкуснее «Red Bull Original», но ничего выдающегося."
    },
    {
        "id": 25,
        "brand": "Red Bull",
        "flavor": "Sugarfree",
        "rating": 1,
        "description": "Тот же «Red Bull Original», но ещё более водянистый."
    },
    {
        "id": 26,
        "brand": "Monster Energy",
        "flavor": "Ultra Sunrise",
        "rating": 3,
        "description": "Вкус «Fanta» и аскорбинки."
    },
    {
        "id": 27,
        "brand": "Monster Energy",
        "flavor": "The Doctor",
        "rating": 3,
        "description": "Приятный цитрусовый вкус. Не слишком кислый, не слишком сладкий."
    },
    {
        "id": 28,
        "brand": "Monster Energy",
        "flavor": "Mango Loco",
        "rating": 5,
        "description": "Много сока манго. Сладость сменяется кислинкой. Приятные вкус и консистенция."
    },
    {
        "id": 29,
        "brand": "Monster Energy",
        "flavor": "Nitro Super Dry",
        "rating": 5,
        "description": "Насыщенные вкус и аромат цитруса и непревзойдённая газация. Один из самых вкусных напитков."
    },
    {
        "id": 30,
        "brand": "Monster Energy",
        "flavor": "Ultra Paradise",
        "rating": 1,
        "description": "Вкус дешёвой жевательной конфеты со вкусом киви. До ужаса сладкий."
    },
    {
        "id": 31,
        "brand": "Monster Energy",
        "flavor": "Mule Ginger Brew",
        "rating": 1,
        "description": "После ужина роллами остался имбирь? Возьмите его в рот, закусите ложкой сахара и как следует прожуйте. Вот такой вот вкус у этого напитка."
    },
    {
        "id": 32,
        "brand": "Monster Energy",
        "flavor": "Pipeline Punch",
        "rating": 2,
        "description": "Мультифруктовый вкус, нотки гуавы на послевкусии. Очень сладкий."
    },
    {
        "id": 33,
        "brand": "Monster Energy",
        "flavor": "Ripper",
        "rating": 2,
        "description": "Мультифруктовый вкус, нотки ананаса на послевкусии. Очень сладкий."
    },
    {
        "id": 34,
        "brand": "Monster Energy",
        "flavor": "Ultra Watermelon",
        "rating": 3,
        "description": "Вкус арбузной жвачки «Orbit»."
    },
    {
        "id": 35,
        "brand": "Monster Energy",
        "flavor": "Pacific Punch",
        "rating": 2,
        "description": "Фруктово-ягодный вкус. Очень сладкий."
    },
    {
        "id": 36,
        "brand": "Monster Energy",
        "flavor": "Ultra White Zero",
        "rating": 2,
        "description": "Лёгкий цитрусовый вкус. Обволакивающий вкус подсластителей на послевкусии. Не понимаю всеобщего обожания."
    },
    {
        "id": 37,
        "brand": "Monster Energy",
        "flavor": "Super Cola",
        "rating": 1,
        "description": "На вкус — дешёвый аналог «Coca-Cola». Не понял прикола. Ещё и объём маленький."
    },
    {
        "id": 38,
        "brand": "Monster Energy",
        "flavor": "Monarch",
        "rating": 5,
        "description": "Нежный вкус персика. Именно персика, а не персикового сока. Слегка пюреобразная консистенция."
    },
    {
        "id": 39,
        "brand": "Monster Energy",
        "flavor": "Khaotic",
        "rating": 3,
        "description": "Во вкусе апельсин, персик и другие фрукты. Менее пюреобразный и более сладкий чем «Monster Energy Monarch»."
    },
    {
        "id": 40,
        "brand": "Tornado Energy",
        "flavor": "Storm",
        "rating": 2,
        "description": "Посредственный классический вкус энергетика."
    },
    {
        "id": 41,
        "brand": "Tornado Energy",
        "flavor": "Coconut",
        "rating": 2,
        "description": "Яркий и слегка химозный вкус кокоса. Словно жуёшь начинку «Bounty»."
    },
    {
        "id": 42,
        "brand": "Tornado Energy",
        "flavor": "Cactus",
        "rating": 2,
        "description": "Не особо приятное сочетание вкусов кактуса и алоэ."
    },
    {
        "id": 43,
        "brand": "Tornado Energy",
        "flavor": "Bubble",
        "rating": 2,
        "description": "Смесь вкуса бабл-гам с ягодным компотом."
    },
    {
        "id": 44,
        "brand": "Tornado Energy",
        "flavor": "Battle",
        "rating": 2,
        "description": "Смесь вкусов дешёвого аналога «Coca-Cola» и классического энергетика."
    },
    {
        "id": 45,
        "brand": "Tornado Energy",
        "flavor": "Mango",
        "rating": 2,
        "description": "Вкус мультифруктового сока с нотками манго."
    },
    {
        "id": 46,
        "brand": "Tornado Energy",
        "flavor": "Active",
        "rating": 2,
        "description": "Посредственный вкус апельсина. Перебор со сладостью."
    },
    {
        "id": 47,
        "brand": "Tornado Energy",
        "flavor": "Iceberry",
        "rating": 2,
        "description": "Вкус яблока и ягодной жвачки. Ожидал чего-то другого."
    },
    {
        "id": 48,
        "brand": "Tornado Energy",
        "flavor": "Lemon Cake",
        "rating": 3,
        "description": "Вкус сливочного крема, печенья, ванили и цедры лимона."
    },
    {
        "id": 49,
        "brand": "Flash Up",
        "flavor": "Energy",
        "rating": 3,
        "description": "Классический вкус энергетика. Очень кислый. Очень газированный."
    },
    {
        "id": 50,
        "brand": "Flash Up",
        "flavor": "Ultra Energy",
        "rating": 3,
        "description": "Не отличается от «Flash Up Energy»."
    },
    {
        "id": 51,
        "brand": "Flash Up",
        "flavor": "Mango Pineapple",
        "rating": 2,
        "description": "Кислинка присущая всем «Flash Up». Обычный вкус манго. Нотки ананаса."
    },
    {
        "id": 52,
        "brand": "Flash Up",
        "flavor": "Berry Mix",
        "rating": 2,
        "description": "Вкус чего-то врде красной смородины. Ощущается ещё более кислым чем «Flash Up Energy»."
    },
    {
        "id": 53,
        "brand": "Flash Up",
        "flavor": "Mint Lime",
        "rating": 2,
        "description": "Наименее насыщенная из всех разновидностей «Flash Up». Вкус — типичные лайм и мята."
    },
    {
        "id": 54,
        "brand": "Flash Up",
        "flavor": "Orange Rhythm",
        "rating": 2,
        "description": "Неприятный вкус апельсина. Менее кислый и менее насыщенный чем «Flash Up Energy»."
    },
    {
        "id": 55,
        "brand": "Drive Me",
        "flavor": "Original",
        "rating": 2,
        "description": "Тот же «Flash Up Energy», но менее кислый, менее газированный и с горчинкой на послевкусии."
    },
    {
        "id": 56,
        "brand": "Drive Me",
        "flavor": "Nitro Boost",
        "rating": 2,
        "description": "Посредственный вкус яблока. Странные нотки на послевкусии."
    },
    {
        "id": 57,
        "brand": "Drive Me",
        "flavor": "Berry Kick",
        "rating": 2,
        "description": "Непрятный приторный вкус смеси ягод."
    },
    {
        "id": 58,
        "brand": "Drive Me",
        "flavor": "Guava Strike",
        "rating": 2,
        "description": "Посредственный вкус гуавы. Тропические нотки."
    },
    {
        "id": 59,
        "brand": "Drive Me",
        "flavor": "Bubble Blast",
        "rating": 2,
        "description": "Посредственный вкус бабл-гам."
    },
    {
        "id": 60,
        "brand": "PULSEUP",
        "flavor": "Energy",
        "rating": 3,
        "description": "Неплохой бюджетный мультифруктовый энергетик."
    },
    {
        "id": 61,
        "brand": "PULSEUP",
        "flavor": "Mojito Fresh Energy",
        "rating": 3,
        "description": "Неплохой бюджетный энергетик со вкусом лайма и мяты."
    },
    {
        "id": 62,
        "brand": "PULSEUP",
        "flavor": "Drive",
        "rating": 3,
        "description": "Неплохой бюджетный энергетик с классическим вкусом."
    },
    {
        "id": 63,
        "brand": "100 KWT",
        "flavor": "Original",
        "rating": 1,
        "description": "До отвращения приторный вкус апельсина. Напоминает дешёвый соковый напиток или растворённые в воде апельсиновые леденцы. Практически нет газов. Не стал допивать."
    },
    {
        "id": 64,
        "brand": "100 KWT",
        "flavor": "Raw Energy",
        "rating": 3,
        "description": "Классический вкус энергетика с дополнительной кислинкой."
    },
    {
        "id": 65,
        "brand": "100 KWT",
        "flavor": "Berry",
        "rating": 2,
        "description": "Типичный ягодный энергетик. Более сладкий чем «100 KWT Raw Energy»."
    },
    {
        "id": 66,
        "brand": "Turbo Energy",
        "flavor": "Дерзкая Энергия",
        "rating": 4,
        "description": "Приятный фруктово-апельсиновый энергетик от «Черноголовки». Вкусный, шипучий, нехимозный, дешёвый."
    },
    {
        "id": 67,
        "brand": "Turbo Energy",
        "flavor": "Яркая Энергия",
        "rating": 3,
        "description": "Классический энергетик от «Черноголовки». Нормальный вкус. Низкая цена."
    },
    {
        "id": 68,
        "brand": "E-ON",
        "flavor": "Black Power",
        "rating": 3,
        "description": "Вкус яблочного сока. Нотки женьшеня."
    },
    {
        "id": 69,
        "brand": "E-ON",
        "flavor": "Kiwi Blast",
        "rating": 2,
        "description": "Странноватый вкус киви. Ананасовая нотка где-то на фоне."
    },
    {
        "id": 70,
        "brand": "E-ON",
        "flavor": "Lemongrass",
        "rating": 2,
        "description": "Плосковатый вкус цитруса. То ли лайма, то ли лимона."
    },
    {
        "id": 71,
        "brand": "E-ON",
        "flavor": "Almond Rush",
        "rating": 2,
        "description": "Вкус абрикосовой мякоти. Горчинка на послевкусии."
    },
    {
        "id": 72,
        "brand": "E-ON",
        "flavor": "Danger Berry",
        "rating": 2,
        "description": "Средненький вкус грейпфрутового сока."
    },
    {
        "id": 73,
        "brand": "E-ON",
        "flavor": "Guava Passion",
        "rating": 3,
        "description": "Единственный энергетик, в котором вкусом правит гуава. Неплохой."
    },
    {
        "id": 74,
        "brand": "E-ON",
        "flavor": "Citrus Punch",
        "rating": 3,
        "description": "Приглушенный апельсиновый вкус с нотками других цитрусовых."
    },
    {
        "id": 75,
        "brand": "Volt Energy",
        "flavor": "Original",
        "rating": 2,
        "description": "Не лучшая интерпретация вкуса классического энергетика."
    },
    {
        "id": 76,
        "brand": "Volt Energy",
        "flavor": "Blueberry Pomegranate",
        "rating": 4,
        "description": "Вкус голубики. Кислинка граната на послевкусии."
    },
    {
        "id": 77,
        "brand": "Volt Energy",
        "flavor": "Mango Lime",
        "rating": 2,
        "description": "Странное сочетание манго и лайма. Такое себе."
    },
    {
        "id": 78,
        "brand": "Volt Energy",
        "flavor": "Orange & Passion Fruit",
        "rating": 2,
        "description": "Посредственный мультифруктовый вкус с нотками апельсина."
    },
    {
        "id": 79,
        "brand": "Volt Energy",
        "flavor": "No Sugar",
        "rating": 2,
        "description": "Тот же «Volt Energy Original», но без сахара. Отдаёт дешёвым лимонадом."
    },
    {
        "id": 80,
        "brand": "HOT CAT",
        "flavor": "No Sugar Mango Raspberry",
        "rating": 1,
        "description": "Словно косточки манго и малины настояли в содовой. Не стал допивать."
    },
    {
        "id": 81,
        "brand": "HOT CAT",
        "flavor": "Multifruit",
        "rating": 1,
        "description": "Блеклый мультифруктовый вкус."
    },
    {
        "id": 82,
        "brand": "HOT CAT",
        "flavor": "Kiwi Feijoa",
        "rating": 1,
        "description": "Водянистый неприятный вкус неспелых киви и фейхоа."
    },
    {
        "id": 83,
        "brand": "HOT CAT",
        "flavor": "Barberry",
        "rating": 1,
        "description": "Неприятный сладковатый вкус классического энергетика."
    },
    {
        "id": 84,
        "brand": "Genesis",
        "flavor": "Green Star",
        "rating": 2,
        "description": "Химозненький вкус яблока с какими-то странными нотками."
    },
    {
        "id": 85,
        "brand": "Genesis",
        "flavor": "Purple Star",
        "rating": 3,
        "description": "Вкусе ежевики, чёрной смородины и красного винограда."
    },
    {
        "id": 86,
        "brand": "Baba Yaga",
        "flavor": "Blue",
        "rating": 1,
        "description": "Посредственность по цене нормального энергетика. Ещё и под разными позициями (Blue и Pink) по факту один и тот же напиток."
    },
    {
        "id": 87,
        "brand": "Baba Yaga",
        "flavor": "Pink",
        "rating": 1,
        "description": "Посредственность по цене нормального энергетика. Ещё и под разными позициями (Pink и Blue) по факту один и тот же напиток."
    },
    {
        "id": 88,
        "brand": "Black Wolf",
        "flavor": "Mad Max",
        "rating": 2,
        "description": "Классический вкус дешёвого энергетика. Странное послевкусие."
    },
    {
        "id": 89,
        "brand": "Black Wolf",
        "flavor": "Apple Kiwi",
        "rating": 2,
        "description": "Неудачные вкусы яблока и киви. «Burn Apple Kiwi» в разы вкуснее при почти одинаковой цене."
    },
    {
        "id": 90,
        "brand": "Double You",
        "flavor": "Caffeine Taurine",
        "rating": 2,
        "description": "Кисленько. Химозно. Мультифруктовый вкус с выделяющимся ананасом."
    },
    {
        "id": 91,
        "brand": "Double You",
        "flavor": "Watermelon Guava",
        "rating": 2,
        "description": "Химозный вкус арбуза. Посредственный вкус гуавы."
    },
    {
        "id": 92,
        "brand": "Solar Power",
        "flavor": "Original",
        "rating": 1,
        "description": "Очень странный напиток. Имеет солодовое послевкусие."
    },
    {
        "id": 93,
        "brand": "Bizon Black",
        "flavor": "Original",
        "rating": 2,
        "description": "Посредственная интерпретация классического вкуса энергетика."
    },
    {
        "id": 94,
        "brand": "Monster Energy",
        "flavor": "Ultra Violet",
        "rating": 4,
        "description": "Вкус красного винограда. Умеренная кислинка, лёгкая сладость."
    },
    {
        "id": 95,
        "brand": "Monster Energy",
        "flavor": "Ultra Blue",
        "rating": 4,
        "description": "Вкус ежевики. На послевкусии то ли клюква, то ли брусника."
    },
    {
        "id": 96,
        "brand": "Monster Energy",
        "flavor": "Ultra Fiesta Mango",
        "rating": 2,
        "description": "Посредственный вкус манго. Нотки подсластителей."
    },
    {
        "id": 97,
        "brand": "Genesis",
        "flavor": "Yellow Star",
        "rating": 3,
        "description": "Типичный мультифруктовый энергетик."
    },
    {
        "id": 98,
        "brand": "PULSEUP",
        "flavor": "Energy Orange",
        "rating": 3,
        "description": "Неплохой бюджетный энергетик со вкусом апельсина."
    },
    {
        "id": 99,
        "brand": "Burn",
        "flavor": "Watermelon",
        "rating": 4,
        "description": "Вкус ближе к арбузу (если сравнивать с «Monster Energy Ultra Watermelon» например). Без сахара, но подсластители абсолютно не мерзкие."
    },
    {
        "id": 100,
        "brand": "Target",
        "flavor": "Active",
        "rating": 3,
        "description": "Типичный энергетик с классическим вкусом."
    },
    {
        "id": 101,
        "brand": "Flash Up",
        "flavor": "Bubble Gum",
        "rating": 2,
        "description": "Менее кислый чем «Flash Up Energy». Типичный вкус бабл-гам."
    },
    {
        "id": 102,
        "brand": "Target",
        "flavor": "Mango Flavor",
        "rating": 3,
        "description": "Типичный манговый энергетик."
    },
    {
        "id": 103,
        "brand": "Double Pull",
        "flavor": "Original",
        "rating": 3,
        "description": "Неплохой бюджетный энергетик с классическим вкусом."
    },
    {
        "id": 104,
        "brand": "Monster Energy",
        "flavor": "Ultra Gold",
        "rating": 3,
        "description": "Вкус ананасового леденца. Лёгкая кислинка, умеренная сладость."
    },
    {
        "id": 105,
        "brand": "Monster Energy",
        "flavor": "M3 Extra Strength",
        "rating": 4,
        "description": "Более насыщенная версия «Monster Energy Original» в крохотном объёме с тем же содержанием активных веществ."
    },
    {
        "id": 106,
        "brand": "Monster Energy",
        "flavor": "MIXXD Punch",
        "rating": 3,
        "description": "Вкус спелой черешни. Похож на мягкую версию «Powercell Cherry»."
    },
    {
        "id": 107,
        "brand": "NEFT",
        "flavor": "Orange & Passion Fruit",
        "rating": 2,
        "description": "Посредственный мультифруктовый вкус с нотками апельсина."
    },
    {
        "id": 108,
        "brand": "Target",
        "flavor": "Coconut & Pineapple",
        "rating": 3,
        "description": "Приятный вкус кокоса. Ананас на втором плане."
    },
    {
        "id": 109,
        "brand": "Target",
        "flavor": "Maximum",
        "rating": 4,
        "description": "Приятный ягодный вкус. Слегка горчит. Послевкусие как у леденцов «Sweet Energy»."
    },
    {
        "id": 110,
        "brand": "Target",
        "flavor": "Original",
        "rating": 3,
        "description": "Типичный мультифруктовый энергетик."
    },
    {
        "id": 111,
        "brand": "NEFT",
        "flavor": "Cranberry Aronia",
        "rating": 4,
        "description": "Вкус клюквы передан на ура. Лёгкая кислинка, лёгкая горчинка."
    },
    {
        "id": 112,
        "brand": "NEFT",
        "flavor": "Special Woman Edition",
        "rating": 2,
        "description": "Приторный вкус кокоса. Манго ощущается слабо."
    },
    {
        "id": 113,
        "brand": "Monster Energy",
        "flavor": "Original",
        "rating": 4,
        "description": "Вкус женьшеня. Кислинка сменяется обволакивающей сладостью. Пьётся как сироп."
    },
    {
        "id": 114,
        "brand": "Powercell",
        "flavor": "Cherry",
        "rating": 2,
        "description": "Слегка приторный вкус спелой черешни."
    },
    {
        "id": 115,
        "brand": "Powercell",
        "flavor": "Tropic",
        "rating": 2,
        "description": "Обычный мультифруктовый энергетик."
    },
    {
        "id": 116,
        "brand": "Burn",
        "flavor": "Fruit Punch",
        "rating": 1,
        "description": "Вкус переспелой черешни и чего-то вроде марципана. Ужасно сладкий."
    },
    {
        "id": 117,
        "brand": "Monster Energy",
        "flavor": "Lewis Hamilton Zero Sugar",
        "rating": 5,
        "description": "Приятный и насыщенный вкус персика. Сбалансированная сладость."
    },
    {
        "id": 118,
        "brand": "Easy Peasy",
        "flavor": "Ананас-Шампанское",
        "rating": 2,
        "description": "Посредственный вкус ананаса со странными нотками."
    },
    {
        "id": 119,
        "brand": "Red Bull",
        "flavor": "White Edition",
        "rating": 4,
        "description": "Приятный вкус кокоса. Кисловатые ягоды на послевкусии. Самый вкусный «Red Bull»."
    },
    {
        "id": 120,
        "brand": "Red Bull",
        "flavor": "Yellow Edition",
        "rating": 3,
        "description": "Неплохой вкус мультифрукта. Вкуснее «Red Bull Original», но ничего выдающегося."
    },
    {
        "id": 121,
        "brand": "Easy Peasy",
        "flavor": "Арбуз-Гуава",
        "rating": 2,
        "description": "Посредственные вкусы арбуза и гуавы. Очень сладкий."
    },
    {
        "id": 122,
        "brand": "Easy Peasy",
        "flavor": "Манго-Апельсин",
        "rating": 2,
        "description": "Ядрёный вкус апельсина. Манго практически не ощущается."
    },
    {
        "id": 123,
        "brand": "Tornado Energy",
        "flavor": "Razzberry",
        "rating": 3,
        "description": "Необычный вкус. Словно холодный сироп из чашечки малинового варенья."
    },
    {
        "id": 124,
        "brand": "Monster Energy",
        "flavor": "Aussie Lemonade",
        "rating": 4,
        "description": "Менее сладкий и более натуральный «Sprite»."
    },
    {
        "id": 125,
        "brand": "Powercell",
        "flavor": "Mojito",
        "rating": 4,
        "description": "Приятный вкус мохито. В составе натуральные масла мяты и лайма."
    },
    {
        "id": 126,
        "brand": "Target",
        "flavor": "Zero Sugar",
        "rating": 2,
        "description": "Очень похож на «Adrenaline Rush Zero Sugar Silver Energy». Такой же посредственный мультифруктовый вкус и такие же мерзкие подсластители на послевкусии."
    },
    {
        "id": 127,
        "brand": "Powercell",
        "flavor": "Original",
        "rating": 2,
        "description": "Неудачная попытка повторить вкус и консистенцию «Monster Energy Monarch»."
    },
    {
        "id": 128,
        "brand": "WK UP",
        "flavor": "Raspberry Mint",
        "rating": 3,
        "description": "Средненький вкус малины и мяты. Не самые мерзкие подсластители."
    },
    {
        "id": 129,
        "brand": "WK UP",
        "flavor": "Cherry Cola",
        "rating": 3,
        "description": "Что-то среднее между «Dr. Pepper Cherry» и «Monster Energy MIXXD Punch»."
    },
    {
        "id": 130,
        "brand": "Power Torr",
        "flavor": "Red",
        "rating": 3,
        "description": "Довольно приятный вкус красных ягод. Шипучий. Бюджетный."
    },
    {
        "id": 131,
        "brand": "Power Torr",
        "flavor": "Gold",
        "rating": 3,
        "description": "Довольно приятный тропический вкус. Шипучий. Бюджетный."
    },
    {
        "id": 132,
        "brand": "WK UP",
        "flavor": "Pina Colada",
        "rating": 2,
        "description": "Водянистая версия «Tornado Energy Coconut»."
    },
    {
        "id": 133,
        "brand": "WK UP",
        "flavor": "Guava Peach",
        "rating": 2,
        "description": "Вкусом правит персик. Неприятный. Словно из мыла или освежителя воздуха."
    },
    {
        "id": 134,
        "brand": "Power Torr",
        "flavor": "Navy",
        "rating": 2,
        "description": "Не самая лучшая интерпретация чёрной смородины. Мало газов."
    },
    {
        "id": 135,
        "brand": "Power Torr",
        "flavor": "Black",
        "rating": 2,
        "description": "Классический вкус дешёвого энергетика. Мало газов."
    },
    {
        "id": 136,
        "brand": "Power Torr",
        "flavor": "Metal Cola",
        "rating": 2,
        "description": "Вкус дешёвого жевательного мармелада со вкусом колы."
    },
    {
        "id": 137,
        "brand": "Power Torr",
        "flavor": "Neon Light",
        "rating": 1,
        "description": "Ужасный вкус подсластителей. Газа нет от слова совсем."
    },
    {
        "id": 138,
        "brand": "WK UP",
        "flavor": "Champagne",
        "rating": 1,
        "description": "Неприятный вкус. Ещё более неприятный чем у «Easy Peasy Ананас-Шампанское»."
    },
    {
        "id": 139,
        "brand": "Varyag",
        "flavor": "Яблоко-Бузина",
        "rating": 3,
        "description": "Вкус яблочного сока из красных яблок. Бузина не чувствуется."
    },
    {
        "id": 140,
        "brand": "Varyag",
        "flavor": "Северные ягоды",
        "rating": 2,
        "description": "Обычный ягодный вкус энергетика из среднего ценового сегмента. Никаких северных ягод и близко нет."
    },
    {
        "id": 141,
        "brand": "Bizon Black",
        "flavor": "Raspberry",
        "rating": 2,
        "description": "Тот же «Tornado Energy Razzberry», но с более химозным и в несколько раза менее насыщенным вкусом."
    },
    {
        "id": 142,
        "brand": "WK UP",
        "flavor": "Blueberry Mojito",
        "rating": 2,
        "description": "Очень странный вкус голубики. Словно какое-то мыло или освежитель воздуха."
    },
    {
        "id": 143,
        "brand": "Target",
        "flavor": "Kiwi & Apple",
        "rating": 1,
        "description": "Вкус копеечного освежителя дыхания «Зелёное яблоко»."
    },
    {
        "id": 144,
        "brand": "Buzz",
        "flavor": "Tropic",
        "rating": 3,
        "description": "Вкус «Fanta» с тропическими нотками."
    },
    {
        "id": 145,
        "brand": "Buzz",
        "flavor": "Ice Coffee",
        "rating": 1,
        "description": "Похож на «Gorilla Extra Energy». Без мерзкой кислинки, но всё равно не очень."
    },
    {
        "id": 146,
        "brand": "Free Masai",
        "flavor": "Sunrise Energy",
        "rating": 3,
        "description": "Странное сочетание вкусов. Ананас, лайм, киви, огурец. Не противный, но и не очень вкусный."
    },
    {
        "id": 147,
        "brand": "Baba Yaga",
        "flavor": "Кировольт",
        "rating": 1,
        "description": "Классический вкус дешёвого энергетика по завышенной цене. Похож на «100 KWT Raw Energy», но не такой насыщенный и с ванильной ноткой."
    },
    {
        "id": 148,
        "brand": "Free Masai",
        "flavor": "Tropic Energy",
        "rating": 3,
        "description": "Самый обыкновенный тропический энергетик."
    },
    {
        "id": 149,
        "brand": "Байкал",
        "flavor": "Кофе-Лимон",
        "rating": 2,
        "description": "Вкуснее чем «Gorilla Extra Energy» и «Buzz Ice Coffee», но всё равно не очень. Присутствует лёгкий вкус эфирного масла лимона."
    },
    {
        "id": 150,
        "brand": "Tusa",
        "flavor": "Energy",
        "rating": 2,
        "description": "Разбавленный «Flash Up Energy»."
    },
    {
        "id": 151,
        "brand": "Monster Energy",
        "flavor": "Assault",
        "rating": 1,
        "description": "Тот же «Monster Energy Super Cola», но в большем объёме."
    },
    {
        "id": 152,
        "brand": "Rockstar",
        "flavor": "Original Zero Sugar",
        "rating": 1,
        "description": "Классический вкус энергетика. Ужасно противный вкус подсластителей."
    },
    {
        "id": 153,
        "brand": "Rusking",
        "flavor": "Classic+",
        "rating": 3,
        "description": "Классический вкус энергетика. Аскорбинка на послевкусии."
    },
    {
        "id": 154,
        "brand": "Rusking",
        "flavor": "Dopamine",
        "rating": 4,
        "description": "Очень приятное сочетание вкусов персика и винограда."
    },
    {
        "id": 155,
        "brand": "Rusking",
        "flavor": "Active Sport",
        "rating": 2,
        "description": "Вкус аптечного сиропа и кожуры цитрусовых. Горчинка на послевкусии."
    },
    {
        "id": 156,
        "brand": "Rockstar",
        "flavor": "Mango Guava",
        "rating": 3,
        "description": "Обычный энергетик со вкусом манго и нотками гуавы."
    },
    {
        "id": 157,
        "brand": "Ezo Wolf",
        "flavor": "Classic",
        "rating": 3,
        "description": "Классический вкус бюджетного энергетика с доминирующей кислинкой. Похож на «Flash Up Energy»."
    },
    {
        "id": 158,
        "brand": "Ezo Wolf",
        "flavor": "Tropical Fruits",
        "rating": 3,
        "description": "Не самый плохой вкус смеси тропических фруктов."
    },
    {
        "id": 159,
        "brand": "Free Masai",
        "flavor": "Barberry",
        "rating": 3,
        "description": "Классический вкус бюджетного энергетика с доминирующей кислинкой."
    },
    {
        "id": 160,
        "brand": "NEFT",
        "flavor": "Special Man Edition",
        "rating": 2,
        "description": "Классический вкус энергетика по завышенной цене."
    },
    {
        "id": 161,
        "brand": "Burn",
        "flavor": "Mango",
        "rating": 3,
        "description": "Неплохой вкус манго. Умеренная сладость, что удивительно для «Burn»."
    },
    {
        "id": 162,
        "brand": "Adrenaline Rush",
        "flavor": "Zero Sugar",
        "rating": 1,
        "description": "Вкус подсластителей. Закос под «Monster Energy Ultra White Zero»."
    },
    {
        "id": 163,
        "brand": "Lit Energy",
        "flavor": "Classic",
        "rating": 3,
        "description": "Вкус барбариса. Обволакивающая сладость, лёгкая кислинка. Средняя газация."
    },
    {
        "id": 164,
        "brand": "Lit Energy",
        "flavor": "Original Zero Sugar",
        "rating": 2,
        "description": "Классический вкус энергетика. Умеренно сладкий, с лёгкими нотками подсластителей."
    },
    {
        "id": 165,
        "brand": "Lit Energy",
        "flavor": "Berry Coconut",
        "rating": 2,
        "description": "Ягодная кислинка без самого вкуса ягод. Химозный вкус кокоса. Нотки подсластителей."
    },
    {
        "id": 166,
        "brand": "Varyag",
        "flavor": "Дикий виноград",
        "rating": 3,
        "description": "Вкус кожурки виноградин. Умеренная сладость, слабая кислинка."
    },
    {
        "id": 167,
        "brand": "Adrenaline Rush",
        "flavor": "VitPower Манго",
        "rating": 3,
        "description": "Довольно приятный манговый энергетик. Хороший баланс сладости и кислотности."
    },
    {
        "id": 168,
        "brand": "Bombbar",
        "flavor": "Strawberries",
        "rating": 2,
        "description": "Посредственный вкус клубники, стоит немного выветриться газу и становится совсем неприятным. Нотки гуараны"
    },
    {
        "id": 169,
        "brand": "Bombbar",
        "flavor": "Orange",
        "rating": 3,
        "description": "Неплохой вкус апельсина. Нотки гуараны."
    },
    {
        "id": 170,
        "brand": "Bombbar",
        "flavor": "Lime-Mint",
        "rating": 2,
        "description": "Посредственный вкус мохито. Напоминает менее сладкий, но более приторный «Laimon Fresh»."
    },
    {
        "id": 171,
        "brand": "Bombbar",
        "flavor": "Cherry",
        "rating": 2,
        "description": "Перебор с интенсивностью вкуса вишни. Очень приторный."
    },
    {
        "id": 172,
        "brand": "Bombbar",
        "flavor": "Original",
        "rating": 3,
        "description": "Неплохой энергетик с классическим вкусом. Баланс кислотности и сладости. Нотки гуараны."
    },
    {
        "id": 173,
        "brand": "Bombbar",
        "flavor": "Passion Fruit",
        "rating": 3,
        "description": "Приятный вкус маракуйи. Умеренные кислотность и сладость."
    },
    {
        "id": 174,
        "brand": "Gorilla",
        "flavor": "Cherry Berry",
        "rating": 3,
        "description": "Приятный вкус вишни с нотками винограда."
    },
    {
        "id": 175,
        "brand": "Bombbar",
        "flavor": "Cola",
        "rating": 2,
        "description": "Вкус дешёвого мармелада со вкусом колы. Немного постоит и становится совсем плохим."
    },
    {
        "id": 176,
        "brand": "Solar Power",
        "flavor": "Brain Boost",
        "rating": 1,
        "description": "Не отличается от классического вкуса. Привкус солода."
    },
    {
        "id": 177,
        "brand": "Jaguar",
        "flavor": "Funk",
        "rating": 2,
        "description": "Посредственный тропический энергетик. Заявленные вкусы ананаса и манго не выделяются."
    },
    {
        "id": 178,
        "brand": "Bombbar",
        "flavor": "Grapefruit",
        "rating": 3,
        "description": "В меру насыщенный вкус грейпфрута. Нет перебора ни с горчинкой, ни с кислинкой, ни со сладостью."
    },
    {
        "id": 179,
        "brand": "Jaguar",
        "flavor": "Cult",
        "rating": 2,
        "description": "Посредственный ягодный энергетик. Вкус дешёвого ягодного леденца."
    },
    {
        "id": 180,
        "brand": "WK UP",
        "flavor": "Berry Mix",
        "rating": 3,
        "description": "Нотки красных ягод. Не приторный. Пьётся как газированная вода с ягодным соком."
    },
    {
        "id": 181,
        "brand": "WK UP",
        "flavor": "Original",
        "rating": 2,
        "description": "Блеклый классический вкус энергетика. Ощущаются подсластители."
    },
    {
        "id": 182,
        "brand": "Free Masai",
        "flavor": "Exotic Energy",
        "rating": 4,
        "description": "Вкусный, насыщенный, шипучий ананасовый напиток. Маракуйя и манго на втором плане."
    },
    {
        "id": 183,
        "brand": "Free Masai",
        "flavor": "Tropical Fruits",
        "rating": 3,
        "description": "Самый обыкновенный тропический энергетик."
    },
    {
        "id": 184,
        "brand": "Black Rocket",
        "flavor": "Original",
        "rating": 2,
        "description": "Классический вкус дешёвого энергетика. Будто разбавлен водой."
    },
    {
        "id": 185,
        "brand": "Jaguar",
        "flavor": "Wild",
        "rating": 3,
        "description": "Типичный дешёвый энергетик с тропическим вкусом."
    },
    {
        "id": 186,
        "brand": "Black Rocket",
        "flavor": "Mango-Apricot",
        "rating": 2,
        "description": "Ни манго, ни абрикоса. Вкус дешёвого тропического энергетика. Будто разбавлен водой."
    },
    {
        "id": 187,
        "brand": "Free Masai",
        "flavor": "Fury Bull",
        "rating": 3,
        "description": "Смесь классических «Flash Up» и «Red Bull»."
    },
    {
        "id": 188,
        "brand": "Adrenaline Rush",
        "flavor": "VitPower Личи",
        "rating": 2,
        "description": "Неплохие вкус и аромат личи. Сильно чувствуются подсластители."
    },
    {
        "id": 189,
        "brand": "Monster Energy",
        "flavor": "Ultra Rosa",
        "rating": 4,
        "description": "Мягкий вкус то ли клубники, то ли чего-то цветочного. Лёгкие сладость и кислинка."
    },
    {
        "id": 190,
        "brand": "Rockstar",
        "flavor": "Blueberry Pomegranate Acai",
        "rating": 2,
        "description": "Очень сладкий. Специфичное послевкусие ягод асаи."
    },
    {
        "id": 191,
        "brand": "Double Pull",
        "flavor": "Mojito",
        "rating": 2,
        "description": "Посредственный вкус мохито. «Double Pull Original» вкуснее."
    },
    {
        "id": 192,
        "brand": "Flash Up",
        "flavor": "Raspberry",
        "rating": 2,
        "description": "Плоский вкус несвежей малины. «Tornado Energy Razzberry» вкуснее."
    },
    {
        "id": 193,
        "brand": "Monster Energy",
        "flavor": "Reserve Watermelon",
        "rating": 3,
        "description": "Неплохой вкус арбуза, но ничего выдающегося. Не такой искусственный как в «Ultra Watermelon»."
    },
    {
        "id": 194,
        "brand": "Red Bull",
        "flavor": "Winter Edition Pear Cinnamon",
        "rating": 4,
        "description": "Очень приятный вкус спелой грушевой мякоти, лёгкие нотки корицы."
    },
    {
        "id": 195,
        "brand": "Free Masai",
        "flavor": "Red Energy",
        "rating": 3,
        "description": "Очень насыщенный, но средненький по качеству вкус граната."
    },
    {
        "id": 196,
        "brand": "Volt Energy",
        "flavor": "Cherry Cola",
        "rating": 1,
        "description": "Вкус дешёвого мармелада со вкусом колы. Химозные вишнёвые нотки. Наполовину на аспартаме."
    },
    {
        "id": 197,
        "brand": "Volt Energy",
        "flavor": "Coconut Mango",
        "rating": 1,
        "description": "Типичные дешёвые неприятные вкусы кокоса и манго. Наполовину на аспартаме."
    },
    {
        "id": 198,
        "brand": "Red Bull",
        "flavor": "Blue Edition Blueberry",
        "rating": 3,
        "description": "Средненький вкус черники. Кислинка доминирует над сладостью."
    },
    {
        "id": 199,
        "brand": "Alligator",
        "flavor": "Original",
        "rating": 2,
        "description": "Менее насыщенный и менее газированный «Flash Up»."
    },
    {
        "id": 200,
        "brand": "Alligator",
        "flavor": "Exotic",
        "rating": 1,
        "description": "Мерзкий вкус кокоса, словно дешёвая залежалая кокосовая конфета. То же самое и с манго."
    },
    {
        "id": 201,
        "brand": "HOT CAT",
        "flavor": "Coconut Vanilla",
        "rating": 1,
        "description": "Посредственный вкус, мало газов, наполовину на аспартаме."
    },
    {
        "id": 202,
        "brand": "HOT CAT",
        "flavor": "Lychee Coconut",
        "rating": 1,
        "description": "Посредственный вкус, мало газов, наполовину на аспартаме."
    },
    {
        "id": 203,
        "brand": "Adrenaline Rush",
        "flavor": "Summer Energy Гуанабана-Лайм",
        "rating": 3,
        "description": "Кисловато-сливочный, слегка экзотичный вкус. Наполовину на подсластителях."
    },
    {
        "id": 204,
        "brand": "Jaguar",
        "flavor": "Free",
        "rating": 3,
        "description": "Классический вкус энергетика. На удивление — подсластители не ощущаются. Немного не хватает газов."
    },
    {
        "id": 205,
        "brand": "Jaguar",
        "flavor": "Live",
        "rating": 2,
        "description": "Вкус разбавленного водой классического энергетика с неприятными травяными нотками."
    },
    {
        "id": 206,
        "brand": "Buzz",
        "flavor": "Original",
        "rating": 3,
        "description": "Немного менее кислый «Flash Up Energy»."
    },
    {
        "id": 207,
        "brand": "Buzz",
        "flavor": "Berry",
        "rating": 3,
        "description": "Смесь вкусов классического и ягодного энергетиков. Кисленький."
    },
    {
        "id": 208,
        "brand": "Lit Energy",
        "flavor": "Blueberry",
        "rating": 3,
        "description": "Ненавязчивый вкус черники. Слегка сладкий, практически не кислый. Словно домашний черничный компот."
    },
    {
        "id": 209,
        "brand": "Lit Energy",
        "flavor": "Mango Coconut",
        "rating": 3,
        "description": "В отличии от большинства напитков с этим вкусом — на удивление не мерзкий. Доминирует манго. Не слишком сладкий, практически не кислый."
    }
];

(() => {
    const sortIcon = document.createElement("img");
    sortIcon.src = "static/images/sort.svg";
    sortIcon.width = 16;
    sortIcon.height = 16;
    sortIcon.style.marginLeft = "8px";

    const thBrand = document.createElement("th");
    thBrand.style.cursor = "pointer";
    thBrand.append("Бренд", sortIcon.cloneNode());

    const thFlavor = document.createElement("th");
    thFlavor.innerHTML = "Вкус";

    const thRating = document.createElement("th");
    thRating.style.width = "10%";
    thRating.style.cursor = "pointer";
    thRating.append("Оценка", sortIcon.cloneNode());

    const thDescription = document.createElement("th");
    thDescription.innerHTML = "Описание";

    const thead = document.createElement("thead");
    thead.classList.add("text-center");
    const theadRow = thead.insertRow();
    theadRow.append(thBrand, thFlavor, thRating, thDescription);

    const tbody = document.createElement("tbody");
    const ratingMapping = new Map([
        [1, "⭐"],
        [2, "⭐⭐"],
        [3, "⭐⭐⭐"],
        [4, "⭐⭐⭐⭐"],
        [5, "⭐⭐⭐⭐⭐"]
    ]);

    for (const record of db) {
        const row = tbody.insertRow();

        row.insertCell().innerHTML = record.brand;
        row.insertCell().innerHTML = record.flavor;

        const ratingCell = row.insertCell();
        ratingCell.dataset.rating = record.rating;
        ratingCell.style.textAlign = "center";
        ratingCell.innerHTML = ratingMapping.get(record.rating);

        row.insertCell().innerHTML = record.description;
    }

    const rows = [...tbody.children];
    let rowsSortedByBrand = false;
    let rowsSortedByRating = false;

    thBrand.addEventListener("click", () => {
        if (rowsSortedByBrand) {
            rows.reverse();
        } else {
            rows.sort((a, b) => a.children[0].innerHTML.localeCompare(b.children[0].innerHTML));
        }
        tbody.replaceChildren(...rows);
        rowsSortedByBrand = true;
        rowsSortedByRating = false;
    });

    thRating.addEventListener("click", () => {
        if (rowsSortedByRating) {
            rows.reverse();
        } else {
            rows.sort((a, b) => b.children[2].dataset.rating - a.children[2].dataset.rating);
        }
        tbody.replaceChildren(...rows);
        rowsSortedByBrand = false;
        rowsSortedByRating = true;
    });

    const table = document.createElement("table");
    table.classList.add("table", "table-striped", "table-bordered", "align-middle");
    table.append(thead, tbody);
    document.querySelector("main").append(table);
})();
