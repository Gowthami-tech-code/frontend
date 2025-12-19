
import './Product.css'; 
//import {Link} from react-router-dom;
const ElectronicsPage=()=>{
    const Details={
  "products": [
    {
      "id": "ELX-1001",
      "name": "Smartphone Alpha X",
      "brand": "TechNova",
      "category": "Mobile Phones",
      "image": "./alphax.jpg",
      "price": "12000"
    },
    {
      "id": "ELX-2004",
      "name": "UltraView 55'' 4K TV",
      "brand": "VisionMax",
      "category": "Televisions",
      "image": "./tv.jpg" ,
      "price": "50000"
    },
    {
      "id": "ELX-3050",
      "name": "NoiseCancel Pro Headphones",
      "brand": "SoundSphere",
      "category": "Audio",
      "image": "./noisecancel.jpg",
      "price": "25000"
    },
    {
      "id": "ELX-4102",
      "name": "ProTab 12 Tablet",
      "brand": "SmartTech",
      "category": "Tablets",
      "image": "./protab.jpg" ,
      "price": "20000"
    }
  ]
}
    return(
        <div>
            
            <h1>Electronics Page</h1>
            <div className="electronics-products">
            {Details.products.map((product) => (
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
export default ElectronicsPage;