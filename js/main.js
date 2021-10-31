let tabs = document.querySelectorAll(".times li");
let tabsArray = Array.from(tabs);
let divs = document.querySelectorAll(".info div");
let divsArray = Array.from(divs);

tabsArray.forEach((ele) => {
    ele.addEventListener("click", function (e) {
        tabsArray.forEach((ele) => {
            ele.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        divsArray.forEach((div) => {
            div.style.display = "none";
        });
        let info = document.querySelectorAll(`.${e.currentTarget.dataset.cont}`);
        info.forEach((ele) => {
            ele.style.display = 'block';
        })
    });
});