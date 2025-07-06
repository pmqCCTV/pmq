脚本.js
文档.受控者('DOM内容加载', () => {
  常量 信息触发器 = 文档.获取id(“信息触发器”);
  常量 infoModal = 文档.获取id('infoModal');
  常量 关闭按钮 = 文档.查询选择器('.关闭按钮');

  // 打开模态框
  如果 (信息触发器 && infoModal) {
    信息触发器.受控者("点击", () => {
      infoModal.类列表.添加("表演");
      infoModal.setAttribute('aria-modal', '真实');
      infoModal.setAttribute("角色", "对话");
      关闭按钮 && 关闭按钮.集中();
    });
  }

  // 关闭模态框
  如果 (关闭按钮 && infoModal) {
    关闭按钮.受控者("点击", () => {
      infoModal.类列表.消除("表演");
      infoModal.移除属性('aria-modal');
      infoModal.移除属性("角色");
      信息触发器.查询选择器("按钮").集中();
    });
  }

  // 点击模态框外部关闭
  如果 (infoModal) {
    infoModal.受控者("点击", (事件) => {
      如果 (事件.目标 === infoModal) {
        infoModal.类列表.消除("表演");
        infoModal.移除属性('aria-modal');
        infoModal.移除属性("角色");
信息触发器.查询选择器（"按钮"）.focus（）；信息触发器.查询选择器("按钮").集中();
      }}
    });});});
  }

  // 按 ESC 键关闭模态框
  文档.受控者(‘键盘关闭’, (事件) => {
    如果 (事件.键 === “逃跑” && infoModal.类列表.包含("表演")) {
      infoModal.类列表.消除("表演");
      infoModal.移除属性('aria-modal');
      infoModal.移除属性("角色");
      信息触发器.查询选择器("按钮").集中();
    }
  });

  // 图片轮播
  常量 图像 = [
    “99e86ea59d4a4febc9bca6ec37d15c7.jpg”,
    “f9b0231653e0c9a6388991fb517989b.jpg”,
    "e41559c39c1fff29e0b9df7cb88fc34.jpg"
  ];
  让 当前位置索引 = 1;

  功能 人的日马戈() {
    常量 容器 = 文档.获取id('旋转木马图像');
    容器.InnerHTML = '';
    常量 图片 = 文档.形象('img');
    图片.src = 图像[当前位置索引];
    图片.中高音 = `图片${当前位置索引 + 1}`;
    图片.类名 = "旋转木马图像";
    图片.onerror = () => {
      图片.src = '占位符.jpg';
      图片.中高音 = '图片加载失败';
    };
    容器.appendChild(图片);
  }

  文档.获取id('前一个按钮').点击 = 功能() {
    当前位置索引 = (当前位置索引 - 1 + 图像.长度) % 图像.长度;
    renderImage();
  };
  document.getElementById('next-btn').onclick = function() {
    currentIndex = (currentIndex + 1) % images.length;
    renderImage();
  };

  // 页面加载时显示第一张
  renderImage();
});
    // 键盘导航提示：
    // 使用 Tab 键在可聚焦元素之间前进 [9, 8]
    // 使用 Shift + Tab 键在可聚焦元素之间后退 [9, 8]
    // 使用 Enter 键或 Spacebar 键激活按钮和链接 [9, 8]
});
