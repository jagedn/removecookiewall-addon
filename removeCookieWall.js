var readyStateCheckInterval;
var counter = 0;

function sanitizeBody() {
    document.body.style.overflow = "unset"
    document.body.classList.remove('sxnlzit')
    document.body.classList.remove('didomi-popup-open')
    document.body.parentNode.classList.remove('sp-message-open')
}

readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
        counter++;
        const removeParent = ['div.pmConsentWall']; //elpais
        [...removeParent].forEach(s => {
            var divs = document.body.querySelectorAll(s);
            [...divs].forEach(element => {
                element.parentNode.remove()
                sanitizeBody()
                clearInterval(readyStateCheckInterval);
            });
        });
        const removeThis = ['div[data-nosnippet="data-nosnippet"]', '#mrf-popup', '#didomi-popup', '[id^="sp_message_container_"]'];
        [...removeThis].forEach(s => {
            var divs = document.body.querySelectorAll(s);
            [...divs].forEach(element => {
                setTimeout(() => {
                    sanitizeBody()
                    element.remove()
                    clearInterval(readyStateCheckInterval);
                }, 1000);
            });
        });
        if (counter > 30) {
            clearInterval(readyStateCheckInterval);
        }
    }
}, 100);