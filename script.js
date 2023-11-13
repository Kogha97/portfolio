const resumeButton = document.getElementById('resume')

resumeButton.addEventListener('click',openCV)

function openCV(){
    let cvPath = 'Joao_Augusto_-_Front_end_Developer.pdf'

    window.open(cvPath, '_blank')
}