import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Products.css";

const categories = [
  {
    title: "Electronics",
    img: "./electronics.jpg",
    description: "Latest gadgets, phones, and tech devices."
  },
  {
    title: "Accessories",
    img: "./accessories.jpg",
    description: "Stylish accessories for your modern lifestyle."
  },
  {
    title: "Clothes",
    img: "./clothes.jpg",
    description: "Trendy fashion for men, women, and kids."
  }
];

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = categories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="product-container">
        <h2 className="section-title">Shop by Category</h2>

      <input
        type="search"
        className="search-bar"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      </div>
      
      <div className="card-container">
        {filteredCategories.length === 0 ? (
          <p>No products found.</p>
        ) : (
          filteredCategories.map((category, index) => (
            <div className="category-card" key={index}>
              <img src={category.img} alt={category.title} className="card-img" />
              <div className="card-content">
                <h3>{category.title}</h3>
                <p>{category.description}</p>

                {category.title === "Electronics" && (
                  <Link to="/electronics">
                    <button className="card-btn">Shop Now</button>
                  </Link>
                )}
                {
                  category.title === "Accessories" && (
                  <Link to="/accessories">
                    <button className="card-btn">Shop Now</button>    
                  </Link>
                  )
                }
                { category.title === "Clothes" && (
                  <Link to="/clothes">
                    <button className="card-btn">Shop Now</button>   
                    </Link>
                  )}

              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
