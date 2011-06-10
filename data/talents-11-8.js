$WowheadTalentCalculator.registerClass(11, [
{
	n: 'Баланс',
	color: '#FFB81A',
	role: 8,
	mastery: {
		description: 'Обращается в мудрого совуха, и, балансируя между силами тайной магии и магии природы, уничтожает врагов на расстоянии.',
		spells: [
			{id:78674,name:'Звездный поток',icon:'spell_arcane_arcane03'},
			{id:16913,name:'Гнев луны',icon:'spell_nature_moonglow'}
		],
		rating: [
			{id:77492,name:'Полное затмение',description:'<!--sp77492:0-->Повышает дополнительный урон от способности "Затмение" на 16%. Каждое очко искусности увеличивает урон дополнительно на 2.0%.<!--sp77492-->'}
		]
	},
	icon: 'spell_nature_starfall',
	t: [
	{
		i: 8359,
		n: 'Милость природы',
		m: 3,
		s: [16880,61345,61346],
		d: [
			'После произнесения заклинаний "Лунный огонь", "Восстановление" или "Рой насекомых" ваша скорость произнесения заклинаний повышается на 5% на 15 сек. Время восстановления эффекта – 1 мин. При наступлении лунного или солнечного затмения заклинание "Милость природы" мгновенно восстанавливается.',
			'После произнесения заклинаний "Лунный огонь", "Восстановление" или "Рой насекомых" ваша скорость произнесения заклинаний повышается на 10% на 15 сек. Время восстановления эффекта – 1 мин. При наступлении лунного или солнечного затмения заклинание "Милость природы" мгновенно восстанавливается.',
			'После произнесения заклинаний "Лунный огонь", "Восстановление" или "Рой насекомых" ваша скорость произнесения заклинаний повышается на 15% на 15 сек. Время восстановления эффекта – 1 мин. При наступлении лунного или солнечного затмения заклинание "Милость природы" мгновенно восстанавливается.'
		],
		x: 0,
		y: 0
	},
	{
		i: 8349,
		n: 'Звездный гнев',
		m: 3,
		s: [16814,16815,16816],
		d: [
			'Сокращает время произнесения заклинаний "Гнев" и "Звездный огонь" на 0.15 сек.',
			'Сокращает время произнесения заклинаний "Гнев" и "Звездный огонь" на 0.25 сек.',
			'Сокращает время произнесения заклинаний "Гнев" и "Звездный огонь" на 0 сек.'
		],
		x: 1,
		y: 0
	},
	{
		i: 11281,
		n: 'Величие Природы',
		m: 2,
		s: [35363,35364],
		d: [
			'Повышает вероятность критического эффекта ваших заклинаний 2%.',
			'Повышает вероятность критического эффекта ваших заклинаний 4%.'
		],
		j: [
			{holsplcritstrkpct:2,firsplcritstrkpct:2,natsplcritstrkpct:2,frosplcritstrkpct:2,shasplcritstrkpct:2,arcsplcritstrkpct:2},
			{holsplcritstrkpct:4,firsplcritstrkpct:4,natsplcritstrkpct:4,frosplcritstrkpct:4,shasplcritstrkpct:4,arcsplcritstrkpct:4}
		],
		x: 2,
		y: 0
	},
	{
		i: 11284,
		n: 'Сотворение',
		m: 3,
		s: [57810,57811,57812],
		d: [
			'Увеличивает объем здоровья, восстанавливаемого периодическими заклинаниями и заклинанием "Быстрое восстановление", на 2%, а также продлевает действие эффектов "Лунный огонь" и "Рой насекомых" на 2 сек.',
			'Увеличивает объем здоровья, восстанавливаемого периодическими заклинаниями и заклинанием "Быстрое восстановление", на 4%, а также продлевает действие эффектов "Лунный огонь" и "Рой насекомых" на 4 сек.',
			'Увеличивает объем здоровья, восстанавливаемого периодическими заклинаниями и заклинанием "Быстрое восстановление", на 6%, а также продлевает действие эффектов "Лунный огонь" и "Рой насекомых" на 6 сек.'
		],
		x: 0,
		y: 1
	},
	{
		i: 8353,
		n: 'Лунное сияние',
		m: 3,
		s: [16845,16846,16847],
		d: [
			'Снижает затраты маны на наносящие урон и исцеляющие заклинания на 3%.',
			'Снижает затраты маны на наносящие урон и исцеляющие заклинания на 6%.',
			'Снижает затраты маны на наносящие урон и исцеляющие заклинания на 9%.'
		],
		x: 1,
		y: 1
	},
	{
		i: 8383,
		n: 'Баланс сил',
		m: 2,
		s: [33592,33596],
		d: [
			'Увеличивает урон от ваших заклинаний тайной магии и сил природы на 1%, а рейтинг меткости заклинаний дополнительно на 50% от бонуса духа, получаемого за счет предметов и эффектов.',
			'Увеличивает урон от ваших заклинаний тайной магии и сил природы на 2%, а рейтинг меткости заклинаний дополнительно на 100% от бонуса духа, получаемого за счет предметов и эффектов.'
		],
		j: [
			{natdmgpct:1,arcdmgpct:1,splhitrtng:[50/100,'percentOf','spi']},
			{natdmgpct:2,arcdmgpct:2,splhitrtng:[100/100,'percentOf','spi']}
		],
		x: 2,
		y: 1
	},
	{
		i: 8389,
		n: 'Эйфория',
		m: 2,
		s: [81061,81062],
		d: [
			'При нанесении урона заклинаниями "Гнев" и "Звездный огонь" в перерыве между затмениями вы с вероятностью 12% можете получить за использование этих заклинаний в два раза больше лунной или солнечной энергии.<br /><br />При наступлении солнечного или лунного затмения вы мгновенно восполняете 8% своего запаса маны.',
			'При нанесении урона заклинаниями "Гнев" и "Звездный огонь" в перерыве между затмениями вы с вероятностью 24% можете получить за использование этих заклинаний в два раза больше лунной или солнечной энергии.<br /><br />При наступлении солнечного или лунного затмения вы мгновенно восполняете 16% своего запаса маны.'
		],
		x: 0,
		y: 2
	},
	{
		i: 11278,
		n: 'Облик лунного совуха',
		m: 1,
		s: [24858],
		d: [
			'Друид превращается в лунного совуха. В этом облике урон от его заклинаний тайной магии и сил природы возрастает на 10%, а получаемый урон уменьшается на 15%. Скорость произнесения заклинаний участниками группы или рейда возрастает на 5%. В облике лунного совуха нельзя произносить исцеляющие и воскрешающие заклинания.<br /><br />Смена облика освобождает заклинателя от эффектов сковывания.'
		],
		t: ['13% от базовой Мана<br />Мгновенное действие'],
		x: 1,
		y: 2
	},
	{
		i: 11282,
		n: 'Тайфун',
		m: 1,
		s: [50516],
		d: [
			'Вызов сильнейшего тайфуна, который наносит <!--pts2-->1298<!----> ед. урона от сил природы всем противникам в пределах 30 м перед заклинателем, отбрасывает их назад и вызывает головокружение на 6 сек.'
		],
		t: ['<table width="100%"><tr><td>16% от базовой Мана</td><th>Радиус действия: 30 м</th></tr></table><table width="100%"><tr><td>Мгновенное действие</td><th>Восстановление: 20 сек.</th></tr></table>'],
		x: 2,
		y: 2
	},
	{
		i: 8381,
		n: 'Падающие звезды',
		m: 2,
		s: [93398,93399],
		d: [
			'Нанесение урона заклинаниями "Лунный огонь" или "Рой насекомых" с вероятностью 2% завершит восстановление заклинания "Звездный поток" и сократит время его произнесения на 100%. Время действия – 12 сек.',
			'Нанесение урона заклинаниями "Лунный огонь" или "Рой насекомых" с вероятностью 4% завершит восстановление заклинания "Звездный поток" и сократит время его произнесения на 100%. Время действия – 12 сек.'
		],
		x: 3,
		y: 2
	},
	{
		i: 8391,
		n: 'Бешенство совуха',
		m: 3,
		s: [48389,48392,48393],
		d: [
			'Будучи атакованным в облике лунного совуха, вы с вероятностью 5% можете впасть в бешенство. При этом наносимый урон увеличивается на 10%, исчезает задержка произнесения заклинаний категории "Баланс" при получении урона. Время действия – 10 сек.',
			'Будучи атакованным в облике лунного совуха, вы с вероятностью 10% можете впасть в бешенство. При этом наносимый урон увеличивается на 10%, исчезает задержка произнесения заклинаний категории "Баланс" при получении урона. Время действия – 10 сек.',
			'Будучи атакованным в облике лунного совуха, вы с вероятностью 15% можете впасть в бешенство. При этом наносимый урон увеличивается на 10%, исчезает задержка произнесения заклинаний категории "Баланс" при получении урона. Время действия – 10 сек.'
		],
		x: 1,
		y: 3,
		r: [7,1]
	},
	{
		i: 8379,
		n: 'Крепкий ветер',
		m: 2,
		s: [48488,48514],
		d: [
			'Увеличивает урон от заклинаний "Ураган" и "Тайфун" на 15%. Увеличивает дальность действия заклинания "Смерч" на 2 м.',
			'Увеличивает урон от заклинаний "Ураган" и "Тайфун" на 30%. Увеличивает дальность действия заклинания "Смерч" на 4 м.'
		],
		x: 2,
		y: 3,
		r: [8,1]
	},
	{
		i: 8361,
		n: 'Столп солнечного света',
		m: 1,
		s: [78675],
		d: [
			'Вы вызываете столп солнечного света, прерывая заклинания цели и вызывая у противников, находящихся внутри столпа, немоту на протяжении действия заклинания. Время действия – 10 сек.'
		],
		t: ['<table width="100%"><tr><td>18% от базовой Мана</td><th>Радиус действия: 40 м</th></tr></table><table width="100%"><tr><td>Мгновенное действие</td><th>Восстановление: 1 мин</th></tr></table>'],
		x: 3,
		y: 3
	},
	{
		i: 12149,
		n: 'Задумчивость',
		m: 2,
		s: [33597,33599],
		d: [
			'При применении заклинания "Озарение" к себе вы дополнительно восстанавливаете 15% от вашего общего запаса маны за все время действия эффекта.',
			'При применении заклинания "Озарение" к себе вы дополнительно восстанавливаете 30% от вашего общего запаса маны за все время действия эффекта.'
		],
		x: 0,
		y: 4,
		r: [6,2]
	},
	{
		i: 8399,
		n: 'Сила Природы',
		m: 1,
		s: [33831],
		d: [
			'Призывает 3 древня, которые будут атаковать противников в течение 30 сек.'
		],
		t: ['<table width="100%"><tr><td>12% от базовой Мана</td><th>Радиус действия: 40 м</th></tr></table><table width="100%"><tr><td>Мгновенное действие</td><th>Восстановление: 3 мин</th></tr></table>'],
		x: 1,
		y: 4
	},
	{
		i: 12150,
		n: 'Солнечный огонь',
		m: 1,
		s: [93401],
		d: [
			'Во время действия эффекта "Солнечное затмение" ваше заклинание "Лунный огонь" превращается в "Солнечный огонь".'
		],
		x: 2,
		y: 4
	},
	{
		i: 11277,
		n: 'Земля и Луна',
		m: 1,
		s: [48506],
		d: [
			'Ваши заклинания "Гнев" и "Звездный огонь" накладывают на цель эффект "Земля и Луна", увеличивающий урон, получаемый ей от заклинаний, на 8% на 12 сек. Также увеличивает урон, наносимый вашими заклинаниями, на 2%.'
		],
		j: [
			{holdmgpct:2,firdmgpct:2,natdmgpct:2,frodmgpct:2,shadmgpct:2,arcdmgpct:2}
		],
		x: 3,
		y: 4
	},
	{
		i: 8403,
		n: 'Микоз',
		m: 2,
		s: [78788,78789],
		d: [
			'При гибели ваших древней или взрыве ваших диких грибов вы распространяете в радиусе 8 м "Микоз", который замедляет все цели, попавшие в область его действия, на 25%. Время действия – 20 сек.',
			'При гибели ваших древней или взрыве ваших диких грибов вы распространяете в радиусе 8 м "Микоз", который замедляет все цели, попавшие в область его действия, на 50%. Время действия – 20 сек.'
		],
		x: 1,
		y: 5,
		r: [14,1]
	},
	{
		i: 8393,
		n: 'Лунный поток',
		m: 3,
		s: [33603,33604,33605],
		d: [
			'При произнесении заклинания "Лунный огонь" вы вызываете эффект "Лунный поток". Он увеличивает прямой урон, наносимый заклинанием "Лунный огонь", на 15% и снижает затраты маны на его произнесение на 10%. Действие эффекта "Лунный поток" обновляется и усиливается при вашем передвижении, эффект может суммироваться до 3 раз. Время действия – 3 сек.',
			'При произнесении заклинания "Лунный огонь" вы вызываете эффект "Лунный поток". Он увеличивает прямой урон, наносимый заклинанием "Лунный огонь", на 30% и снижает затраты маны на его произнесение на 20%. Действие эффекта "Лунный поток" обновляется и усиливается при вашем передвижении, эффект может суммироваться до 3 раз. Время действия – 3 сек.',
			'При произнесении заклинания "Лунный огонь" вы вызываете эффект "Лунный поток". Он увеличивает прямой урон, наносимый заклинанием "Лунный огонь", на 45% и снижает затраты маны на его произнесение на 30%. Действие эффекта "Лунный поток" обновляется и усиливается при вашем передвижении, эффект может суммироваться до 3 раз. Время действия – 3 сек.'
		],
		x: 2,
		y: 5,
		r: [15,1]
	},
	{
		i: 8405,
		n: 'Звездопад',
		m: 1,
		s: [48505],
		d: [
			'Вы обрушиваете на всех сражающихся с вами противников в радиусе 40 м от вас град звезд, каждая из которых наносит <!--pts1-->369 to 427<!----> ед. урона от тайной магии. Максимальное количество звезд – 20. Время действия – 10 сек.<br /><br />Принятие облика зверя или вызов средства передвижения прекратят действие эффекта. Любой эффект, вызывающий потерю контроля над вашим персонажем, прерывает действие звездопада.'
		],
		t: ['35% от базовой Мана<table width="100%"><tr><td>Мгновенное действие</td><th>Восстановление: 1.5 мин</th></tr></table>'],
		x: 1,
		y: 6
	}
	]
},
{
	n: 'Сила зверя',
	color: '#FF0000',
	role: 10,
	mastery: {
		description: 'Обращается в кошку, чтобы царапать и кусать врагов, заставляя истекать их кровью, или в могучего медведя, чтобы защищать союзников.',
		spells: [
			{id:33917,name:'Увечье',icon:'ability_druid_mangle2'},
			{id:84735,name:'Агрессивность',icon:'ability_druid_predatoryinstincts'},
			{id:84840,name:'Отмщение',icon:'ability_paladin_shieldofvengeance'},
			{id:87335,name:'Животный инстинкт',icon:'ability_ambush'}
		],
		rating: [
			{id:77494,name:'Дикий защитник',description:'<!--sp77494:0-->Увеличивает урон, поглощаемый способностью "Дикая защита", на 32%. Каждое очко искусности увеличивает поглощаемый урон дополнительно на 4%.<!--sp77494-->'},
			{id:77493,name:'Когти-лезвия',description:'<!--sp77493:0-->Увеличивает урон, наносимый вызывающими кровотечение способностями, на 25.04%. Каждое очко искусности увеличивает урон дополнительно на 3.1%.<!--sp77493-->'}
		]
	},
	icon: 'ability_racial_bearform',
	t: [
	{
		i: 8295,
		n: 'Звериная быстрота',
		m: 2,
		s: [17002,24866],
		d: [
			'Повышает скорость передвижения в облике кошки на 15%, а также вероятность уклонения в облике кошки или медведя на 2%.<br /><br />Кроме того, при использовании способностей "Порыв" и "Тревожный рев" вы с вероятностью 50% можете снять все затрудняющие передвижение эффекты с целей, на которые они наложены.',
			'Повышает скорость передвижения в облике кошки на 30%, а также вероятность уклонения в облике кошки или медведя на 4%.<br /><br />Кроме того, при использовании способностей "Порыв" или "Тревожный рев" вы с вероятностью 100% можете снять все затрудняющие передвижение эффекты с целей, на которые они наложены.'
		],
		x: 0,
		y: 0
	},
	{
		i: 11716,
		n: 'Свирепость',
		m: 3,
		s: [17056,17058,17059],
		d: [
			'С вероятностью 33% вы можете накопить 10 ед. ярости, когда принимаете облик медведя, и сохраняете до 33 ед. энергии, когда принимаете облик кошки. Максимальный запас маны увеличивается на 5%.',
			'С вероятностью 66% вы можете накопить 10 ед. ярости, когда принимаете облик медведя, и сохраняете до 66 ед. энергии, когда принимаете облик кошки. Максимальный запас маны увеличивается на 10%.',
			'С вероятностью 100% вы можете накопить 10 ед. ярости, когда принимаете облик медведя, и сохраняете до 100 ед. энергии, когда принимаете облик кошки. Максимальный запас маны увеличивается на 15%.'
		],
		j: [
			{mana:[5/100,'percentOf','mana']},
			{mana:[10/100,'percentOf','mana']},
			{mana:[15/100,'percentOf','mana']}
		],
		x: 1,
		y: 0
	},
	{
		i: 9026,
		n: 'Удары хищника',
		m: 2,
		s: [16972,16974],
		d: [
			'Повышает вероятность нанести критический удар способностью "Накинуться" на 25%, если она применяется к цели с более чем 80% здоровья.<br /><br />После завершающего приема с вероятностью 10% за каждый прием в серии ваше следующее заклинание сил природы, требующее времени на произнесение, будет применено мгновенно и не потребует затрат маны, если базовое время его произнесения не превышает 10 сек.',
			'Повышает вероятность нанести критический удар способностью "Накинуться" на 50%, если она применяется к цели с более чем 80% здоровья.<br /><br />После завершающего приема с вероятностью 20% за каждый прием в серии ваше следующее заклинание сил природы, требующее времени на произнесение, будет применено мгновенно и не потребует затрат маны, если базовое время его произнесения не превышает 10 сек.'
		],
		x: 2,
		y: 0
	},
	{
		i: 8760,
		n: 'Зараженные раны',
		m: 2,
		s: [48483,48484],
		d: [
			'Способностями "Полоснуть", "Накинуться", "Трепка" и "Увечье" вы наносите противнику зараженную рану. Скорость передвижения раненого противника уменьшается на 25%, скорость атаки – на 10%. Время действия – 12 сек.',
			'Способностями "Полоснуть", "Накинуться", "Трепка" и "Увечье" вы наносите противнику зараженную рану. Скорость передвижения раненого противника уменьшается на 50%, скорость атаки – на 20%. Время действия – 12 сек.'
		],
		x: 0,
		y: 1
	},
	{
		i: 8305,
		n: 'Яростные удары',
		m: 3,
		s: [48532,80552,80553],
		d: [
			'Автоматические атаки в облике кошки или медведя с вероятностью 5% позволяют друиду выполнить яростный удар, наносящий 310% урона от оружия. Эффект срабатывает не чаще чем раз в 3 сек.',
			'Автоматические атаки в облике кошки или медведя с вероятностью 10% позволяют друиду выполнить яростный удар, наносящий 310% урона от оружия. Эффект срабатывает не чаще чем раз в 3 сек.',
			'Автоматические атаки в облике кошки или медведя с вероятностью 15% позволяют друиду выполнить яростный удар, наносящий 310% урона от оружия. Эффект срабатывает не чаще чем раз в 3 сек.'
		],
		x: 1,
		y: 1
	},
	{
		i: 8761,
		n: 'Изначальное неистовство',
		m: 2,
		s: [37116,37117],
		d: [
			'С вероятностью 50% вы накапливаете дополнительно 5 ед. ярости при нанесении критического удара в облике медведя. С вероятностью 50% ваши приемы в облике кошки, нанесшие критический удар и увеличивающие длину серии, могут дополнительно увеличить длину серии приемов на 1.',
			'С вероятностью 100% вы накапливаете дополнительно 5 ед. ярости при нанесении критического удара в облике медведя. С вероятностью 100% ваши приемы в облике кошки, нанесшие критический удар и увеличивающие длину серии, могут дополнительно увеличить длину серии приемов на 1.'
		],
		x: 2,
		y: 1
	},
	{
		i: 11285,
		n: 'Звериная агрессия',
		m: 2,
		s: [16858,16859],
		d: [
			'Способность "Свирепый укус" наносит на 5% больше урона. Также при следующем применении заклинания "Волшебный огонь" (облик зверя) на цель будет наложен эффект "Волшебный огонь" (2 заряд).',
			'Способность "Свирепый укус" наносит на 10% больше урона. Также при следующем применении заклинания "Волшебный огонь" (облик зверя) на цель будет наложен эффект "Волшебный огонь" (3 заряд).'
		],
		x: 3,
		y: 1
	},
	{
		i: 8323,
		n: 'Король джунглей',
		m: 3,
		s: [48492,48494,48495],
		d: [
			'При использовании способности "Исступление" в облике медведя наносимый вами урон увеличивается на 5%, а способность "Тигриное неистовство" моментально восстанавливает 20 ед. энергии.',
			'При использовании способности "Исступление" в облике медведя наносимый вами урон увеличивается на 10%, а способность "Тигриное неистовство" моментально восстанавливает 40 ед. энергии.',
			'При использовании способности "Исступление" в облике медведя наносимый вами урон увеличивается на 15%, а способность "Тигриное неистовство" моментально восстанавливает 60 ед. энергии.'
		],
		x: 0,
		y: 2
	},
	{
		i: 8299,
		n: 'Звериный рывок',
		m: 1,
		s: [49377],
		d: [
			'Обучает способности "Звериный рывок" в обликах медведя и кошки.<br /><br />"Звериный рывок (медведь)" – стремительный рывок к противнику, обездвиживающий его на 4 сек. Восстановление – 15 сек.<br /><br />"Звериный рывок (кошка)" – прыжок за спину противника, вызывающий у него головокружение на 3 сек. Восстановление – 30 сек.'
		],
		t: ['Радиус действия: 100 м'],
		x: 1,
		y: 2
	},
	{
		i: 8301,
		n: 'Обращение в бегство',
		m: 2,
		s: [78892,78893],
		d: [
			'После применения способности "Звериный рывок" (медведь) скорость ваших атак ближнего боя повысится на 15% на 8 сек, а для следующего использования способности "Накинуться" в течение 10 сек после применения способности "Звериный рывок" (кошка) не потребуется находиться в состоянии незаметности или быть за спиной противника. Кроме того, для использования способности "Накинуться" в данных условиях потребуется на 50% меньше энергии.',
			'После применения способности "Звериный рывок" (медведь) скорость ваших атак ближнего боя повысится на 30% на 8 сек, а для следующего использования способности "Накинуться" в течение 10 сек после применения способности "Звериный рывок" (кошка) не потребуется находиться в состоянии незаметности или быть за спиной противника. Кроме того, для использования способности "Накинуться" в данных условиях потребуется на 100% меньше энергии.'
		],
		x: 2,
		y: 2,
		r: [8,1]
	},
	{
		i: 8293,
		n: 'Плотная шкура',
		m: 3,
		s: [16929,16930,16931],
		d: [
			'Увеличивает показатели брони за счет кожаных и тканевых доспехов на 4%. Кроме того, дополнительно увеличивает показатель брони в облике медведя 26% и снижает вероятность получения критического удара в ближнем бою на 2%.',
			'Увеличивает показатели брони за счет кожаных и тканевых доспехов на 7%. Кроме того, дополнительно увеличивает показатель брони в облике медведя 52% и снижает вероятность получения критического удара в ближнем бою на 4%.',
			'Увеличивает показатели брони за счет кожаных и тканевых доспехов на 10%. Кроме того, дополнительно увеличивает показатель брони в облике медведя 78% и снижает вероятность получения критического удара в ближнем бою на 6%.'
		],
		j: [
			{armor:[4/100,'forSlots',[0,2,4,7,8,9,10,11,17]],_mlecritstrkpct:-2},
			{armor:[7/100,'forSlots',[0,2,4,7,8,9,10,11,17]],_mlecritstrkpct:-4},
			{armor:[10/100,'forSlots',[0,2,4,7,8,9,10,11,17]],_mlecritstrkpct:-6}
		],
		x: 3,
		y: 2
	},
	{
		i: 8325,
		n: 'Вожак стаи',
		m: 1,
		s: [17007],
		d: [
			'В облике кошки или медведя способность "Вожак стаи" повышает вероятность нанесения критического удара всеми участниками группы или рейда в радиусе 100 м на 5%. При нанесении критического удара в ближнем бою в облике кошки или медведя вы восстанавливаете 4% общего запаса здоровья и восполняете 8% максимального запаса маны. Эффект срабатывает не чаще чем раз в 6 секунд.'
		],
		x: 1,
		y: 3
	},
	{
		i: 8307,
		n: 'Жестокий удар',
		m: 2,
		s: [16940,16941],
		d: [
			'Увеличивает длительность эффекта оглушения от ваших способностей "Оглушить" и "Наскок" на 0 сек., сокращает время восстановления способности "Оглушить" на 5 сек., а способности "Лобовая атака" – на 25 сек. Расходы маны у жертв "Лобовой атаки" возрастают на 5% на 10 сек.',
			'Увеличивает длительность эффекта оглушения от ваших способностей "Оглушить" и "Наскок" на 1 сек., сокращает время восстановления способности "Оглушить" на 10 сек., а способности "Лобовая атака" – на 50 сек. Расходы маны у жертв "Лобовой атаки" возрастают на 10% на 10 сек.'
		],
		x: 2,
		y: 3
	},
	{
		i: 8303,
		n: 'Материнский инстинкт',
		m: 2,
		s: [33872,33873],
		d: [
			'Повышает эффективность ваших исцеляющих заклинаний на величину до 50% от значения вашей ловкости, а эффективность исцеляющих заклинаний, применяемых к вам, когда вы находитесь в облике кошки, на 10%.',
			'Повышает эффективность ваших исцеляющих заклинаний на величину до 100% от значения вашей ловкости, а эффективность исцеляющих заклинаний, применяемых к вам, когда вы находитесь в облике кошки, на 20%.'
		],
		j: [
			{splheal:[50/100,'percentOf','agi']},
			{splheal:[100/100,'percentOf','agi']}
		],
		x: 3,
		y: 3
	},
	{
		i: 8335,
		n: 'Неистовство дикой природы',
		m: 2,
		s: [80316,80317],
		d: [
			'Во время действия эффектов "Тигриное неистовство" и "Берсерк" ваш текущий и максимальный запас энергии возрастают на 10 ед., а применение способностей "Исступление" и "Берсерк" мгновенно позволяет вам накопить 6 ед. ярости.',
			'Во время действия эффектов "Тигриное неистовство" и "Берсерк" ваш текущий и максимальный запас энергии возрастают на 20 ед., а применение способностей "Исступление" и "Берсерк" мгновенно позволяет вам накопить 12 ед. ярости.'
		],
		x: 0,
		y: 4,
		r: [7,3]
	},
	{
		i: 8313,
		n: 'Инстинкты выживания',
		m: 1,
		s: [61336],
		d: [
			'Уменьшает получаемый урон на 50% на 12 сек. Может применяться только в облике кошки или медведя.'
		],
		t: ['Восстановление: 3 мин'],
		x: 1,
		y: 4
	},
	{
		i: 8759,
		n: 'Нескончаемая резня',
		m: 2,
		s: [80314,80315],
		d: [
			'Увеличивает время действия эффекта "Глубокая рана" на 3 сек. Увеличивает время действия способности "Дикий рев" и "Смять" на 4 сек.',
			'Увеличивает время действия эффекта "Глубокая рана" на 6 сек. Увеличивает время действия способности "Дикий рев" и "Смять" на 8 сек.'
		],
		x: 2,
		y: 4
	},
	{
		i: 8758,
		n: 'Безусловный рефлекс',
		m: 2,
		s: [57878,57880],
		d: [
			'В облике медведя уменьшает получаемый урон на 6% и повышает вероятность уклонения от ударов на 3%, при этом каждый раз, когда вы уклоняетесь от атаки, вы накапливаете 1 ед. ярости.',
			'В облике медведя уменьшает получаемый урон на 12% и повышает вероятность уклонения от ударов на 6%, при этом каждый раз, когда вы уклоняетесь от атаки, вы накапливаете 3 ед. ярости.'
		],
		j: [
			{dodgepct:[3,'forStance','16'],_mledmgpct:[-6,'forStance','16'],_rgddmgpct:[-6,'forStance','16'],_holdmgpct:[-6,'forStance','16'],_firdmgpct:[-6,'forStance','16'],_natdmgpct:[-6,'forStance','16'],_frodmgpct:[-6,'forStance','16'],_shadmgpct:[-6,'forStance','16'],_arcdmgpct:[-6,'forStance','16']},
			{dodgepct:[6,'forStance','16'],_mledmgpct:[-12,'forStance','16'],_rgddmgpct:[-12,'forStance','16'],_holdmgpct:[-12,'forStance','16'],_firdmgpct:[-12,'forStance','16'],_natdmgpct:[-12,'forStance','16'],_frodmgpct:[-12,'forStance','16'],_shadmgpct:[-12,'forStance','16'],_arcdmgpct:[-12,'forStance','16']}
		],
		x: 3,
		y: 4
	},
	{
		i: 8341,
		n: 'Кровавый пир',
		m: 2,
		s: [80318,80319],
		d: [
			'Применив "Свирепый укус" к цели с уровнем здоровья не более 25%, вы с вероятностью 50% обновите время действия эффекта "Разорвать" на эту цель.',
			'Применив "Свирепый укус" к цели с уровнем здоровья не более 25%, вы с вероятностью 100% обновите время действия эффекта "Разорвать" на эту цель.'
		],
		x: 0,
		y: 5
	},
	{
		i: 8343,
		n: 'Рви и терзай',
		m: 3,
		s: [48432,48433,48434],
		d: [
			'Если на противника действует эффект кровотечения, урон, наносимый ему способностями "Трепка" и "Полоснуть", увеличивается на 7%, а вероятность нанести ему критический удар способностью "Свирепый укус" повышается на 8%.',
			'Если на противника действует эффект кровотечения, урон, наносимый ему способностями "Трепка" и "Полоснуть", увеличивается на 13%, а вероятность нанести ему критический удар способностью "Свирепый укус" повышается на 17%.',
			'Если на противника действует эффект кровотечения, урон, наносимый ему способностями "Трепка" и "Полоснуть", увеличивается на 20%, а вероятность нанести ему критический удар способностью "Свирепый укус" повышается на 25%.'
		],
		x: 1,
		y: 5
	},
	{
		i: 8319,
		n: 'Смять',
		m: 1,
		s: [80313],
		d: [
			'Наносит 80% урона от оружия и дополнительно (<!--pts3:1-->450<!----> * 80 / 100) ед. урона за каждый заряд эффекта "Растерзать" на цели. Повышает вероятность нанесения критического удара в ближнем бою на 3% за каждый поглощенный заряд эффекта "Растерзать" на 10 сек.'
		],
		t: ['<table width="100%"><tr><td>15 Ярость</td><th>Дистанция ближнего боя</th></tr></table>Мгновенное действие<!--?80313:35:85:85:494:0:1000-->','Требуется: Облик медведя'],
		x: 2,
		y: 5,
		r: [19,3]
	},
	{
		i: 8347,
		n: 'Берсерк',
		m: 1,
		s: [50334],
		d: [
			'Нанесение периодического урона способностью "Растерзать" с вероятностью 50% мгновенно завершает восстановление способности "Увечье" (медведь) и позволяет применить ее без затрат ярости. <br /><br />Кроме того, в состоянии берсерка способность "Увечье" (медведь) поражает до 3 противников и не требует времени на восстановление, а затраты энергии на способности, доступные в облике кошки, снижаются на 50%. Время действия – 15 сек. В состоянии "Берсерк" нельзя использовать "Тигриное неистовство".'
		],
		t: ['Восстановление: 3 мин'],
		x: 1,
		y: 6
	}
	]
},
{
	n: 'Исцеление',
	color: '#4D80FF',
	role: 4,
	mastery: {
		description: 'Использует целительные заклинания периодического действия, чтобы поддерживать союзников. Может обратиться в дерево, чтобы лечить еще эффективнее.',
		spells: [
			{id:18562,name:'Быстрое восстановление',icon:'inv_relics_idolofrejuvenation'},
			{id:85101,name:'Медитация',icon:'spell_nature_sleep'},
			{id:87305,name:'Дар природы',icon:'spell_nature_spiritarmor'},
			{id:96429,name:'Распутывание',icon:'ability_hunter_animalhandler'}
		],
		rating: [
			{id:77495,name:'Симбиоз',description:'<!--sp77495:0-->Повышает эффективность исцеляющих заклинаний на 11.6% для целей, на которых уже действуют ваши заклинания периодического лечения. Каждое очко искусности усиливает эффект исцеления дополнительно на 1.45%.<!--sp77495-->'}
		]
	},
	icon: 'spell_nature_healingtouch',
	t: [
	{
		i: 8227,
		n: 'Благословление рощи',
		m: 2,
		s: [78784,78785],
		d: [
			'Усиливает целительный эффект заклинания "Омоложение" на 2% и увеличивает прямой урон от заклинания "Лунный огонь" на 3%',
			'Усиливает целительный эффект заклинания "Омоложение" на 4% и увеличивает прямой урон от заклинания "Лунный огонь" на 6%'
		],
		x: 0,
		y: 0
	},
	{
		i: 8237,
		n: 'Прирожденный оборотень',
		m: 2,
		s: [16833,16834],
		d: [
			'Снижает затраты маны на смену облика на 10%. Продлевает время действия заклинания "Облик Древа жизни" на 3 сек.',
			'Снижает затраты маны на смену облика на 20%. Продлевает время действия заклинания "Облик Древа жизни" на 6 сек.'
		],
		x: 1,
		y: 0
	},
	{
		i: 11699,
		n: 'Дитя природы',
		m: 2,
		s: [17069,17070],
		d: [
			'Сокращает время произнесения заклинаний "Целительное прикосновение" и "Покровительство Природы" на 0.25 сек.',
			'Сокращает время произнесения заклинаний "Целительное прикосновение" и "Покровительство Природы" на 0.50 сек.'
		],
		x: 2,
		y: 0
	},
	{
		i: 11715,
		n: 'Сердце дикой природы',
		m: 3,
		s: [17003,17004,17005],
		d: [
			'Повышает интеллект на 2%. Также повышает выносливость в облике медведя на 2%, а в облике кошки – силу атаки на 3%.',
			'Повышает интеллект на 4%. Также повышает выносливость в облике медведя на 4%, а в облике кошки – силу атаки на 7%.',
			'Повышает интеллект на 6%. Также повышает выносливость в облике медведя на 6%, а в облике кошки – силу атаки на 10%.'
		],
		j: [
			{int:[2/100,'percentOf','int']},
			{int:[4/100,'percentOf','int']},
			{int:[6/100,'percentOf','int']}
		],
		x: 3,
		y: 0
	},
	{
		i: 11279,
		n: 'Терпеливость',
		m: 3,
		s: [78734,78735,78736],
		d: [
			'Снижает получаемый урон от заклинаний на 2%.',
			'Снижает получаемый урон от заклинаний на 4%.',
			'Снижает получаемый урон от заклинаний на 6%.'
		],
		j: [
			{_holdmgpct:-2,_firdmgpct:-2,_natdmgpct:-2,_frodmgpct:-2,_shadmgpct:-2,_arcdmgpct:-2},
			{_holdmgpct:-4,_firdmgpct:-4,_natdmgpct:-4,_frodmgpct:-4,_shadmgpct:-4,_arcdmgpct:-4},
			{_holdmgpct:-6,_firdmgpct:-6,_natdmgpct:-6,_frodmgpct:-6,_shadmgpct:-6,_arcdmgpct:-6}
		],
		x: 0,
		y: 1
	},
	{
		i: 8277,
		n: 'Искусный оборотень',
		m: 1,
		s: [48411],
		d: [
			'Когда друид принимает один из обликов, талант вызывает следующие эффекты:<br /><br />Облик медведя – физический урон увеличивается на 4%.<br /><br />Облик кошки – вероятность критического удара повышается на 4%.<br /><br />Облик лунного совуха – урон от заклинаний увеличивается на 4%.<br /><br />Древо Жизни или обычный облик – исцеляющие заклинания восстанавливают на 4% больше здоровья.'
		],
		j: [
			{healpct:4}
		],
		x: 1,
		y: 1,
		r: [1,2]
	},
	{
		i: 8245,
		n: 'Улучшенное омоложение',
		m: 3,
		s: [17111,17112,17113],
		d: [
			'Повышает эффективность заклинаний "Омоложение" и "Быстрое восстановление" на 5%.',
			'Повышает эффективность заклинаний "Омоложение" и "Быстрое восстановление" на 10%.',
			'Повышает эффективность заклинаний "Омоложение" и "Быстрое восстановление" на 15%.'
		],
		x: 2,
		y: 1
	},
	{
		i: 8253,
		n: 'Семя жизни',
		m: 3,
		s: [48496,48499,48500],
		d: [
			'В случае критического эффекта ваших заклинаний "Быстрое восстановление", "Восстановление", "Покровительство Природы" или "Целительное прикосновение" вы наделяете цель семенем жизни. Когда цель будет атакована в следующий раз, семя жизни восстановит ей 10% от объема здоровья, восстановленного критическим эффектом перечисленных заклинаний. Время действия – 15 сек.',
			'В случае критического эффекта ваших заклинаний "Быстрое восстановление", "Восстановление", "Покровительство Природы" или "Целительное прикосновение" вы наделяете цель семенем жизни. Когда цель будет атакована в следующий раз, семя жизни восстановит ей 20% от объема здоровья, восстановленного критическим эффектом перечисленных заклинаний. Время действия – 15 сек.',
			'В случае критического эффекта ваших заклинаний "Быстрое восстановление", "Восстановление", "Покровительство Природы" или "Целительное прикосновение" вы наделяете цель семенем жизни. Когда цель будет атакована в следующий раз, семя жизни восстановит ей 30% от объема здоровья, восстановленного критическим эффектом перечисленных заклинаний. Время действия – 15 сек.'
		],
		x: 0,
		y: 2
	},
	{
		i: 8269,
		n: 'Ободрение',
		m: 2,
		s: [48539,48544],
		d: [
			'Эффекты периодического исцеления заклинаний "Омоложение" и "Жизнецвет" с вероятностью 20% мгновенно восполняют 1% вашего общего запаса маны. Эффект срабатывает не чаще чем раз в 12 сек.<br /><br />Кроме того, при наложении или обновлении эффекта "Жизнецвет" вы вызываете эффект "Восполнение".<br /><br />Этот эффект восстанавливает 10 участникам группы или рейда 1% их максимального запаса маны раз в 10 сек. Время действия – 15 сек.',
			'Эффекты периодического исцеления заклинаний "Омоложение" и "Жизнецвет" с вероятностью 20% мгновенно восполняют 2% вашего общего запаса маны. Эффект срабатывает не чаще чем раз в 12 сек.<br /><br />Кроме того, при наложении или обновлении эффекта "Жизнецвет" вы вызываете эффект "Восполнение".<br /><br />Этот эффект восстанавливает 10 участникам группы или рейда 1% их максимального запаса маны раз в 10 сек. Время действия – 15 сек.'
		],
		x: 1,
		y: 2
	},
	{
		i: 8249,
		n: 'Природная стремительность',
		m: 1,
		s: [17116],
		d: [
			'При использовании следующее заклинание сил природы будет применено мгновенно, если базовое время его произнесения не превышает 10 сек. Если это заклинание исцеления, то количество восполняемого им здоровья увеличится на 50%.'
		],
		t: ['Восстановление: 3 мин'],
		x: 2,
		y: 2
	},
	{
		i: 11712,
		n: 'Гнев Ярости Бури',
		m: 2,
		s: [17104,24943],
		d: [
			'Снижает затраты маны на заклинание "Гнев" на 50%. В течение 8 сек. после нанесения урона заклинанием "Гнев" следующее заклинание "Звездный огонь" с вероятностью 6% будет произнесено мгновенно.',
			'Снижает затраты маны на заклинание "Гнев" на 100%. В течение 8 сек. после нанесения урона заклинанием "Гнев" следующее заклинание "Звездный огонь" с вероятностью 12% будет произнесено мгновенно.'
		],
		x: 3,
		y: 2
	},
	{
		i: 8255,
		n: 'Щедрость природы',
		m: 3,
		s: [17074,17075,17076],
		d: [
			'Повышает вероятность критического эффекта заклинания "Восстановление" на 20%.<br /><br />Если "Омоложение" действует на три цели или более, время произнесения следующего заклинания "Покровительство Природы" сокращается на 10%.',
			'Повышает вероятность критического эффекта заклинания "Восстановление" на 40%.<br /><br />Если "Омоложение" действует на три цели или более, время произнесения следующего заклинания "Покровительство Природы" сокращается на 20%.',
			'Повышает вероятность критического эффекта заклинания "Восстановление" на 60%.<br /><br />Если "Омоложение" действует на три цели или более, время произнесения следующего заклинания "Покровительство Природы" сокращается на 30%.'
		],
		x: 1,
		y: 3
	},
	{
		i: 8762,
		n: 'Воодушевляющее прикосновение',
		m: 2,
		s: [33879,33880],
		d: [
			'Увеличивает объем здоровья, восстанавливаемого заклинаниями "Целительное прикосновение", "Восстановление" и "Покровительство Природы", на 5%. Также эти заклинания с вероятностью 50% обновляют время действия заклинания "Жизнецвет".',
			'Увеличивает объем здоровья, восстанавливаемого заклинаниями "Целительное прикосновение", "Восстановление" и "Покровительство Природы", на 10%. Также эти заклинания с вероятностью 100% обновляют время действия заклинания "Жизнецвет".'
		],
		x: 2,
		y: 3
	},
	{
		i: 12146,
		n: 'Дар Малфуриона',
		m: 2,
		s: [92363,92364],
		d: [
			'При исцелении с помощью заклинания "Жизнецвет" вы с вероятностью 2% вызовете эффект "Знамение ясности".<br /><br />Кроме того, время восстановления способности "Спокойствие" снижается на 3 мин.',
			'При исцелении с помощью заклинания "Жизнецвет" вы с вероятностью 4% вызовете эффект "Знамение ясности".<br /><br />Кроме того, время восстановления способности "Спокойствие" снижается на 5 минуты.'
		],
		x: 3,
		y: 3
	},
	{
		i: 8263,
		n: 'Период цветения',
		m: 3,
		s: [34151,81274,81275],
		d: [
			'При использовании заклинания "Быстрое восстановление" вокруг цели появляется поляна, поросшая целебными растениями, которые раз в 1 сек. восполняют трем целям с наименьшим уровнем здоровья в радиусе 8 м 4% от объема здоровья, восполненного "Быстрым восстановлением". Время действия - 7 сек.',
			'При использовании заклинания "Быстрое восстановление" вокруг цели появляется поляна, поросшая целебными растениями, которые раз в 1 сек. восполняют трем целям с наименьшим уровнем здоровья в радиусе 8 м 8% от объема здоровья, восполненного "Быстрым восстановлением". Время действия - 7 сек.',
			'При использовании заклинания "Быстрое восстановление" вокруг цели появляется поляна, поросшая целебными растениями, которые раз в 1 сек. восполняют трем целям с наименьшим уровнем здоровья в радиусе 8 м 12% от объема здоровья, восполненного "Быстрым восстановлением". Время действия - 7 сек.'
		],
		x: 0,
		y: 4
	},
	{
		i: 8279,
		n: 'Буйный рост',
		m: 1,
		s: [48438],
		d: [
			'Исцеляет до 5 участников группы или рейда в радиусе 30 м от выбранной цели, восстанавливая <!--pts1:3:7-->3717<!----> ед. здоровья в течение 7 сек. Приоритет отдается наиболее тяжело раненным союзникам. Скорость восстановления здоровья постепенно снижается на протяжении времени действия заклинания.<!--sp33891:0--><!--sp33891-->'
		],
		t: ['<table width="100%"><tr><td>27% от базовой Мана</td><th>Радиус действия: 40 м</th></tr></table><table width="100%"><tr><td>Мгновенное действие</td><th>Восстановление: 8 сек.</th></tr></table><!--?48438:30:85:85:72:0:1000-->'],
		x: 1,
		y: 4
	},
	{
		i: 8763,
		n: 'Природный целитель',
		m: 1,
		s: [88423],
		d: [
			'Ваше заклинание "Снятие порчи" также рассеивает один магический эффект, наложенный на цель.'
		],
		x: 2,
		y: 4
	},
	{
		i: 8267,
		n: 'Защита природы',
		m: 2,
		s: [33881,33882],
		d: [
			'Если ваш уровень здоровья меньше или равен 50%, то при получении урона на вас с вероятностью 50% будет автоматически и без затрат маны наложен эффект "Омоложение".',
			'Если ваш уровень здоровья меньше или равен 50%, то при получении урона на вас с вероятностью 100% будет автоматически и без затрат маны наложен эффект "Омоложение".'
		],
		x: 3,
		y: 4
	},
	{
		i: 11280,
		n: 'Дар матери-земли',
		m: 3,
		s: [51179,51180,51181],
		d: [
			'Повышает эффективность заклинания "Жизнецвет" на 5%. Заклинание "Омоложение" мгновенно восполняет 5% от общего количества восстанавливаемого им здоровья.',
			'Повышает эффективность заклинания "Жизнецвет" на 10%. Заклинание "Омоложение" мгновенно восполняет 10% от общего количества восстанавливаемого им здоровья.',
			'Повышает эффективность заклинания "Жизнецвет" на 15%. Заклинание "Омоложение" мгновенно восполняет 15% от общего количества восстанавливаемого им здоровья.'
		],
		x: 0,
		y: 5
	},
	{
		i: 8265,
		n: 'Быстрое омоложение',
		m: 1,
		s: [33886],
		d: [
			'Уменьшает общее время восстановления заклинания "Омоложение" на 0 сек.'
		],
		x: 2,
		y: 5
	},
	{
		i: 8271,
		n: 'Древо Жизни',
		m: 1,
		s: [33891],
		d: [
			'Друид превращается в Древо Жизни. В этом облике количество восстанавливаемого заклинаниями здоровья увеличивается на 15%, а показатель брони повышается на 120%; вы становитесь невосприимчивы к эффектам превращения. Кроме того, в данном облике усиливаются некоторые другие ваши заклинания. Время действия – 25 сек.<br /><br />Усиливаемые заклинания: "Жизнецвет", "Буйный рост", "Восстановление", "Гнев деревьев" и "Гнев".'
		],
		t: ['6% от базовой Мана<table width="100%"><tr><td>Мгновенное действие</td><th>Восстановление: 3 мин</th></tr></table>'],
		x: 1,
		y: 6,
		r: [15,1]
	}
	]
}
]);