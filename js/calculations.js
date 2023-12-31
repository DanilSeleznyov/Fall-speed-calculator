let weight;
let diameter;
let d;
let circleSq;
let squareSq;
let m;
let maxFallSpeed;
let resistRatio;
let extraDiameter;
let eD;
let airResistRatioArr;

let shapesArr = [languages[JSON.parse(localStorage.getItem("language"))].js.diameter,
    languages[JSON.parse(localStorage.getItem("language"))].js.baseDiameter,
    languages[JSON.parse(localStorage.getItem("language"))].js.edgeLength,
    languages[JSON.parse(localStorage.getItem("language"))].js.baseDiameter,
    languages[JSON.parse(localStorage.getItem("language"))].js.baseDiameter,
    languages[JSON.parse(localStorage.getItem("language"))].js.bodyThickness,
    languages[JSON.parse(localStorage.getItem("language"))].js.diameter,
     languages[JSON.parse(localStorage.getItem("language"))].js.baseDiameter,
    languages[JSON.parse(localStorage.getItem("language"))].js.baseDiameter,
     languages[JSON.parse(localStorage.getItem("language"))].js.bodyLength,
    languages[JSON.parse(localStorage.getItem("language"))].js.baseLength,
     languages[JSON.parse(localStorage.getItem("language"))].js.lengthAndWidth,
    languages[JSON.parse(localStorage.getItem("language"))].js.lengthAndThickness,]


let airResistRatioTube = [0.64, 0.68, 0.72, 0.74, 0.82, 0.91, 0.98, 1.2]
let tubeSizes = [0.99, 2, 3, 5, 10, 20, 40, Infinity]
let unitsWeightMultipliers = [0.001, 1, 1000]
let unitsSizeMultipliers = [0.001, 0.01, 1]
let g_Arr = [9.81, 3.711, 8.87, 1.352, 9.81, 9.81]
let airDensity = [1.275, 0.02, 67, 1, 997, 1030]


function calcResult() {
    airResistRatioArr = [0.47, 0.42, 1.05, 1.15, 0.5, 0.07, 1.1, 0.38, 1.42, 0.59, 1.38, calcResistRatio(), calcResistRatio(),]
    weight = document.querySelector('.weight').value
    diameter = document.querySelector('.size').value
    m = weight * unitsWeightMultipliers[JSON.parse(localStorage.getItem('weightUnit'))]
    d = diameter * unitsSizeMultipliers[JSON.parse(localStorage.getItem('sizeUnit')) - 3]

    if (JSON.parse(localStorage.getItem('shape')) == 2) {

        squareSq = d ** 2
        maxFallSpeed = Math.sqrt(
            (2 * m * g_Arr[JSON.parse(localStorage.getItem('locations'))]) / (airDensity[JSON.parse(localStorage.getItem('locations'))] * squareSq * airResistRatioArr[JSON.parse(localStorage.getItem('shape'))])
            )

    } else if (JSON.parse(localStorage.getItem('shape')) == 11) {

        eD = extraDiameter * unitsSizeMultipliers[JSON.parse(localStorage.getItem('extraSizeUnit')) - 3]
        maxFallSpeed = Math.sqrt(
            (2 * m * g_Arr[JSON.parse(localStorage.getItem('locations'))]) / (airDensity[JSON.parse(localStorage.getItem('locations'))] * (d * eD) * airResistRatioArr[JSON.parse(localStorage.getItem('shape'))])
            )

    } else if (JSON.parse(localStorage.getItem('shape')) == 12) {
        eD = extraDiameter * unitsSizeMultipliers[JSON.parse(localStorage.getItem('extraSizeUnit')) - 3]
        if ((d / eD) < 1) {
            Swal.fire({
                title: languages[JSON.parse(localStorage.getItem("language"))].js.calcErrorTitle,
                text: languages[JSON.parse(localStorage.getItem("language"))].js.sizeError,
                icon: 'error',
                confirmButtonText: languages[JSON.parse(localStorage.getItem("language"))].js.confirmBtn,
            })
            return
        }
        maxFallSpeed = Math.sqrt(
            (2 * m * g_Arr[JSON.parse(localStorage.getItem('locations'))]) / (airDensity[JSON.parse(localStorage.getItem('locations'))] * (d * eD) * airResistRatioArr[JSON.parse(localStorage.getItem('shape'))])
            )

    } else {

        circleSq = ((d / 2) ** 2) * Math.PI
        maxFallSpeed = Math.sqrt(
            (2 * m * g_Arr[JSON.parse(localStorage.getItem('locations'))]) / (airDensity[JSON.parse(localStorage.getItem('locations'))] * circleSq * airResistRatioArr[JSON.parse(localStorage.getItem('shape'))])
            )

    }
    if (isNaN(maxFallSpeed)) {
        noValueError()
        return
    }else if(isFinite((maxFallSpeed * 3.6).toFixed(1))){
        document.querySelector('.result').innerHTML = `${(maxFallSpeed * 3.6).toFixed(1)} ${languages[JSON.parse(localStorage.getItem("language"))].js.kmph}`
    }else{
        noValueError()
    }
    
}

function calcResistRatio() {
    diameter = document.querySelector('.size').value
    extraDiameter = document.querySelector('.extra_size').value
    d = diameter * unitsSizeMultipliers[JSON.parse(localStorage.getItem('sizeUnit')) - 3]
    eD = extraDiameter * unitsSizeMultipliers[JSON.parse(localStorage.getItem('extraSizeUnit')) - 3]

    if (JSON.parse(localStorage.getItem('shape')) == 11) {
        resistRatio = 1.1 + (0.02 * ((d / eD) + (eD / d)))
        return resistRatio
    }
    if (JSON.parse(localStorage.getItem('shape')) == 12) {
        for (let i = 0; i < airResistRatioTube.length; i++) {
            if (tubeSizes[i] < (d / eD) && tubeSizes[i + 1] >= (d / eD)) {
                resistRatio = airResistRatioTube[i]
                return resistRatio
            }
        }

    }
}
