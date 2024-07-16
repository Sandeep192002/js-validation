function isError(value) {
    return value instanceof Error || toString.call(value) === '[object Error]';
  }