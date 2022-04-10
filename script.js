
// const wordString = fs.readFileSync("wordList.txt").toString();
// console.log(wordString);
// const wordList = wordString.split("\n");

const wordString = "\
MOURN,\
AHEAD,\
BRINE,\
CLOTH,\
SWEET,\
MONTH,\
LAPSE,\
WATCH,\
TODAY,\
FOCUS,\
SMELT,\
TEASE,\
CATER,\
MOVIE,\
ALLOW,\
RENEW,\
THEIR,\
SLOSH,\
PURGE,\
CHEST,\
DEPOT,\
EPOXY,\
FOUND,\
SHALL,\
STOVE,\
LOWLY";

const countTry = document.getElementById("countTry");
const answer = document.getElementById("answer");
const wordList = wordString.split(",");

const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const fourth = document.getElementById("fourth");
const fifth = document.getElementById("fifth");

const startButton = document.getElementById("startButton");

const index = Math.floor(Math.random()*wordList.length);
const wordArray = wordList[index].split("");

console.log(wordList[index]);

checkFunc = (dom, index) => {
	// console.log(dom.value);

	if (dom.value.toUpperCase() === wordArray[index].toUpperCase()) {
		dom.style.border="solid 2px";
		dom.style.borderColor="green";
		console.log("green")
	}
	else if (wordArray.includes(dom.value.toUpperCase())) {
		dom.style.border="solid 2px";
		dom.style.borderColor="orange";
		console.log("orange");
	}
}

let count = 0;
countTry.textContent = `${count}回目`;

myFunc = () => {
	checkFunc(first, 0);
	checkFunc(second, 1);
	checkFunc(third, 2);
	checkFunc(fourth, 3);
	checkFunc(fifth, 4);
	count += 1;
	countTry.textContent = `${count}回目`;
	if (count > 5) {
		answer.textContent(`残念でした 正解は${wordList[index]}`)
	}
	// if (first.value === wordArray[0]) {
	// 	first.style.border="solid 2px";
	// 	first.style.borderColor="green";
	// 	console.log("green")
	// }
	// else if (wordArray.includes(first.value)) {

	// }


	console.log(wordList[index]);
}

startButton.onclick = myFunc;
