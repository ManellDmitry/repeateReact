import * as locales from "./locales";

export function getLangFromBrowser() {
  return window.navigator.language;
}

export function checkLangFromBrowserList() {
  return window.navigator.languages.find((lang) => locales[lang]);
}

export function getLangFromLocalStorage() {
  return localStorage.getItem("lang");
}

export function getLang() {
  const browserLang = getLangFromBrowser();
  if (locales[browserLang]) {
    return browserLang;
  }

  const checkedLangFromBrowser = checkLangFromBrowserList();
  if (locales[checkedLangFromBrowser]) {
    return checkedLangFromBrowser;
  }

  let lsLang = getLangFromLocalStorage();
  lsLang = lsLang === "ua" ? "uk" : lsLang;
  if (locales[lsLang]) {
    return lsLang;
  }
  return "en";
}

export const lang = getLang();
console.log("Lang:", lang);

function getLocalesByLang(lang) {
  return locales[lang];
}
const currentLocales = getLocalesByLang(lang);
export function getLocale(key) {
  return currentLocales[key] || key;
}
