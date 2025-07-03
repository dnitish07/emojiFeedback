let emoji = document.getElementById('emoji');
let label = document.getElementById('label');
let index;
let emojiMap = ['😢', '😕', '😐', '🙂', '😄'];
let labelMap = ['Terrible', 'Bad', 'Okay', 'Good', 'Excellent'];
let stars = [
    document.getElementById('star-0'),
    document.getElementById('star-1'),
    document.getElementById('star-2'),
    document.getElementById('star-3'),
    document.getElementById('star-4')
];

function updateStars(index) {
    stars.forEach(function (star, i) {
        if (i <= index) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

function updateEmoji(index) {
    emoji.textContent = emojiMap[index];
    label.textContent = labelMap[index];
}

stars.forEach(function (star, index) {
    star.addEventListener('click', function() {
        updateStars(index);
        updateEmoji(index);

    });
});

let toggle = document.getElementById('darkModeToggle');

toggle.addEventListener('change', function () {
    document.body.classList.toggle('dark-mode', this.checked);
});
