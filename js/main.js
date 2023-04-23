$(document).ready(function () {
    $(".navbar.navbar-light .navbar-nav .nav-item .nav-link div div .icon-default").css({ "stroke": "red" })
    nav = $(".nav-item")
    navcol = $(".navbar-collapse")
    colappsed = navcol.hasClass("collapse")
    if(!colappsed) {
        navcol.addClass("collapse")
    }
    arr = nav.toArray()
    nav.click(function (e) {
        if(!navcol.hasClass("collapse")) {
            navcol.addClass("collapse")
        }
        i = $(this)
        for (j of nav) {
            let k = $(j)
            if (k.hasClass("active"))
                k.removeClass("active")
        }
        i.addClass("active")
    })

})