const ClothesPage=()=>{
  
    const details={
        "clothes":[{
      "id": "CLT-6001",
      "name": "Classic Cotton T-Shirt",
      "brand": "UrbanWear",
      "category": "Clothes",
      "image": "./cottonshirt.jpg",
      "price":2000
    },
    {
      "id": "CLT-6002",
      "name": "Denim Slim-Fit Jeans",
      "brand": "BlueStone",
      "category": "Clothes",
      "image": "./jeans.jpg",
      "price":2000
    },
    {
      "id": "CLT-6003",
      "name": "Hooded Sweatshirt",
      "brand": "CozyFit",
      "category": "Clothes",
      "image": "./hoody.jpg",
      "price":2000
    },
    {
      "id": "CLT-6004",
      "name": "Sports Running Shoes",
      "brand": "FlexRun",
      "category": "Clothes",
      "image": "./shoes.jpg",
      "price":2000
    }]
    }

    return(
        <div>
            
            <h1>Clothes Page </h1>
            <div className="electronics-products">
            {details.clothes.map((product) => (
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
export default ClothesPage