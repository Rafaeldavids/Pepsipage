var back = document.getElementById('background')
var lata = document.getElementById('lata')
var branca = document.getElementById('white')
var azul = document.getElementById('azul')
var preta = document.getElementById('preta')


azul.addEventListener('mouseover',function(){
    back.style.backgroundColor = "#0062be"
    document.getElementById('lata').src = "pepsi001.png"
})

branca.addEventListener("mouseenter",function(){
    console.log('push')
    back.style.backgroundColor= '#e60c2c';
    document.getElementById('lata').src = "pepsi002.png"
    
})

branca.addEventListener('mouseleave',function(){
    back.style.backgroundColor = "#0062be"
    document.getElementById('lata').src = "pepsi001.png"
})


preta.addEventListener("mouseover",function(){
    console.log('push')
    back.style.backgroundColor= 'black';
    document.getElementById('lata').src = "pepsi003.png"
    
})

preta.addEventListener('mouseleave',function(){
    back.style.backgroundColor = "#0062be"
    document.getElementById('lata').src = "pepsi001.png"
})


