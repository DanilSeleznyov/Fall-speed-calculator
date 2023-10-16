function selectShape(index) {
    document.querySelectorAll('.shape_item_desc').forEach(elem => elem.style.display = 'none')
    document.querySelectorAll('.shape_item').forEach(el => el.classList.remove('selected'))
    localStorage.setItem('shape', index)
    document.querySelectorAll('.shape_item')[index].classList.add('selected')
    document.querySelectorAll('.shape_item_desc')[index].style.display = 'block'
    document.querySelector('.size_label').innerHTML = shapesArr[index]
    
    if (JSON.parse(localStorage.getItem('shape')) == 11) {
        document.querySelector('.extra_input_wrapper').style.display = 'none'
        addExtraSizeInput()

    }else if(JSON.parse(localStorage.getItem('shape')) == 12){
        document.querySelector('.extra_input_wrapper').style.display = 'none'
        addExtraSizeInput()

    }else{
        if (document.querySelectorAll('.input_wrapper').length > 2) {
            document.querySelector('.extra_input_wrapper').style.display = 'none'
        }
    }


}

function unselectShape() {
    document.querySelectorAll('.shape_item_desc').forEach(elem => elem.style.display = 'none')
    document.querySelectorAll('.shape_item').forEach(el => el.classList.remove('selected'))
    localStorage.setItem('shape', JSON.stringify(null))
}

function setWeightUnits(index) {
    localStorage.setItem('weightUnit', JSON.stringify(index))
    document.querySelectorAll('.current_units')[0].innerHTML = document.querySelectorAll('.details_item')[index].textContent
}
function setSizeUnits(index) {
    localStorage.setItem('sizeUnit', JSON.stringify(index + 3))
    document.querySelectorAll('.current_units')[1].innerHTML = document.querySelectorAll('.details_item')[index + 3].textContent
}

function setExtraSizeUnits(index) {
    localStorage.setItem('extraSizeUnit', JSON.stringify(index + 3))
    document.querySelectorAll('.current_units')[2].innerHTML = document.querySelectorAll('.details_item')[index + 6].textContent
}

function closeDetails() {
    document.querySelectorAll('.input_details').forEach(el => el.removeAttribute('open'))

}

function openDetails() {
    document.querySelector('.current_shape_btn').innerHTML = 'Закрыть'
    document.querySelector('.current_shape_btn').style.cssText = 'background:#000000c7;'
    document.querySelector('.shapes_details').open = !document.querySelector('.shapes_details').open;
    if (!document.querySelector('.shapes_details').open) {
        document.querySelector('.current_shape_btn').innerHTML = 'Выбрать объект 👆'
        document.querySelector('.current_shape_btn').style.cssText = 'background:#9974ff;'
    }
}

function addExtraSizeInput() {
    document.querySelector('.extra_input_wrapper').style.display = 'block'
}

if (JSON.parse(localStorage.getItem('shape')) == 11) {
    addExtraSizeInput()

}else if(JSON.parse(localStorage.getItem('shape')) == 12){
    addExtraSizeInput()

}