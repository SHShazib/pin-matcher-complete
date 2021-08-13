// 1. Common function 
// Empty Value 
function emptyValue(id){
    document.getElementById(id).value =  ' ';
}
// Display None
function displayNone(id){
    document.getElementById(id).style.display = 'none';
}
// Display Block 
function displayBlock(id){
    document.getElementById(id).style.display = 'block';
}

// 2. Get random pin number 
function randomNum(){
    var randomNum = Math.floor(1000 + Math.random() * 9000);
    document.getElementById('generatePin').value = randomNum;

    emptyValue('inputPin');
    displayNone('matched');
    displayNone('unmatched');
    displayNone('try-content');
}
// 3. Input Number Value 
function btnKey(id){
    let previousNumber = document.getElementById('inputPin').value;
    let key = document.getElementById(id).innerHTML;
    document.getElementById('inputPin').value = previousNumber + key;
}

// 4. Remove input pin last number 
function removeNumber() {
    var inputNumber = document.getElementById('inputPin').value;
    var removeNumber =inputNumber.slice(0, inputNumber.length - 1);
    document.getElementById('inputPin').value = removeNumber;
}

// 5.Submit button / pin matcher 
function submitBtn(){
    var randomNum = document.getElementById('generatePin').value;
      var randomNumber=parseFloat(randomNum);
    var inputNumber = document.getElementById('inputPin').value;

    if(randomNumber == inputNumber){
        displayBlock('matched');
    }
    else {
        displayBlock('unmatched');
        displayBlock('try-content');
        tryLeft('tryLeft');

    }
    emptyValue('generatePin');
}

//6.Pin matcher error / try 3 left
function  tryLeft(id){
    var tryAgain = document.getElementById(id).innerHTML;
    document.getElementById(id).innerHTML -= 1;
    if (tryAgain == '1'){
        disableBtn('submit');
    }
}

// 7.Try Left expired - submit button disable
function disableBtn(id){
    let button = document.getElementById(id);
    button.setAttribute('disabled', 'true');
    button.title = 'Please Reload Page'
}

