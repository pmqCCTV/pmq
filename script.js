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
        // 假设这是你的图片列表
const images = [
  "图片1",
  "图片2",
  "图片3",
  "图片4",
];

let startIndex = 0; // 当前显示的起始索引

function renderImages() {
  const container = document.getElementById('image-container');
  container.innerHTML = ''; // 清空容器
  // 只显示3张
  for (let i = startIndex; i < startIndex + 3 && i < images.length; i++) {
    const img = document.createElement('img');
    img.src = images[i];
    img.style.width = '100px'; // 根据需要调整样式
    container.appendChild(img);
  }
}

// 事件监听
document.getElementById('prev-btn').onclick = function() {
  if (startIndex > 0) {
    startIndex--;
    renderImages();
  }
};
document.getElementById('next-btn').onclick = function() {
  if (startIndex < images.length - 3) {
    startIndex++;
    renderImages();
  }
};

renderImages(); // 页面加载时显示
    });

    // 键盘导航提示：
    // 使用 Tab 键在可聚焦元素之间前进 [9, 8]
    // 使用 Shift + Tab 键在可聚焦元素之间后退 [9, 8]
    // 使用 Enter 键或 Spacebar 键激活按钮和链接 [9, 8]
});
