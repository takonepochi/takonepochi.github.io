const mainFrame = document.getElementById("mainframe");
const titlePrefix = "🐙 蛸音ポチ - ";

function loadPage(url) {
    mainFrame.src = url;
    document.title = titlePrefix + url.replace(".html", "");
    history.pushState({ page: url }, "", "?p=" + url);
}

// On page load
window.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const page = params.get("p") || "about.html"; // default to about.html
    loadPage(page);
});

// Handle back/forward navigation
window.addEventListener("popstate", (e) => {
    const page = (e.state && e.state.page) || "about.html";
    mainFrame.src = page;
    document.title = titlePrefix + page.replace(".html", "");
});
