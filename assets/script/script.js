let main = document.querySelector('main');

main.addEventListener('click', function(event) {
    if (event.target.tagName != 'H3') return;
    event.target.nextElementSibling.classList.toggle('hide')
      
})

