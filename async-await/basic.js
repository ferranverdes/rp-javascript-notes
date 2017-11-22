function getPosts() {
  fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(res => {
      console.log(`Response received`);
      return res.json(); // res.json() return a Promise
    })
    .then(posts => {
      console.log(`Posts parsed`);
      console.log(posts);
    });
}

async function getPosts() {
  let res = await fetch(`https://jsonplaceholder.typicode.com/posts`); // Not stay waiting without doing anything
  console.log(`Response received`);
  let posts = await res.json();
  console.log(`Posts parsed`);
  console.log(posts);
}

console.log('Before call');
getPosts();
console.log('After call');

/**
 * Result:
 * Before call
 * After call
 * Response received
 * Posts parsed
 * [posts]
 */
