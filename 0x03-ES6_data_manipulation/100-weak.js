const weakMap = new WeakMap();

function queryAPI(endpoint) {
  const numCalls = weakMap.get(endpoint) || 0;
  weakMap.set(endpoint, numCalls + 1);

  if (numCalls >= 4) {
    throw new Error('Endpoint load is high');
  }
}

export { weakMap, queryAPI };
