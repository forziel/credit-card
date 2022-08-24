const cardCvv = document.querySelector('.back-side .content .cvv');
const cardNumber = document.querySelector('.front-side .content .card-number');
const cardName = document.querySelector('.front-side .content .over .name');
const cardMonth = document.querySelector('.front-side .content .exp-date .month');
const cardYear = document.querySelector('.front-side .content .exp-date .year');

const inputCvv = document.querySelector('.input-container .cvv'); 
const inputNumber = document.querySelector('.input-container .card-number');
const inputName = document.querySelector('.input-container .name');
const inputMonth = document.querySelector('.input-container .exp-date #month'); 
const inputYear = document.querySelector('.input-container .exp-date #year');

const mastercard = document.querySelector('.mastercard');
const visa = document.querySelector('.visa');
const chip = document.querySelector('.chip');

new Cleave('.input-container .card-number',{
    creditCard: true,
    onCreditCardTypeChanged:function(type){
        console.log(type);

        if (type == 'mastercard') {
            visa.style.display='none';
            mastercard.style.display='block';
            chip.style.display='none';
        }else if(type == 'visa'){
            visa.style.display='block';
            mastercard.style.display='none';
            chip.style.display='none'
        } else {
            visa.style.display='none';
            mastercard.style.display='none';
            chip.style.display='block';
        }
        
    }
});



inputNumber.oninput = ()=>{
    cardNumber.innerText = inputNumber.value;
}
inputCvv.oninput = ()=>{
    cardCvv.innerText = inputCvv.value;
}
inputName.oninput = ()=>{
    cardName.innerText = inputName.value;
}
inputMonth.oninput = ()=>{
    cardMonth.innerText = inputMonth.value;
}
inputYear.oninput = ()=>{
    cardYear.innerText = inputYear.value;
}

inputCvv.onmouseenter = ()=>{
    document.querySelector('.front-side').style.transform='rotateY(-180deg)';
    document.querySelector('.back-side').style.transform='rotateY(180deg)';
}
inputCvv.onmouseleave = ()=>{
    document.querySelector('.front-side').style.transform='rotateY(0)';
    document.querySelector('.back-side').style.transform='rotateY(0)';
}