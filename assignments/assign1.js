const savedFontSize = window.localStorage.getItem('fontSize');
const savedFontFamily = window.localStorage.getItem('fontFamily');
const savedFontColor = window.localStorage.getItem('fontColor');
const fontSizeSelector = document.getElementById('font-size');
const fontFamilySelector = document.getElementById('font-family');
const fontColorSelector = document.getElementById('color');

if(savedFontSize) {
    document.body.style.fontSize = savedFontSize;
    fontSizeSelector.value = savedFontSize;
} else {
    document.body.style.fontSize = '16px';
    window.localStorage.setItem('fontSize', '16px');
}
if(savedFontFamily) {
    document.body.style.fontFamily = savedFontFamily;
    fontFamilySelector.value = savedFontFamily;
} else {
    document.body.style.fontFamily = '"Open Sans"'
    window.localStorage.setItem('fontFamily', '"Open Sans"');
}
if(savedFontColor) {
    document.body.style.color = savedFontColor;
    fontColorSelector.value = savedFontColor;
} else {
    document.body.style.color = 'red'
    window.localStorage.setItem('fontColor', 'red');
}

fontSizeSelector.addEventListener('change',setFontSize);
fontFamilySelector.addEventListener('change',setFontFamily);
fontColorSelector.addEventListener('change',setColor);


function setFontSize(event) {
    const selectedValue = event.target.value;
    document.body.style.fontSize = selectedValue;
    window.localStorage.setItem('fontSize', selectedValue);
}
function setFontFamily(event) {
    const selectedValue = event.target.value;
    document.body.style.fontFamily = selectedValue;
    window.localStorage.setItem('fontFamily', selectedValue);
}
function setColor(event) {
    const selectedValue = event.target.value;
    document.body.style.color = selectedValue;
    window.localStorage.setItem('fontColor', selectedValue);
}

