function selectShape(index) {
    document.querySelectorAll('.shape_item_desc').forEach(elem => elem.style.display = 'none')
    document.querySelectorAll('.shape_item').forEach(el => el.classList.remove('selected'))
    localStorage.setItem('shape', index)
    document.querySelectorAll('.shape_item')[index].classList.add('selected')
    document.querySelectorAll('.shape_item_desc')[index].style.display = 'block'
    document.querySelector('.size_label').innerHTML = shapesArr[index]
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
    localStorage.setItem('sizeUnit', JSON.stringify(index+3))
    document.querySelectorAll('.current_units')[1].innerHTML = document.querySelectorAll('.details_item')[index+3].textContent
}

function closeDetails() {
    document.querySelectorAll('.input_details').forEach(el => el.removeAttribute('open'))

}

function openDetails(){
    document.querySelector('.current_shape_btn').innerHTML = 'Закрыть'
    document.querySelector('.current_shape_btn').style.cssText = 'background:#000000c7;  padding:5px 15px;'
    document.querySelector('.shapes_details').open = !document.querySelector('.shapes_details').open;
    if (!document.querySelector('.shapes_details').open) {
        document.querySelector('.current_shape_btn').innerHTML = 'Выбрать объект <img src="img/tap.png" alt=""></button>'
        document.querySelector('.current_shape_btn').style.cssText = 'background:#9974ff;'
    }
}