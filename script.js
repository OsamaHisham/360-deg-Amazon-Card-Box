const box = document.getElementById('box')

box.addEventListener('mousemove', (e) => {
  box.style.transform = `rotateX(-30deg) rotateY(${e.clientX}deg)`
})