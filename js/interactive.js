function selectShape(index) {
    shapesArr = [languages[JSON.parse(localStorage.getItem("language"))].js.diameter,
    languages[JSON.parse(localStorage.getItem("language"))].js.baseDiameter,
    languages[JSON.parse(localStorage.getItem("language"))].js.edgeLength,
    languages[JSON.parse(localStorage.getItem("language"))].js.baseDiameter,
    languages[JSON.parse(localStorage.getItem("language"))].js.baseDiameter,
    languages[JSON.parse(localStorage.getItem("language"))].js.bodyThickness,
    languages[JSON.parse(localStorage.getItem("language"))].js.diameter, languages[JSON.parse(localStorage.getItem("language"))].js.baseDiameter,
    languages[JSON.parse(localStorage.getItem("language"))].js.baseDiameter, languages[JSON.parse(localStorage.getItem("language"))].js.bodyLength,
    languages[JSON.parse(localStorage.getItem("language"))].js.baseLength, languages[JSON.parse(localStorage.getItem("language"))].js.lengthAndWidth,
    languages[JSON.parse(localStorage.getItem("language"))].js.lengthAndThickness,]
    document.querySelectorAll('.shape_item_desc').forEach(elem => elem.style.display = 'none')
    document.querySelectorAll('.shape_item').forEach(el => el.classList.remove('selected'))
    localStorage.setItem('shape', JSON.stringify(index))
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
            document.querySelectorAll('.app_input')[1].style.cssText = 'border-bottom-left-radius: 35px;'
        }
    }
}

function selectLocation(index) {
    document.querySelectorAll('.location_item_desc').forEach(elem => elem.style.display = 'none')
    document.querySelectorAll('.location_item').forEach(el => el.classList.remove('selected'))
    localStorage.setItem('locations', JSON.stringify(index))
    document.querySelectorAll('.location_item')[index].classList.add('selected')
    document.querySelectorAll('.location_item_desc')[index].style.display = 'block'
}

function unselectLocation() {
    document.querySelectorAll('.location_item_desc').forEach(elem => elem.style.display = 'none')
    document.querySelectorAll('.location_item').forEach(el => el.classList.remove('selected'))
    localStorage.setItem('locations', JSON.stringify(null))
}

function unselectShape() {
    document.querySelectorAll('.shape_item_desc').forEach(elem => elem.style.display = 'none')
    document.querySelectorAll('.shape_item').forEach(el => el.classList.remove('selected'))
    localStorage.setItem('shape', JSON.stringify(null))
}

function setWeightUnits(index) {
    localStorage.setItem('weightUnit', JSON.stringify(index))
    document.querySelectorAll('.open_units')[0].innerHTML = document.querySelectorAll('.details_item')[index].textContent
}
function setSizeUnits(index) {
    localStorage.setItem('sizeUnit', JSON.stringify(index + 3))
    document.querySelectorAll('.open_units')[1].innerHTML = document.querySelectorAll('.details_item')[index + 3].textContent
}

function setExtraSizeUnits(index) {
    localStorage.setItem('extraSizeUnit', JSON.stringify(index + 3))
    document.querySelectorAll('.open_units')[2].innerHTML = document.querySelectorAll('.details_item')[index + 6].textContent
}

function closeDetails() {
    document.querySelectorAll('.input_details').forEach(el => el.removeAttribute('open'))
}

function closeMainDetails() {
    document.querySelectorAll('.shapes_details').forEach(el => el.removeAttribute('open'))
    document.querySelectorAll('.locations_details').forEach(el => el.removeAttribute('open'))
    document.querySelector('.open_shape_btn').style.cssText = 'background:#9974ff;'
    document.querySelector('.open_location_btn').style.cssText = 'background:#9974ff;'
}

function closeSettingsModal() {
    document.querySelector('.modal_settings').style.display = 'none'
    document.querySelector('.languages_details').close
}

function openShapesDetails() {
    document.querySelector('.open_shape_btn').innerHTML = languages[JSON.parse(localStorage.getItem("language"))].js.closeBtn
    document.querySelector('.open_shape_btn').style.cssText = 'background:#000000c7;'
    document.querySelector('.shapes_details').open = !document.querySelector('.shapes_details').open;
    if (!document.querySelector('.shapes_details').open) {
        document.querySelector('.open_shape_btn').innerHTML = languages[JSON.parse(localStorage.getItem("language"))].shape_btn
        document.querySelector('.open_shape_btn').style.cssText = 'background:#9974ff;'
    }
}

function openLocationsDetails() {
    document.querySelector('.open_location_btn').innerHTML = languages[JSON.parse(localStorage.getItem("language"))].js.closeBtn
    document.querySelector('.open_location_btn').style.cssText = 'background:#000000c7;'
    document.querySelector('.locations_details').open = !document.querySelector('.locations_details').open;
    if (!document.querySelector('.locations_details').open) {
        document.querySelector('.open_location_btn').innerHTML = languages[JSON.parse(localStorage.getItem("language"))].location_btn
        document.querySelector('.open_location_btn').style.cssText = 'background:#9974ff;'
    }
}

function openLanguageDetails() {
    document.querySelector('.languages_details').open = !document.querySelector('.languages_details').open;
    document.querySelector('.languages_details').classList.add('opened')
    if (!document.querySelector('.languages_details').open) {
        document.querySelector('.languages_details').classList.remove('opened')
    }
}

function showModalSettings() {
    document.querySelector('.modal_settings').style.display = 'block'
}

function addExtraSizeInput() {
    document.querySelector('.extra_input_wrapper').style.display = 'block'
    document.querySelectorAll('.app_input')[1].style.cssText = 'border-bottom-left-radius: 5px;'
}

if (JSON.parse(localStorage.getItem('shape')) == 11) {
    addExtraSizeInput()

}else if(JSON.parse(localStorage.getItem('shape')) == 12){
    addExtraSizeInput()

}