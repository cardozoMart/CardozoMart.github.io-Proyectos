const footer = document.getElementById('footer');

window.addEventListener('scroll', () => {
  const windowBottom = window.scrollY + window.innerHeight; 
  const footerTop = footer.offsetTop; 
  const footerHeight = footer.offsetHeight;

  if (windowBottom >= footerTop) {
    const visiblePart = windowBottom - footerTop;
    const progress = Math.min(visiblePart / footerHeight, 1);

    const r = Math.round(182 - (182 - 62) * progress);
    const g = Math.round(222 - (222 - 108) * progress);
    const b = Math.round(255 - (255 - 148) * progress);

    footer.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    const scale = 1 + 0.3 * progress;
    footer.style.transform = `scale(${scale})`;
  } else {
    footer.style.backgroundColor = 'rgb(182, 222, 255)';
    footer.style.transform = 'scale(1)';
  }
});
