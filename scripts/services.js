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