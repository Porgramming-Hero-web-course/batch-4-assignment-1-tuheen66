{
  //
  function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean {
    for (let key of keys) {
      if (!(key in obj)) {
        return false;
      }
    }
    return true;
  }

  

  //
}
