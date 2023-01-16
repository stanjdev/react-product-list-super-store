import { useState, useEffect } from 'react';

import './App.css';
import data, { allCategories,
  categoriesSet,
  categoriesUnique,
  categoriesWithCount,
  namesAndCategories } from './data.js';
import CategoryButton from './components/CategoryButton.js';
import Product from './components/Product.js';
import { getSum } from './helpers.js';


function App() {
  const [category, setCategory] = useState(['All']);
  const [sortBy, setSortBy] = useState('ASC');

  const selectCategory = (evt) => {
    let val = evt.target.value;
    if (val === 'All') setCategory(['All']);
    else if (category.includes(val)) {
      setCategory((category) => category.filter((item) => item !== val));
    } else if (!category.includes(val)) {
      setCategory([...category, val]);
    }
  };

  useEffect(() => {
    // Remove 'All' selection
    if (category.length > 1 && category[0] === 'All') {
      setCategory((category) => category.filter((item) => item !== 'All'));
    }
  }, [category]);

  const toggleSortBy = () => {
    if (sortBy === 'ASC') setSortBy('DESC');
    else setSortBy('ASC');
  };

  const categoryButtons = categoriesUnique.sort().map((cat) => {
    const className = category.includes(cat) ? 'selected-category' : '';
    return <CategoryButton
              value={cat}
              onClick={(evt) => selectCategory(evt)}
              key={cat}
              className={className}
              itemCount={categoriesWithCount[cat]}
            />
  });

  const filteredProducts = data.filter((item) => category.includes(item.category) || category.includes('All'))
                                .sort((a, b) => sortBy === 'ASC' ? a.rating - b.rating : b.rating - a.rating);

  let displayedProducts = filteredProducts.map((item) => {
    return <Product
              key={item.id}
              name={item.name}
              price={item.price}
              category={item.category}
              units={item.units}
              rating={item.rating}
            />
  });

  const filteredSum = getSum(filteredProducts);
  const totalSum = getSum(data);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Super Store</h1>
        <div className='CategoryList'>
          {categoryButtons}
          <CategoryButton
            value={'All'}
            onClick={(evt) => selectCategory(evt)}
            key={'All'}
            className={category.includes('All') ? 'selected-category' : ''}
            itemCount={allCategories.length}
          />
        </div>
        <div className='filters'>
          <button onClick={toggleSortBy}>Sort by ⭐ rating: <strong>{sortBy}</strong></button>
        </div>
        <div className='products'>
          {displayedProducts}
        </div>
        <div>
          <h2>Cost of Selected: {filteredSum}</h2>
          <h3>Grand Total: {totalSum}</h3>
        </div>
      </header>
    </div>
  );
}

export default App;
