class Auto{

    rok = 0;
    przebieg = 0;
    cena_wyjsciowa = 0;
    cena_koncowa = 0;
    
    constructor(rok, przebieg, cena_wyjsciowa, cena_koncowa){
        this.rok = rok;
        this.przebieg = przebieg;
        this.cena_wyjsciowa = cena_wyjsciowa;
        this.cena_koncowa = cena_koncowa;
    }

    zad11a() {
        this.cena_wyjsciowa += 1000;
    }
    zad11b(){
        this.cena_koncowa -= (new Date().getFullYear() - this.rok) * 1000;
    }
    zad11c(){
        if(this.przebieg > 100000){
            let x = this.cena_wyjsciowa / 100000;
            x *= 10000;
            this.cena_wyjsciowa -= x;
        }
    }
    zad11d(){
        this.zad11c();
        this.zad11b;
    }
}

var tab = new Array();
function zad112e(car){
    if(car.cena_koncowa > 10000){
        tab.push(car);
    }
}
function zad112f(tab){
    tab.array.forEach(element => {
        element.rok += 1;
    });
}

//----------------------------------------------------------------------------------------------//

class Ocena{

    przedmiot;
    wartosc = 0;

    constructor(przedmiot, wartosc){
        this.przedmiot = przedmiot;
        this.wartosc = wartosc;
    }

}

class Student{
    tab = new Array();
    srednia = 0;
    imie;
    nazwisko;

    constructor(imie, nazwisko){
        this.imie = imie;
        this.nazwisko = nazwisko;
    }

    hello(){
        return "Witaj " + this.imie + " " + this.nazwisko + ", twoja średnia ocen to: " + this.srednia;
    }

    setOcena(ocena){
        if(typeof ocena == "object"){
            console.log('Ustawiam wartosc ' + ocena.wartosc + ' dla przedmiotu: ' + ocena.przedmiot);
            tab.push(ocena);
            this.srednia = 0;
            for(let i = 0; i < tab.length; i++){
                this.srednia += tab[i].wartosc;
            }
            console.log('dziele przez ' + tab.length)
            this.srednia /= tab.length;
        }
    }

    getOcena(){
        let string = '';
        for(let i = 0; i < tab.length; i++){
            string += 'Przedmiot: ' + tab[i].przedmiot + ' - ocena ' + tab[i].wartosc + ' ';
        }
        return string;
    }
}