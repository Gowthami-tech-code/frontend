const AccessoriesPage=()=>{
    const details={
        "accessories":[{
      "id": "ACC-5001",
      "name": "FastCharge USB-C Cable",
      "brand": "ChargePro",
      "category": "Accessories",
      "image": "./fastcharge.jpg",
      "price":2340
    },
    {
      "id": "ACC-5002",
      "name": "Wireless Charger Pad",
      "brand": "PowerBase",
      "category": "Accessories",
      "image": "./wireless.jpg",
      "price":2398
    },
    {
      "id": "ACC-5003",
      "name": "Bluetooth Earbuds Mini",
      "brand": "SoundLite",
      "category": "Accessories",
      "image": "./bluetooth.jpg",
      "price":4500
    },
    {
      "id": "ACC-5004",
      "name": "Laptop Sleeve 15-inch",
      "brand": "CarryMax",
      "category": "Accessories",
      "image": "./sleeve.jpg",
      "price":400
    },
]
    }
    
    return(
        <div>
            
            <h1>Accessories Page</h1>
            <div className="electronics-products">
            {details.accessories.map((product) => (
            <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-brand">Brand: {product.brand}</p>
            <p className="product-category">Category: {product.category}</p>
            <p className="product-price">Price: {product.price}</p> 
            <button className="add-to-cart">Add to cart</button>
            </div>
      ))}
     </div>
    </div>
    );
}
export default AccessoriesPage