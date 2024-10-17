import axios from "axios";

console.log("hello");

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

axios.get("https://jsonplaceholder.typicode.com/todos/1").then((response) => {
  console.log(response.data);
});


// parcel -> bundler -> its function take code of axios from node_module and merge that with our script.js creates a single -> index.js file and link it with our html automatically see in network tab also it start a server . 
