let images = ["pp1.jpeg", "pp2.jpeg", "pp3.jpeg", "pp4.jpeg", "pp5.jpeg"];
let descriptions = ["Eskişehir hatırası sene bilmem kaç hey gidi günler heyy ", "Burası neresi inan hatırlamıyorum ama çok güzel çıkmışım ", "AAA bak burası araba fuarı klasik arabalar falan çok iyi", "Burasıda göksü parkı çok bi olayı yok", "Bu da bir klasik araba fuarından kalma hatta 3.resimle aynı gün  "];
let currentIndex = 0;

function changeImage() {
    let imgElement = document.querySelector('.gallery img');
    let descElement = document.querySelector('.gallery p');
    
    currentIndex = (currentIndex + 1) % images.length;
    imgElement.src = images[currentIndex];
    descElement.textContent = descriptions[currentIndex];
}

function prevImage() {
    let imgElement = document.querySelector('.gallery img');
    let descElement = document.querySelector('.gallery p');
    
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    imgElement.src = images[currentIndex];
    descElement.textContent = descriptions[currentIndex];
}

function randomImage() {
    let imgElement = document.querySelector('.gallery img');
    let descElement = document.querySelector('.gallery p');
    
    let randomIndex = Math.floor(Math.random() * images.length);
    currentIndex = randomIndex;
    imgElement.src = images[currentIndex];
    descElement.textContent = descriptions[currentIndex];
}

function firstImage() {
    let imgElement = document.querySelector('.gallery img');
    let descElement = document.querySelector('.gallery p');
    
    currentIndex = 0;
    imgElement.src = images[currentIndex];
    descElement.textContent = descriptions[currentIndex];
}
function nextImage() {
    let imgElement = document.querySelector('.gallery img');
    let descElement = document.querySelector('.gallery p');
    
    currentIndex = (currentIndex + 1) % images.length;
    imgElement.src = images[currentIndex];
    descElement.textContent = descriptions[currentIndex];
}
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.gallery').addEventListener('click', changeImage);
    document.querySelector('#prevButton').addEventListener('click', prevImage);
    document.querySelector('#randomButton').addEventListener('click', randomImage);
    document.querySelector('#firstButton').addEventListener('click', firstImage);
    document.querySelector('#nextButton').addEventListener('click', nextImage);
});
