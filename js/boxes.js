const boxText = document.getElementById('box-text');
const box = document.querySelector('.box');

function paintRed(){
    box.style.background = 'red';
    boxText.innerHTML = 'red';
}

boxText.addEventListener('copy', ()=>{
    console.log('text copied');
});

box.addEventListener('mouseenter', () => {
    console.log('Mouse in');
})

box.addEventListener('mouseleave', () => {
    box.style.background = 'white';
    boxText.innerHTML = 'blank';
})