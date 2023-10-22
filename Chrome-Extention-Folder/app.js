window.addEventListener('load', function () {
    var link = document.createElement("link");
    link.href = chrome.runtime.getURL("customCss.css");
    link.type = "text/css";
    link.rel = "stylesheet";
    document.getElementsByTagName("head")[0].appendChild(link);
});