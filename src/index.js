const words = {
	0: "zero",
	1: "one",
	2: "two",
	3: "three",
	4: "four",
	5: "five",
	6: "six",
	7: "seven",
	8: "eight",
	9: "nine",
	10: "ten",
	11: "eleven",
	12: "twelve",
	13: "thirteen",
	14: "fourteen",
	15: "fifteen",
	16: "sixteen",
	17: "seventeen",
	18: "eighteen",
	19: "nineteen",
	20: "twenty",
	30: "thirty",
	40: "forty",
	50: "fifty",
	60: "sixty",
	70: "seventy",
	80: "eighty",
	90: "ninety",
};
module.exports = function toReadable (number) {
	if(words[number]) return words[number];

	let text = '';
	if(number >= 100) {
		text += toReadable(Math.floor(number/100)) + ' hundred ';
		number = number%100;
	}

	if(number > 0) {
		if(number < 20){
			text += words[number];
    	} else {
    		text += words[Math.floor(number/10)*10]+' ';

	    	if(number % 10 > 0) {
	    		text += words[number % 10];
	    	}
	    }
    }

    return text.trim();
}
