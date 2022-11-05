const btnShare = document.getElementById('btn')
const btnImage = document.getElementById('btn-image')
const balao = document.getElementById('balao')

btnShare.addEventListener('click', function () {
    balao.classList.toggle('aparecer')
    btnShare.classList.toggle('bg-active')
    btnImage.classList.toggle('seta-branca')
})