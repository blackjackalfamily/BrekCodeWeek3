// JavaScript code
function showElement(element) {
    alert(`WATCH OUT FOR: ${element} Element`);
}


function count() {
    let counterVariable = Number(localStorage.getItem('counter')) || 0;
if (5 < counterVariable) {
    localStorage.setItem('counter', 0); // true
} else {
    localStorage.setItem('counter', Number(counterVariable) + 1); // false
}
isShowing();
}


function isShowing() {
    counterVariable = Number(localStorage.getItem('counter')); 
    if (counterVariable == 1) {
        document.getElementById("fire").style.display = 'block'; // true
        } else {
            document.getElementById("fire").style.display = 'none'; // false
        }
        
        if (counterVariable == 2) {
            document.getElementById("water").style.display = 'block';
        } else {
            document.getElementById("water").style.display = 'none';
        }
        
        if (counterVariable == 3) {
            document.getElementById("earth").style.display = 'block';
        } else {
            document.getElementById("earth").style.display = 'none';
        }
        
        if (counterVariable == 4) {
            document.getElementById("air").style.display = 'block';
        } else {
            document.getElementById("air").style.display = 'none';
        }
        
        if (counterVariable == 5) {
            document.getElementById("electricity").style.display = 'block';
        } else {
            document.getElementById("electricity").style.display = 'none';
        }
        
        if (counterVariable == 6) {
            document.getElementById("human").style.display = 'block';
        } else {
            document.getElementById("human").style.display = 'none';
        }

}
document.addEventListener('mousedown', function (e) {
    const clickedButton = e.target.closest('.element-button');
    if (!clickedButton) {
        alert('No element is clicked');
    }
});