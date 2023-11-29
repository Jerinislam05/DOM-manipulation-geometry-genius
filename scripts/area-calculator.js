function calculateTriangleArea() {
    // get triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    console.log(base);

    // get triangle hight value
    const hightField = document.getElementById('triangle-hight');
    const hightValueText = hightField.value;
    const hight = parseFloat(hightValueText);
    console.log(hight);

    // calculate triangle area
    const area = 0.5 * base * hight;
    console.log(area);

    // show triangle area
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
}

function calculateRectangleArea() {
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    console.log(width);

    // get rectangle length
    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    console.log(length);

    // validate input
    if (isNaN(width) || isNaN(length)) {
        alert('Please enter a number')
    }

    // calculate rectangle area
    const area = width * height;

    // show rectangle area
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
}


// reuseable function --> reduce duplicate code
function calculateParallelogramArea() {
    const base = getInputValue('Parallelogram-base');
    const height = getInputValue('Parallelogram-height');
    
    // validate
    if (isNaN(base) || isNaN(height)) {} {
        alert('Please insert number');
        return
    }
    const area = base * height;
    setElementInnerText('Parallelogram-area', area);
}


function calculateEllipseArea() {
    const majorRadius = getInputValue('ellipse-major-radius');
    const minorRadius = getInputValue('ellipse-minor-radius');
    const area = 3.14 * minorRadius * minorRadius;
    const areaTwoDecimal = area.toFixed(2)
    setElementInnerText('ellipse-area', areaTwoDecimal)
}


// reusable get input value field in number
function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

// reusable set span, p, div, etc text
function setElementInnerText(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}

/* data validation 
1. set the proper type of the input field(number, data, email)
2.check type using typeOf(typeof)
3. isNaN is checking whether the input is not a number or not.
*/