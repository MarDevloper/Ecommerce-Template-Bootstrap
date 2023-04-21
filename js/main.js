$(document).ready(function () {
    $(".navbar.navbar-light .navbar-nav .nav-item .nav-link div div .icon-default").css({ "stroke": "red" })
    nav = $(".nav-item")
    arr = nav.toArray()

    nav.click(function (e) {
        i = $(this)
        for (j of nav) {
            let k = $(j)
            if (k.hasClass("active"))
                k.removeClass("active")
        }
        i.addClass("active")
    })

})