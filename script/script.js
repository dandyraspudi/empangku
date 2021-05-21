// slider
new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    dots: '#dots',
    draggable: true,
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    }
});

// image click modal
var modalEle = document.querySelector(".modal");
var modalImage = document.querySelector(".modalImage");
Array.from(document.querySelectorAll(".ImgThumbnail")).forEach(item => {
    item.addEventListener("click", event => {
        modalEle.style.display = "block";
        modalImage.src = event.target.src;
    });
});
document.querySelector(".close").addEventListener("click", () => {
    modalEle.style.display = "none";
});