let weightUnit = null;
let extraSizeUnit = null;
let sizeUnit = null;
let shape = null;
let locations = null;

if (localStorage.getItem('shape') == undefined &&
    localStorage.getItem('sizeUnit') == undefined &&
    localStorage.getItem('weightUnit') == undefined) {
        localStorage.setItem('shape', JSON.stringify(0))
        localStorage.setItem('sizeUnit', JSON.stringify(5))
        localStorage.setItem('weightUnit', JSON.stringify(1))     
}