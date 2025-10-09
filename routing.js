// inspired by https://melonking.net
const mainFrame = document.getElementById("mainframe");
const titlePrefix = "🐙 蛸音ポチ - ";

function loadPage(url) {
    const timestamp = Date.now();
    mainFrame.src = url;
    document.title = titlePrefix + url.replace(".html", "");
    history.pushState({ page: url }, "", `?p=${url}?${timestamp}`);
}

// On page load
window.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    let pageParam = params.get("p") || "about.html"; // default page
    // Strip off any ?timestamp if present
    pageParam = pageParam.split("?")[0];
    loadPage(pageParam);
});

// Handle back/forward navigation
window.addEventListener("popstate", (e) => {
    const page = (e.state && e.state.page) || "about.html";
    mainFrame.src = page;
    docum
