# fbrt
```javascript
const firebase = require('firebase'),
      Fbrt = require("fbrt"),
      db = new Fbrt(firebase.initializeApp({
        apiKey: "apiKey",
        databaseURL: "databaseURL"
      }).database());
      
(async() => {
  await db.set("abc", "xyz");
  const data = await db.ref("abc");
  console.log(data); // xyz
  await db.delete("abc");
})();
```