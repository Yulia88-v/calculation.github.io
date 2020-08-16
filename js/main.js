var main = function () {
    $("input").blur(function () {
        var $this = $(this);
        if ($this.val() != "") {
            $this.addClass('used');
        } else {
            $this.removeClass('used');
        }
    });

    $(".forgot-pass-link").click(function () {
        var $currentForm = $("div.sign-panel").not(".invisible-form");
        var $forgotForm = $("#forgot-pass-form");

        $currentForm.fadeOut(400, function () {
            $currentForm.addClass("invisible-form");
            $forgotForm.fadeIn(400, function () {
                $forgotForm.removeClass("invisible-form");
            })
        })
    });

    $(".register-link").click(function () {
        var $currentForm = $("div.sign-panel").not(".invisible-form");
        var $registerForm = $("#register-form");

        $currentForm.fadeOut(400, function () {
            $currentForm.addClass("invisible-form");
            $registerForm.fadeIn(400, function () {
                $registerForm.removeClass("invisible-form");
            })
        })
    });

    $(".login-link").click(function () {
        var $currentForm = $("div.sign-panel").not(".invisible-form");
        var $loginForm = $("#login-form");

        $currentForm.fadeOut(400, function () {
            $currentForm.addClass("invisible-form");
            $loginForm.fadeIn(400, function () {
                $loginForm.removeClass("invisible-form");
            })
        })
    });
};

$(document).ready(main);


