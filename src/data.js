import data from './data.json'; // imports data.json

const allCategories = data.map((obj) => obj.category);

const categoriesSet = new Set(allCategories);
const categoriesUnique = Array.from(categoriesSet);

// const categoryObjects = allCategories.reduce((obj, cat) => {
//   obj[cat] = 0;
//   return obj;
// }, {});
// const categoriesUnique = Object.keys(categoryObjects);

const categoriesWithCount = allCategories.reduce((obj, cat) => {
  obj[cat] === undefined ? obj[cat] = 1: obj[cat] += 1;
  return obj;
}, {}); // initial value is the object, which will be used for the next iteration

const namesAndCategories = categoriesUnique.map((cat) => {
  return {
    name: cat,
    count: categoriesWithCount[cat]
  }
});


export default data; // export the native JS array

export {
  allCategories,
  categoriesSet,
  categoriesUnique,
  categoriesWithCount,
  namesAndCategories
 };
