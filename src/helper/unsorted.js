export function prettierUrl(value) {
  return value.replace(/^\/\/|^.*?:(\/\/)?/, "");
}

export function uppercase(value) {
  return value || value === 0 ? value.toString().toUpperCase() : "";
}

export function lowercase(value) {
  return value || value === 0 ? value.toString().toLowerCase() : "";
}

export function capitalize(value) {
  if (!value) return "";

  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function dehyphenate(value) {
  if (!value) return "";
  return value.replace(/-/g, " ").replace(/_/g, " ");
}

export function ucwords(value) {
  if (!value) return "";

  return value
    .toLowerCase()
    .replace(/(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g, (a) => a.toUpperCase());
}

export function getName(value) {
  if (value.name !== undefined) return value.name;
  return value.first_name + " " + value.last_name;
}

export function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

export function numberRange(start, stop, step) {
  let a = [],
    b = start;
  while (b < stop) {
    a.push((b += step || 1));
  }
  return a;
}

export function numberFormat(num) {
  return num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

export function naturalSort(a, b) {
  let re = /(^-?[0-9]+(\.?[0-9]*)[df]?e?[0-9]?$|^0x[0-9a-f]+$|[0-9]+)/gi,
    sre = /(^[ ]*|[ ]*$)/g,
    dre =
      /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[/-]\d{1,4}[/-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,
    hre = /^0x[0-9a-f]+$/i,
    ore = /^0/,
    i = function (s) {
      return (naturalSort.insensitive && ("" + s).toLowerCase()) || "" + s;
    },
    // convert all to strings strip whitespace
    x = i(a).replace(sre, "") || "",
    y = i(b).replace(sre, "") || "",
    // chunk/tokenize
    xN = x
      .replace(re, "\0$1\0")
      .replace(/\0$/, "")
      .replace(/^\0/, "")
      .split("\0"),
    yN = y
      .replace(re, "\0$1\0")
      .replace(/\0$/, "")
      .replace(/^\0/, "")
      .split("\0"),
    // numeric, hex or date detection
    xD =
      parseInt(x.match(hre)) ||
      (xN.length != 1 && x.match(dre) && Date.parse(x)),
    yD =
      parseInt(y.match(hre)) || (xD && y.match(dre) && Date.parse(y)) || null,
    oFxNcL,
    oFyNcL;
  // first try and sort Hex codes or Dates
  if (yD)
    if (xD < yD) return -1;
    else if (xD > yD) return 1;
  // natural sorting through split numeric strings and default strings
  for (
    let cLoc = 0, numS = Math.max(xN.length, yN.length);
    cLoc < numS;
    cLoc++
  ) {
    // find floats not starting with '0', string or 0 if not defined (Clint Priest)
    oFxNcL =
      (!(xN[cLoc] || "").match(ore) && parseFloat(xN[cLoc])) || xN[cLoc] || 0;
    // handle numeric vs string comparison - number < string - (Kyle Adams)
    if (isNaN(oFxNcL) !== isNaN(oFyNcL)) {
      return isNaN(oFxNcL) ? 1 : -1;
    }
    // rely on string comparison if different types - i.e. '02' < 2 != '02' < '2'
    else if (typeof oFxNcL !== typeof oFyNcL) {
      oFxNcL += "";
      oFyNcL += "";
    }
    if (oFxNcL < oFyNcL) return -1;
    if (oFxNcL > oFyNcL) return 1;
  }
  return 0;
}

export const cartesian = (arraysToCombine) => {
  let divisors = [];
  for (let i = arraysToCombine.length - 1; i >= 0; i--) {
    divisors[i] = divisors[i + 1]
      ? divisors[i + 1] * arraysToCombine[i + 1].length
      : 1;
  }
  function getPermutation(n, arraysToCombine) {
    let result = [],
      curArray;
    for (let i = 0; i < arraysToCombine.length; i++) {
      curArray = arraysToCombine[i];
      result.push(curArray[Math.floor(n / divisors[i]) % curArray.length]);
    }
    return result;
  }
  let numPerms = arraysToCombine[0].length;
  for (let i = 1; i < arraysToCombine.length; i++) {
    numPerms *= arraysToCombine[i].length;
  }
  let combinations = [];
  for (let i = 0; i < numPerms; i++) {
    combinations.push(getPermutation(i, arraysToCombine));
  }
  return combinations;
};
