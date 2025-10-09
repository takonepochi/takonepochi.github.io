// inspired by https://melonking.net
const mainFrame = document.getElementById("mainframe");
const titlePrefix = "🐙 蛸音ポチ - ";

function loadPage(url) {
    const timestamp = Date.now();
    const urlWithTimestamp = `${url}?${timestamp}`;
    mainFrame.src = urlWithTimestamp;
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
    const timestamp = Date.now();
    mainFrame.src = `${page}?${timestamp}`;
    document.title = titlePrefix + page.replace(".html", "");
});
