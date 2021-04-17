import React, { useState, useEffect } from 'react';
import './App.scss';
import ItemBoard from './components/ItemBoard';
import data from './assets/data.json';

function App() {
  const tags = ['White', 'Red', 'Sparkling'];
  const [products, setProducts] = useState([]);
  const [parameters, setParameters] = useState([]);


  useEffect(() => setProducts(data), []);

  const filterFunc = ({type}) => {
    if (parameters.length === 0) { return true; }
    const tags = [type]; // The tags variable is set to type
    return parameters.every(parameter => tags.includes(parameter));
  }

  const handleTagClick = (tag) => {
    if (parameters.includes(tag)) return; // Prevents tag from being added to filter twice
    setParameters([...parameters, tag]);   
  }

  const clearFilters = () => {
    setParameters([]);
     // When clear btn is pressed, set filters back to just an empty array
  }

  const filteredProducts = products.filter(filterFunc);
  
  function comparePrices(a, b){
    return b.bottle - a.bottle;
  }

  const orderProducts = () => {
    const sortedPrices = filteredProducts.sort(comparePrices)
    setProducts(sortedPrices);  
  }

  return (
    <div className="App">
      <header className="header">
        <div className="header__brand">Wine Shop</div>
        <div className="header__url">wineshop.com</div>
      </header>
      <div className="section">
          <div className="section__filters">
              <div className="show">
                  <span className="show__me">Show me</span>
                  <span className="show__all" onClick={clearFilters}>Show All</span>
              </div>
              <div className="tags">
                  {
                    tags.map((tag) => (
                      <button 
                      className="tags__el" 
                      onClick={() => handleTagClick(tag)}
                      > {tag} </button>       
                    ))
                  }
              </div>
              <div className="order">
                <span className="order__text">Order by:</span>

                <span className="order__el" onClick={orderProducts}>Price</span>
                <span className="order__el">Vintage</span>
              </div>
          </div>
          <div className="section__cart">
              <div className="delivery">Delivery Info</div>
              <div className="quantity">
                <span className="quantity__no">36</span>
                <span className="quantity__txt">Bottles</span> 
              </div>
              <div className="view">
                  View Cart
              </div>
              <div className="total">  
                <span className="total__calc">36 x 2013 Breidecker</span>
                <span className="total__cash">Ksh 432.56</span>
              </div>
              <div className="btn">
                  <button className="btn__empty btn-inline">Empty Cart</button>
                  <button className="btn__check btn-inline">Check Out</button>
              </div>

          </div>
      </div>
      <div className="shop">
          { products.length === 0 ? (
              <p>Products are fetching...</p>
            ) : (
              filteredProducts.map(product => (
                <ItemBoard 
                  product={product} 
                  key={product.id}  
                />
              ))
            )
          }
        
      </div>
      <div className="copyright">
        Copyright Wine Shop 2020
      </div>
    </div>
  );
}

export default App;
