const donutBtn = document.getElementById('donutBtn');
const donutCount = document.getElementById('donutCount');
const buyAutoClicker = document.getElementById('buyAutoClicker');
const autoClickerCount = document.getElementById('autoClickerCount');
const autoClickCost = document.getElementById('autoClickCost');
const resetBtn = document.getElementById('resetBtn')

let count = 0;
let autoClickers = 0;
let autoClickerRate = 1;
let clickerCost = 20;

function updateDisplay() {
    donutCount.textContent = Math.floor(count);
    autoClickerCount.textContent = autoClickers;
    autoClickCost.textContent = Math.floor(clickerCost);
}

donutBtn.addEventListener('click', function() {
    count++;
    updateDisplay();
});

buyAutoClicker.addEventListener('click', function() {
    if (count >= clickerCost) {
        count -= clickerCost;
        clickerCost = clickerCost *= 1.1;
        autoClickers ++;
        updateDisplay();
        autoClick();
    }
});

resetBtn.addEventListener('click', function(){
    count = 0;
    autoClickers = 0;
    clickerCost = 20;

    updateDisplay();
});

setInterval(autoClick,1000);

function autoClick() {
    const autoClickerCookies = autoClickers * autoClickerRate;
    count += autoClickerCookies;
    updateDisplay();
};


autoClick();