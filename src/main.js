function calcula() {
  var a=document.getElementById("va").value;
  var b=document.getElementById("vb").value;
  var c=document.getElementById("vc").value;
  console.log(a,b,c)
<<<<<<< HEAD
fetch('main.wasm')
=======
fetch('../out/main.wasm')
>>>>>>> bf13b7dc15250a7172048e05e9152381380f03ac
.then(response => response.arrayBuffer()
).then(bytes => WebAssembly.instantiate(bytes)
).then(results => {
  instance = results.instance;
  document.getElementById("container").textContent = instance.exports.x1(a,b,c);
}).catch(console.error);

<<<<<<< HEAD
fetch('main.wasm')
=======
fetch('../out/main.wasm')
>>>>>>> bf13b7dc15250a7172048e05e9152381380f03ac
.then(response => response.arrayBuffer()
).then(bytes => WebAssembly.instantiate(bytes)
).then(results => {
  instance = results.instance;
  document.getElementById("container2").textContent = instance.exports.x2(a,b,c);
}).catch(console.error);
}
