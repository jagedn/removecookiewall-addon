var readyStateCheckInterval;
var counter = 0;

function sanitizeBody() {
    document.body.style.overflow = "unset"
    document.body.classList.remove('sxnlzit')
    document.body.classList.remove('didomi-popup-open')
    document.body.parentNode.classList.remove('sp-message-open')
}

function removeMe(element) {
    element.remove();
    sanitizeBody();
}

readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
        counter++;
        const removeParent = ['div.pmConsentWall']; //elpais
        [...removeParent].forEach(s => {
            var divs = document.body.querySelectorAll(s);
            [...divs].forEach(element => {
                removeMe(element.parentNode);
            });
        });
        const removeThis = [
            'div[data-nosnippet="data-nosnippet"]',
            '#mrf-popup',
            '#didomi-popup',
            '[id^="sp_message_container_"]',
            '#cl-consent',
            'dialog.cookie-policy'
        ];
        [...removeThis].forEach(s => {
            var divs = document.body.querySelectorAll(s);
            [...divs].forEach(element => {
                removeMe(element);
            });
        });
        if (counter > 30) {
            clearInterval(readyStateCheckInterval);
        }
    }
}, 100);