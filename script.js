

// Ha kérdésem van a további működéssel kapcsolatban :   https://stackoverflow.com/questions/507138/how-to-add-a-class-to-a-given-element

// pl:   Hogyan adjunk osztályt egy adott elemhez? :  element.classList.add("my-class");   (behelyettesítjük)


// - szükség van az element js reprezentációjára : document.getElementById("id")
// - esemény kiválasztása : onclick (a dir megmutatja)
// - funkcionalitás leírása : function () {...}


//  belső állapot : state   

//-------------------------------------------------------------------------------------------------------

/* 1.doboz: Kattintsra adjunk hozzá egy "blur" nevű class attributumot, majd újabb kattintásra vegyük le róla azt.  */

   var isBlurred = false;


   document.getElementById("element-one").onclick = function(){                // action -- esemény
    //console.log("ok");
  
      isBlurred = !isBlurred;                                                  // state chnage (megváltozik az állapot) 
      // az element-et kivettem és betettem a documentum részt, illetve az utolsó Id-t ("my-class") cseréltem: 
      // element.classList.add("my-class"); 

      if(isBlurred){                                                           // renderelés  ( a felhasználó számára újra kell rajzolni)
         document.getElementById("element-one").classList.add("blur");         // Kattintásra homályos lesz a doboz
      }
      else{
        document.getElementById("element-one").classList.remove("blur");       // Kattintásra törlődik a homyályosság
      }
   };

       // console.log(document.getElementById("element-one"));
       // console.dir(document.getElementById("element-one"));

//-------------------------------------------------------------------------------------------------------

/*    2.doboz: Ha az egérrel fölé megyünk, változzon meg a háttérszíne, ha levesszük róla az egeret, változzon vissza az eredeti színére.  */

     var egerOver = false;                                                      // state-t fogjuk változtatni. kezdetben általában false.

        document.getElementById("element-two").onmouseover = function(){        // action   
        egerOver = true;                                                        // state change
        renderSecondBox()                                                       // render ----> ezt a function-t mindegyik végére  be kell írni
        }

        document.getElementById("element-two").onmouseout = function(){
        egerOver = false;
        renderSecondBox()
        }

            function renderSecondBox(){

                if(egerOver){
                    document.getElementById("element-two").style.backgroundColor = "red";
                }
                else{
                    document.getElementById("element-two").style.backgroundColor = "";
                }
            }

//------------------------------------------------------------------------------------------------------

// how to get random number in the js - Hogyan lehet véletlen számot kapni JS-ben? 
//                  https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range

    /*  3.doboz: Dubla kattintással sorsoljon egy számot 1 és 20 között és módosítsa a kapott számmal a doboz tartalmát.  */


    function getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
   // console.log(getRandomArbitrary(1, 20))
   // console.dir(document.getElementById("element-three"));  // itt ki tudjuk venni 

    document.getElementById("element-three").ondblclick  = function(){             // ondblclick = duplakattintás 

        //document.getElementById("element-three").innerHTML = getRandomArbitrary(1, 20);   
        // az innerHTML elé be tudjuk illeszteni, hogy mit akarunk megváltoztatn. Ezt dir segítségével ki tudjuk választani.

        document.getElementById("element-three").firstElementChild.innerHTML= getRandomArbitrary(1, 20);     

    }  

//-------------------------------------------------------------------------------------------------------

/*  4.doboz: Kattintásra tűnjön el, majd 2 mp várakozás után ismét jelenjen meg.  */


    document.getElementById("element-four").onclick = function(){
         document.getElementById("element-four").classList.add("hidden");      // eltűnteti

        setTimeout( function(){
             document.getElementById("element-four").classList.remove("hidden");   // a hidden a css-ben található... érdemes ott
                                                                                   //  körülnézni ha hivatkozni akarunk valamire.
                                                                                   // A remove az  eltűntetést 2mp után törli --> visszajön a doboz
       }, 2000 );   
    }

//-------------------------------------------------------------------------------------------------------

     /* 5.doboz: Kattintásra alakítsa kör alakúra az összes dobozt.  */

    
                                                                        // a querySelector használható bármilyen szelektor alapján való kikérésre,
 //    console.log(document.querySelector('.container'));               // ... megnézhetjük konozolban az elemit.
 //    console.log(document.querySelector('.container').children);      // Mivel az elemek gyermekelemek, így megnézhetjük a children-ben is 
 //    console.log(document.querySelectorAll('.shape').children);       // ... és ebben a formában is


     document.getElementById("element-five").onclick = function(){
                        
      //  document.querySelector('#element-five')               // ID alapú kikérés, amihez #-t kell használni, mert csak onnan fogja tudni, h az ID.
      //  document.querySelector('.container')                  // class alapú kikérés, mikor  pontot (.) kell elé tenni

    var boxes = document.querySelectorAll(".shape");

    for(var box of boxes){                                      // iteráció
       // console.log(box);
       box.style.borderRadius = '50%';
    }
    };

