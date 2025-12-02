window.onload = function()
{
    var hiddenNav = document.querySelector(".top-hidden");
    window.addEventListener("scroll", function()
    {
        var h = document.body.scrollTop | document.documentElement.scrollTop;
        /*to ensure compatibility with some browser */

        if(h >= 150)
        {
            if(!hiddenNav.classList.contains("top-visible"))
            {
                hiddenNav.classList.add("top-visible");
            }
        }
        else
        {
            if(hiddenNav.classList.contains("top-visible"))
            {
                hiddenNav.classList.remove("top-visible");
            }
        }
    });
}