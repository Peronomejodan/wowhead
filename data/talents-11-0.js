$WowheadTalentCalculator.registerClass(11, [
{
	n: 'Balance',
	color: '#FFB81A',
	role: 8,
	mastery: {
		description: 'Can take on the form of a powerful Moonkin, balancing the power of Arcane and Nature magic to destroy enemies at a distance.',
		spells: [
			{id:78674,name:'Starsurge',icon:'spell_arcane_arcane03'},
			{id:16913,name:'Moonfury',icon:'spell_nature_moonglow'}
		],
		rating: [
			{id:77492,name:'Total Eclipse',description:'<!--sp77492:0-->Increases the bonus damage from Eclipse by 16%.  Each point of Mastery increases the bonus by an additional 2.0%.<!--sp77492-->'}
		]
	},
	icon: 'spell_nature_starfall',
	t: [
	{
		i: 8359,
		n: 'Nature\'s Grace',
		m: 3,
		s: [16880,61345,61346],
		d: [
			'You gain 5% spell haste after you cast Moonfire, Regrowth, or Insect Swarm, lasting 15 sec. This effect has a 1 minute cooldown. When you gain Lunar or Solar Eclipse, the cooldown of Nature\'s Grace is instantly reset.',
			'You gain 10% spell haste after you cast Moonfire, Regrowth, or Insect Swarm, lasting 15 sec. This effect has a 1 minute cooldown. When you gain Lunar or Solar Eclipse, the cooldown of Nature\'s Grace is instantly reset.',
			'You gain 15% spell haste after you cast Moonfire, Regrowth, or Insect Swarm, lasting 15 sec. This effect has a 1 minute cooldown. When you gain Lunar or Solar Eclipse, the cooldown of Nature\'s Grace is instantly reset.'
		],
		x: 0,
		y: 0
	},
	{
		i: 8349,
		n: 'Starlight Wrath',
		m: 3,
		s: [16814,16815,16816],
		d: [
			'Reduces the cast time of your Wrath and Starfire spells by 0.15 sec.',
			'Reduces the cast time of your Wrath and Starfire spells by 0.25 sec.',
			'Reduces the cast time of your Wrath and Starfire spells by 0 sec.'
		],
		x: 1,
		y: 0
	},
	{
		i: 11281,
		n: 'Nature\'s Majesty',
		m: 2,
		s: [35363,35364],
		d: [
			'Increases the critical strike chance with spells by 2%.',
			'Increases the critical strike chance with spells by 4%.'
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
		n: 'Genesis',
		m: 3,
		s: [57810,57811,57812],
		d: [
			'Increases the healing done by your periodic spells and by Swiftmend by 2%, and increases the duration of your Moonfire and Insect Swarm by 2 sec.',
			'Increases the healing done by your periodic spells and by Swiftmend by 4%, and increases the duration of your Moonfire and Insect Swarm by 4 sec.',
			'Increases the healing done by your periodic spells and by Swiftmend by 6%, and increases the duration of your Moonfire and Insect Swarm by 6 sec.'
		],
		x: 0,
		y: 1
	},
	{
		i: 8353,
		n: 'Moonglow',
		m: 3,
		s: [16845,16846,16847],
		d: [
			'Reduces the mana cost of your damage and healing spells by 3%.',
			'Reduces the mana cost of your damage and healing spells by 6%.',
			'Reduces the mana cost of your damage and healing spells by 9%.'
		],
		x: 1,
		y: 1
	},
	{
		i: 8383,
		n: 'Balance of Power',
		m: 2,
		s: [33592,33596],
		d: [
			'Increases your Nature and Arcane spell damage by 1% and increases your spell hit rating by an additional amount equal to 50% of any Spirit gained from items or effects.',
			'Increases your Nature and Arcane spell damage by 2% and increases your spell hit rating by an additional amount equal to 100% of any Spirit gained from items or effects.'
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
		n: 'Euphoria',
		m: 2,
		s: [81061,81062],
		d: [
			'While not in an Eclipse state, you have a 12% chance to double the Solar or Lunar energy generated by your Wrath or Starfire when they deal damage.<br /><br />When you reach a Solar or Lunar eclipse, you instantly are restored 8% of your total mana.',
			'While not in an Eclipse state, you have a 24% chance to double the Solar or Lunar energy generated by your Wrath or Starfire when they deal damage.<br /><br />When you reach a Solar or Lunar eclipse, you instantly are restored 16% of your total mana.'
		],
		x: 0,
		y: 2
	},
	{
		i: 11278,
		n: 'Moonkin Form',
		m: 1,
		s: [24858],
		d: [
			'Shapeshift into Moonkin Form, increasing Arcane and Nature spell damage by 10%, reducing all damage taken by 15%, and increases spell haste of all party and raid members by 5%. The Moonkin can not cast healing or resurrection spells while shapeshifted.<br /><br />The act of shapeshifting frees the caster of movement impairing effects.'
		],
		t: ['13% of base mana<br />Instant'],
		x: 1,
		y: 2
	},
	{
		i: 11282,
		n: 'Typhoon',
		m: 1,
		s: [50516],
		d: [
			'You summon a violent Typhoon that does <!--pts2-->1298<!----> Nature damage to targets in front of the caster within 30 yards, knocking them back and dazing them for 6 sec.'
		],
		t: ['<table width="100%"><tr><td>16% of base mana</td><th>30 yd range</th></tr></table><table width="100%"><tr><td>Instant</td><th>20 sec cooldown</th></tr></table>'],
		x: 2,
		y: 2
	},
	{
		i: 8381,
		n: 'Shooting Stars',
		m: 2,
		s: [93398,93399],
		d: [
			'You have a 2% chance when you deal damage with your Moonfire or Insect Swarm to instantly reset the cooldown of your Starsurge and reduce its cast time by 100%. Lasts 12 sec.',
			'You have a 4% chance when you deal damage with your Moonfire or Insect Swarm to instantly reset the cooldown of your Starsurge and reduce its cast time by 100%. Lasts 12 sec.'
		],
		x: 3,
		y: 2
	},
	{
		i: 8391,
		n: 'Owlkin Frenzy',
		m: 3,
		s: [48389,48392,48393],
		d: [
			'Attacks done to you while in Moonkin Form have a 5% chance to cause you to go into a Frenzy, increasing your damage by 10% and causing you to be immune to pushback while casting Balance spells. Lasts 10 sec.',
			'Attacks done to you while in Moonkin Form have a 10% chance to cause you to go into a Frenzy, increasing your damage by 10% and causing you to be immune to pushback while casting Balance spells. Lasts 10 sec.',
			'Attacks done to you while in Moonkin Form have a 15% chance to cause you to go into a Frenzy, increasing your damage by 10% and causing you to be immune to pushback while casting Balance spells. Lasts 10 sec.'
		],
		x: 1,
		y: 3,
		r: [7,1]
	},
	{
		i: 8379,
		n: 'Gale Winds',
		m: 2,
		s: [48488,48514],
		d: [
			'Increases damage done by your Hurricane and Typhoon spells by 15%, and increases the range of your Cyclone spell by 2 yards.',
			'Increases damage done by your Hurricane and Typhoon spells by 30%, and increases the range of your Cyclone spell by 4 yards.'
		],
		x: 2,
		y: 3,
		r: [8,1]
	},
	{
		i: 8361,
		n: 'Solar Beam',
		m: 1,
		s: [78675],
		d: [
			'You summon a beam of solar light over an enemy target\'s location, interrupting the target and silencing all enemies under the beam while it is active. Solar Beam lasts for 10 sec.'
		],
		t: ['<table width="100%"><tr><td>18% of base mana</td><th>40 yd range</th></tr></table><table width="100%"><tr><td>Instant</td><th>1 min cooldown</th></tr></table>'],
		x: 3,
		y: 3
	},
	{
		i: 12149,
		n: 'Dreamstate',
		m: 2,
		s: [33597,33599],
		d: [
			'When you cast your Innervate on yourself, you regain an additional 15% of your total mana over its duration.',
			'When you cast your Innervate on yourself, you regain an additional 30% of your total mana over its duration.'
		],
		x: 0,
		y: 4,
		r: [6,2]
	},
	{
		i: 8399,
		n: 'Force of Nature',
		m: 1,
		s: [33831],
		d: [
			'Summons 3 treants to attack enemy targets for 30 sec.'
		],
		t: ['<table width="100%"><tr><td>12% of base mana</td><th>40 yd range</th></tr></table><table width="100%"><tr><td>Instant</td><th>3 min cooldown</th></tr></table>'],
		x: 1,
		y: 4
	},
	{
		i: 12150,
		n: 'Sunfire',
		m: 1,
		s: [93401],
		d: [
			'While in Solar Eclipse, your Moonfire spell will morph into Sunfire.'
		],
		x: 2,
		y: 4
	},
	{
		i: 11277,
		n: 'Earth and Moon',
		m: 1,
		s: [48506],
		d: [
			'Your Wrath and Starfire spells apply the Earth and Moon effect, which increases spell damage taken by 8% for 12 sec.  Also increases your spell damage by 2%.'
		],
		j: [
			{holdmgpct:2,firdmgpct:2,natdmgpct:2,frodmgpct:2,shadmgpct:2,arcdmgpct:2}
		],
		x: 3,
		y: 4
	},
	{
		i: 8403,
		n: 'Fungal Growth',
		m: 2,
		s: [78788,78789],
		d: [
			'When your Treants die or your Wild Mushrooms are triggered, you spawn a Fungal Growth at its wake covering the area within 8 yards, slowing all enemy targets by 25%. Lasts 20 sec.',
			'When your Treants die or your Wild Mushrooms are triggered, you spawn a Fungal Growth at its wake covering the area within 8 yards, slowing all enemy targets by 50%. Lasts 20 sec.'
		],
		x: 1,
		y: 5,
		r: [14,1]
	},
	{
		i: 8393,
		n: 'Lunar Shower',
		m: 3,
		s: [33603,33604,33605],
		d: [
			'When you cast Moonfire, you gain Lunar Shower. Lunar Shower increases the direct damage done by your Moonfire by 15%, and reduces the mana cost by 10%. This effect is refreshed and amplified when you move, stacking up to 3 times. Effect lasts for 3 sec.',
			'When you cast Moonfire, you gain Lunar Shower. Lunar Shower increases the direct damage done by your Moonfire by 30%, and reduces the mana cost by 20%. This effect is refreshed and amplified when you move, stacking up to 3 times. Effect lasts for 3 sec.',
			'When you cast Moonfire, you gain Lunar Shower. Lunar Shower increases the direct damage done by your Moonfire by 45%, and reduces the mana cost by 30%. This effect is refreshed and amplified when you move, stacking up to 3 times. Effect lasts for 3 sec.'
		],
		x: 2,
		y: 5,
		r: [15,1]
	},
	{
		i: 8405,
		n: 'Starfall',
		m: 1,
		s: [48505],
		d: [
			'You summon a flurry of stars from the sky on all targets within 40 yards of the caster that you\'re in combat with, each dealing <!--pts1-->369 to 427<!----> Arcane damage. Maximum 20 stars. Lasts 10 sec.  <br /><br />Shapeshifting into an animal form or mounting cancels the effect. Any effect which causes you to lose control of your character will suppress the starfall effect.'
		],
		t: ['35% of base mana<table width="100%"><tr><td>Instant</td><th>1.5 min cooldown</th></tr></table>'],
		x: 1,
		y: 6
	}
	]
},
{
	n: 'Feral Combat',
	color: '#FF0000',
	role: 10,
	mastery: {
		description: 'Takes on the form of a great cat to deal damage with bleeds and bites or a mighty bear to absorb damage and protect allies.',
		spells: [
			{id:33917,name:'Mangle',icon:'ability_druid_mangle2'},
			{id:84735,name:'Aggression',icon:'ability_druid_predatoryinstincts'},
			{id:84840,name:'Vengeance',icon:'ability_paladin_shieldofvengeance'},
			{id:87335,name:'Feral Instinct',icon:'ability_ambush'}
		],
		rating: [
			{id:77494,name:'Savage Defender',description:'<!--sp77494:0-->Increases the damage absorbed by your Savage Defense ability by 32%.    Each point of Mastery increases the absorb by an additional 4%.<!--sp77494-->'},
			{id:77493,name:'Razor Claws',description:'<!--sp77493:0-->Increases the damage done by your bleed abilities by 25.04%.  Each point of Mastery increases bleed damage by an additional 3.1%.<!--sp77493-->'}
		]
	},
	icon: 'ability_racial_bearform',
	t: [
	{
		i: 8295,
		n: 'Feral Swiftness',
		m: 2,
		s: [17002,24866],
		d: [
			'Increases your movement speed by 15% in Cat Form and increases your chance to dodge while in Cat Form or Bear Form by 2%.<br /><br />In addition, your Dash and Stampeding Roar have a 50% chance to remove all movement impairing effects from affected targets when used.',
			'Increases your movement speed by 30% in Cat Form and increases your chance to dodge while in Cat Form or Bear Form by 4%.<br /><br />In addition, your Dash and Stampeding Roar have a 100% chance to remove all movement impairing effects from affected targets when used.'
		],
		x: 0,
		y: 0
	},
	{
		i: 11716,
		n: 'Furor',
		m: 3,
		s: [17056,17058,17059],
		d: [
			'Grants you a 33% chance to gain 10 Rage when you shapeshift into Bear Form, allows you to keep up to 33 of your Energy when you shapeshift into Cat Form, and increases your maximum mana by 5%.',
			'Grants you a 66% chance to gain 10 Rage when you shapeshift into Bear Form, allows you to keep up to 66 of your Energy when you shapeshift into Cat Form, and increases your maximum mana by 10%.',
			'Grants you a 100% chance to gain 10 Rage when you shapeshift into Bear Form, allows you to keep up to 100 of your Energy when you shapeshift into Cat Form, and increases your maximum mana by 15%.'
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
		n: 'Predatory Strikes',
		m: 2,
		s: [16972,16974],
		d: [
			'Increases the critical strike chance of your Ravage by 25% on targets at or above 80% health.<br /><br />Your finishing moves have a 10% chance per combo point to make your next non-instant Nature spell with a base casting time of less than 10 sec. become an instant cast spell and cost no mana.',
			'Increases the critical strike chance of your Ravage by 50% on targets at or above 80% health.<br /><br />Your finishing moves have a 20% chance per combo point to make your next non-instant Nature spell with a base casting time of less than 10 sec. become an instant cast spell and cost no mana.'
		],
		x: 2,
		y: 0
	},
	{
		i: 8760,
		n: 'Infected Wounds',
		m: 2,
		s: [48483,48484],
		d: [
			'Your Shred, Maul, Ravage and Mangle attacks cause an Infected Wound in the target. The Infected Wound reduces the movement speed of the target by 25% and the attack speed by 10%. Lasts 12 sec.',
			'Your Shred, Ravage, Maul, and Mangle attacks cause an Infected Wound in the target. The Infected Wound reduces the movement speed of the target by 50% and the attack speed by 20%. Lasts 12 sec.'
		],
		x: 0,
		y: 1
	},
	{
		i: 8305,
		n: 'Fury Swipes',
		m: 3,
		s: [48532,80552,80553],
		d: [
			'When you auto-attack while in Cat Form or Bear Form, you have a 5% chance to cause a Fury Swipe dealing 310% weapon damage. This effect cannot occur more than once every 3 sec.',
			'When you auto-attack while in Cat Form or Bear Form, you have a 10% chance to cause a Fury Swipe dealing 310% weapon damage. This effect cannot occur more than once every 3 sec.',
			'When you auto-attack while in Cat Form or Bear Form, you have a 15% chance to cause a Fury Swipe dealing 310% weapon damage. This effect cannot occur more than once every 3 sec.'
		],
		x: 1,
		y: 1
	},
	{
		i: 8761,
		n: 'Primal Fury',
		m: 2,
		s: [37116,37117],
		d: [
			'Gives you a 50% chance to gain an additional 5 Rage anytime you get a critical strike while in Bear Form and your critical strikes from Cat Form abilities that add combo points  have a 50% chance to add an additional combo point.',
			'Gives you a 100% chance to gain an additional 5 Rage anytime you get a critical strike while in Bear Form and your critical strikes from Cat Form abilities that add combo points  have a 100% chance to add an additional combo point.'
		],
		x: 2,
		y: 1
	},
	{
		i: 11285,
		n: 'Feral Aggression',
		m: 2,
		s: [16858,16859],
		d: [
			'Increases the damage caused by your Ferocious Bite by 5% and causes Faerie Fire (Feral) to apply 2 stacks of the Faerie Fire effect when cast.',
			'Increases the damage caused by your Ferocious Bite by 10% and causes Faerie Fire (Feral) to apply 3 stacks of the Faerie Fire effect when cast.'
		],
		x: 3,
		y: 1
	},
	{
		i: 8323,
		n: 'King of the Jungle',
		m: 3,
		s: [48492,48494,48495],
		d: [
			'While using your Enrage ability in Bear Form, your damage is increased by 5%, and your Tiger\'s Fury ability also instantly restores 20 Energy.',
			'While using your Enrage ability in Bear Form, your damage is increased by 10%, and your Tiger\'s Fury ability also instantly restores 40 Energy.',
			'While using your Enrage ability in Bear Form, your damage is increased by 15%, and your Tiger\'s Fury ability also instantly restores 60 Energy.'
		],
		x: 0,
		y: 2
	},
	{
		i: 8299,
		n: 'Feral Charge',
		m: 1,
		s: [49377],
		d: [
			'Teaches Feral Charge (Bear) and Feral Charge (Cat).<br /><br />Feral Charge (Bear) - Causes you to charge an enemy, immobilizing them for 4 sec. 15 second cooldown.<br /><br />Feral Charge (Cat) - Causes you to leap behind an enemy, dazing them for 3 sec. 30 second cooldown.'
		],
		t: ['100 yd range'],
		x: 1,
		y: 2
	},
	{
		i: 8301,
		n: 'Stampede',
		m: 2,
		s: [78892,78893],
		d: [
			'Increases your melee haste by 15% after you use Feral Charge (Bear) for 8 sec, and your next Ravage will temporarily not require stealth or have a positioning requirement for 10 sec after you use Feral Charge (Cat), and cost 50% less energy.',
			'Increases your melee haste by 30% after you use Feral Charge (Bear) for 8 sec, and your next Ravage will temporarily not require stealth or have a positioning requirement for 10 sec after you use Feral Charge (Cat), and cost 100% less energy.'
		],
		x: 2,
		y: 2,
		r: [8,1]
	},
	{
		i: 8293,
		n: 'Thick Hide',
		m: 3,
		s: [16929,16930,16931],
		d: [
			'Increases your Armor contribution from cloth and leather items by 4%, increases armor while in Bear Form by an additional 26%, and reduces the chance you\'ll be critically hit by melee attacks by 2%.',
			'Increases your Armor contribution from cloth and leather items by 7%, increases armor while in Bear Form by an additional 52%, and reduces the chance you\'ll be critically hit by melee attacks by 4%.',
			'Increases your Armor contribution from cloth and leather items by 10%, increases armor while in Bear Form by an additional 78%, and reduces the chance you\'ll be critically hit by melee attacks by 6%.'
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
		n: 'Leader of the Pack',
		m: 1,
		s: [17007],
		d: [
			'While in Cat Form or Bear Form, the Leader of the Pack increases critical strike chance of all party and raid members within 100 yards by 5%.  In addition, your melee critical strikes in Cat Form and Bear Form cause you to heal for 4% of your total health and gain 8% of your maximum mana.  This effect cannot occur more than once every 6 sec.'
		],
		x: 1,
		y: 3
	},
	{
		i: 8307,
		n: 'Brutal Impact',
		m: 2,
		s: [16940,16941],
		d: [
			'Increases the stun duration of your Bash and Pounce abilities by 0 sec, decreases the cooldown of Bash by 5 sec, decreases the cooldown of Skull Bash by 25 sec, and causes victims of your Skull Bash ability to have 5% increased mana cost for their spells for 10 sec.',
			'Increases the stun duration of your Bash and Pounce abilities by 1 sec, decreases the cooldown of Bash by 10 sec, decreases the cooldown of Skull Bash by 50 sec, and causes victims of your Skull Bash ability to have 10% increased mana cost for their spells for 10 sec.'
		],
		x: 2,
		y: 3
	},
	{
		i: 8303,
		n: 'Nurturing Instinct',
		m: 2,
		s: [33872,33873],
		d: [
			'Increases your healing spells by up to 50% of your Agility, and increases healing done to you by 10% while in Cat Form.',
			'Increases your healing spells by up to 100% of your Agility, and increases healing done to you by 20% while in Cat Form.'
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
		n: 'Primal Madness',
		m: 2,
		s: [80316,80317],
		d: [
			'Tiger\'s Fury and Berserk also increase your current and maximum energy by 10 during their durations, and your Enrage and Berserk abilities instantly generate 6 Rage.',
			'Tiger\'s Fury and Berserk also increase your current and maximum energy by 20 during their durations, and your Enrage and Berserk abilities instantly generate 12 Rage.'
		],
		x: 0,
		y: 4,
		r: [7,3]
	},
	{
		i: 8313,
		n: 'Survival Instincts',
		m: 1,
		s: [61336],
		d: [
			'Reduces all damage taken by 50% for 12 sec.  Only usable while in Bear Form or Cat Form.'
		],
		t: ['3 min cooldown'],
		x: 1,
		y: 4
	},
	{
		i: 8759,
		n: 'Endless Carnage',
		m: 2,
		s: [80314,80315],
		d: [
			'Increases the duration of your Rake by 3 sec and your Savage Roar and Pulverize by 4 sec.',
			'Increases the duration of your Rake by 6 sec and your Savage Roar and Pulverize by 8 sec.'
		],
		x: 2,
		y: 4
	},
	{
		i: 8758,
		n: 'Natural Reaction',
		m: 2,
		s: [57878,57880],
		d: [
			'Reduces damage taken while in Bear Form by 6%, increases your dodge while in Bear Form by 3%, and you generate 1 Rage every time you dodge while in Bear Form.',
			'Reduces damage taken while in Bear Form by 12%, increases your dodge while in Bear Form by 6%, and you generate 3 Rage every time you dodge while in Bear Form.'
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
		n: 'Blood in the Water',
		m: 2,
		s: [80318,80319],
		d: [
			'When you Ferocious Bite a target at or below 25% health, you have a 50% chance to instantly refresh the duration of your Rip on the target.',
			'When you Ferocious Bite a target at or below 25% health, you have a 100% chance to instantly refresh the duration of your Rip on the target.'
		],
		x: 0,
		y: 5
	},
	{
		i: 8343,
		n: 'Rend and Tear',
		m: 3,
		s: [48432,48433,48434],
		d: [
			'Increases damage done by your Maul and Shred attacks on bleeding targets by 7%, and increases the critical strike chance of your Ferocious Bite ability on bleeding targets by 8%.',
			'Increases damage done by your Maul and Shred attacks on bleeding targets by 13%, and increases the critical strike chance of your Ferocious Bite ability on bleeding targets by 17%.',
			'Increases damage done by your Maul and Shred attacks on bleeding targets by 20%, and increases the critical strike chance of your Ferocious Bite ability on bleeding targets by 25%.'
		],
		x: 1,
		y: 5
	},
	{
		i: 8319,
		n: 'Pulverize',
		m: 1,
		s: [80313],
		d: [
			'Deals 80% weapon damage plus additional (<!--pts3:1-->450<!----> * 80 / 100) damage for each of your Lacerate applications on the target, and increases your melee critical strike chance by 3% for each Lacerate application consumed for 10 sec.'
		],
		t: ['<table width="100%"><tr><td>15 Rage</td><th>Melee Range</th></tr></table>Instant cast<!--?80313:35:85:85:494:0:1000-->','Requires Bear Form'],
		x: 2,
		y: 5,
		r: [19,3]
	},
	{
		i: 8347,
		n: 'Berserk',
		m: 1,
		s: [50334],
		d: [
			'Your Lacerate periodic damage has a 50% chance to refresh the cooldown of your Mangle (Bear) ability and make it cost no rage.  <br /><br />In addition, when activated this ability causes your Mangle (Bear) ability to hit up to 3 targets and have no cooldown, and reduces the energy cost of all your Cat Form abilities by 50%.  Lasts 15 sec.  You cannot use Tiger\'s Fury while Berserk is active.'
		],
		t: ['3 min cooldown'],
		x: 1,
		y: 6
	}
	]
},
{
	n: 'Restoration',
	color: '#4D80FF',
	role: 4,
	mastery: {
		description: 'Uses heal-over-time Nature spells to keep allies alive, taking on the form of a tree when the need is most urgent.',
		spells: [
			{id:18562,name:'Swiftmend',icon:'inv_relics_idolofrejuvenation'},
			{id:85101,name:'Meditation',icon:'spell_nature_sleep'},
			{id:87305,name:'Gift of Nature',icon:'spell_nature_spiritarmor'},
			{id:96429,name:'Disentanglement',icon:'ability_hunter_animalhandler'}
		],
		rating: [
			{id:77495,name:'Symbiosis',description:'<!--sp77495:0-->Increases the potency of your healing spells by 11.6% on targets already affected by one of your heal over time spells.  Each point of Mastery increases heal potency by an additional 1.45%.<!--sp77495-->'}
		]
	},
	icon: 'spell_nature_healingtouch',
	t: [
	{
		i: 8227,
		n: 'Blessing of the Grove',
		m: 2,
		s: [78784,78785],
		d: [
			'Increases the healing done by your Rejuvenation by 2% and the direct damage of your Moonfire by 3%.',
			'Increases the healing done by your Rejuvenation by 4% and the direct damage of your Moonfire by 6%.'
		],
		x: 0,
		y: 0
	},
	{
		i: 8237,
		n: 'Natural Shapeshifter',
		m: 2,
		s: [16833,16834],
		d: [
			'Reduces the mana cost of all shapeshifting by 10% and increases the duration of Tree of Life Form by 3 sec.',
			'Reduces the mana cost of all shapeshifting by 20% and increases the duration of Tree of Life Form by 6 sec.'
		],
		x: 1,
		y: 0
	},
	{
		i: 11699,
		n: 'Naturalist',
		m: 2,
		s: [17069,17070],
		d: [
			'Reduces the cast time of your Healing Touch and Nourish spells by 0.25 sec.',
			'Reduces the cast time of your Healing Touch and Nourish spells by 0.50 sec.'
		],
		x: 2,
		y: 0
	},
	{
		i: 11715,
		n: 'Heart of the Wild',
		m: 3,
		s: [17003,17004,17005],
		d: [
			'Increases your Intellect by 2%.  In addition, while in Bear Form your Stamina is increased by 2% and while in Cat Form your attack power is increased by 3%.',
			'Increases your Intellect by 4%.  In addition, while in Bear Form your Stamina is increased by 4% and while in Cat Form your attack power is increased by 7%.',
			'Increases your Intellect by 6%.  In addition, while in Bear Form your Stamina is increased by 6% and while in Cat Form your attack power is increased by 10%.'
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
		n: 'Perseverance',
		m: 3,
		s: [78734,78735,78736],
		d: [
			'Reduces all spell damage taken by 2%.',
			'Reduces all spell damage taken by 4%.',
			'Reduces all spell damage taken by 6%.'
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
		n: 'Master Shapeshifter',
		m: 1,
		s: [48411],
		d: [
			'Grants an effect which lasts while the Druid is within the respective shapeshift form.<br /><br />Bear Form - Increases physical damage by 4%.<br /><br />Cat Form - Increases critical strike chance by 4%.<br /><br />Moonkin Form - Increases spell damage by 4%.<br /><br />Tree of Life/Caster Form - Increases healing by 4%.'
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
		n: 'Improved Rejuvenation',
		m: 3,
		s: [17111,17112,17113],
		d: [
			'Increases the effect of your Rejuvenation and Swiftmend spells by 5%.',
			'Increases the effect of your Rejuvenation and Swiftmend spells by 10%.',
			'Increases the effect of your Rejuvenation and Swiftmend spells by 15%.'
		],
		x: 2,
		y: 1
	},
	{
		i: 8253,
		n: 'Living Seed',
		m: 3,
		s: [48496,48499,48500],
		d: [
			'When you critically heal a target with Swiftmend, Regrowth, Nourish or Healing Touch spell you plant a Living Seed on the target for 10% of the amount healed. The Living Seed will bloom when the target is next attacked. Lasts 15 sec.',
			'When you critically heal a target with Swiftmend, Regrowth, Nourish or Healing Touch spell you plant a Living Seed on the target for 20% of the amount healed. The Living Seed will bloom when the target is next attacked. Lasts 15 sec.',
			'When you critically heal a target with Swiftmend, Regrowth, Nourish or Healing Touch spell you plant a Living Seed on the target for 30% of the amount healed. The Living Seed will bloom when the target is next attacked. Lasts 15 sec.'
		],
		x: 0,
		y: 2
	},
	{
		i: 8269,
		n: 'Revitalize',
		m: 2,
		s: [48539,48544],
		d: [
			'When you periodically heal with your Rejuvenation or Lifebloom spells, you have a 20% chance to instantly regenerate 1% of your total mana. This effect cannot occur more than once every 12 sec.<br /><br />In addition, you also grant Replenishment when you cast or refresh Lifebloom.<br /><br />Replenishment - Grants up to 10 party or raid members mana regeneration equal to 1% of their maximum mana per 10 sec. Lasts for 15 sec.',
			'When you periodically heal with your Rejuvenation or Lifebloom spells, you have a 20% chance to instantly regenerate 2% of your total mana. This effect cannot occur more than once every 12 sec.<br /><br />In addition, you also grant Replenishment when you cast or refresh Lifebloom.<br /><br />Replenishment - Grants up to 10 party or raid members mana regeneration equal to 1% of their maximum mana per 10 sec. Lasts for 15 sec.'
		],
		x: 1,
		y: 2
	},
	{
		i: 8249,
		n: 'Nature\'s Swiftness',
		m: 1,
		s: [17116],
		d: [
			'When activated, your next Nature spell with a base casting time less than 10 sec. becomes an instant cast spell.  If that spell is a healing spell, the amount healed will be increased by 50%.'
		],
		t: ['3 min cooldown'],
		x: 2,
		y: 2
	},
	{
		i: 11712,
		n: 'Fury of Stormrage',
		m: 2,
		s: [17104,24943],
		d: [
			'Reduces the mana cost of your Wrath spell by 50%, and when you deal damage with your Wrath spell you have a 6% chance to cause your next Starfire to be instant cast within 8 sec.',
			'Reduces the mana cost of your Wrath spell by 100%, and when you deal damage with your Wrath spell you have a 12% chance to cause your next Starfire to be instant cast within 8 sec.'
		],
		x: 3,
		y: 2
	},
	{
		i: 8255,
		n: 'Nature\'s Bounty',
		m: 3,
		s: [17074,17075,17076],
		d: [
			'Increases the critical effect chance of your Regrowth spell by 20%.<br /><br />In addition, when you have Rejuvenation active on three or more targets, the cast time of your Nourish spell is reduced by 10%.',
			'Increases the critical effect chance of your Regrowth spell by 40%.<br /><br />In addition, when you have Rejuvenation active on three or more targets, the cast time of your Nourish spell is reduced by 20%.',
			'Increases the critical effect chance of your Regrowth spell by 60%.<br /><br />In addition, when you have Rejuvenation active on three or more targets, the cast time of your Nourish spell is reduced by 30%.'
		],
		x: 1,
		y: 3
	},
	{
		i: 8762,
		n: 'Empowered Touch',
		m: 2,
		s: [33879,33880],
		d: [
			'Increases the direct healing done by your Healing Touch, Regrowth and Nourish spells by 5%, and grants those spells a 50% chance to refresh the duration of your Lifebloom on targets.',
			'Increases the direct healing done by your Healing Touch, Regrowth and Nourish spells by 10%, and grants those spells a 100% chance to refresh the duration of your Lifebloom on targets.'
		],
		x: 2,
		y: 3
	},
	{
		i: 12146,
		n: 'Malfurion\'s Gift',
		m: 2,
		s: [92363,92364],
		d: [
			'Whenever you heal with your Lifebloom spell, you have a 2% chance to cause Omen of Clarity.<br /><br />In addition, the cooldown of your Tranquility is reduced by 3 minutes.',
			'Whenever you heal with your Lifebloom spell, you have a 4% chance to cause Omen of Clarity.<br /><br />In addition, the cooldown of your Tranquility is reduced by 5 minutes.'
		],
		x: 3,
		y: 3
	},
	{
		i: 8263,
		n: 'Efflorescence',
		m: 3,
		s: [34151,81274,81275],
		d: [
			'Your Swiftmend spell causes healing flora to sprout beneath the target, restoring health equal to 4% of the amount healed by your Swiftmend to the three most injured targets within 8 yards, every 1 sec for 7 sec.',
			'Your Swiftmend spell causes healing flora to sprout beneath the target, restoring health equal to 8% of the amount healed by your Swiftmend to the three most injured targets within 8 yards, every 1 sec for 7 sec.',
			'Your Swiftmend spell causes healing flora to sprout beneath the target, restoring health equal to 12% of the amount healed by your Swiftmend to the three most injured targets within 8 yards, every 1 sec for 7 sec.'
		],
		x: 0,
		y: 4
	},
	{
		i: 8279,
		n: 'Wild Growth',
		m: 1,
		s: [48438],
		d: [
			'Heals up to 5 friendly party or raid members within 30 yards of the target for <!--pts1:3:7-->3717<!----> over 7 sec.  Prioritizes healing most injured party members.  The amount healed is applied quickly at first, and slows down as the Wild Growth reaches its full duration.<!--sp33891:0--><!--sp33891-->'
		],
		t: ['<table width="100%"><tr><td>27% of base mana</td><th>40 yd range</th></tr></table><table width="100%"><tr><td>Instant</td><th>8 sec cooldown</th></tr></table><!--?48438:30:85:85:72:0:1000-->'],
		x: 1,
		y: 4
	},
	{
		i: 8763,
		n: 'Nature\'s Cure',
		m: 1,
		s: [88423],
		d: [
			'Empowers your Remove Corruption spell to also remove a magic effect from a friendly target.'
		],
		x: 2,
		y: 4
	},
	{
		i: 8267,
		n: 'Nature\'s Ward',
		m: 2,
		s: [33881,33882],
		d: [
			'Whenever you take an attack while at or below 50% health, you have a 50% chance to automatically cast Rejuvenation on yourself with no mana cost.',
			'Whenever you take an attack while at or below 50% health, you have a 100% chance to automatically cast Rejuvenation on yourself with no mana cost.'
		],
		x: 3,
		y: 4
	},
	{
		i: 11280,
		n: 'Gift of the Earthmother',
		m: 3,
		s: [51179,51180,51181],
		d: [
			'Increases the healing done when your Lifebloom expires by 5%, and causes your Rejuvenation spell to also instantly heal for 5% of the total periodic effect.',
			'Increases the healing done when your Lifebloom expires by 10%, and causes your Rejuvenation spell to also instantly heal for 10% of the total periodic effect.',
			'Increases the healing done when your Lifebloom expires by 15%, and causes your Rejuvenation spell to also instantly heal for 15% of the total periodic effect.'
		],
		x: 0,
		y: 5
	},
	{
		i: 8265,
		n: 'Swift Rejuvenation',
		m: 1,
		s: [33886],
		d: [
			'Reduces the global cooldown of your Rejuvenation by 0 sec.'
		],
		x: 2,
		y: 5
	},
	{
		i: 8271,
		n: 'Tree of Life',
		m: 1,
		s: [33891],
		d: [
			'Shapeshift into the tree of life, increasing healing done by 15% and increasing your armor by 120%. Also protects the caster from Polymorph effects. In addition, some of your spells are temporarily enhanced while shapeshifted. Lasts 25 sec.<br /><br />Enhanced spells: Lifebloom, Wild Growth, Regrowth, Entangling Roots, Wrath'
		],
		t: ['6% of base mana<table width="100%"><tr><td>Instant</td><th>3 min cooldown</th></tr></table>'],
		x: 1,
		y: 6,
		r: [15,1]
	}
	]
}
]);