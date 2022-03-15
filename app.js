var bill =document.querySelector("#billamount")
var cash=document.querySelector("#cashgiven")
var check1=document.querySelector("#checkbutton")
var noOfnotes=document.querySelectorAll(".no-of-notes")
var message1=document.querySelector("#msg")
var remainAmount=0

var notes=[2000, 500, 100, 20, 10, 5, 1]


function handler1()
{
    console.log(bill.value)
    if(bill.value<=0)
    {
        message1.innerText="enter valid amount";

    }
  else if(bill.value>cash.value)
    {
        message1.innerText="please enter valid amount"
    }
    else if(bill.value===cash.value)
    {
        message1.innerText="No need to give change"
    }


    else if(bill.value<=cash.value)
    {
        var amount_returned=cash.value-bill.value
        for(var i=0;i<=notes.length;i++)
        {
            var result=Math.trunc(amount_returned/notes[i]);
            
            amount_returned=amount_returned%notes[i]
            console.log(result)
            noOfnotes[i].innerText=result
        }
    }

}
check1.addEventListener("click",handler1)



