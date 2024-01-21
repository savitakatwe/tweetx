class Storage {
  static getItem(key: string) {
    try {
      // @ts-ignore
      return localStorage.getItem(key);
    } catch (e) {}
  }

  static setItem(key: string, value: unknown) {
    try {
      // @ts-ignore
      return localStorage.setValue(key, value);
    } catch (e) {}
  }
}

export default Storage;
