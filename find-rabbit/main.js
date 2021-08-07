const rabbitButton = document.querySelector('.find-rabbit')
const rabbit = document.querySelector('.rabbit')

rabbitButton.addEventListener('click', (e) => {
    const bodyRect = document.body.getBoundingClientRect();
    const rabbitRect = rabbit.getBoundingClientRect();
    const y = rabbitRect.top - bodyRect.top - (window.innerHeight/2) + (rabbitRect.height / 2);
    console.log(y);
    window.scrollTo({top:y, left: rabbitRect.left, behavior: 'smooth'})
})

