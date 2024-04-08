console.log("Działa");

function zad1(a, b, c){
    if ((a * a) + (b * b) == (c * c) || (a * a) + (c * c) == (b * b) || (b * b) + (c * c) == (a * a)) {
        console.log("Podane liczby tworza trojke pitagorejska");
    } else {
        console.log("Podane liczby NIE tworza trojki pitagorejskiej");
    }
}

function zad2(a,b,c){
    for (let index = a; index <= b; index++) {
        if (index%c == 0) {
            console.table(index);
        }  
    }
}

function zad3(a){      
    var calc = [];
 
    for (i = 0; i < a; i++) {
        calc.push([]);
 
        for (let j = 0; j < a; j++) {
            calc[i][j] = (i+1) * (j+1) + " ";
        }
               
    console.log( calc[i].join(""));  
   }
}

function zad4(a){
    x = 0;
    y = 1;
    for(let i = 0; i < a; i ++){
        console.log(y);
        y += x;
        x = y - x;
    }
}

function zad5(x){
    let y = 1;
    let text = '*';
    for(let i = 0; i < x; i ++){
        console.log(text.repeat(y));
        y++;
    }

}

function zad6(a){
    let width = parseInt(a + (a / 2));
    let height = a;

    var line = "*".repeat(width);

    for(i = 0; i < height; i ++){
        line[width/2] = "";
        console.log(line);
    }

    console.log(row);
}

function zad7(nazwa_figury, a, b, h){
    let pole;
    switch(nazwa_figury){
        case "prostokat": 
            pole = prostokat(a,b);
            break;
        case "trapez":
            pole = trapez(a, b, h);
            break;
        case "rownoleglobok":
            pole = rownoleglobok(a, h);
            break;
        case "trojkat":
            pole = trojkat(a, h);
            break;
        default:
            console.log("Nie ma takiej figury");
    }

    console.log("Pole " + nazwa_figury + " = " + pole);
}

function prostokat(a,b){
    return a * b;
}

function trapez(a,b,h){
    return ((a + b) * h)/ 2;
}

function rownoleglobok(a, h){
    return a * h;
}

function trojkat(a, h){
    return (a * h) / 2;
}

function zad8(nazwa_figury, a, b, h){
    zad7(nazwa_figury, a, b, h);
}

function zad9(height){
    if (height === 0){
        return [];
    }
    if (height === 1){
        return [[1]];
    }
    let result = [];
    for (let row = 1; row <= height; row++) {
        let arr = [];
        for (let col = 0; col < row; col++) {
            if (col === 0 || col === row - 1) {
                arr.push(1);
            } else {
                arr.push((result[row-2][col-1] + result[row-2][col]));
            }
        }
        result.push(arr);
    }
    return result;
}

function zad10(niedozwoloneTab, tekst){
    let niedozwolone = [niedozwoloneTab];
    let text = "" + tekst;
    let replace = [];
    for(let i = 0; i < niedozwolone.length; i ++){
        text = text.replace(niedozwolone[i], '*');
    }

    console.log(niedozwolone);
    console.log(text);
}