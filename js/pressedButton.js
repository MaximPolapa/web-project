// Slow scrolling 
function scrollToDiv(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
}

// Proccesing click on link
document.addEventListener("DOMContentLoaded", function() {
    const link = document.querySelector("a[href='#newsLetter']");
    if (link) {
        link.addEventListener("click", function(event) {
            event.preventDefault(); 
            scrollToDiv("#newsLetter"); 
        });
    }
});

//Register logik to registering form 
const form = document.getElementById('registration-form');
        form.addEventListener('submit', function (e) {
            e.preventDefault(); 
            alert('Form submitted!');
        });