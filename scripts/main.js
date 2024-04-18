const drag = document.querySelector(".side-bar .drag");
const sideBar = document.querySelector(".side-bar");

const handleDrag = () => {
    drag.classList.toggle("active-drag");
    sideBar.classList.toggle("active-side-bar");
};

drag.addEventListener("click", () => {
    handleDrag();
});

const scrollRight = document.querySelector('.fa-chevron-rightt')
const scrollLeft = document.querySelector('.fa-chevron-left')
const container = document.querySelector('.gallery-page .container')



const handleScroll = (d) => {
    const scrollAmount = d === 'left' ? -249 : 249;
    container.scrollTo({
        left: container.scrollLeft + scrollAmount ,
        behavior: 'smooth'
    });
}

scrollRight.addEventListener("click", () => {
    handleScroll('right');
});

scrollLeft.addEventListener("click", () => {
    handleScroll('left');
});

const star = Array.from(document.querySelectorAll('.star'));

console.log(star)

star.forEach(s => {
    s.addEventListener('click' ,() => {
        s.classList.toggle('active-star')
    })
})

const heart = Array.from(document.querySelectorAll('.fa-heart'));



heart.forEach(h => {
    h.addEventListener('click' ,() => {
        h.classList.toggle('active-i')
        h.classList.toggle('fa-solid')
    })
})

console.log(heart)