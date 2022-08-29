var bill = document.querySelector("#billamount")
var cash = document.querySelector("#cashgiven")
var check1 = document.querySelector("#checkbutton")
var noOfnotes = document.querySelectorAll(".no-of-notes")
var message1 = document.querySelector("#msg")
var remainAmount = 0

var notes = [2000, 500, 100, 20, 10, 5, 1]


function handler1() {
    let bill1 = Number(bill.value);
    let cash1 = Number(cash.value);
    console.log(bill1, cash1)
    if (bill1 === 0 || cash1 === 0) {
        message1.innerText = "Enter the money properly"
    }
    // if (bill1 <= 0) {
    //     message1.innerText = "enter valid amount";

    // }
    else if (bill1 > cash1) {
        message1.innerText = "Bill is greater than cash so give valid amount"
    }
    else if (bill1 === cash1) {
        message1.innerText = "No need to give change"
        for (var i = 0; i <= notes.length; i++) {

            noOfnotes[i].innerText = 0;
        }

    }


    else if (bill1 <= cash1) {
        var amount_returned = cash1 - bill1
        for (var i = 0; i <= notes.length; i++) {
            var result = Math.trunc(amount_returned / notes[i]);

            amount_returned = amount_returned % notes[i]
            console.log(result)
            noOfnotes[i].innerText = result
        }
    }

}
check1.addEventListener("click", handler1)



