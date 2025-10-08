// --- Reusable empty translations object ---
const translations = {
  jp: {}, // Japanese translations
  en: {}  // English (default) translations
};

// --- Reusable localization function ---
/**
 * Localizes a string or HTMLElement based on the translations object
 * @param {string|HTMLElement} input - HTML string or DOM element
 * @param {string} lang - Language code, e.g., "en" or "jp"
 * @returns {string|undefined} - Returns localized string if input was a string; otherwise modifies DOM in-place
 */
function localizeContent(input, lang = "en") {
  const replacer = (text) => text.replace(/\{\{(.+?)\}\}/g, (match, key) => {
    return translations[lang]?.[key.trim()] || key;
  });

  if (typeof input === "string") {
    return replacer(input);
  } else if (input instanceof HTMLElement) {
    input.innerHTML = replacer(input.innerHTML);
  } else {
    throw new Error("Input must be a string or an HTMLElement");
  }
}

// --- Auto-detect language from URL ?jp ---
const lang = window.location.search.includes("jp") ? "jp" : "en";

// --- Example: localize the whole page ---
localizeContent(document.body, lang);
document.title = localizeContent(document.title, lang);

// --- Example: localize dynamic HTML snippet ---
/*
const snippet = `<h2>{{Voice Info}}</h2><p>{{Romaji CV Voicebank}}</p>`;
const localizedSnippet = localizeContent(snippet, lang);
console.log(localizedSnippet);
*/
