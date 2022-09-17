const numberOfCategory = document.querySelectorAll('.item');

console.log('Number of categories:', numberOfCategory.length);

const category = document.querySelectorAll('h2');

const r = numberOfCategory[0].querySelectorAll('li');
console.log("Category :", category[0].textContent);
console.log("Elements:", r.length);

const q = numberOfCategory[1].querySelectorAll('li');
console.log("Category :", category[1].textContent);
console.log("Elements:", q.length);

const w = numberOfCategory[2].querySelectorAll('li');
console.log("Category :", category[2].textContent);
console.log("Elements:", w.length);
