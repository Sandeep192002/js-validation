function isObject(value) {
    return typeof value === 'object' && !isNull(value); // Exclude null
  }