var banners = ["./img/imagem flor.png","./img/paisagem2.png"];
var bannerAtual = 0

function trocaBnner(){
    bannerAtual = (bannerAtual +1) %2;
    document.querySelector('.destaque img').src = banners[bannerAtual];
}

setInterval(trocaBnner, 3000);

//

const audio = document.querySelector('#audioplayer');

const inputRange = document.querySelector
('#input-range');

const buttonPlay = document.querySelector('#Play');

inputRange.addEventListener("input", () => { audio.volume = inputRange.value});

buttonPlay.addEventListener('Click', () => {
    audio.play();
});