//----------------------------------------------------------------------------------------------------    

/*  6. doboz: Form submit eseményre módosítsuk a doboz tartalmát az input mezőbe írt értékkel  */

// A 6.dobozra van egy input bekérés felhasználó által.

document.getElementById("box-6").onsubmit = function(event){    // ezek a function-ok nem csak meghívódnak, hanem paramétert is kapnak a hívás során.
                                                                // ... jelen esetben ez az 'event' object, ami mindeféle információt tartalmaz.
                                                                // Az event object - onsubmit kapcsolattal felül lehet írni az alap HTML-t.

event.preventDefault();                                         // ezzel akadályozzuk meg az alapműködést (preventDefault)
console.log("submit");                                          // az event, target kulcs alatt levő értékkel mutat arra az elementre, amelyre
                                                                // ...  az esemény bekövetkezett.   
                                                                
  document.getElementById("element-six").firstElementChild.innerHTML =  event.target.elements.boxNumber.value                                                             
///console.log(event.target.elements.boxNumber.value);
}

// Valamiért nem látszik a 'Küldés' gomb, pedig a konzolban jelen van.

//------------------------------------------------------------------------------------------------------

    /*  7. doboz:  Keypress eseményre írjuk be a dobozba az adott karaktert, amit leütöttek   */

    document.getElementById("box7-input").onkeypress = function(event){
      //  console.log(event);
      document.getElementById("box7-input").firstElementChild.innerHTML = event.key;

    }

    // A 'onkeypress' elavult  ----> így ezzel nem működik

//----------------------------------------------------------------------------------------------------

     /*  8. doboz:  Egérmozdítás eseményre írjuk be az egér pozíciójának x és y koordinátáját, 
                    a következő séma szerint: "X: {x-koordináta}, Y: {y-koordináta}"   */

   document.onmousemove = function(event){
   // console.log(event);

    var coordinate = "X:" + event.clientX + ", Y:" + event.clientY;

    //console.log(coordinate);
    document.getElementById("element-eight").firstElementChild.innerHTML = coordinate;
   }



//-----------------------------------------------------------------------------------------------------

      /*  9. doboz:  Submit eseményre módosítsuk a doboz tartalmát azzal az értékkel ami úgy áll elő, 
                     hogy végrehajtjuk a select inputban kiválasztott operációt, a state-en és number inputba beírt értéken.
                     Az előállt végeredményt tároljuk el új state-ként! -----> MAGYARUL EZ EGY SZÁMOLÓGÉP !!!
Pl:
  Number input mezőbe írt érték: 5
  Select inputban kiválasztott érték: "mult"
  Aktuális state: 9

  Operáció: 9 * 5
  
  Dobozba és state-be beírandó érték: 45
*/

// A régi állapotot, azaz a dobozok értékét módosítani kell.


     var state = 9;

     document.getElementById("box-9").onsubmit = function (event){

        event.preventDefault();                                              // az event-et, vagyis a tartalmat felülírjuk (prevenDefault)
        
        var operand = Number(event.target.elements.operand.value);           // Hozzá kell jussunk az egyes input adatokhoz
                                                                             // Operand  -->  html, 72. sor, name attributumában található,
                                                                             // ... és kell még hoozá az értéke (value).

        var operator = event.target.elements.operator.value;                 // Operator --> html, 66.sor, name attributum
        console.log(operand);
        console.log(operator);   
        
     // Figyelni kell arra, hogy  a log-olt érték sztring lesz ---> át kell konvertálni number típusú értékké---> kap egy Number-t
     //                                                              Number(event.target.elements.operand.value ) 
     // Onnan lehet tudni, hogy szám értéket kapunk vissza, hogy log-olva más a szám színe.(kék)   


   switch (operator){
        case "mult":
        // console.log(state * operand);
            state = state * operand;
        break;

        case "div":
            state = state / operand;
        break;

        case "add":
            state = state + operand;
        break;

        case "sub":
            state = state - operand;
        break;
    }
  
     document.getElementById("element-nine").firstElementChild.innerHTML = state;
                                                                           
    };

    //Ha folyamatosan számoltatom a számológépet, akkor mindig az utolsó kiszámolt értéket fogja figyelembevenni és azzal folytatja a számolást.
    
    


//------------------------------------------------------------------------------------------------------