var salaryTotal = new Array(800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350, 1400, 1450, 1500, 1550, 1600, 1650, 1700, 1750, 1800, 1850, 1900, 1950, 2000, 2050, 2100, 2150, 2200, 2250, 2300, 2350, 2400, 2450, 2500, 2550, 2600, 2650, 2700, 2750, 2800, 2850, 2900, 2950, 3000, 3050, 3100, 3150, 3200, 3250, 3300, 3350, 3400, 3450, 3500, 3550, 3600, 3650, 3700, 3750, 3800, 3850, 3900, 3950, 4000, 4050, 4100, 4150, 4200, 4250, 4300, 4350, 4400, 4450, 4500, 4550, 4600, 4650, 4700, 4750, 4800, 4850, 4900, 4950, 5000, 5050, 5100, 5150, 5200, 5250, 5300, 5350, 5400, 5450, 5500, 5550, 5600, 5650, 5700, 5750, 5800, 5850, 5900, 5950, 6000, 6050, 6100, 6150, 6200, 6250, 6300, 6350, 6400, 6450, 6500, 6550, 6600, 6650, 6700, 6750, 6800, 6850, 6900, 6950, 7000, 7050, 7100, 7150, 7200, 7250, 7300, 7350, 7400, 7450, 7500, 7550, 7600, 7650, 7700, 7750, 7800, 7850, 7900, 7950, 8000, 8050, 8100, 8150, 8200, 8250, 8300, 8350, 8400, 8450, 8500, 8550, 8600, 8650, 8700, 8750, 8800, 8850, 8900, 8950, 9000, 9050, 9100, 9150, 9200, 9250, 9300, 9350, 9400, 9450, 9500, 9550, 9600, 9650, 9700, 9750, 9800, 9850, 8900, 9950, 10000);
var one = new Array(190, 202, 213, 224, 235, 246, 258, 269, 280, 290, 300, 310, 320, 330, 340, 350, 360, 370, 380, 390, 400, 410, 421, 431, 442, 452, 463, 473, 484, 494, 505, 515, 526, 536, 547, 557, 568, 578, 588, 597, 607, 616, 626, 635, 644, 654, 663, 673, 682, 691, 701, 710, 720, 729, 738, 748, 757, 767, 776, 784, 793, 802, 811, 819, 828, 837, 846, 854, 863, 872, 881, 889, 898, 907, 916, 924, 933, 942, 951, 959, 968, 977, 986, 993, 1000, 1006, 1013, 1019, 1025, 1032, 1038, 1045, 1051, 1057, 1064, 107, 1077, 1083, 1089, 1096, 1102, 1107, 1111, 1116, 1121, 1126, 1131, 1136, 1141, 1145, 1150, 1155, 1160, 1165, 1170, 1175, 1179, 1184, 1189, 1193, 1196, 1200, 1204, 1208, 1212, 1216, 1220, 1224, 1228, 1232, 1235, 1239, 1243, 1247, 1251, 1255, 1259, 1263, 1267, 1271, 1274, 1278, 1282, 1286, 1290, 1294, 1298, 1302, 1306, 1310, 1313, 1317, 1321, 1325, 1329, 1333, 1337, 1341, 1345, 1349, 1352, 1356, 1360, 1364, 1368, 1372, 1376, 1380, 1384, 1388, 1391, 1395, 1399, 1403, 1407, 1411, 1415, 1419, 1422, 1425, 1427, 1430, 1432, 1435, 1437);
var two = new Array(211, 257, 302, 347, 365, 382, 400, 417, 435, 451, 467, 482, 498, 513, 529, 544, 560, 575, 591, 606, 622, 638, 654, 670, 686, 702, 718, 734, 751, 767, 783, 799, 815, 831, 847, 864, 880, 896, 912, 927, 941, 956, 971, 986, 1001, 1016, 1031, 1045, 1060, 1075, 1090, 1105, 1120, 1135, 1149, 1164, 1179, 1194, 1208, 1221, 1234, 1248, 1261, 1275, 1288, 1302, 1315, 1329, 1342, 1355, 1369, 1382, 1396, 1409, 1423, 1436, 1450, 1463, 1477, 1490, 1503, 1517, 1530, 1542, 1551, 1561, 1571, 1580, 1590, 1599, 1609, 1619, 1628, 1638, 1647, 1657, 1667, 1676, 1686, 1695, 1705, 1713, 1721, 1729, 1737, 1746, 1754, 1762, 1770, 1778, 1786, 1795, 1803, 1811, 1819, 1827, 1835, 1843, 1850, 1856, 1862, 1868, 1873, 1879, 1885, 1891, 1897, 1903, 1909, 1915, 1921, 1927, 1933, 1939, 1945, 1951, 1957, 1963, 1969, 1975, 1981, 1987, 1992, 1998, 2004, 2010, 2016, 2022, 2028, 2034, 2040, 2046, 2052, 2058, 2064, 2070, 2076, 2082, 2088, 2094, 2100, 2106, 2111, 2117, 2123, 2129, 2135, 2141, 2147, 2153, 2159, 2165, 2171, 2177, 2183, 2189, 3195, 2201, 2206, 2210, 2213, 2217, 2221, 2225, 2228);
var three = new Array(213, 259, 305, 351, 397, 443, 489, 522, 544, 565, 584, 603, 623, 642, 662, 681, 701, 720, 740, 759, 779, 798, 818, 839, 859, 879, 899, 919, 940, 960, 980, 1000, 1020, 1041, 1061, 1081, 1101, 1121, 1141, 1160, 1178, 1197, 1215, 1234, 1252, 1271, 1289, 1308, 1327, 1345, 1364, 1382, 1401, 1419, 1438, 1456, 1475, 1493, 1503, 1520, 1536, 1553, 1570, 1587, 1603, 1620, 1637, 1654, 1670, 1687, 1704, 1721, 1737, 1754, 1771, 1788, 1804, 1821, 1838, 1855, 1871, 1888, 1905, 1927, 1939, 1952, 1964, 1976, 1988, 2000, 2012, 2024, 2037, 2049, 2061, 2073, 2085, 2097, 2109, 2122, 2134, 2144, 2155, 2165, 2175, 2185, 2196, 2206, 2216, 2227, 2237, 2247, 2258, 2268, 2278, 2288, 2299, 2309, 2317, 2325, 2332, 2340, 2347, 2355, 2362, 2370, 2378, 2385, 2393, 2400, 2408, 2415, 2423, 2430, 2438, 2446, 2453, 2461, 2468, 2476, 2483, 2491, 2498, 2506, 2513, 2521, 2529, 2536, 2544, 2551, 2559, 2566, 2574, 2581, 2589, 2597, 2604, 2612, 2619, 2627, 2634, 2642, 2649, 2657, 2664, 2672, 2680, 2687, 2695, 2702, 2710, 2717, 2725, 2732, 2740, 2748, 2755, 2763, 2767, 2772, 2776, 2781, 2786, 2791, 2795);
var four = new Array(216, 262, 309, 355, 402, 448, 495, 541, 588, 634, 659, 681, 702, 724, 746, 768, 790, 812, 833, 855, 877, 900, 923, 946, 968, 991, 101, 1037, 1060, 1082, 1105, 1128, 1151, 1174, 1196, 1219, 1242, 1265, 1287, 1308, 1328, 1349, 1370, 1391, 1412, 1433, 1453, 1474, 1495, 1516, 1537, 1558, 1579, 1599, 1620, 1641, 1662, 1683, 1702, 1721, 1740, 1759, 1778, 1797, 1816, 1835, 1854, 1873, 1892, 1911, 1930, 1949, 1968, 1987, 2006, 2024, 2043, 2062, 2081, 2100, 2119, 2138, 2157, 2174, 2188, 2202, 2215, 2229, 2243, 2256, 2270, 2283, 2297, 2311, 2324, 2338, 2352, 2365, 2379, 2393, 2406, 2418, 2429, 2440, 2451, 2462, 2473, 2484, 2495, 2506, 2517, 2529, 2540, 2551, 2562, 2573, 2584, 2595, 2604, 2613, 2621, 2630, 2639, 2647, 2656, 2664, 2673, 2681, 2690, 2698, 2707, 2716, 2724, 2733, 2741, 2750, 2758, 2767, 2775, 2784, 2792, 2801, 2810, 2818, 2827, 2835, 2844, 2852, 2861, 2869, 2878, 2887, 2895, 2904, 2912, 2921, 2929, 2938, 2946, 2955, 2963, 2972, 2981, 2989, 2998, 3006, 3015, 3023, 3032, 3040, 3049, 3058, 3066, 3075, 3083, 3092, 3100, 3109, 3115, 3121, 3126, 3132, 3137, 3143, 3148);
var five = new Array(218, 265, 312, 359, 406, 453, 500, 547, 594, 641, 688, 735, 765, 789, 813, 836, 860, 884, 907, 931, 955, 979, 1004, 1029, 1054, 1079, 1104, 1129, 1154, 1179, 1204, 1229, 1254, 1279, 1304, 1329, 1354, 1379, 1403, 1426, 1448, 1471, 1494, 1517, 1540, 1563, 1586, 1608, 1631, 1654, 1677, 1700, 1723, 1745, 1768, 1791, 1814, 1837, 1857, 1878, 1899, 1920, 1940, 1961, 1982, 2002, 2023, 2044, 2064, 2085, 2106, 2127, 2147, 2168, 2189, 2209, 2230, 2251, 2271, 2292, 2313, 2334, 2354, 2372, 2387, 2402, 2417, 2432, 2447, 2462, 2477, 2492, 2507, 2522, 2537, 2552, 2567, 2582, 2597, 2612, 2627, 2639, 2651, 2663, 2676, 2688, 2700, 2712, 2724, 2737, 2749, 2761, 2773, 2785, 2798, 2810, 2822, 2834, 2845, 2854, 2863, 2872, 2882, 2891, 2900, 2909, 2919, 2928, 2937, 2946, 2956, 2965, 2974, 2983, 2993, 3002, 3011, 3020, 3030, 3039, 3048, 3057, 3067, 3076, 3085, 3094, 3104, 3113, 3122, 3131, 3141, 3150, 3159, 3168, 3178, 3187, 3196, 3205, 3215, 3224, 3233, 3242, 3252, 3261, 3270, 3279, 3289, 3298, 3307, 3316, 3326, 3335, 3344, 3353, 3363, 3372, 3381, 3390, 3396, 3402, 3408, 3414, 3420, 3426, 3432);
var six = new Array(220, 268, 315, 363, 410, 458, 505, 553, 600, 648, 695, 743, 790, 838, 869, 895, 920, 945, 971, 996, 1022, 1048, 1074, 1101, 1128, 1154, 1181, 1207, 1234, 1261, 1287, 1314, 1340, 137, 1394, 1420, 1447, 1473, 1500, 1524, 1549, 1573, 1598, 1622, 1647, 1671, 1695, 1720, 1744, 1769, 1793, 1818, 1842, 1867, 1891, 1915, 1940, 1964, 1987, 2009, 2031, 2053, 2075, 2097, 2119, 2141, 2163, 2185, 2207, 2229, 2251, 2273, 2295, 2317, 2339, 2361, 2384, 2406, 2428, 2450, 2472, 2494, 2516, 2535, 2551, 267, 2583, 2599, 2615, 2631, 2647, 2663, 2679, 2695, 2711, 2727, 2743, 2759, 2775, 2791, 2807, 2820, 2833, 2847, 2860, 2874, 2887, 2900, 2914, 2927, 2941, 2954, 2967, 2981, 2994, 3008, 3021, 3034, 3045, 3055, 3064, 3074, 3084, 3094, 3103, 3113, 3123, 3133, 3142, 3152, 3162, 3172, 3181, 3191, 3201, 3211, 3220, 3230, 3240, 3250, 3259, 3269, 3279, 3289, 3298, 3308, 3318, 3328, 3337, 3347, 3357, 3367, 3376, 3386, 3396, 3406, 3415, 3425, 3435, 3445, 3454, 3464, 3474, 3484, 3493, 3503, 3513, 3523, 3532, 3542, 3552, 3562, 3571, 3581, 3591, 3601, 3610, 3620, 3628, 3634, 3641, 3647, 3653, 3659, 3666);
jQuery(function () {
	jQuery('[data-toggle="tooltip"]').tooltip({
		'offset': 30,
	})
	})
