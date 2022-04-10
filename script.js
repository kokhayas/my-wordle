
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

// const first = document.querySelector("#first");
const second = document.querySelector("#second");
const third = document.querySelector("#third");
const fourth = document.querySelector("#fourth");
const fifth = document.querySelector("#fifth");

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

let count = 1;
countTry.textContent = `${count}回目`;

let now = document.querySelector(`#wordle${count} table`);
now.style.border = "solid 2px";
now.style.borderColor="blue";

disableFunc = (select) => {
	for (let i=1; i<=6; i++){
		if (i !== select){
			let first = document.querySelector(`#wordle${i} #first`);
			let second = document.querySelector(`#wordle${i} #second`);
			let third = document.querySelector(`#wordle${i} #third`);
			let fourth = document.querySelector(`#wordle${i} #fourth`);
			let fifth = document.querySelector(`#wordle${i} #fifth`);
			first.disabled = "true";
			second.disabled = "true";
			third.disabled = "true";
			fourth.disabled = "true";
			fifth.disabled = "true";
		}
	}
}
myFunc = () => {
	const first = document.querySelector(`#wordle${count} #first`);
	const second = document.querySelector(`#wordle${count} #second`);
	const third = document.querySelector(`#wordle${count} #third`);
	const fourth = document.querySelector(`#wordle${count} #fourth`);
	const fifth = document.querySelector(`#wordle${count} #fifth`);
	checkFunc(first, 0);
	checkFunc(second, 1);
	checkFunc(third, 2);
	checkFunc(fourth, 3);
	checkFunc(fifth, 4);
	countTry.textContent = `${count}回目`;

	count += 1;


	now.style.border = "";
	now.style.borderColor="";
	now = document.querySelector(`#wordle${count} table`);
	now.style.border = "solid 2px";
	now.style.borderColor = "blue";

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
