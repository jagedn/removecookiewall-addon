var readyStateCheckInterval;
var counter = 0;
var config = null;

function sanitizeBody() {
    document.body.style.overflow = 'unset'
    document.body.classList.remove('sxnlzit')
    document.body.classList.remove('_y9ev9r')
    document.body.classList.remove('didomi-popup-open')
    document.body.parentNode.classList.remove('sp-message-open')

    document.documentElement.className = '';
}

function removeMe(element) {
    element.remove();
    sanitizeBody();
}

readyStateCheckInterval = setInterval(async function() {
    if (document.readyState === "complete") {
        if (!config) {
            try {
                const data = await fetch("https://raw.githubusercontent.com/jagedn/removecookiewall-addon/refs/heads/main/config.json", {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                    },
                });
                config = await data.json()                
            } catch (e) {
                console.log(e)
            }
        }
        const ignoreSite = (config.ignore||[]).includes(location.hostname)
        if( ignoreSite ){
            console.log("RemoveCookieWall: Ignore this site")
            clearInterval(readyStateCheckInterval);
            return;
        }
        counter++;
        const removeParent = config.parents || [];
        [...removeParent].forEach(s => {
            var divs = document.body.querySelectorAll(s);
            [...divs].forEach(element => {
                removeMe(element.parentNode);
            });
        });
        const removeThis = config.elements || [];
        [...removeThis].forEach(s => {
            var divs = document.body.querySelectorAll(s);
            [...divs].forEach(element => {
                removeMe(element);
            });
        });

        const removeTags = config.tags || [];
        [...removeTags].forEach(s => {
            var divs = document.body.getElementsByTagName(s);
            [...divs].forEach(element => {
                removeMe(element);
            });
        });
        if (counter > 30) {
            sanitizeBody();
            clearInterval(readyStateCheckInterval);
        }
    }
}, 100);