jQuery.fn.validateNumerals = function () {
	if (!1 == jQuery.isNumeric(this.val())) {
		this.val(0)
	}
	if (this.val() < 0 || this.val() == undefined) this.val(0)
}
jQuery(document).ready(function ($) {
	nonMajorIncome = jQuery("#nonMajorityParentIncome");
	nonMajorOvernights = jQuery("#nonMajorityOvernights");
	majorIncome = jQuery("#majorityParentIncome");
	majorOvernights = jQuery("#majorityOvernights");
	numberChildren = jQuery("#numberofchildren");
	monthlyMedicalInsurance = jQuery("#monthlyMedicalInsurance");
	monthlyDayCareCost = jQuery("#monthlyDayCareCost");
	jQuery("#btn-calculate").click(function (e) {
		e.preventDefault()
	});
	nonMajorOvernights.change(function () {
		nonMajorOvernights.validateNumerals();
		changeValue(nonMajorOvernights.val(), 1)
	});
	majorOvernights.change(function () {
		majorOvernights.validateNumerals();
		changeValue(majorOvernights.val(), 2)
	});
	$toNumbers = $('.toNumber');
	$toNumbers.change(function () {
		$(this).validateNumerals()
	})
});
function changeValue(val, item) {
	val = Number(val);
	if (val < 0) {
		val = 0
	}
	if (val > 365) {
		val = 365
	}
	if (item == 1) {
		jQuery("#majorityOvernights").val(365 - val);
		jQuery("#nonMajorityOvernights").val(val)
	}
	if (item == 2) {
		jQuery("#nonMajorityOvernights").val(365 - val);
		jQuery("#majorityOvernights").val(val)
	}
}
function doCalculations() {
	var nonMajorIncome = jQuery("#nonMajorityParentIncome");
	var nonMajorOvernights = jQuery("#nonMajorityOvernights");
	var majorIncome = jQuery("#majorityParentIncome");
	var majorOvernights = jQuery("#majorityOvernights");
	var numberChildren = jQuery("#numberofchildren");
	var monthlyMedicalInsuranceNM = jQuery("#monthlyMedicalInsuranceNM");
	var monthlyDayCareCostNM = jQuery("#monthlyDayCareCostNM");
	var monthlyMedicalInsuranceM = jQuery("#monthlyMedicalInsuranceM");
	var monthlyDayCareCostM = jQuery("#monthlyDayCareCostM");
	val1 = Number(nonMajorIncome.val());
	val2 = Number(nonMajorOvernights.val());
	val3 = Number(majorIncome.val());
	val4 = Number(majorOvernights.val());
	val5 = Number(monthlyDayCareCostNM.val()) + Number(monthlyMedicalInsuranceNM.val());
	val6 = Number(monthlyDayCareCostM.val()) + Number(monthlyMedicalInsuranceM.val());
	var custodialTimeMonthly = 1;
	var nonCustodialNumber = val1 / (val3 + val1);
	var totalMonthlyIncome = val1 + val3;
	var totalIncomeA = String(totalMonthlyIncome);
	var theLength = totalIncomeA.length;
	var totalIncomeB = totalIncomeA.substr(theLength - 2, 2);
	var totalIncomeC = Number(totalIncomeB);
	if (totalIncomeC < 25) {
		var totalIncomeD = 0
	} else if (totalIncomeC > 75) {
		var totalIncomeD = 100
	} else {
		var totalIncomeD = 50
	}
	var totalIncome3 = totalMonthlyIncome - totalIncomeC + totalIncomeD;
	var nonMajorityParentOvernights = Number(val2);
	var majorityParentOvernights = Number(val4);
	var guidelineSupport = 0;
	num3 = jQuery("#numberofchildren").val();
	var menuItemLength = salaryTotal.length;
	for (i = 0; i < menuItemLength; i++) {
		if (totalIncome3 == salaryTotal[i]) {
			if (num3 == 1) {
				guidelineSupport = one[i]
			} else if (num3 == 2) {
				guidelineSupport = two[i]
			} else if (num3 == 3) {
				guidelineSupport = three[i]
			} else if (num3 == 4) {
				guidelineSupport = four[i]
			} else if (num3 == 5) {
				guidelineSupport = five[i]
			} else if (num3 == 6) {
				guidelineSupport = six[i]
			}
		}
		if (totalIncome3 > salaryTotal[menuItemLength - 1]) {
			if (num3 == 1) {
				guidelineSupport = one[menuItemLength - 1]
			} else if (num3 == 2) {
				guidelineSupport = two[menuItemLength - 1]
			} else if (num3 == 3) {
				guidelineSupport = three[menuItemLength - 1]
			} else if (num3 == 4) {
				guidelineSupport = four[menuItemLength - 1]
			} else if (num3 == 5) {
				guidelineSupport = five[menuItemLength - 1]
			} else if (num3 == 6) {
				guidelineSupport = six[menuItemLength - 1]
			}
		}
	}
	var keyExpensesNM = val5;
	var keyExpensesM = val6;
	if (keyExpensesNM == "") {
		keyExpensesNM = "0"
	}
	if (keyExpensesM == "") {
		keyExpensesM = "0"
	}
	nonMajoritySupport = guidelineSupport * nonCustodialNumber;
	var nonCustodialOvernightNumber = nonMajorityParentOvernights / 365;
	var custodialOvernightNumber = 1 - nonCustodialOvernightNumber;
	if (nonMajorityParentOvernights < 73) {
		guidelineSupport = nonMajoritySupport
	} else {
		var newGuidelineSupport = guidelineSupport * 1.5;
		var nonCustodialGuidelineSupport = newGuidelineSupport * nonCustodialNumber;
		custodialGuidelineSupport = newGuidelineSupport - nonCustodialGuidelineSupport;
		nonMajorityShareOfSupport = nonCustodialGuidelineSupport * custodialOvernightNumber;
		majorityShareOfSupport = custodialGuidelineSupport * nonCustodialOvernightNumber;
		guidelineSupport = nonMajorityShareOfSupport - majorityShareOfSupport
	}
	var expenseNM = (Number(keyExpensesNM) * nonCustodialNumber);
	var expenseM = (Number(keyExpensesM) * (1 - nonCustodialNumber));
	var totalSupport = Number(guidelineSupport) + expenseNM - expenseM;
	totalSupport = Math.round(totalSupport);
	console.log('SupportBefore: ' + totalSupport);
	if (totalSupport > 0) {
		whopays = "Father pays: "
	} else {
		whopays = "Mother pays: "
	}
	if (totalSupport < 0) {
		totalSupport = totalSupport * -1
	}
	var nonCustodialSupport3 = String(totalSupport);
	var answerLength = nonCustodialSupport3.length;
	if (answerLength == 4) {
		nonCustodialSupport3 = nonCustodialSupport3.substr(0, 1) + "," + nonCustodialSupport3.substr(1, 3)
	}
	if (answerLength == 5) {
		nonCustodialSupport3 = nonCustodialSupport3.substr(0, 2) + "," + nonCustodialSupport3.substr(2, 3)
	}
	if (answerLength == 6) {
		nonCustodialSupport3 = nonCustodialSupport3.substr(0, 3) + "," + nonCustodialSupport3.substr(3, 3)
	}
	nonCustodialSupport3 = whopays + '$' + nonCustodialSupport3 + '.00';
	if (totalSupport == 0) nonCustodialSupport3 = 'Nothing to pay, both are even';
	jQuery("#resultInput").html(nonCustodialSupport3);
	jQuery("#cscalc_result").show()
}
function clearButtons(e) {
	e.preventDefault();
	jQuery("#btn-clear").bind("click", function () {
		$("#cscalc_form input[type=text], #cscalc_form textarea").val("")
	})
};


   
