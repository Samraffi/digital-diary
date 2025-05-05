const assertHasKeys = (data: object, keys: string[]) => {
  const missingKeys = keys.filter(key => !(key in data));
  if (missingKeys.length > 0) {
    throw new Error(`Missing required data: ${missingKeys.join(', ')}`);
  }
}

export { assertHasKeys };