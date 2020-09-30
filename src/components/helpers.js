export function constrain(value, constraints) {
  return Math.max(Math.min(value, constraints.max), constraints.min);
}

export const randomDiffArr = (
  arr = [],
  num = 1,
  repeat = true,
  exclude = []
) => {
  let newArr = [];
  let lastEl = null;
  for (let i = 0; i < num; i++) {
    let randomEl = arr[Math.floor(Math.random() * arr.length)];
    if (repeat) {
      //no 2 elements same next to each other
      do {
        randomEl = arr[Math.floor(Math.random() * arr.length)];
      } while (lastEl == randomEl);
    } else {
      //all elements in array are unique
      do {
        randomEl = arr[Math.floor(Math.random() * arr.length)];
      } while (newArr.includes(randomEl) || exclude.includes(randomEl));
    }

    newArr.push(randomEl);
    lastEl = randomEl;
  }
  //returns an non repeating random arr of desired length
  return newArr;
};

//Fade + Scale function
export const fadeScale = (
  node,
  {
    delay = 0,
    duration = 200,
    easing = (x) => x,
    baseScale = 0,
    stagger = false,
  }
) => {
  const o = +getComputedStyle(node).opacity;
  const m = getComputedStyle(node).transform.match(/scale\(([0-9.]+)\)/);
  const s = m ? m[1] : 1;
  const is = 1 - baseScale;

  return {
    delay,
    duration,
    css: (t) => {
      const eased = easing(t);
      return `opacity: ${eased * o}; transform: scale(${
        eased * s * is + baseScale
      })`;
    },
  };
};

export const isEqual = (value, other) => {
  // Get the value type
  var type = Object.prototype.toString.call(value);

  // If the two objects are not the same type, return false
  if (type !== Object.prototype.toString.call(other)) return false;

  // If items are not an object or array, return false
  if (["[object Array]", "[object Object]"].indexOf(type) < 0) return false;

  // Compare the length of the length of the two items
  var valueLen =
    type === "[object Array]" ? value.length : Object.keys(value).length;
  var otherLen =
    type === "[object Array]" ? other.length : Object.keys(other).length;
  if (valueLen !== otherLen) return false;

  // Compare two items
  var compare = function (item1, item2) {
    // Get the object type
    var itemType = Object.prototype.toString.call(item1);

    // If an object or array, compare recursively
    if (["[object Array]", "[object Object]"].indexOf(itemType) >= 0) {
      if (!isEqual(item1, item2)) return false;
    }

    // Otherwise, do a simple comparison
    else {
      // If the two items are not the same type, return false
      if (itemType !== Object.prototype.toString.call(item2)) return false;

      // Else if it's a function, convert to a string and compare
      // Otherwise, just compare
      if (itemType === "[object Function]") {
        if (item1.toString() !== item2.toString()) return false;
      } else {
        if (item1 !== item2) return false;
      }
    }
  };

  // Compare properties
  if (type === "[object Array]") {
    for (var i = 0; i < valueLen; i++) {
      if (compare(value[i], other[i]) === false) return false;
    }
  } else {
    for (var key in value) {
      if (value.hasOwnProperty(key)) {
        if (compare(value[key], other[key]) === false) return false;
      }
    }
  }

  // If nothing failed, return true
  return true;
};
