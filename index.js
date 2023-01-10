const billTotalInputEl=document.getElementById('billTotalInput')
const tipTotalInputEl=document.getElementById('tipTotalInput')
const perPersonTotalEl=document.getElementById('perPersonTotal')
const numberOfPeopleEl=document.getElementById('numberOfPeople')


const removePEl=document.getElementById('removeP')
const addPEl=document.getElementById('addP')

const calBtnEl=document.getElementById('calBtn')

var billStore;
var tipStore;
var tipValue;
var totalBillValue;
var perPersonShare
var noOfPers=Number(numberOfPeopleEl.innerText);


// calBtnEl.onclick=()=>{
//     billStore=Number(billTotalInputEl.value)
//     tipStore=Number(tipTotalInputEl.value)
//     tipValue=billStore*(tipStore/100)
//     totalBillValue=billStore+tipValue

//     perPersonShare=(totalBillValue/noOfPers).toFixed(2)

//   perPersonTotalEl.innerText=` $ ${perPersonShare} `
// }


// removePEl.onclick=()=>{
//     if(numberOfPeopleEl.innerText!=1){
//         numberOfPeopleEl.innerText-=1
//         noOfPers-=1
//     }
    
// }

// addPEl.onclick=()=>{
//     noOfPers= Number(numberOfPeopleEl.innerText)
//     noOfPers+=1
//     numberOfPeopleEl.innerText=noOfPers

// }


function calculate(){
    billStore = Number(billTotalInputEl.value)
    tipStore = Number(tipTotalInputEl.value)
    
    tipValue= billStore*(tipStore/100)
    totalBillValue =  billStore+tipValue
    perPersonShare=  totalBillValue/noOfPers
    perPersonTotalEl.innerText=`$ ${perPersonShare.toFixed(2)}`  
}

removePEl.onclick=()=>{
    if(noOfPers!=1){
        numberOfPeopleEl.innerText-=1
        noOfPers-=1
    }
    calculate()
}

addPEl.onclick=()=>{
    noOfPers+=1
    numberOfPeopleEl.innerText=noOfPers
    calculate()
}