let btnPlay = document.querySelector('#id_play')
let btnInfo = document.querySelector('#id_info')
let closeModal = document.querySelector('#exit_modal')
let video = document.querySelector('#video')
let modalIndoExit = document.querySelector('#exit_modal_info')

btnPlay.addEventListener('click', modalVideo)
closeModal.addEventListener('click', exitModal)
btnInfo.addEventListener('click', info)
modalIndoExit.addEventListener('click', exitModal2)

function info() {
    document.querySelector('.modal_info').style.display = 'block'
}

function modalVideo() {
    document.querySelector('.modal_trailer').style.display = 'block'
    video.innerHTML +=
        '<iframe id="youtube" width="800" height="600" src="https://www.youtube.com/embed/LHTYpWI3S6Q?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}

function exitModal() {
    document.querySelector('.modal_trailer').style.display = 'none'
    let videoYoutube = document.querySelector('#youtube')
    videoYoutube.parentNode.removeChild(videoYoutube)
}

function exitModal2() {
    document.querySelector('.modal_info').style.display = 'none'
}