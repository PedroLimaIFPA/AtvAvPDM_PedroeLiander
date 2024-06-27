const theme = document.querySelector('.theme')
const circle = document.querySelector('.circle')

theme.addEventListener('click', () => {
    circle.classList.toggle('theme-active')

    const savedMode = localStorage.getItem('mode');
    if (savedMode) {
      document.body.classList.add(savedMode);
    }
  
    theme.addEventListener('click', () => {
      document.body.classList.toggle('light');
      let mode = 'light-mode';
      if (document.body.classList.contains('light')) {
        mode = 'light';
      }
      // Save the current mode to local storage
      localStorage.setItem('mode', mode);
    });
})