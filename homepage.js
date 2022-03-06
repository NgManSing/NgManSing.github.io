const sections = document.getElementsByTagName("section");
const navLi = document.querySelectorAll("nav .navbar ul li");
window.addEventListener("scroll", () => {
    let current = "";
    for (var i = 0; i < sections.length; i++) {
        const sectionTop = sections[i].offsetTop;
        const sectionHeight = sections[i].clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = sections[i].getAttribute("id");
        }
    }

    navLi.forEach((li) => {
        li.classList.remove("active");
        current = current.replace("_content", "");
        if (li.classList.contains(current)) {
            li.classList.add("active");
        }
    });
});
