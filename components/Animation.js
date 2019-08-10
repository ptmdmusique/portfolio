export default async function animateCSS(element, animationProperty, callback) {
  const node = document.querySelector(element)
  await node.classList.add('animated');
  animationProperty.map(property => node.classList.add(property))

  function handleAnimationEnd() {
      node.classList.remove('animated', animationProperty)
      node.removeEventListener('animationend', handleAnimationEnd)

      if (typeof callback === 'function') callback()
  }

  node.addEventListener('animationend', handleAnimationEnd)
}