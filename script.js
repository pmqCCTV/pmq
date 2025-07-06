// script.js
document.addEventListener('DOMContentLoaded', () => {
    const infoTrigger = document.getElementById('infoTrigger');
    const infoModal = document.getElementById('infoModal');
    const closeButton = document.querySelector('.close-button');

    // 打开模态框
    if (infoTrigger && infoModal) {
        infoTrigger.addEventListener('click', () => {
            infoModal.classList.add('show');
            // 确保模态框内容可被键盘访问 [8]
            infoModal.setAttribute('aria-modal', 'true');
            infoModal.setAttribute('role', 'dialog');
            infoModal.focus(); // 将焦点设置到模态框
        });
    }

    // 关闭模态框
    if (closeButton && infoModal) {
        closeButton.addEventListener('click', () => {
            infoModal.classList.remove('show');
            infoModal.removeAttribute('aria-modal');
            infoModal.removeAttribute('role');
            // 将焦点返回到触发元素（如果需要）
            infoTrigger.focus();
        });
    }

    // 点击模态框外部关闭
    if (infoModal) {
        infoModal.addEventListener('click', (event) => {
            if (event.target === infoModal) {
                infoModal.classList.remove('show');
                infoModal.removeAttribute('aria-modal');
                infoModal.removeAttribute('role');
                infoTrigger.focus();
            }
        });
    }

    // 按 ESC 键关闭模态框 [8]
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && infoModal.classList.contains('show')) {
            infoModal.classList.remove('show');
            infoModal.removeAttribute('aria-modal');
            infoModal.removeAttribute('role');
            infoTrigger.focus();
        }
// 图片数组
const images = [
  "99e86ea59d4a4febc9bca6ec37d15c7.jpg",
  "cd411503ae5f0d4d6ca79598c1b493a.jpg",
  "f9b0231653e0c9a6388991fb517989b.jpg",
  "e41559c39c1fff29e0b9df7cb88fc34.jpg"
];

let currentIndex = 0;

function renderImage() {
  const container = document.getElementById('carousel-image');
  container.innerHTML = ''; // 清空
  const img = document.createElement('img');
  img.src = images[currentIndex];
  img.alt = `图片${currentIndex + 1}`;
  img.className = "carousel-image";
  container.appendChild(img);
}

// 按钮事件
document.getElementById('prev-btn').onclick = function() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  renderImage();
};
document.getElementById('next-btn').onclick = function() {
  currentIndex = (currentIndex + 1) % images.length;
  renderImage();
};

// 页面加载时显示第一张
renderImage();


// 以下为模态框相关代码（如有可保留，否则可删）

const infoTrigger = document.getElementById("infoTrigger");
const infoModal = document.getElementById("infoModal");
const closeButton = document.querySelector(".close-button");

infoTrigger.addEventListener("click", function() {
    infoModal.style.display = "block";
    closeButton.focus();
});

closeButton.addEventListener("click", function() {
    infoModal.style.display = "none";
    infoTrigger.querySelector("button").focus();
});

window.addEventListener("click", function(event) {
    if (event.target === infoModal) {
        infoModal.style.display = "none";
        infoTrigger.querySelector("button").focus();
    }
});

window.addEventListener("keydown", function(event) {
    if (event.key === "Escape" && infoModal.style.display === "block") {
        infoModal.style.display = "none";
        infoTrigger.querySelector("button").focus();
    }
});
    });

    // 键盘导航提示：
    // 使用 Tab 键在可聚焦元素之间前进 [9, 8]
    // 使用 Shift + Tab 键在可聚焦元素之间后退 [9, 8]
    // 使用 Enter 键或 Spacebar 键激活按钮和链接 [9, 8]
});
