import { detect } from "detect-browser";
const browser = detect();
const isSupportedBrowser = [
  // "aol",
  "edge",
  // "edge-ios",
  // "yandexbrowser",
  // "kakaotalk",
  "samsung",
  // "silk",
  // "miui",
  // "beaker",
  "edge-chromium",
  "chrome",
  "chromium-webview",
  // "phantomjs",
  "crios",
  // "firefox",
  // "fxios",
  // "opera-mini",
  // "opera",
  // "ie",
  // "bb10",
  // "android",
  "ios",
  "safari",
  // "facebook",
  // "instagram",
  // "ios-webview",
  // "searchbot",
].includes(browser.name);

const browserRestrict = () => import("./BrowserRestrict.vue").then((c) => c);

const restrictVueOption = {
  el: "#app",
  render: (h) => h(browserRestrict),
};

export default function restrictBrowser(vueOption) {
  return isSupportedBrowser ? vueOption : restrictVueOption;
}
