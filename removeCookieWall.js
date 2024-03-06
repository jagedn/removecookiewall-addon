var readyStateCheckInterval;
var counter = 0;
readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
        counter++;
        const removeParent = ['div.pmConsentWall']; //elpais
        [...removeParent].forEach(s => {
            console.log("search " + s)
            var divs = document.body.querySelectorAll(s);
            [...divs].forEach(element => {
                console.log("remove " + s)
                element.parentNode.remove()
                document.body.style.overflow = "unset"
                clearInterval(readyStateCheckInterval);
            });
        });
        const removeThis = ['div[data-nosnippet="data-nosnippet"]', '#mrf-popup']; //cadenaser
        [...removeThis].forEach(s => {
            console.log("search " + s)
            var divs = document.body.querySelectorAll(s);
            [...divs].forEach(element => {
                console.log(element)
                setTimeout(() => {
                    console.log(element);
                    element.remove()
                    document.body.style.overflow = "unset"
                    document.body.classList.remove('sxnlzit')
                    clearInterval(readyStateCheckInterval);
                }, 1000);
            });
        });
        if (counter > 30) {
            clearInterval(readyStateCheckInterval);
        }
    }
}, 100);