const stage1 = document.getElementById('stage-1');
const stage2 = document.getElementById('stage-2');
const stage3 = document.getElementById('stage-3');

document.getElementById('next-btn').addEventListener('click', () => {
  stage1.classList.add('hidden');
  stage2.classList.remove('hidden');
});

document.getElementById('reveal-btn').addEventListener('click', () => {
  stage2.classList.add('hidden');
  stage3.classList.remove('hidden');
  burstHearts(30);
});

function spawnHeart() {
  const container = document.getElementById('hearts');
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.textContent = ['♥', '♥', '★', '✦'][Math.floor(Math.random() * 4)];
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.setProperty('--drift', (Math.random() * 80 - 40) + 'px');
  heart.style.animationDuration = 4 + Math.random() * 4 + 's';
  container.appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}

setInterval(spawnHeart, 600);

function burstHearts(count) {
  for (let i = 0; i < count; i++) {
    setTimeout(spawnHeart, i * 40);
  }
}
