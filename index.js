const image = document.querySelector("#myImage");
const text = document.querySelector("h2");

const buttonOne = document.querySelector("#one");
const buttonTwo = document.querySelector("#two");

buttonOne.addEventListener("click", mrBig);
buttonTwo.addEventListener("click", Aldo);


function mrBig() {
    image.setAttribute("src", "https://s-cdn.sportbox.ru/images/styles/1920_1080/fp_fotos/d6/5c/0e1e1ec67c4095981a73c13a4941787b5e2868dde87c4385696874.jpg");
    text.innerHTML = "СОСТОИТСЯ ЛИ БОЙ?";
    buttonOne.innerHTML = "ДА";
    buttonTwo.innerHTML = "ДА, НО НЕ СРАЗУ";

    buttonOne.addEventListener("click", fight);
    buttonTwo.addEventListener("click", jail);
    
}

function fight() {
    image.setAttribute("src", "https://ss.sport-express.ru/userfiles/materials/130/1303075/full.jpg");
    text.innerHTML = "БОЙ СОСТОЯЛСЯ В ЛАС-ВЕГАСЕ НА K-MOBILE ARENE! ПРОДАВ РЕКОРДНЫЕ 2.5 МИЛЛИОНА ПЛАТНЫХ ТРАНСЛЯЦИЙ!"
    buttonOne.style = "display:none";
    buttonTwo.style = "display:none";
}

function jail() {
    image.setAttribute("src", "https://img.sportsdaily.ru/resize_cache/436449/379a1de5b085e99e3eb4bdfe96a0a3fb/iblock/408/408a77e92377aa72d71e2a9c5c6082b1/bfe39f31206a49fed2aea49ef854e371.Jpg");
    text.innerHTML = "БОЙ ОТТЯГИВАЛСЯ ИЗ-ЗА СУДЕБНЫХ РАЗБИРАТЕЛЬСТВ МАКГРЕГОРА!" 
    buttonOne.style = "display:none";
    buttonTwo.style = "display:none";
}


function Aldo() {
    image.setAttribute("src", "https://mma.metaratings.ru/storage/images/56/00/560095f949b0e4aeb8dd9313608e88ba.jpg");
    text.innerHTML = "СОСТОИТСЯ ЛИ БОЙ?"
    buttonOne.innerHTML = "ДА";
    buttonTwo.innerHTML = "ДА, НО НЕ СРАЗУ";

    buttonOne.addEventListener("click", performance);
    buttonTwo.addEventListener("click", injured);
}

function performance() {
    image.setAttribute("src", "https://m.allboxing.ru/sites/default/files/20151212101819_gettyimages501167550.jpg");
    text.innerHTML = "БОЙ СОСТОЯЛСЯ В ЛАС-ВЕГАСЕ НА UFC 194! МакГрегор нокаутировал соперника на 13-й секунде боя. "
    buttonOne.style = "display:none";
    buttonTwo.style = "display:none";
}

function injured() {
    image.setAttribute("src", "https://parlersport.com/wp-content/uploads/2020/07/Jose-Aldo-fait-une-declaration-surprenante-sur-la-reduction-de.jpg");
    text.innerHTML = "ПЕРЕД UFC 194 У АЛЬДО БЫЛИ ПРОБЛЕМЫ С ВЕСОГОНКОЙ!"
    buttonOne.style = "display:none";
    buttonTwo.style = "display:none";
}