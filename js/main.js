const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const toggleNavMobile = () => {
    $('.soft-menu').classList.toggle('open')
    $('.soft-menu__list').classList.toggle('open')
}

$('.soft-menu__list').onclick = (e) => {
    e.stopPropagation()
}

$$('.soft-menu__item').forEach((item) => {
    // item.childNodes[1].PreventDefault;
    item.onclick = () => {
        let dataAddress = item.childNodes[1].getAttribute("data-address");
        if (dataAddress !== "") {
            document
                .querySelector(`#${dataAddress}`)
                .scrollIntoView({ behavior: "smooth" });
            toggleNavMobile()
        }
    };
});

$$('.header-item').forEach((item) => {
    // item.childNodes[1].PreventDefault;
    item.onclick = () => {
        let dataAddress = item.getAttribute("data-address");
        if (dataAddress !== "") {
            document
                .querySelector(`#${dataAddress}`)
                .scrollIntoView({ behavior: "smooth" });
            // toggleNavMobile()
        }
    };
});