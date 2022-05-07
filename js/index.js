const header = document.querySelector("header")

window.onwheel = e => {
    if(e.deltaY >= 0) {
        // Scroll-down
        header.classList.remove("header--show")
    }
    else {
        // Scroll-up
        header.classList.add("header--show")
    }
}