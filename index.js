module.exports = class Fbrt {
  constructor(db) {
    this.db = db;
  }
  
  set(ref, value) {
    return this.db.ref(ref).set(value);
  }
  
  get(ref) {
    return this.db.ref(ref).once("value").then(res => res.val());
  }
  
  delete(ref) {
    return this.db.ref(ref).remove();
  }
};