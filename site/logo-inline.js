// Align the header logo tagline and divider to the title's rendered width.
document.addEventListener("DOMContentLoaded", function () {
    function alignLogo() {
        var title = document.getElementById("logo-title");
        var divider = document.getElementById("logo-divider");
        var tagline = document.getElementById("logo-tagline");
        if (!title || !divider || !tagline) return;
        var bbox = title.getBBox();
        var rightEdge = bbox.x + bbox.width;
        divider.setAttribute("x2", rightEdge);
        tagline.setAttribute("textLength", rightEdge - 118);
    }
    if (document.fonts) {
        document.fonts.ready.then(alignLogo);
    } else {
        alignLogo();
    }
});

// Automatically prepend the Impact Engine logo mark before every
// visible "Impact Engine" text inside .content elements.
document.addEventListener("DOMContentLoaded", function () {
    var SKIP = {SCRIPT: 1, STYLE: 1, CODE: 1, PRE: 1, TITLE: 1, TEXTAREA: 1};
    var PHRASE = "Impact Engine";
    var root = document.querySelector(".content");
    if (!root) return;

    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach(function (node) {
        if (SKIP[node.parentElement.tagName]) return;
        if (node.textContent.indexOf(PHRASE) === -1) return;

        var parts = node.textContent.split(PHRASE);
        var frag = document.createDocumentFragment();
        parts.forEach(function (part, i) {
            if (i > 0) {
                var img = document.createElement("img");
                img.src = "_static/logo-mark.svg";
                img.alt = "";
                img.className = "logo-inline";
                frag.appendChild(img);
                var span = document.createElement("span");
                span.className = "brand-impact-engine";
                var impact = document.createElement("span");
                impact.className = "brand-impact";
                impact.textContent = "Impact ";
                var engine = document.createElement("span");
                engine.className = "brand-engine";
                engine.textContent = "Engine";
                span.appendChild(impact);
                span.appendChild(engine);
                frag.appendChild(span);
            }
            frag.appendChild(document.createTextNode(part));
        });
        node.parentNode.replaceChild(frag, node);
    });
});
