function saveUnits() {
    extraSizeUnit = JSON.parse(localStorage.getItem('extraSizeUnit'))
    weightUnit = JSON.parse(localStorage.getItem('weightUnit'))
    sizeUnit = JSON.parse(localStorage.getItem('sizeUnit'))
    shape = JSON.parse(localStorage.getItem('shape'))
    locations = JSON.parse(localStorage.getItem('locations'))
    if (locations !== null) {
        document.querySelectorAll('.location_item')[locations].classList.add('selected')
        document.querySelectorAll('.location_item_desc')[locations].style.display = 'block'
    }
    if (shape !== null) {
        document.querySelectorAll('.shape_item')[shape].classList.add('selected')
        document.querySelectorAll('.shape_item_desc')[shape].style.display = 'block'
        document.querySelector('.size_label').innerHTML = shapesArr[shape]
    }
    if (weightUnit !== null) {
        document.querySelectorAll('.current_units')[0].innerHTML = document.querySelectorAll('.details_item')[weightUnit].textContent
    }
    if (sizeUnit !== null) {
        document.querySelectorAll('.current_units')[1].innerHTML = document.querySelectorAll('.details_item')[sizeUnit].textContent
    }
    if (extraSizeUnit !== null) {
        if (document.querySelectorAll('.input_wrapper').length > 2) {
            document.querySelectorAll('.current_units')[2].innerHTML = document.querySelectorAll('.details_item')[extraSizeUnit].textContent
        }
        
    }

}

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('weightUnit') &&
        localStorage.getItem('sizeUnit') &&
        localStorage.getItem('shape') &&
        localStorage.getItem('locations')) {
        saveUnits()
    }
})

