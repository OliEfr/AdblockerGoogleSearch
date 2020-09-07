//bad option
/*document.addEventListener('DOMContentLoaded', function() {
  if(document.getElementById('tads')) {
    document.getElementById('tads').remove()
    console.log('Removed Google Search Result Ads!')
  }
})*/

//good option
var removedAds = false;
const observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.addedNodes && (mutation.addedNodes.length > 0)) {
      // top ads
      const node1 = mutation.target.querySelector("#tads");
      // right ads
      const node2 = mutation.target.querySelector(".commercial-unit-desktop-rhs");
      // footer ads
      const frNodes = mutation.target.querySelectorAll(".ads-fr");
      if (frNodes) {
        Array.from(frNodes).forEach(el => el.remove())
      }

      if (node2) {
        node2.remove();
      }
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