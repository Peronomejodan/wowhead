$WowheadTalentCalculator.registerClass(8, [
{
	n: 'Тайная магия',
	color: '#FFB81A',
	role: 8,
	mastery: {
		description: 'Управляет энергией тайной магии, повелевая временем и пространством.',
		spells: [
			{id:44425,name:'Чародейский обстрел',icon:'ability_mage_arcanebarrage'},
			{id:84671,name:'Специализация на тайной магии',icon:'spell_fire_twilightfire'}
		],
		rating: [
			{id:76547,name:'Контроль над маной',description:'<!--sp76547:0-->Увеличивает урон, наносимый вашими заклинаниями, до 12% в зависимости от оставшегося количества маны. Каждое очко искусности увеличивает урон еще на 1.5%.<!--sp76547-->'}
		]
	},
	icon: 'spell_holy_magicalsentry',
	t: [
	{
		i: 9154,
		n: 'Чародейская сосредоточенность',
		m: 3,
		s: [11213,12574,12575],
		d: [
			'Если ваше заклинание наносит урон противнику, вы с вероятностью 3% приходите в состояние "Ясность мысли". "Ясность мысли" снижает затраты маны на ваше следующее заклинание, наносящее урон, на 100%.',
			'Если ваше заклинание наносит урон противнику, вы с вероятностью 6% приходите в состояние "Ясность мысли". "Ясность мысли" снижает затраты маны на ваше следующее заклинание, наносящее урон, на 100%.',
			'Если ваше заклинание наносит урон противнику, вы с вероятностью 10% приходите в состояние "Ясность мысли". "Ясность мысли" снижает затраты маны на ваше следующее заклинание, наносящее урон, на 100%.'
		],
		x: 0,
		y: 0
	},
	{
		i: 9166,
		n: 'Улучшенная Антимагия',
		m: 2,
		s: [11255,12598],
		d: [
			'Ваше заклинание "Антимагия" также лишает противника возможности произносить заклинания на 2 сек.',
			'Ваше заклинание "Антимагия" также лишает противника возможности произносить заклинания на 4 сек.'
		],
		x: 1,
		y: 0
	},
	{
		i: 9200,
		n: 'Ветры Пустоты',
		m: 3,
		s: [44400,44402,44403],
		d: [
			'Повышает скорость произнесения заклинаний на 1%.',
			'Повышает скорость произнесения заклинаний на 2%.',
			'Повышает скорость произнесения заклинаний на 3%.'
		],
		j: [
			{splhastepct:1},
			{splhastepct:2},
			{splhastepct:3}
		],
		x: 2,
		y: 0
	},
	{
		i: 9170,
		n: 'Пытка слабых',
		m: 3,
		s: [29447,55339,55340],
		d: [
			'Увеличивает урон от заклинаний тайной магии, наносимый скованным или замедленным целям, на 2%.',
			'Увеличивает урон от заклинаний тайной магии, наносимый скованным или замедленным целям, на 4%.',
			'Увеличивает урон от заклинаний тайной магии, наносимый скованным или замедленным целям, на 6%.'
		],
		x: 0,
		y: 1
	},
	{
		i: 10864,
		n: 'Ответные чары',
		m: 2,
		s: [84722,84723],
		d: [
			'После удачного прерывания заклинания наносимый вами урон увеличивается на 5% на 8 сек.',
			'После удачного прерывания заклинания наносимый вами урон увеличивается на 10% на 8 сек.'
		],
		x: 1,
		y: 1
	},
	{
		i: 10737,
		n: 'Мощные чародейские стрелы',
		m: 2,
		s: [83513,83515],
		d: [
			'Увеличивает количество зарядов, выпускаемых вашим заклинанием "Чародейские стрелы", на 1.',
			'Увеличивает количество зарядов, выпускаемых вашим заклинанием "Чародейские стрелы", на 2.'
		],
		x: 2,
		y: 1
	},
	{
		i: 9172,
		n: 'Улучшенный скачок',
		m: 2,
		s: [31569,31570],
		d: [
			'После произнесения заклинания "Скачок" ваша скорость передвижения повышается на 35% на 3 сек.',
			'После произнесения заклинания "Скачок" ваша скорость передвижения повышается на 70% на 3 сек.'
		],
		x: 3,
		y: 1
	},
	{
		i: 9192,
		n: 'Волшебные течения',
		m: 2,
		s: [44378,44379],
		d: [
			'Сокращает время восстановления заклинаний "Величие разума", "Мощь тайной магии" и "Невидимость" на 12%, а заклинания "Прилив сил" – на 1 мин.',
			'Сокращает время восстановления заклинаний "Величие разума", "Мощь тайной магии" и "Невидимость" на 25%, а заклинания "Прилив сил" – на 2 мин.'
		],
		x: 0,
		y: 2,
		r: [8,1]
	},
	{
		i: 9174,
		n: 'Величие разума',
		m: 1,
		s: [12043],
		d: [
			'При использовании позволяет мгновенно произнести заклинание, обычное время произнесения которого меньше 10 сек.'
		],
		t: ['Восстановление: 2 мин'],
		x: 1,
		y: 2
	},
	{
		i: 9198,
		n: 'Заградительные стрелы',
		m: 2,
		s: [44404,54486],
		d: [
			'Чародейские стрелы будут создаваться каждые 0,6 секунды.',
			'Чародейские стрелы будут создаваться каждые 0,5 секунды.'
		],
		x: 2,
		y: 2,
		r: [5,2]
	},
	{
		i: 9178,
		n: 'Призматический плащ',
		m: 3,
		s: [31574,31575,54354],
		d: [
			'Уменьшает весь получаемый урон на 2% и сокращает время ухода в "Невидимость" на 1 сек.',
			'Уменьшает весь получаемый урон на 4% и сокращает время ухода в "Невидимость" на 2 сек.',
			'Уменьшает весь получаемый урон на 6% и сокращает время ухода в "Невидимость" на 3 сек.'
		],
		j: [
			{_mledmgpct:-2,_rgddmgpct:-2,_holdmgpct:-2,_firdmgpct:-2,_natdmgpct:-2,_frodmgpct:-2,_shadmgpct:-2,_arcdmgpct:-2},
			{_mledmgpct:-4,_rgddmgpct:-4,_holdmgpct:-4,_firdmgpct:-4,_natdmgpct:-4,_frodmgpct:-4,_shadmgpct:-4,_arcdmgpct:-4},
			{_mledmgpct:-6,_rgddmgpct:-6,_holdmgpct:-6,_firdmgpct:-6,_natdmgpct:-6,_frodmgpct:-6,_shadmgpct:-6,_arcdmgpct:-6}
		],
		x: 3,
		y: 2
	},
	{
		i: 9142,
		n: 'Улучшенное превращение',
		m: 2,
		s: [11210,12592],
		d: [
			'Противник, которого вы превратили в какое-либо существо, при получении урона будет оглушен на 1.5 сек. Эффект срабатывает не чаще чем раз в 10 сек.',
			'При получении урона цель, к которой применено превращающее заклинание, будет оглушена на 3 сек. Эффект срабатывает не чаще чем раз в 10 сек.'
		],
		x: 0,
		y: 3
	},
	{
		i: 10733,
		n: 'Чародейская тактика',
		m: 1,
		s: [82930],
		d: [
			'На 3% увеличивает урон, наносимый всеми участниками рейда или группы в радиусе 100 м.'
		],
		j: [
			{mledmgpct:3,rgddmgpct:3,holdmgpct:3,firdmgpct:3,natdmgpct:3,frodmgpct:3,shadmgpct:3,arcdmgpct:3}
		],
		x: 1,
		y: 3,
		r: [8,1]
	},
	{
		i: 9188,
		n: 'Колдовское поглощение',
		m: 2,
		s: [44394,44395],
		d: [
			'Если вы поглощаете урон с помощью заклинания "Щит маны" или "Магическая защита", то урон от ваших заклинаний возрастает на 10% от урона, поглощенного в течение 10 сек. Кроме того, при уничтожении щита маны все противники в радиусе 6 м отбрасываются назад на 12 м.',
			'Если вы поглощаете урон с помощью заклинания "Щит маны" или "Магическая защита", то урон от ваших заклинаний возрастает на 20% от урона, поглощенного в течение 10 сек. Кроме того, при уничтожении щита маны все противники в радиусе 6 м отбрасываются назад на 12 м.'
		],
		x: 2,
		y: 3
	},
	{
		i: 11825,
		n: 'Улучшенный чародейский взрыв',
		m: 2,
		s: [90787,90788],
		d: [
			'Сокращает общее время восстановления заклинания "Чародейский взрыв" на 0.2 сек., понижает уровень создаваемой угрозы на 40% и сокращает стоимость маны на 25%.',
			'Сокращает общее время восстановления заклинания "Чародейский взрыв" на 0.5 сек., понижает уровень создаваемой угрозы на 80% и сокращает стоимость маны на 50%.'
		],
		x: 3,
		y: 3
	},
	{
		i: 9180,
		n: 'Чародейская сила',
		m: 2,
		s: [31571,31572],
		d: [
			'На 7% повышает вероятность нанести критический урон следующими двумя заклинаниями, произносимыми в состоянии "Ясность мысли" или "Величие разума".',
			'На 15% повышает вероятность нанести критический урон следующими двумя заклинаниями, произносимыми в состоянии "Ясность мысли" или "Величие разума".'
		],
		x: 0,
		y: 4
	},
	{
		i: 9196,
		n: 'Замедление',
		m: 1,
		s: [31589],
		d: [
			'Снижает скорость передвижения цели на 60%, увеличивает время между атаками дальнего боя на 60% и время произнесения заклинаний на 30%. Время действия – 15 сек. Замедление одновременно можно применять только к одной цели.'
		],
		t: ['<table width="100%"><tr><td>12% от базовой Мана</td><th>Радиус действия: 35 м</th></tr></table>Мгновенное действие'],
		x: 1,
		y: 4
	},
	{
		i: 11367,
		n: 'Воронка Пустоты',
		m: 2,
		s: [86181,86209],
		d: [
			'С вероятностью 50% заклинание "Чародейская вспышка" накладывает эффект замедления на любую цель, которой оно наносит урон, если этот эффект еще не наложен ни на одну из целей.',
			'С вероятностью 100% заклинание "Чародейская вспышка" накладывает эффект замедления на любую цель, которой оно наносит урон, если этот эффект еще не наложен ни на одну из целей.'
		],
		x: 2,
		y: 4,
		r: [16,1]
	},
	{
		i: 10578,
		n: 'Магическая концентрация',
		m: 1,
		s: [54646],
		d: [
			'Повышает вероятность критического эффекта заклинаний цели на 3% на 30 мин. Если заклинание цели имеет критический эффект, вероятность критического эффекта ваших заклинаний также повышается на 3% на 10 сек. Эффект можно наложить только на 1 цель и нельзя наложить на себя.'
		],
		t: ['<table width="100%"><tr><td>6% от базовой Мана</td><th>Радиус действия: 30 м</th></tr></table>Мгновенное действие'],
		x: 0,
		y: 5
	},
	{
		i: 9194,
		n: 'Улучшенный самоцвет маны',
		m: 2,
		s: [31584,31585],
		d: [
			'Также увеличивает силу заклинаний на 1% от максимального запаса маны на 10 сек.',
			'Также увеличивает силу заклинаний на 2% от максимального запаса маны на 10 сек.'
		],
		x: 2,
		y: 5
	},
	{
		i: 9186,
		n: 'Мощь тайной магии',
		m: 1,
		s: [12042],
		d: [
			'При использовании увеличивает наносимый заклинаниями урон на 20%, а затраты маны на заклинания – на 10%. <!--sp56381:0--><!--sp56381-->Время действия – 15 сек.'
		],
		t: ['Восстановление: 2 мин'],
		x: 1,
		y: 6,
		r: [16,1]
	}
	]
},
{
	n: 'Огонь',
	color: '#FF0000',
	role: 8,
	mastery: {
		description: 'Испепеляет врагов огненными шарами и дыханием драконов.',
		spells: [
			{id:11366,name:'Огненная глыба',icon:'spell_fire_fireball02'},
			{id:84668,name:'Специализация на магии огня',icon:'spell_fire_fire'}
		],
		rating: [
			{id:76595,name:'Обжигание',description:'<!--sp76595:0-->Увеличивает урон от периодических эффектов, наносящих урон от огня, на 22.4%. Каждое очко искусности увеличивает урон дополнительно на 2.8%.<!--sp76595-->'}
		]
	},
	icon: 'spell_fire_firebolt02',
	t: [
	{
		i: 10545,
		n: 'Повелитель Стихий',
		m: 2,
		s: [29074,29075],
		d: [
			'Если ваше заклинание наносит критический урон, вы восполняете ману в объеме 15% от его базовой стоимости.',
			'Если ваше заклинание наносит критический урон, вы восполняете ману в объеме 30% от его базовой стоимости.'
		],
		x: 0,
		y: 0
	},
	{
		i: 10531,
		n: 'Пылающая душа',
		m: 3,
		s: [11083,84253,84254],
		d: [
			'Сокращает задержку произнесения заклинаний при получении урона на 23%.',
			'Сокращает задержку произнесения заклинаний при получении урона на 46%.',
			'Сокращает задержку произнесения заклинаний при получении урона на 70%.'
		],
		x: 1,
		y: 0
	},
	{
		i: 10523,
		n: 'Улучшенный огненный взрыв',
		m: 2,
		s: [11078,11080],
		d: [
			'Повышает вероятность критического эффекта заклинания "Огненный взрыв" на 4% и увеличивает дальность его действия на 5 м.',
			'Повышает вероятность критического эффекта заклинания "Огненный взрыв" на 8% и увеличивает дальность его действия на 10 м.'
		],
		x: 2,
		y: 0
	},
	{
		i: 10529,
		n: 'Воспламенение',
		m: 3,
		s: [11119,11120,12846],
		d: [
			'Критические удары непериодических заклинаний магии огня воспламеняют цель, нанося ей дополнительный урон в размере 13% от урона примененного заклинания в течение 4 сек.',
			'Критические удары непериодических заклинаний магии огня воспламеняют цель, нанося ей дополнительный урон в размере 26% от урона примененного заклинания в течение 4 сек.',
			'Критические удары непериодических заклинаний магии огня воспламеняют цель, нанося ей дополнительный урон в размере 40% от урона примененного заклинания в течение 4 сек.'
		],
		x: 0,
		y: 1
	},
	{
		i: 11434,
		n: 'Мощь огня',
		m: 3,
		s: [18459,18460,54734],
		d: [
			'На 1% увеличивает урон, наносимый заклинаниями огня. По истечении своего срока действия ваша "Огненная сфера" с вероятностью 33% взорвется, нанеся <!--pts1-->1134 to 1336<!----> ед. урона.',
			'На 2% увеличивает урон, наносимый заклинаниями огня. По истечении своего срока действия ваша "Огненная сфера" с вероятностью 66% взорвется, нанеся <!--pts1-->1134 to 1336<!----> ед. урона.',
			'На 3% увеличивает урон, наносимый заклинаниями огня. По истечении своего срока действия ваша "Огненная сфера" с вероятностью 100% взорвется, нанеся <!--pts1-->1134 to 1336<!----> ед. урона.'
		],
		j: [
			{firdmgpct:1},
			{firdmgpct:2},
			{firdmgpct:3}
		],
		x: 1,
		y: 1
	},
	{
		i: 10555,
		n: 'Молниеносность',
		m: 2,
		s: [31641,31642],
		d: [
			'С вероятностью 5% после получения урона от атаки ближнего или дальнего боя скорость вашего передвижения повысится на 50%. При этом рассеются все эффекты, ограничивающие передвижение. Время действия – 8 сек.',
			'С вероятностью 10% после получения урона от атаки ближнего или дальнего боя скорость вашего передвижения повысится на 50%. При этом рассеются все эффекты, ограничивающие передвижение. Время действия – 8 сек.'
		],
		x: 2,
		y: 1
	},
	{
		i: 10537,
		n: 'Сотрясение',
		m: 2,
		s: [11103,12357],
		d: [
			'Наносящие урон заклинания с вероятностью 5% мгновенно завершат восстановление заклинания "Огненный взрыв". При этом следующий "Огненный взрыв" оглушит цель на 2 сек. и распространит влияние периодических эффектов, наносящих урон от огня, на противников в радиусе 12 м.',
			'Наносящие урон заклинания с вероятностью 10% мгновенно завершат восстановление заклинания "Огненный взрыв". При этом следующий "Огненный взрыв" оглушит цель на 2 сек. и распространит влияние периодических эффектов, наносящих урон от огня, на противников в радиусе 12 м.'
		],
		x: 3,
		y: 1
	},
	{
		i: 11433,
		n: 'Прижигание',
		m: 2,
		s: [86948,86949],
		d: [
			'При получении смертельного урона вы с вероятностью 50% останетесь живы и восстановите 40% максимального запаса здоровья, однако в течение 6 сек. заклинание будет сжигать по 12% от вашего максимального запаса здоровья раз в 1.5 сек. Эффект срабатывает не чаще чем раз в минуту.',
			'При получении смертельного урона вы с вероятностью 100% останетесь живы и восстановите 40% максимального запаса здоровья, однако в течение 6 сек. заклинание будет сжигать по 12% от вашего максимального запаса здоровья раз в 1.5 сек. Эффект срабатывает не чаще чем раз в минуту.'
		],
		x: 0,
		y: 2
	},
	{
		i: 10551,
		n: 'Взрывная волна',
		m: 1,
		s: [11113],
		d: [
			'От выбранной точки расходится волна пламени, нанося всем противникам в зоне действия <!--pts1-->851 to 1003<!----> ед. урона от огня и снижая их скорость передвижения на 70% на 3 сек.'
		],
		t: ['<table width="100%"><tr><td>7% от базовой Мана</td><th>Радиус действия: 40 м</th></tr></table><table width="100%"><tr><td>Мгновенное действие</td><th>Восстановление: 15 сек.</th></tr></table><!--?11113:20:85:85:13:0:1000-->'],
		x: 1,
		y: 2
	},
	{
		i: 10573,
		n: 'Путь огня',
		m: 1,
		s: [44445],
		d: [
			'Ваши заклинания перестают вызывать "Чародейские стрелы". Вместо этого, если ваши заклинания "Огненный шар", "Стрела ледяного огня", "Ожог", "Огненная глыба" или "Огненный взрыв" наносят критический урон, с некоторой вероятностью в течение 15 сек. заклинание "Огненная глыба" можно будет произнести мгновенно и без затрат маны.'
		],
		x: 2,
		y: 2
	},
	{
		i: 10547,
		n: 'Сильный ожог',
		m: 2,
		s: [11115,11367],
		d: [
			'Снижает затраты маны на заклинание "Ожог" на 50%.',
			'Снижает затраты маны на заклинание "Ожог" на 100%.'
		],
		x: 3,
		y: 2
	},
	{
		i: 10543,
		n: 'Раскаленные щиты',
		m: 1,
		s: [11094],
		d: [
			'Сокращает общее время восстановления после произнесения заклинания "Магическая защита" на 1 сек. "Молниеносность" снимает любые замедляющие эффекты и дополнительно срабатывает при рассеивании заклинания "Магическая защита" от полученного урона.'
		],
		x: 0,
		y: 3
	},
	{
		i: 10561,
		n: 'Возгорание',
		m: 1,
		s: [11129],
		d: [
			'Объединяет все наложенные на противника эффекты периодического урона от огня, но не поглощает их. Мгновенно наносит <!--pts2-->955 to 1131<!----> ед. урона от огня и накладывает на цель новый эффект, который в течение 10 сек. наносит на каждом такте такой же урон, как все объединенные эффекты вместе.'
		],
		t: ['Радиус действия: 40 м<br />Восстановление: 2 мин<!--?11129:25:85:85:726:0:1000-->'],
		x: 1,
		y: 3
	},
	{
		i: 12121,
		n: 'Яркий путь огня',
		m: 2,
		s: [44446,44448],
		d: [
			'Если ваши заклинания "Огненный шар", "Стрела ледяного огня", "Ожог", "Огненная глыба" или "Огненный взрыв" наносят критический непериодический урон 2 раза подряд, с вероятностью 50% вы сможете вызвать эффект "Путь огня".',
			'Если ваши заклинания "Огненный шар", "Стрела ледяного огня", "Ожог", "Огненная глыба" или "Огненный взрыв" наносят критический непериодический урон 2 раза подряд, с вероятностью 100% вы сможете вызвать эффект "Путь огня".'
		],
		x: 2,
		y: 3,
		r: [9,1]
	},
	{
		i: 11431,
		n: 'Поджигатель',
		m: 1,
		s: [86914],
		d: [
			'Маг получает возможность произносить заклинание "Ожог" на ходу.'
		],
		x: 3,
		y: 3
	},
	{
		i: 10734,
		n: 'Опаляющий огненный столб',
		m: 2,
		s: [84673,84674],
		d: [
			'Сокращает время произнесения заклинания "Огненный столб" на 50%. Если в область поражения заклинания "Взрывная волна" попали две цели и более, с вероятностью 50% "Взрывная волна" вызовет в той же области "Огненный столб".',
			'Сокращает время произнесения заклинания "Огненный столб" на 100%. Если в область поражения заклинания "Взрывная волна" попали две цели и более, с вероятностью 100% "Взрывная волна" вызовет в той же области "Огненный столб".'
		],
		x: 0,
		y: 4
	},
	{
		i: 10571,
		n: 'Дыхание дракона',
		m: 1,
		s: [31661],
		d: [
			'Наносит <!--pts1-->1195 to 1387<!----> ед. урона от огня целям, находящимся в конусе поражения перед заклинателем, а также дезориентирует их на 5 сек. Любой нанесенный урон приведет цели в чувство.'
		],
		t: ['7% от базовой Мана<table width="100%"><tr><td>Мгновенное действие</td><th>Восстановление: 20 сек.</th></tr></table><!--?31661:30:85:85:16:0:1000-->'],
		x: 1,
		y: 4
	},
	{
		i: 10563,
		n: 'Раскаленное неистовство',
		m: 3,
		s: [31679,31680,86880],
		d: [
			'Увеличивает урон, наносимый заклинаниями противникам с уровнем здоровья ниже 35%, на 4%.',
			'Увеличивает урон, наносимый заклинаниями противникам с уровнем здоровья ниже 35%, на 8%.',
			'Увеличивает урон, наносимый заклинаниями противникам с уровнем здоровья ниже 35%, на 12%.'
		],
		x: 2,
		y: 4
	},
	{
		i: 10559,
		n: 'Пироман',
		m: 2,
		s: [34293,34295],
		d: [
			'Повышает скорость произнесения заклинаний на 5%, если 3 противника или больше получают периодический урон от ваших заклинаний огня одновременно.',
			'Повышает скорость произнесения заклинаний на 10%, если 3 противника или больше получают периодический урон от ваших заклинаний огня одновременно.'
		],
		x: 0,
		y: 5
	},
	{
		i: 10541,
		n: 'Критическая масса',
		m: 3,
		s: [11095,12872,12873],
		d: [
			'Ваши заклинания "Живая бомба" и "Огненная сфера" наносят на 5% больше урона, а заклинания "Огненная глыба" и "Ожог" с вероятностью 33% могут сделать противника уязвимым для магии, повышая вероятность нанесения ему критического удара заклинаниями на 5% на 30 сек.',
			'Ваши заклинания "Живая бомба" и "Огненная сфера" наносят на 10% больше урона, а заклинания "Огненная глыба" и "Ожог" с вероятностью 66% могут сделать противника уязвимым для магии, повышая вероятность нанесения ему критического удара заклинаниями на 5% на 30 сек.',
			'Ваши заклинания "Живая бомба" и "Огненная сфера" наносят на 15% больше урона, а заклинания "Огненная глыба" и "Ожог" с вероятностью 100% могут сделать противника уязвимым для магии, повышая вероятность нанесения ему критического удара заклинаниями на 5% на 30 сек.'
		],
		x: 2,
		y: 5
	},
	{
		i: 10577,
		n: 'Живая бомба',
		m: 1,
		s: [44457],
		d: [
			'Противник становится живой бомбой, получая <!--pts1:3:4-->1600<!----> ед. урона от огня в течение 12 сек. По прошествии 12 сек. после наложения эффекта он взрывается, нанося <!--pts1-->400<!----> ед. урона от огня не более чем трем противникам в радиусе 10 м.'
		],
		t: ['<table width="100%"><tr><td>17% от базовой Мана</td><th>Радиус действия: 40 м</th></tr></table>Мгновенное действие<!--?44457:40:85:85:24:80:880-->'],
		x: 1,
		y: 6,
		r: [16,1]
	}
	]
},
{
	n: 'Лед',
	color: '#4D80FF',
	role: 8,
	mastery: {
		description: 'Используя магию льда, замораживает врагов и разбивает их вдребезги.',
		spells: [
			{id:31687,name:'Призыв элементаля воды',icon:'spell_frost_summonwaterelemental_2'},
			{id:84669,name:'Специализация на магии льда',icon:'spell_fire_bluefire'}
		],
		rating: [
			{id:76613,name:'Обжигающий холод',description:'<!--sp76613:0-->Все ваши заклинания наносят 5% дополнительного урона замороженным целям. Каждое очко искусности увеличивает урон дополнительно на 2.5%.<!--sp76613-->'}
		]
	},
	icon: 'spell_frost_frostbolt02',
	t: [
	{
		i: 9862,
		n: 'Ранние заморозки',
		m: 2,
		s: [83049,83050],
		d: [
			'На 0.3 сек. сокращает время произнесения заклинания "Ледяная стрела". После применения эффект становится недоступен на 15 сек.',
			'На 0.6 сек. сокращает время произнесения заклинания "Ледяная стрела". После применения эффект становится недоступен на 15 сек.'
		],
		x: 0,
		y: 0
	},
	{
		i: 11157,
		n: 'Пронзающий лед',
		m: 3,
		s: [11151,12952,12953],
		d: [
			'Повышает вероятность критического эффекта ваших заклинаний на 1%.',
			'Повышает вероятность критического эффекта ваших заклинаний на 2%.',
			'Повышает вероятность критического эффекта ваших заклинаний на 3%.'
		],
		j: [
			{holsplcritstrkpct:1,firsplcritstrkpct:1,natsplcritstrkpct:1,frosplcritstrkpct:1,shasplcritstrkpct:1,arcsplcritstrkpct:1},
			{holsplcritstrkpct:2,firsplcritstrkpct:2,natsplcritstrkpct:2,frosplcritstrkpct:2,shasplcritstrkpct:2,arcsplcritstrkpct:2},
			{holsplcritstrkpct:3,firsplcritstrkpct:3,natsplcritstrkpct:3,frosplcritstrkpct:3,shasplcritstrkpct:3,arcsplcritstrkpct:3}
		],
		x: 1,
		y: 0
	},
	{
		i: 11158,
		n: 'Обледенение',
		m: 2,
		s: [11170,12982],
		d: [
			'В 2 раза увеличивает вероятность нанесения критического удара любым заклинанием по замороженной цели. Увеличивает урон, наносимый замороженным целям заклинанием "Ледяная стрела", на 10%.',
			'В 3 раза увеличивает вероятность нанесения критического удара любым заклинанием по замороженной цели. Увеличивает урон, наносимый замороженным целям заклинанием "Ледяная стрела", на 20%.'
		],
		x: 2,
		y: 0
	},
	{
		i: 9846,
		n: 'Айсберг',
		m: 3,
		s: [31670,31672,55094],
		d: [
			'Сокращает время восстановления ваших заклинаний "Кольцо льда", "Конус холода", "Холодная хватка", "Ледяная преграда" и "Стылая кровь" на 7%.',
			'Сокращает время восстановления ваших заклинаний "Кольцо льда", "Конус холода", "Холодная хватка", "Ледяная преграда" и "Стылая кровь" на 14%.',
			'Сокращает время восстановления ваших заклинаний "Кольцо льда", "Конус холода", "Холодная хватка", "Ледяная преграда" и "Стылая кровь" на 20%.'
		],
		x: 0,
		y: 1
	},
	{
		i: 11325,
		n: 'Конус лютого холода',
		m: 2,
		s: [11190,12489],
		d: [
			'Ваше заклинание "Конус холода" также замораживает цели на 2 сек.',
			'Ваше заклинание "Конус холода" также замораживает цели на 4 сек.'
		],
		x: 1,
		y: 1
	},
	{
		i: 11156,
		n: 'Пронзающая стужа',
		m: 2,
		s: [83156,83157],
		d: [
			'Если заклинание "Ледяная стрела" наносит критический урон, эффект окоченения накладывается на 1 дополнительную цель.',
			'Если заклинание "Ледяная стрела" наносит критический урон, эффект окоченения накладывается на 2 дополнительную цель.'
		],
		x: 2,
		y: 1
	},
	{
		i: 9854,
		n: 'Вечная мерзлота',
		m: 3,
		s: [11175,12569,12571],
		d: [
			'Скорость передвижения окоченевшего противника и эффективность получаемого им исцеления снижаются на 4%. Кроме того, ваш элементаль воды исцеляется на 5% от наносимого вами урона.',
			'Скорость передвижения окоченевшего противника и эффективность получаемого им исцеления снижаются на 7%. Кроме того, ваш элементаль воды исцеляется на 10% от наносимого вами урона.',
			'Скорость передвижения окоченевшего противника и эффективность получаемого им исцеления снижаются на 10%. Кроме того, ваш элементаль воды исцеляется на 15% от наносимого вами урона.'
		],
		x: 3,
		y: 1
	},
	{
		i: 9860,
		n: 'Ледяные осколки',
		m: 2,
		s: [11185,12487],
		d: [
			'Ваше заклинание "Снежная буря" накладывает на противников эффект окоченения, снижая скорость их передвижения на 25% на 2 сек. Кроме того, дальность применения заклинания "Ледяное копье" увеличивается на 2 м.',
			'Ваше заклинание "Снежная буря" накладывает на противников эффект окоченения, снижая скорость их передвижения на 40% на 2 сек. Кроме того, дальность применения заклинания "Ледяное копье" увеличивается на 5 м.'
		],
		x: 0,
		y: 2
	},
	{
		i: 9858,
		n: 'Стылая кровь',
		m: 1,
		s: [12472],
		d: [
			'Повышает скорость произнесения заклинаний на 20%. Сокращает задержку произнесения заклинаний при получении урона на 100%. Время действия – 20 сек.'
		],
		t: ['3% от базовой Мана<table width="100%"><tr><td>Мгновенное действие</td><th>Восстановление: 3 мин</th></tr></table>'],
		x: 1,
		y: 2
	},
	{
		i: 9876,
		n: 'Ледяные пальцы',
		m: 3,
		s: [44543,44545,83074],
		d: [
			'При наложении атакующих эффектов окоченения вы с вероятностью 7% активируете эффект "Ледяные пальцы". Во время его действия для следующего заклинания "Ледяное копье" или "Глубокая заморозка" цель считается замороженной, а урон от заклинания "Ледяное копье" увеличивается на 25%. Эффект может суммироваться до 2 раз. Время действия – 15 сек.',
			'При наложении атакующих эффектов окоченения вы с вероятностью 14% активируете эффект "Ледяные пальцы". Во время его действия для следующего заклинания "Ледяное копье" или "Глубокая заморозка" цель считается замороженной, а урон от заклинания "Ледяное копье" увеличивается на 25%. Эффект может суммироваться до 2 раз. Время действия – 15 сек.',
			'При наложении атакующих эффектов окоченения вы с вероятностью 20% активируете эффект "Ледяные пальцы". Во время его действия для следующего заклинания "Ледяное копье" или "Глубокая заморозка" цель считается замороженной, а урон от заклинания "Ледяное копье" увеличивается на 25%. Эффект может суммироваться до 2 раз. Время действия – 15 сек.'
		],
		x: 2,
		y: 2
	},
	{
		i: 11371,
		n: 'Сковывающий холод',
		m: 3,
		s: [86259,86260,86314],
		d: [
			'При произнесении вашим элементалем воды заклинания "Холод" вы с вероятностью 33% получите два заряда эффекта "Ледяные пальцы".',
			'При произнесении вашим элементалем воды заклинания "Холод" вы с вероятностью 66% получите два заряда эффекта "Ледяные пальцы".',
			'При произнесении вашим элементалем воды заклинания "Холод" вы с вероятностью 100% получите два заряда эффекта "Ледяные пальцы".'
		],
		x: 3,
		y: 2,
		r: [9,3]
	},
	{
		i: 9894,
		n: 'Затяжная зима',
		m: 3,
		s: [44561,86500,86508],
		d: [
			'На 3% снижает затраты маны на все заклинания. С вероятностью 33% "Ледяная стрела" восполняет 10 участникам группы или рейда 1% максимального запаса маны в течение 10 сек.',
			'На 6% снижает затраты маны на все заклинания. С вероятностью 66% "Ледяная стрела" восполняет 10 участникам группы или рейда 1% максимального запаса маны в течение 10 сек.',
			'На 10% снижает затраты маны на все заклинания. С вероятностью 100% "Ледяная стрела" восполняет 10 участникам группы или рейда 1% максимального запаса маны в течение 10 сек.'
		],
		x: 0,
		y: 3
	},
	{
		i: 9870,
		n: 'Холодная хватка',
		m: 1,
		s: [11958],
		d: [
			'При использовании мгновенно завершает восстановление всех недавно примененных заклинаний магии льда.'
		],
		t: ['Восстановление: 8 мин'],
		x: 1,
		y: 3
	},
	{
		i: 9890,
		n: 'Заморозка мозгов',
		m: 3,
		s: [44546,44548,44549],
		d: [
			'Ваши заклинания перестают вызывать "Чародейские стрелы". Вместо этого с вероятностью 5% после произнесения любого заклинания магии льда, накладывающего эффект "Окоченение", вы сможете мгновенно и без затрат маны произнести заклинание "Огненный шар" или "Стрела ледяного огня". Мгновенно произнесенное заклинание "Стрела ледяного огня" получает бонус от эффекта "Ледяные пальцы". Оно не может вызвать эффект "Заморозка мозгов".',
			'Ваши заклинания перестают вызывать "Чародейские стрелы". Вместо этого с вероятностью 10% после произнесения любого заклинания магии льда, накладывающего эффект "Окоченение", вы сможете мгновенно и без затрат маны произнести заклинание "Огненный шар" или "Стрела ледяного огня". Мгновенно произнесенное заклинание "Стрела ледяного огня" получает бонус от эффекта "Ледяные пальцы". Оно не может вызвать эффект "Заморозка мозгов".',
			'Ваши заклинания перестают вызывать "Чародейские стрелы". Вместо этого с вероятностью 15% после произнесения любого заклинания магии льда, накладывающего эффект "Окоченение", вы сможете мгновенно и без затрат маны произнести заклинание "Огненный шар" или "Стрела ледяного огня". Мгновенно произнесенное заклинание "Стрела ледяного огня" получает бонус от эффекта "Ледяные пальцы". Оно не может вызвать эффект "Заморозка мозгов".'
		],
		x: 2,
		y: 3
	},
	{
		i: 9880,
		n: 'Град ледяных осколков',
		m: 2,
		s: [44745,54787],
		d: [
			'Когда "Ледяная преграда" разрушается, с вероятностью 100% все противники в радиусе 10 м примерзнут к месту на 2 сек.',
			'Когда "Ледяная преграда" разрушается, с вероятностью 100% все противники в радиусе 10 м примерзают к месту на 4 сек.'
		],
		x: 0,
		y: 4,
		r: [15,1]
	},
	{
		i: 9882,
		n: 'Ледяная преграда',
		m: 1,
		s: [11426],
		d: [
			'Мага мгновенно окружает защитный барьер, поглощающий <!--sp63095:0-->((<!--pts1:1-->8069<!----> + $SPFR * 0.87))<!--sp63095--> ед. урона. Время действия – 1 мин. Пока барьер существует, получение магом урона не вызывает задержку произнесения заклинаний.'
		],
		t: ['21% от базовой Мана<table width="100%"><tr><td>Мгновенное действие</td><th>Восстановление: 30 сек.</th></tr></table><!--?11426:30:85:85:36:0:1000-->'],
		x: 1,
		y: 4
	},
	{
		i: 11373,
		n: 'Самовозводящаяся преграда',
		m: 2,
		s: [86303,86304],
		d: [
			'При получении урона, который снижает запас здоровья мага до уровня ниже 50%, с вероятностью 50% его может окружить ледяная преграда, поглощающая урон. Эффект не требует затрат маны и имеет общее время восстановления с "Ледяной преградой", которое он автоматически запускает при возникновении.',
			'При получении урона, который снижает запас здоровья мага до уровня ниже 50%, с вероятностью 100% его может окружить ледяная преграда, поглощающая урон. Эффект не требует затрат маны и имеет общее время восстановления с "Ледяной преградой", которое он автоматически запускает при возникновении.'
		],
		x: 2,
		y: 4,
		r: [15,1]
	},
	{
		i: 11169,
		n: 'Сфера ледяного огня',
		m: 2,
		s: [84726,84727],
		d: [
			'"Огненная сфера" превращается в "Сферу ледяного огня", которая усиливается от специализации на магии льда. Скорость передвижения целей, замедленных заклинанием "Стрела ледяного огня", снижается дополнительно на 10%.',
			'"Сфера ледяного огня" заставляет ваших противников окоченеть, замедляя их на 40% на 4 сек., а цели, пораженные "Стрелой ледяного огня", замедляет дополнительно на 20%.'
		],
		x: 2,
		y: 5
	},
	{
		i: 9898,
		n: 'Глубокая заморозка',
		m: 1,
		s: [44572],
		d: [
			'Оглушает цель на 5 сек. Действует только на замороженных противников. Наносит от <!--pts1:1-->1144<!---->*<!--sp31678:0--><!--sp31677:0--><!--sp31676:0--><!--sp31675:0--><!--sp31674:0-->1<!--sp31674--><!--sp31675--><!--sp31676--><!--sp31677--><!--sp31678-->*<!--sp12953:0--><!--sp12952:0--><!--sp11151:0-->1<!--sp11151--><!--sp12952--><!--sp12953--> до <!--pts1:2-->1432<!---->*<!--sp31678:0--><!--sp31677:0--><!--sp31676:0--><!--sp31675:0--><!--sp31674:0-->1<!--sp31674--><!--sp31675--><!--sp31676--><!--sp31677--><!--sp31678-->*<!--sp12953:0--><!--sp12952:0--><!--sp11151:0-->1<!--sp11151--><!--sp12952--><!--sp12953--> ед. урона целям с постоянной невосприимчивостью к оглушению.'
		],
		t: ['<table width="100%"><tr><td>9% от базовой Мана</td><th>Радиус действия: 35 м</th></tr></table><table width="100%"><tr><td>Мгновенное действие</td><th>Восстановление: 30 сек.</th></tr></table>'],
		x: 1,
		y: 6,
		r: [15,1]
	}
	]
}
]);