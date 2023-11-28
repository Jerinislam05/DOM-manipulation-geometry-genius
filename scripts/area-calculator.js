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

    // calculate rectangle area
    const area = width * height;

    // show rectangle area
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
}


// reuseable function --> reduce duplicate code
function calculateParallelogramArea() {
    const base = getInputValue('Parallelogram-base');
    // console.log(base);
    const height = getInputValue('Parallelogram-height');
    // console.log(height);
    const area = base * height;
    setElementInnerText('Parallelogram-area', area);
}


function calculateEllipseArea() {
    const majorRadius = getInputValue('ellipse-major radius');
    const minorRadius = getInputValue('ellipse-minor radius');
    const area = 3.14 * majorRadius * minorRadius;
    setElementInnerText('ellipse-area', area)
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