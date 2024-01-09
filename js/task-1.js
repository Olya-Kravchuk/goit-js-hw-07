// const categoriesList = document.querySelector("#categories");
// const categoriesItems = categoriesList.querySelectorAll("li.item");
const categoriesItems = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(category => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryElements = category.querySelectorAll("ul li");
  
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements.length}`);
});

