let education = document.querySelector('.right-col__education');
let educationDescription = document.querySelectorAll('.right-col__education p');

education.addEventListener('click', function(event) {
    if (event.target.tagName != 'H3') return;
    for(let item of educationDescription) {
        item.classList.toggle('hide')
    }    
})


let work = document.querySelector('.right-col__work');
let workDescription = document.querySelectorAll('.right-col__work p');

work.addEventListener('click', function(event) {
    if (event.target.tagName != 'H3') return;
    for(let item of workDescription) {
        item.classList.toggle('hide')
    }
})


let skills = document.querySelector('.right-col__skills');
let skillsDescription = document.querySelectorAll('.right-col__skills p');

skills.addEventListener('click', function(event) {
    if (event.target.tagName != 'H3') return;
    for(let item of skillsDescription) {
        item.classList.toggle('hide')
    }
})

