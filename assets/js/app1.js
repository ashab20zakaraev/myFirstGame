let btn = document.getElementById('btn');
let btn2 = document.getElementById('clear');

let one = document.getElementById('one');

let userNum = document.getElementById('user__num').value;

let out = document.getElementById('out');

function clear() {
    let userNum = document.getElementById('user__num').value = '';
    
    let plus = document.getElementById('plus').checked = false;
    let minus = document.getElementById('minus').checked = false;
    let mult = document.getElementById('mult').checked = false;
    let div = document.getElementById('div').checked = false;
    
    document.getElementById('out').innerHTML = '';
    document.getElementById('one').innerHTML = '';
    
    document.getElementById('user__num').focus();
};


function boxClick() {
    let one = document.getElementById('one');
    
    one.textContent = document.getElementById('user__num').value;
    
    document.getElementById('user__num').value = '';
    
    document.getElementById('user__num').focus();
};

function search() {
    let one = document.getElementById('one').innerHTML;
    one = parseInt(one);
    
    let userNum = document.getElementById('user__num').value;
    userNum = parseInt(userNum)
    
    let plus = document.getElementById('plus');
    let minus = document.getElementById('minus');
    let mult = document.getElementById('mult');
    let div = document.getElementById('div');
    
    let out = document.getElementById('out');
    
    if ( plus.checked ) {
        
        let result = one + userNum;
        
        out.textContent = result;
        
    } else if ( minus.checked ) {
        
        let result = one - userNum;
        
        out.textContent = result;
        
    } else if ( mult.checked ) {
        
        let result = one * userNum;
        
        out.textContent = result;
        
    } else if ( div.checked ) {
        
        let result = one / userNum;
        
        out.textContent = result;
        
    };
};

function validate(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode( key );
  var regex = /[0-9]|\./;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
};

btn.addEventListener('click', search);
btn2.addEventListener('click', clear);






