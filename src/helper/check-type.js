export const isString = (value) =>
  typeof value === "string" || value instanceof String;

export const isNumber = (value) => typeof value === "number" && isFinite(value);

export const isArray = (value) =>
  value && typeof value === "object" && value.constructor === Array;

export const isFunction = (value) => typeof value === "function";

export const isObject = (value) =>
  value && true && typeof value === "object" && value.constructor === Object;

export const isUndefined = (value) => typeof value === "undefined";

export const isNull = (value) => value === null;

export const isBoolean = (value) => typeof value === "boolean";

export const isRegExp = (value) =>
  value && typeof value === "object" && value.constructor === RegExp;

export const isDate = (value) => value instanceof Date;

export const isSymbol = (value) => typeof value === "symbol";

export const isValidColor = (value) =>
  (new Option().style.color = value) === value;

export const isValidSize = (value) =>
  !isNaN(value) ||
  ["rem", "px", "em", "%"].some((suffix) => value.endsWith(suffix));

export const isClient = typeof window === "object";

export const isDefined = (val) => typeof val !== "undefined";

export const isEmpty = (obj) => {
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) return false;
  }

  return true;
};

export const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export const isValidRGB = (rgb) => {
  const re = /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/;
  return re.test(rgb);
};

export const isValidRGBA = (rgba) => {
  const re = /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d*(?:\.\d+)?)/;
  return re.test(rgba);
};

export const isValidURL = (str) => {
  let pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i",
  ); // fragment locator
  return !!pattern.test(str);
};

export const removeTags = (str) => {
  if (str === null || str === "") return false;
  else str = str.toString();
  return str.replace(/(<([^>]+)>)/gi, "");
};
