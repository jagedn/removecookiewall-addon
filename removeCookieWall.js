var readyStateCheckInterval;

readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
        const removeParent = ['div.pmConsentWall']; //elpais
        [...removeParent].forEach(s => {
            console.log("search " + s)
            var divs = document.body.querySelectorAll(s);
            [...divs].forEach(element => {
                console.log("remove " + s)
                element.parentNode.remove()
            });
        });
        const removeThis = ['div[data-nosnippet="data-nosnippet"]']; //cadenaser
        [...removeThis].forEach(s => {
            console.log("search " + s)
            var divs = document.body.querySelectorAll(s);
            [...divs].forEach(element => {
                console.log(element)
                setTimeout(() => {
                    console.log(element);
                    element.remove()
                }, 1000);
            });
        });
        document.body.style.overflow = "unset"
        clearInterval(readyStateCheckInterval);
    }
}, 3000);