const listCategories = document.querySelector('#categories');
const itemsAllCategory = listCategories.querySelectorAll('.item');

console.log(`Number of categories: ${itemsAllCategory.length}`);

itemsAllCategory.forEach(category => {
const titleCategory = category.querySelector('h2').textContent;
const elementsCategory = category.querySelectorAll('ul li');
console.log(`Category: ${titleCategory}`);
console.log(`Elements: ${elementsCategory.length}`);
});