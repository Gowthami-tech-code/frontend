import Navbar from "../Navbar/Navbar.jsx"
import Products from "../Products/Products.jsx"
import Carousel from '../Carousel/Carousel.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./HomePage.css";

const HomePage = () => {
    return (
        <div className="home-container">
            <Navbar />
            <Carousel />
            <Products />
        </div>
    )
}
export default HomePage;