const formData = new FormData();
console.log(formData);
// append:ƒ append()
// delete:ƒ delete ()
// entries:ƒ entries()
// forEach:ƒ forEach()
// get:ƒ()
// getAll:ƒ getAll()
// has:ƒ has()
// keys:ƒ keys()
// set:ƒ()
// values:ƒ values()

formData.append("name", "john");
formData.append("email", "john@gmail.com");

// console.log(formData.get('name'));
// console.log(formData.get('email'));

formData.append("name", "peter");
formData.append("name", "else");
// console.log(formData.getAll('name'));

// console.log(formData.has('name'));
// console.log(formData.keys());
// we use iterator
// for (let key of formData.keys()) {
//   console.log(key);
// }

// for (let v of formData.values()) {
//   console.log(v);
// }

// for (let keyValue of formData.entries()) {
//   console.log(keyValue);
// }
formData.delete('phone');

for (let keyValue of formData.entries()) {
  console.log(keyValue[0], ":", keyValue[1]);
}