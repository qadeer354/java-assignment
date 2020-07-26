// var arr = ["/images/others/1.jpg","/images/others/2.jpg"];

var images = [
    'i1.webp',
    'i2.webp',
    'i3.webp',
    'i4.webp',
    'i5.webp',
    'i6.webp',
    'i7.webp',
    'i8.webp',
    'i9.webp',
   
];
// innerHtml on images  is not working so i did it with append

for (let index = 0; index < images.length; index++) {
    var oneee = document.getElementById('one');
    var e=  document.createElement('img');
    e.src = images[index];
    e.setAttribute('onclick','modelFunction(this);');
    oneee.append(e);
}   

function modelFunction(v) {
    var m = document.getElementById('modal');
    m.setAttribute('class','modal-open');
    m.removeAttribute('class','modal-close');
    m.style.display = 'block';
    document.getElementById('modal-img').src = v.src;
    
}
function onClosedImagModal(){
    var n = document.getElementById('modal');
    n.setAttribute('class','modal-close');
    n.removeAttribute('class','modal-open');
    setTimeout(()=>{ modal.style.display = "none"; }, 550)
}

function zoonIn() {
    var d= document.getElementById('para');
    var computedFontSize = window.getComputedStyle(document.getElementById("para")).fontSize;
    var fontSize = parseInt(computedFontSize);
    fontSize = fontSize + 10 + "px";
    d.style.fontSize = fontSize;
}

function zoomOut() {
    var d= document.getElementById('para');
    var computedFontSize = window.getComputedStyle(document.getElementById("para")).fontSize;
    var fontSize = parseInt(computedFontSize);
    fontSize = fontSize-10;
    d.style.fontSize = fontSize+"px";
}