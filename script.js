const resumeButton = document.getElementById('resume')
const resumeButtonHamburger = document.getElementById('resume2')
resumeButton.addEventListener('click',openCV)
resumeButtonHamburger.addEventListener('click',openCV)
function openCV(){
    let cvPath = 'Joao_Augusto_-_Front_end_Developer.pdf'

    window.open(cvPath, '_blank')
}

const logoButton = document.querySelector('.logo')

logoButton.addEventListener('click', scrollUp)

function scrollUp(){
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    })
}