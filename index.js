let billAmount;
let TipAmt;
let count = 0;
let result = document.querySelector("#res");
let tip = document.querySelector("#tipAmtPerPerson")
let total = document.querySelector("#totalPerPerson");
let gen = document.querySelector("#generate");
function calc(percentage) {
    billAmount = document.querySelector("#billamt").value;
    if (percentage === "perFive") {
        TipAmt = (billAmount * 5) / 100;
    }
    else if (percentage === "perTen") {
        TipAmt = (billAmount * 10) / 100;
    }
    else if (percentage === "perFifteen") {
        TipAmt = (billAmount * 15) / 100;
    }
    else if (percentage === "perTwentyFive") {
        TipAmt = (billAmount * 25) / 100;
    }
    else if (percentage === "perFifty") {
        TipAmt = (billAmount * 50) / 100;
    }
    else if (percentage === "perSeventyFive") {
        TipAmt = (billAmount * 75) / 100;
    }
}
function ope(mode) {
    if (mode === 'plus') {
        count++;
        result.innerHTML = count;
    }
    else if (mode === "minus" & count != 0) {
        count--;
        result.innerHTML = count;
    }
}
let clickState = 0;
function doAction() {
    clickState++
    if (clickState === 1) {

        tipCalc = TipAmt / count;
        totalCalc = (billAmount / count) + tipCalc;
        tip.textContent = tipCalc;
        total.textContent = totalCalc;
        gen.textContent = "RESET";
    }
    else if (clickState === 2) {
        document.querySelector("#billamt").value = '';
        result.textContent = 1;
        tip.textContent = 0.00;
        total.textContent = 0.00;
    }

}

