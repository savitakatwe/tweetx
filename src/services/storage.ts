class Storage {
  static getItem(key: string) {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      console.log(e);
    }
  }

  static setItem(key: string, value: unknown) {
    try {
      return localStorage.setValue(key, value);
    } catch (e) {
      console.log(e);
    }
  }
}

export default Storage;
