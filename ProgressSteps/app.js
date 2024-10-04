const $prev = document.querySelector('#prev');
const $next = document.querySelector('#next');
const $progress = document.querySelector('#progress');
const $nums = document.querySelectorAll('.num');

let currentStep = 1;
const totalStep = $nums.length;

const updateButtonDisabled = () => {
    $prev.disabled = currentStep === 1;
    $next.disabled = currentStep === totalStep;
};

const updateActiveNumber = () => {
    $nums.forEach((num, idx) => {
        num.classList.toggle('active', idx < currentStep);
    });
};

const updateProgressBar = () => {
    const progressWidth = ((currentStep - 1) / (totalStep - 1)) * 100;
    $progress.style.width = `${progressWidth}%`;
};

const updateProgress = () => {
    updateButtonDisabled();
    updateActiveNumber();
    updateProgressBar();
};

$prev.addEventListener('click', () => {
    if (currentStep > 1) {
        currentStep--;
        updateProgress();
    }
});
$next.addEventListener('click', () => {
    if (currentStep < totalStep) {
        currentStep++;
        updateProgress();
    }
});
