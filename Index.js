// functionalities for accordian 

const button = document.querySelectorAll(".accordion-header");
const content = document.querySelectorAll(".accordion-body");

button.forEach((btn) => {
    btn.addEventListener('click', (e) => {

        content.forEach((cont) => {
            if (e.target.nextElementSibling !== cont && cont.classList.contains('active')) {
                cont.classList.remove('active');
                button.forEach((btn) => {
                    btn.classList.remove('active');
                })
            }
        })

        const description = btn.nextElementSibling;
        description.classList.toggle("active");
        btn.classList.toggle('active');
    })
})
