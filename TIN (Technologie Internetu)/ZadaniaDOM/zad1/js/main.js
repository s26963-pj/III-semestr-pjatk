function clickedButton1(){
    var div = document.createElement('div');
    div.setAttribute('class', 'divs');
    var parent =  document.getElementById('area');
    parent.appendChild(div);
}
function clickedButton2(){
    var parent = document.getElementById('area');
    parent.removeChild(parent.firstElementChild);
}
function clickedButton3(){
    var div = document.getElementById('3div');
    div.style.backgroundColor = "blue";
}
function clickedButton4(){
    var paragraph = document.createElement('p');
    var boxes = document.querySelectorAll('.divs');
    boxes.forEach(box => {
        box.innerHTML = '<p>Jakis tekst</p>';
    });
}