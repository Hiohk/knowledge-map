// 自定义指令：动画加载指令
const intersect = {
  mounted(el, binding) {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: [0, 0.1], // 包括完全离开和进入10%视口
    };

    const { enter, duration = 'animate__duration-1s' } = binding.value;

    let lastBoundingClientRect = null;
    let hasAnimated = false;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const currentBoundingClientRect = entry.boundingClientRect;

        if (entry.isIntersecting) {
          // 元素进入视口时
          if (!hasAnimated) {
            if (lastBoundingClientRect) {
              const isScrollingDown = currentBoundingClientRect.top < lastBoundingClientRect.top;
              if (isScrollingDown) {
                // 向下滚动进入视口时应用动画
                applyAnimation();
              }
            } else {
              // 初次进入视口也应用动画
              applyAnimation();
            }
          }
        } else if (entry.intersectionRatio === 0) {
          // 元素完全离开视口时
          hasAnimated = false; // 重置标志，允许再次加载动画
        }

        // 更新 lastBoundingClientRect
        lastBoundingClientRect = currentBoundingClientRect;
      });
    }, options);

    const applyAnimation = () => {
      el.classList.remove('animate__animated', enter);
      void el.offsetWidth; // 触发重绘，强制动画重新启动
      el.classList.add('animate__animated', enter, duration);
      hasAnimated = true; // 设置已加载动画的标志
    };

    observer.observe(el);
    el.__vueIntersectionObserver__ = observer;
  },
  unmounted(el) {
    // 解除观察
    el.__vueIntersectionObserver__.disconnect();
    delete el.__vueIntersectionObserver__;
  },
};

export default intersect;
