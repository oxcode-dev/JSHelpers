export function randomStr() {
  return (Math.floor(Math.random() * 100000) * Date.now()).toString(16);
}

export function objectMerge(obj, src) {
  Object.keys(src).forEach(function (key) {
    obj[key] = src[key];
  });
  return obj;
}

export function scrollToTop(options = {}) {
  options.element = options.element === undefined ? window : options.element;
  options.top = options.top === undefined ? 0 : options.top;
  options.element.scroll({ top: options.top, left: 0, behavior: "smooth" });
}

export function strBetween(str, start, stop) {
  str = typeof str !== "string" ? str.toString() : str;

  let result = str.split(start).pop().split(stop);

  if (result.length === 0) return false;

  return result[0];
}

export function kebabCase(str) {
  return (str || "").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

export const camelize = (str) => {
  const camelizeRE = /-(\w)/g;

  return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ""));
};

// KeyboardEvent.keyCode aliases
export const keyCodes = Object.freeze({
  enter: 13,
  tab: 9,
  delete: 46,
  esc: 27,
  space: 32,
  up: 38,
  down: 40,
  left: 37,
  right: 39,
  end: 35,
  home: 36,
  del: 46,
  backspace: 8,
  insert: 45,
  pageup: 33,
  pagedown: 34,
});

export function arrayDiff(a, b) {
  const diff = [];
  for (let i = 0; i < b.length; i++) {
    if (a.indexOf(b[i]) < 0) diff.push(b[i]);
  }
  return diff;
}

export function upperFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function flatten(array) {
  let queries = [];
  array.forEach(function (item) {
    if (typeof item === "string") {
      queries.push(item);
    } else {
      queries = queries.concat(flatten(item));
    }
  });
  return queries;
}

export function slugify(value) {
  const a =
    "àáäâèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;" +
    "ąàáäâãåæćęęèéëêìíïîłńòóöôõøśùúüûñçżź";
  const b =
    "aaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------" +
    "aaaaaaaaceeeeeeiiiilnoooooosuuuunczz";
  const p = new RegExp(a.split("").join("|"), "g");

  return value
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(p, (c) => b.charAt(a.indexOf(c))) // Replace special chars
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-"); // Replace multiple - with single -
}

export function o_O(promise) {
  return promise
    .then(({ data }) => {
      if (data instanceof Error) return [data];
      return [null, data];
    })
    .catch((err) => [err]);
}

export function formatParams(queryName, value) {
  queryName = queryName.replace(/=/g, "");

  let result = [];

  switch (value.constructor) {
    case String:
    case Number:
    case Boolean:
      result.push(
        encodeURIComponent(queryName) + "=" + encodeURIComponent(value)
      );
      break;

    case Array:
      value.forEach(function (item) {
        result = result.concat(formatParams(queryName + "[]=", item));
      });
      break;

    case Object:
      Object.keys(value).forEach(function (key) {
        let item = value[key];
        result = result.concat(formatParams(queryName + "[" + key + "]", item));
      });
      break;
  }

  return result;
}

export function makeBlankSrc(width, height, color) {
  const src = encodeURIComponent(
    `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none">
                  <rect width="100%" height="100%" style="fill:${color};"></rect>
                </svg>`
  );
  return `data:image/svg+xml;charset=UTF-8,${src}`;
}

export function addPrefetch(kind, url, as) {
  const linkElem = document.createElement("link");

  linkElem.rel = kind;
  linkElem.href = url;
  if (as) {
    linkElem.as = as;
  }
  linkElem.crossorigin = true;
  document.head.appendChild(linkElem);
}

/**
 * Get the thumbnail dimensions to use for a given player size.
 *
 * @param {Object} options
 * @param {number} options.width The width of the player
 * @param {number} options.height The height of the player
 * @return {Object} The width and height
 */
export function getThumbnailDimensions({ width, height }) {
  let roundedWidth = width;
  let roundedHeight = height;

  // If the original width is a multiple of 320 then we should
  // not round up. This is to keep the native image dimensions
  // so that they match up with the actual frames from the video.
  //
  // For example 640x360, 960x540, 1280x720, 1920x1080
  //
  // Round up to nearest 100 px to improve cacheability at the
  // CDN. For example, any width between 601 pixels and 699
  // pixels will render the thumbnail at 700 pixels width.
  if (roundedWidth % 320 !== 0) {
    roundedWidth = Math.ceil(width / 100) * 100;
    roundedHeight = Math.round((roundedWidth / width) * height);
  }

  return {
    width: roundedWidth,
    height: roundedHeight,
  };
}

export function copyToClipBoard(str) {
  navigator.clipboard.writeText(str).then(
    function () {
      alert("Async: Copying to clipboard was successful!");
    },
    function (err) {
      console.error("Async: Could not copy text: ", err);
    }
  );
}

export function cloneObject(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export const getQueryParams = (params, url) => {
  let href = url;
  //this expression is to get the query strings
  let reg = new RegExp("[?&]" + params + "=([^&#]*)", "i");
  let queryString = reg.exec(href);
  return queryString ? queryString[1] : null;
};

export const sortArrayOfObjects = (arr, key) => {
  return arr.sort((a, b) => {
    return a[key] - b[key];
  });
};

export function generateUUID() { // Public Domain/MIT
  var d = new Date().getTime();//Timestamp
  var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16;//random number between 0 and 16
      if(d > 0){//Use timestamp until depleted
          r = (d + r)%16 | 0;
          d = Math.floor(d/16);
      } else {//Use microseconds since page-load if supported
          r = (d2 + r)%16 | 0;
          d2 = Math.floor(d2/16);
      }
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}





