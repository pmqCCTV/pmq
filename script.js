// script.js
document.addEventListener('DOMContentLoaded', () => {
    const infoTrigger = document.getElementById('infoTrigger');
    const infoModal = document.getElementById('infoModal');
    const closeButton = document.querySelector('.close-button');

    const openModal = () => {
        infoModal.classList.add('show');
        infoModal.setAttribute('aria-modal', 'true');
        infoModal.setAttribute('role', 'dialog');
        infoModal.focus();
    };

    const closeModal = () => {
        infoModal.classList.remove('show');
        infoModal.removeAttribute('aria-modal');
        infoModal.removeAttribute('role');
        infoTrigger.focus();
    };

    if (infoTrigger && infoModal) {
        infoTrigger.addEventListener('click', openModal);
    }
    if (closeButton && infoModal) {
        closeButton.addEventListener('click', closeModal);
    }
    if (infoModal) {
        infoModal.addEventListener('click', (event) => {
            if (event.target === infoModal) closeModal();
        });
    }
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && infoModal.classList.contains('show')) closeModal();// 轮播功能
const images = document.querySelectorAll('.carousel-image');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
let currentIdx = 0;

function showImage(idx) {
  images.forEach((img, i) => img.classList.toggle('active', i === idx));
}

prevBtn.addEventListener('click', () => {
  currentIdx = (currentIdx - 1 + images.length) % images.length;
  showImage(currentIdx);
});
nextBtn.addEventListener('click', () => {
  currentIdx = (currentIdx + 1) % images.length;
  showImage(currentIdx);
});

// 自动播放（可选）
setInterval(() => {
  currentIdx = (currentIdx + 1) % images.length;
  showImage(currentIdx);
}, 3000); // 3秒切换一次

showImage(currentIdx); // 初始化显示
    });
});
 
