var drop_card = document.querySelector('.drop-card')
var drop_icon = document.querySelector('.drop-icon')

drop_icon.addEventListener('click', () => {
    drop_card.classList.toggle('right')
    drop_icon.classList.toggle('right')
    drop_icon.classList.toggle('color')
})