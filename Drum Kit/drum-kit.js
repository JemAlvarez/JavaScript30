const transitionDuration = 70
const transitionEl = document.querySelector('.key')

transitionEl.style.transitionDuration = `${transitionDuration}ms`

window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`)

    if (!audio) return
    audio.currentTime = 0
    audio.play()

    key.classList.add('playing')

    setTimeout(() => {
        key.classList.remove('playing')
    }, transitionDuration + 50);
})