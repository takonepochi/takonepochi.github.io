// inspired by https://melonking.net
const mainFrame = document.getElementById("mainframe");
const titlePrefix = "🐙 蛸音ポチ - ";

// Capitalizes the first letter of a string
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function loadPage(url) {
    const timestamp = Date.now();
    mainFrame.src = url;

    // Remove ?timestamp and .html for title
    const cleanName = url.split("?")[0].replace(".html", "");
    document.title = titlePrefix + capitalize(cleanName);

    // Keep timestamp in visible URL for cache-busting
    history.pushState({ page: url }, "", `?p=${url}?${timestamp}`);
}

// On page load
window.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    let pageParam = params.get("p") || "about.html"; // default page
    // Strip off ?timestamp if present
    pageParam = pageParam.split("?")[0];
    loadPage(pageParam);
});

// Handle back/forward navigation
window.addEventListener("popstate", (e) => {
    const page = (e.state && e.state.page) || "about.html";
    mainFrame.src = page;

    const cleanName = page.split("?")[0].replace(".html", "");
    document.title = titlePrefix + capitalize(cleanName);
});
