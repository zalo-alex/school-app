document.getElementById("open-nav-button").addEventListener("click", () => {
    var nav = document.querySelector("nav")
    if (nav.classList.contains("close")) {
        nav.classList.remove("close")
        nav.classList.add("open")
    } else {
        nav.classList.remove("open")
        nav.classList.add("close")
    }
})

Array.from(document.getElementsByClassName("menu-btn")).map(ele => 
    ele.addEventListener("click", (e) => {
        if(e.target.classList.contains("selected")) {
            e.target.classList.remove("selected")
            return
        }
        if(document.querySelector("nav .bottom .menu .menu-btn.selected") != null) {
            document.querySelector("nav .bottom .menu .menu-btn.selected").classList.remove("selected")
        }
        e.target.classList.add("selected")
    })
)