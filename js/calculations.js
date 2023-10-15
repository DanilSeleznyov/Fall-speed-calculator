let weight;
let diameter;
let d;
let circleSq;
let squareSq;
let m;
let maxFallSpeed;

let shapesArr = ['Диаметр',
    'Диаметр (основания)',
    'Длина ребра',
    'Диаметр (основания)',
    'Диаметр (основания)',
    'Диаметр (основания)',
    'Диаметр (толщина) капли',]

let airResistRatioArr = [0.47, 0.42, 1.05, 1.15, 0.82, 0.5, 0.04]
let unitsWeightMultipliers = [0.001, 1, 1000]
let unitsSizeMultipliers = [0.001, 0.01, 1]
let g = 9.81
let airDensityEarth = 1.275

//следующим писать функцию для вывода результата, переменные выше правильно позиционировать 

function calcResult() {
    weight = document.querySelector('.weight').value
    diameter = document.querySelector('.size').value
    m = weight * unitsWeightMultipliers[JSON.parse(localStorage.getItem('weightUnit'))]
    d = diameter * unitsSizeMultipliers[JSON.parse(localStorage.getItem('sizeUnit'))-3]
    squareSq = d ** 2
    circleSq = ((d/2)**2) * Math.PI
    if (JSON.parse(localStorage.getItem('shape')) == 2) {
        maxFallSpeed = Math.sqrt((2 * m * g) / (airDensityEarth * squareSq * airResistRatioArr[JSON.parse(localStorage.getItem('shape'))]))
    }else{
        maxFallSpeed = Math.sqrt((2 * m * g) / (airDensityEarth * circleSq * airResistRatioArr[JSON.parse(localStorage.getItem('shape'))]))
    }
    document.querySelector('.result').innerHTML = `${(maxFallSpeed*3.6).toFixed(1)} км/ч`
}