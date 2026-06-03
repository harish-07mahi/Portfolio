const roles = [
"AI/ML Student",
"Python Developer",
"Future AI Engineer"
];

let index = 0;

function changeText() {
document.getElementById("typing-text").textContent =
roles[index];


index++;

if (index >= roles.length) {
    index = 0;
}


}

changeText();

setInterval(changeText, 2000);

const skillBars =
document.querySelectorAll(".progress-fill");

const observer =
new IntersectionObserver(entries => {


entries.forEach(entry => {

    if(entry.isIntersecting){

        const width =
        entry.target.getAttribute("data-width");

        entry.target.style.width =
        width + "%";
    }

});


});

skillBars.forEach(bar => {
observer.observe(bar);
});
