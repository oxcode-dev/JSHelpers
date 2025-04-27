export const hasWindowSupport = typeof window !== "undefined";
export const hasDocumentSupport = typeof document !== "undefined";
export const hasNavigatorSupport = typeof navigator !== "undefined";

export const isBrowser =
  hasWindowSupport && hasDocumentSupport && hasNavigatorSupport;
export const userAgent = isBrowser
  ? window.navigator.userAgent.toLowerCase()
  : "";
export const isIE = /msie|trident/.test(userAgent);
export const isTouch =
  "ontouchstart" in window || navigator.msMaxTouchPoints > 0;
export const hasIntersectionObserverSupport =
  isBrowser &&
  "IntersectionObserver" in window &&
  "IntersectionObserverEntry" in window &&
  // Edge 15 and UC Browser lack support for `isIntersecting`
  // but we an use intersectionRatio > 0 instead
  // 'isIntersecting' in window.IntersectionObserverEntry.prototype &&
  "intersectionRatio" in window.IntersectionObserverEntry.prototype;

export function canUseWebP() {
  let elem = document.createElement("canvas");

  if (elem.getContext && elem.getContext("2d")) {
    // was able or not to get WebP representation
    return elem.toDataURL("image/webp").indexOf("data:image/webp") === 0;
  }

  // very old browser like IE 8, canvas not supported
  return false;
}

export const isWindow = (val) =>
  typeof window !== "undefined" && toString.call(val) === "[object Window]";
