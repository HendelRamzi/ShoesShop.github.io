btn = document.querySelector('.menuBtn').addEventListener('click', (e)=>{
    e.preventDefault();
    toggleLogic()
})

btn = document.querySelector('.closeBtn').addEventListener('click', (e)=>{
    e.preventDefault();
    toggleLogic()
})
// console.log(btn)


function toggleLogic(){
    document.querySelector('.menuBtn').classList.toggle('close');
    document.querySelector('.closeBtn').classList.toggle('close');
    document.querySelector('.menu').classList.toggle('close');
    document.querySelector('.main').classList.toggle('close');

}

