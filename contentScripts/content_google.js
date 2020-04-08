//bad option
/*document.addEventListener('DOMContentLoaded', function() {
    if(document.getElementById('tads')) {
        document.getElementById('tads').remove()
        console.log('Removed Google Serach Result Ads!')
    }
})*/

//good option
var removedAds = false;
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.addedNodes && (mutation.addedNodes.length > 0)) {
            var node1 = mutation.target.querySelector("#tads");
            if (node1) {
                node1.parentNode.removeChild(node1);
                removedAds = true;
            }

            if (removedAds) {
                observer.disconnect();
            }
        }
    });
});

observer.observe(document, {
    childList: true,
    subtree: true
});