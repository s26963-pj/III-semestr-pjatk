function oblicz(){
   var x = document.getElementById('firstNumber');
   var y = document.getElementById('secondNumber');
   var dzialanie = document.getElementById('action');

   if (dzialanie.value == '+'){
    var parent = document.getElementById('result');
    parent.innerHTML = parseFloat(x.value) + parseFloat(y.value);
   } else if (dzialanie.value == '-'){
    var parent = document.getElementById('result');
    parent.innerHTML = parseFloat(x.value) - parseFloat(y.value);
   }
   else if (dzialanie.value == '*'){
    var parent = document.getElementById('result');
    parent.innerHTML = parseFloat(x.value) * parseFloat(y.value);
   }
   else if (dzialanie.value == '/'){
    var parent = document.getElementById('result');
    if(y.value == '0'){
        parent.innerHTML = 'Nie mozna dzielic przez 0!'
    } else{
        parent.innerHTML = parseFloat(x.value) / parseFloat(y.value);
    }
   }
}