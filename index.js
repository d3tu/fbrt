module.exports = class Fbrt {
  constructor(db) {
    this.db = db;
  }
  
  ref(ref) {
    return {
      set(key, value) {
        return this.db.ref(ref).set(key, value);
      },
      get(key) {
        return this.db.ref(ref).once("value").then(res => res.val());
      },
      delete(key) {
        return this.db.ref(ref).remove();
      }
    }
  }
};