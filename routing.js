const mainFrame = document.getElementById("mainframe");
const titlePrefix = "🐙 蛸音ポチ - ";

function loadPage(url) {
    mainFrame.src = url;
    document.title = titlePrefix + url.replace(".html","");
    history.pushState({page: url}, "", "?" + "page=" + url);
}

window.addEventListener("DOMContentLoaded", () => {
    // Check URL param to load page
    const params = new URLSearchParams(window.location.search);
    const page = params.get("page");
    if (page) {
        mainFrame.src = page;
        document.title = titlePrefix + page.replace(".html","");
    }
});

window.addEventListener("popstate", (e) => {
    if (e.state && e.state.page) {
        mainFrame.src = e.state.page;
        document.title = titlePrefix + e.state.page.replace(".html","");
    }
});
