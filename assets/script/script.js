let education = document.querySelector('.right-col__education');
let educationContent = document.querySelector('.right-col__education .content');

education.addEventListener('click', function(event) {
    if (event.target.tagName != 'H3') return;
    educationContent.classList.toggle('hide')
    // for(let item of educationContent) {
    //     item.classList.toggle('hide')
    // }    
})


let work = document.querySelector('.right-col__work');
let workContent = document.querySelector('.right-col__work .content');

work.addEventListener('click', function(event) {
    if (event.target.tagName != 'H3') return;
    workContent.classList.toggle('hide')
    // for(let item of workContent) {
    //     item.classList.toggle('hide')
    // }
})


let skills = document.querySelector('.right-col__skills');
let skillsContent = document.querySelector('.right-col__skills .content');

skills.addEventListener('click', function(event) {
    if (event.target.tagName != 'H3') return;
    skillsContent.classList.toggle('hide')
    // for(let item of skillsContent) {
    //     item.classList.toggle('hide')
    // }
})

