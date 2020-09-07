// bad option
/*document.addEventListener('DOMContentLoaded', function() {
  if(document.getElementById('tads')) {
    document.getElementById('tads').remove()
    console.log('Removed Google Search Result Ads!')
  }
})*/

// good option
let removedAds = null;
let timerStarted = null;

const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.addedNodes && (mutation.addedNodes.length > 0)) {
      const node1 = mutation.target.querySelector('[aria-label="Ads"]')
      // top ads
      const node2 = mutation.target.querySelector('#tads');
      // right ads
      const node3 = mutation.target.querySelector('.commercial-unit-desktop-rhs');
      // footer ads
      const node4 = mutation.target.querySelector('.ads-fr');

      if (node4 && node4.parentNode) {
        node4.parentNode.removeChild(node4);
      }

      if (node1 && node1.parentNode) {
        node1.parentNode.removeChild(node1);
      }

      if (node2 && node2.parentNode) {
        node2.parentNode.removeChild(node2);
      }
      if (node3 && node3.parentNode) {
        node3.parentNode.removeChild(node3);
        removedAds = true;
      }

      if (removedAds && !timerStarted) {
        timerStarted = true;
        setTimeout(() => {
          observer.disconnect();
        }, 1);
      }
    }
  });
});

observer.observe(document, {
  childList: true,
  subtree: true
});