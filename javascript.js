    $.window.onscroll = function () {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("myBtn").style.display = "block";
        } else {
            document.getElementById("myBtn").style.display = "none";
        }
    }


    function topFunction() {
        document.body.scrollTop = 0; // For Chrome, Safari and Opera 
        document.documentElement.scrollTop = 0; // For IE and Firefox
    }
