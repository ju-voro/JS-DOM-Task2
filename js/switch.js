const firstBox = document.querySelector('.first');
const secondBox = document.querySelector('.second');

firstBox.addEventListener('mouseenter', (event) =>{
   event.target.style.background = 'red';
    secondBox.style.background = 'grey';
})

secondBox.addEventListener('mouseenter', (event) => {
    console.log(event);
    event.target.style.backgroundColor = 'red';
    
    firstBox.style.background = 'grey';
})