const resumeButton = document.getElementById('resume')

resumeButton.addEventListener('click',openCV)

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