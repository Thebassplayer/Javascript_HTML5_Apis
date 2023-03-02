export const storage = (type) => {
  const store = window[`${type}Storage`];
  const isSupported = typeof Storage === "function";

  return {
    isSupported,
    set(key, value) {
      try {
        store.setItem(key, JSON.stringify(value));
      } catch (err) {
        if (err instanceof DOMException) {
          console.warn(err);
        }
      }
    },
    get(key) {
      try {
        return JSON.parse(store.getItem(key));
      } catch (err) {
        console.warn(err);
      }
    },
    remove(key) {
      store.removeItem(key);
    },
    empty() {
      store.clear();
    },
  };
};
