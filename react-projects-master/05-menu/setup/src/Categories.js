import React from 'react';

const Categories = ({ filterItems, categories }) => {

  console.log(categories)

  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return <button type="button" className="filter-btn" ket={index} onClick={() => filterItems(category)}>{category}</button>
      })}
    </div>
  )
};

export default Categories;
