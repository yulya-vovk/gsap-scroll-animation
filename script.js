document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded');
  console.log('GSAP:', typeof gsap);
  console.log('ScrollTrigger:', typeof ScrollTrigger);

  gsap.registerPlugin(ScrollTrigger);
  console.log('ScrollTrigger registered');

  document.querySelectorAll('.fade-section').forEach(section => {
    const content = section.querySelector('.fade-section__content');
    const imageContainer = section.querySelector('.fade-section__image');
    const image = imageContainer.querySelector('img');

    const isImageLeft = imageContainer.classList.contains('fade-section__image_left');

    gsap.from(content, {
      scrollTrigger: {
        trigger: section,
        start: 'top 85%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
        once: true,
        invalidateOnRefresh: true
      },
      opacity: 0,
      x: isImageLeft ? 50 : -50,
      duration: 1.2,
      ease: 'power3.out'
    });

    gsap.from(imageContainer, {
      scrollTrigger: {
        trigger: section,
        start: 'top 85%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
        once: true,
        invalidateOnRefresh: true
      },
      opacity: 0,
      x: isImageLeft ? -50 : 50,
      duration: 1.2,
      ease: 'power3.out'
    });
  });

  window.addEventListener('load', () => {
    ScrollTrigger.refresh();
  });
});