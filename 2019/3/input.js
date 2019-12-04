parseWire = wire => {
	return wire.split(',').map(movement => {
		return [movement.substring(0, 1), parseInt(movement.substring(1), 10)];
	});
};

module.exports = {
	sampleInputs: [
		{
			wire_a: parseWire('R8,U5,L5,D3'),
			wire_b: parseWire('U7,R6,D4,L4'),
			closest: 6,
			steps: 30,
		},
		{
			wire_a: parseWire('R75,D30,R83,U83,L12,D49,R71,U7,L72'),
			wire_b: parseWire('U62,R66,U55,R34,D71,R55,D58,R83'),
			closest: 159,
			steps: 610,
		},
		{
			wire_a: parseWire('R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51'),
			wire_b: parseWire('U98,R91,D20,R16,D67,R40,U7,R15,U6,R7'),
			closest: 135,
			steps: 410,
		},
	],
	input: {
		wire_a: [
			['R', 990],
			['D', 362],
			['L', 316],
			['U', 101],
			['R', 352],
			['U', 798],
			['L', 314],
			['D', 564],
			['R', 961],
			['D', 634],
			['L', 203],
			['U', 601],
			['R', 973],
			['U', 227],
			['R', 996],
			['D', 639],
			['L', 868],
			['D', 135],
			['L', 977],
			['D', 201],
			['R', 911],
			['D', 486],
			['R', 906],
			['U', 719],
			['L', 546],
			['U', 324],
			['R', 302],
			['D', 200],
			['L', 879],
			['D', 206],
			['L', 872],
			['U', 681],
			['R', 628],
			['D', 272],
			['R', 511],
			['D', 827],
			['L', 929],
			['U', 915],
			['L', 399],
			['U', 696],
			['R', 412],
			['D', 640],
			['R', 234],
			['U', 487],
			['R', 789],
			['U', 354],
			['L', 620],
			['D', 914],
			['L', 7],
			['D', 228],
			['L', 55],
			['D', 591],
			['L', 250],
			['D', 228],
			['R', 816],
			['U', 935],
			['R', 553],
			['U', 98],
			['L', 833],
			['D', 418],
			['R', 582],
			['D', 793],
			['R', 804],
			['U', 283],
			['R', 859],
			['D', 206],
			['L', 842],
			['U', 663],
			['L', 935],
			['U', 495],
			['L', 995],
			['D', 181],
			['R', 75],
			['D', 33],
			['R', 126],
			['U', 489],
			['L', 894],
			['D', 675],
			['R', 33],
			['U', 239],
			['L', 623],
			['D', 931],
			['L', 830],
			['U', 63],
			['R', 77],
			['D', 576],
			['L', 85],
			['D', 415],
			['R', 443],
			['U', 603],
			['R', 654],
			['U', 495],
			['L', 273],
			['U', 583],
			['R', 10],
			['D', 648],
			['L', 840],
			['U', 904],
			['R', 489],
			['D', 655],
			['R', 997],
			['U', 559],
			['L', 614],
			['U', 917],
			['R', 809],
			['U', 540],
			['L', 41],
			['U', 519],
			['R', 256],
			['U', 111],
			['R', 29],
			['D', 603],
			['L', 931],
			['U', 518],
			['R', 443],
			['D', 51],
			['L', 788],
			['U', 483],
			['L', 665],
			['U', 890],
			['L', 392],
			['D', 701],
			['R', 907],
			['D', 125],
			['L', 438],
			['D', 107],
			['L', 266],
			['U', 766],
			['R', 743],
			['D', 343],
			['R', 898],
			['U', 293],
			['L', 318],
			['U', 417],
			['L', 23],
			['U', 44],
			['L', 668],
			['U', 614],
			['R', 83],
			['U', 31],
			['R', 452],
			['U', 823],
			['R', 16],
			['D', 418],
			['R', 68],
			['U', 823],
			['L', 53],
			['D', 638],
			['L', 394],
			['D', 714],
			['R', 992],
			['U', 196],
			['R', 913],
			['D', 526],
			['L', 458],
			['U', 428],
			['L', 412],
			['U', 901],
			['R', 610],
			['U', 348],
			['L', 904],
			['D', 815],
			['R', 274],
			['U', 439],
			['R', 207],
			['D', 81],
			['L', 20],
			['D', 507],
			['L', 179],
			['U', 249],
			['L', 221],
			['U', 603],
			['L', 897],
			['U', 490],
			['R', 127],
			['U', 99],
			['L', 709],
			['U', 925],
			['L', 818],
			['D', 777],
			['R', 292],
			['U', 935],
			['R', 801],
			['U', 331],
			['R', 412],
			['U', 759],
			['L', 698],
			['D', 53],
			['L', 969],
			['U', 492],
			['L', 502],
			['D', 137],
			['R', 513],
			['D', 999],
			['L', 808],
			['D', 618],
			['L', 240],
			['U', 378],
			['L', 284],
			['D', 726],
			['L', 609],
			['U', 530],
			['R', 537],
			['D', 36],
			['L', 504],
			['D', 26],
			['R', 244],
			['D', 692],
			['L', 186],
			['U', 767],
			['L', 690],
			['U', 182],
			['R', 559],
			['D', 926],
			['R', 706],
			['D', 132],
			['L', 325],
			['D', 846],
			['R', 494],
			['U', 238],
			['L', 519],
			['U', 655],
			['R', 57],
			['U', 658],
			['L', 471],
			['D', 717],
			['L', 964],
			['D', 346],
			['L', 448],
			['U', 286],
			['L', 457],
			['D', 504],
			['R', 614],
			['U', 652],
			['R', 583],
			['D', 780],
			['R', 882],
			['U', 417],
			['R', 573],
			['D', 297],
			['L', 144],
			['U', 347],
			['L', 254],
			['D', 589],
			['L', 387],
			['U', 309],
			['L', 88],
			['D', 510],
			['R', 435],
			['U', 636],
			['L', 640],
			['U', 801],
			['R', 774],
			['U', 678],
			['R', 247],
			['D', 846],
			['L', 775],
			['U', 527],
			['L', 225],
			['U', 798],
			['R', 577],
			['U', 897],
			['R', 11],
			['U', 153],
			['L', 297],
			['D', 748],
			['L', 284],
			['U', 806],
			['R', 512],
			['U', 906],
			['L', 181],
			['U', 39],
			['R', 264],
			['D', 47],
			['L', 561],
			['D', 441],
			['L', 181],
			['U', 210],
			['L', 278],
			['U', 998],
			['R', 256],
			['D', 278],
			['R', 350],
			['U', 466],
			['L', 335],
			['D', 310],
			['L', 4],
			['U', 298],
			['L', 531],
			['D', 423],
			['R', 851],
			['U', 285],
			['L', 235],
			['D', 139],
			['R', 209],
			['U', 882],
			['R', 801],
			['D', 36],
			['L', 777],
			['D', 153],
			['L', 63],
		],
		wire_b: [
			['L', 995],
			['D', 598],
			['R', 577],
			['U', 346],
			['L', 797],
			['D', 375],
			['R', 621],
			['D', 709],
			['R', 781],
			['U', 55],
			['R', 965],
			['U', 327],
			['L', 479],
			['U', 148],
			['L', 334],
			['U', 93],
			['R', 644],
			['U', 632],
			['L', 557],
			['D', 136],
			['L', 690],
			['D', 548],
			['R', 982],
			['D', 703],
			['L', 971],
			['U', 399],
			['R', 600],
			['D', 785],
			['L', 504],
			['U', 984],
			['R', 18],
			['U', 190],
			['L', 755],
			['D', 737],
			['L', 787],
			['D', 921],
			['R', 303],
			['U', 513],
			['L', 544],
			['U', 954],
			['L', 814],
			['U', 239],
			['R', 550],
			['D', 458],
			['R', 518],
			['D', 538],
			['R', 362],
			['D', 350],
			['L', 103],
			['U', 17],
			['L', 362],
			['D', 480],
			['L', 80],
			['U', 639],
			['L', 361],
			['D', 75],
			['L', 356],
			['D', 849],
			['R', 635],
			['U', 633],
			['R', 934],
			['U', 351],
			['L', 314],
			['U', 960],
			['R', 657],
			['U', 802],
			['L', 687],
			['U', 385],
			['L', 558],
			['D', 984],
			['L', 996],
			['U', 765],
			['L', 147],
			['D', 366],
			['R', 908],
			['U', 981],
			['R', 44],
			['U', 336],
			['R', 396],
			['U', 85],
			['R', 819],
			['D', 582],
			['L', 21],
			['D', 920],
			['L', 627],
			['D', 103],
			['R', 922],
			['U', 195],
			['L', 412],
			['D', 385],
			['L', 159],
			['U', 446],
			['L', 152],
			['U', 400],
			['L', 303],
			['U', 549],
			['R', 734],
			['D', 709],
			['R', 661],
			['U', 430],
			['R', 177],
			['U', 857],
			['L', 53],
			['U', 555],
			['R', 35],
			['D', 919],
			['L', 163],
			['D', 630],
			['L', 162],
			['U', 259],
			['R', 46],
			['D', 89],
			['R', 965],
			['D', 410],
			['R', 37],
			['U', 39],
			['R', 621],
			['D', 606],
			['L', 816],
			['D', 659],
			['L', 668],
			['D', 418],
			['L', 775],
			['D', 911],
			['R', 296],
			['U', 488],
			['L', 129],
			['U', 869],
			['L', 455],
			['U', 663],
			['L', 942],
			['U', 813],
			['L', 274],
			['D', 677],
			['R', 161],
			['D', 338],
			['R', 455],
			['D', 580],
			['R', 976],
			['D', 984],
			['L', 336],
			['U', 742],
			['R', 334],
			['U', 130],
			['L', 210],
			['U', 523],
			['R', 958],
			['U', 177],
			['R', 126],
			['U', 469],
			['L', 513],
			['D', 14],
			['L', 772],
			['D', 423],
			['L', 369],
			['D', 661],
			['R', 167],
			['D', 449],
			['L', 685],
			['U', 871],
			['L', 930],
			['U', 630],
			['L', 54],
			['D', 581],
			['L', 921],
			['U', 839],
			['R', 782],
			['D', 844],
			['L', 581],
			['D', 995],
			['R', 110],
			['U', 365],
			['L', 594],
			['D', 595],
			['R', 391],
			['D', 298],
			['R', 297],
			['U', 469],
			['L', 148],
			['D', 34],
			['R', 5],
			['D', 609],
			['L', 654],
			['U', 172],
			['R', 940],
			['D', 858],
			['L', 682],
			['D', 92],
			['R', 395],
			['D', 683],
			['R', 947],
			['U', 311],
			['L', 850],
			['U', 151],
			['R', 452],
			['U', 641],
			['L', 599],
			['D', 640],
			['R', 86],
			['U', 584],
			['L', 518],
			['D', 597],
			['L', 724],
			['D', 282],
			['L', 691],
			['D', 957],
			['L', 119],
			['U', 30],
			['L', 8],
			['D', 514],
			['R', 237],
			['U', 599],
			['R', 775],
			['U', 413],
			['R', 802],
			['D', 132],
			['R', 925],
			['U', 133],
			['L', 980],
			['D', 981],
			['R', 272],
			['U', 632],
			['R', 995],
			['U', 427],
			['R', 770],
			['D', 722],
			['L', 817],
			['D', 609],
			['R', 590],
			['D', 799],
			['L', 699],
			['U', 923],
			['L', 881],
			['U', 893],
			['R', 79],
			['U', 327],
			['L', 405],
			['D', 669],
			['L', 702],
			['D', 612],
			['R', 895],
			['D', 132],
			['R', 420],
			['U', 958],
			['L', 955],
			['U', 993],
			['L', 817],
			['D', 492],
			['R', 453],
			['D', 342],
			['L', 575],
			['D', 253],
			['R', 97],
			['U', 54],
			['R', 456],
			['U', 748],
			['L', 912],
			['U', 661],
			['L', 987],
			['D', 182],
			['L', 816],
			['U', 218],
			['R', 933],
			['D', 797],
			['L', 207],
			['D', 71],
			['R', 546],
			['U', 578],
			['L', 894],
			['D', 536],
			['L', 253],
			['D', 525],
			['L', 164],
			['D', 673],
			['R', 784],
			['U', 915],
			['L', 774],
			['U', 586],
			['R', 733],
			['D', 80],
			['L', 510],
			['U', 449],
			['L', 403],
			['D', 915],
			['L', 612],
			['D', 325],
			['L', 470],
			['U', 179],
			['L', 460],
			['U', 405],
			['R', 297],
			['D', 803],
			['R', 637],
			['U', 893],
			['R', 565],
			['U', 952],
			['R', 550],
			['U', 936],
			['R', 378],
			['D', 932],
			['L', 669],
		],
	},
};
