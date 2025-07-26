document.addEventListener('DOMContentLoaded', () => {
  const infoTrigger = document.getElementById('infoTrigger');
  const infoModal = document.getElementById('infoModal');
  const closeButton = document.querySelector('.close-button');

  // 打开 modal
  function openModal() {
    if (infoModal) {
      infoModal.classList.add("show");
      infoModal.setAttribute('aria-modal', 'true');
      infoModal.setAttribute("role", "dialog");
      closeButton && closeButton.focus();
    }
  }
  // 关闭 modal
  function closeModal() {
    if (infoModal) {
      infoModal.classList.remove("show");
      infoModal.removeAttribute('aria-modal');
      infoModal.removeAttribute("role");
      if (infoTrigger) {
        const button = infoTrigger.querySelector("button");
        button && button.focus();
      }
    }
  }
  // 事件绑定
  if (infoTrigger && infoModal) {
    infoTrigger.addEventListener("click", openModal);
    infoTrigger.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal();
      }
    });
  }
  if (closeButton && infoModal) {
    closeButton.addEventListener("click", closeModal);
    closeButton.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        closeModal();
      }
    });
  }
  if (infoModal) {
    infoModal.addEventListener("click", (event) => {
      if (event.target === infoModal) closeModal();
    });
  }
  document.addEventListener('keydown', (event) => {
    if (event.key === "Escape" && infoModal && infoModal.classList.contains("show")) {
      closeModal();
    }
  });

  // 图片轮播
  const images = [
    "99e86ea59d4a4febc9bca6ec37d15c7.jpg",
    "cd411503ae5f0d4d6ca79598c1b493a.jpg",
    "e41559c39c1fff29e0b9df7cb88fc34.jpg"
  ];
  let currentIndex = 0;

  function renderImage() {
    const container = document.getElementById('carousel-image');
    if (!container) return;
    container.innerHTML = '';
    const img = document.createElement('img');
    img.src = images[currentIndex];
    img.alt = `图片${currentIndex + 1}`;
    img.className = "carousel-image";
    img.onerror = () => {
      img.src = 'placeholder.jpg';
      img.alt = '图片加载失败';
    };
    container.appendChild(img);
  }

  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  if (prevBtn) {
    prevBtn.onclick = function () {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      renderImage();
    };
    prevBtn.addEventListener('keydown', (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        renderImage();
      }
    });
  }
  if (nextBtn) {
    nextBtn.onclick = function () {
      currentIndex = (currentIndex + 1) % images.length;
      renderImage();
    };
    nextBtn.addEventListener('keydown', (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        currentIndex = (currentIndex + 1) % images.length;
        renderImage();
      }
    });
  }
  renderImage();
});

// 键盘导航提示：
// 使用 Tab 键在可聚焦元素之间前进 [9, 8]
// 使用 Shift + Tab 键在可聚焦元素之间后退 [9, 8]
// 使用 Enter 键或 Spacebar 键激活按钮和链接 [9, 8]
 
