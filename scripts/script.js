
// gotop

const button_go_top = window.document.getElementById("go_top")

button_go_top.addEventListener('click', () => {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    })
})


window.addEventListener("scroll", () => {
    if (scrollY > 1269) {
        button_go_top.classList.add("off")


    } else {
        button_go_top.classList.remove("off")
    }
})

// gotop_final


// plans



function nav_bar_response() {

    const buttonLinks = window.document.getElementById('openLinks')
    function nav_response() {
        window.document.getElementById("logo").classList.toggle('logo_open')
        window.document.getElementById('links').classList.toggle('link_open')
        window.document.getElementById('header').classList.toggle('header_open')
        window.document.querySelector('body').classList.toggle('display')
        window.document.addEventListener('scroll', nav_responseWindow)

    }

    function nav_responseWindow() {
        window.document.getElementById("logo").classList.remove('logo_open')
        window.document.getElementById('links').classList.remove('link_open')
        window.document.getElementById('header').classList.remove('header_open')
        window.document.querySelector('body').classList.remove('display')
    }


    buttonLinks.addEventListener('click', nav_response)


}

nav_bar_response()