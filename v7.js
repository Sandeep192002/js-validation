function isPureObject(value) {
    return isObject(value) && !Array.isArray(value) && Object.getPrototypeOf(value) === Object.prototype;
  }