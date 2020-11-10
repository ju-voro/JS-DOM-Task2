const redBox = document.querySelector('.red');
const yellowBox = document.querySelector('.yellow');
const greenBox = document.querySelector('.green');

redBox.addEventListener('mouseenter', (e)=>{
    e.target.style.backgroundColor = 'red';
    yellowBox.style.backgroundColor = 'grey';
    greenBox.style.backgroundColor = 'grey';
});

yellowBox.addEventListener('mouseenter', (e) => {
    e.target.style.backgroundColor = 'yellow';
    redBox.style.backgroundColor = 'grey';
    greenBox.style.backgroundColor = 'grey';
})

greenBox.addEventListener('mouseenter', (e) => {
    e.target.style.backgroundColor = 'green';
    redBox.style.backgroundColor = 'grey';
    yellowBox.style.backgroundColor = 'grey';
})

redBox.addEventListener('mouseleave', () => {
    console.log('mouse out')
    redBox.style.backgroundColor = 'grey';
})

yellowBox.addEventListener('mouseleave', (e) => {
    yellowBox.style.backgroundColor = 'grey';
})

greenBox.addEventListener('mouseleave', (e) => {
    greenBox.style.backgroundColor = 'grey';
})