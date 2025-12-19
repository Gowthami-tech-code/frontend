import { Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginPage/LoginForm.jsx';
import RegisterForm from './components/RegisterPage/RegisterForm.jsx';
import HomePage from "./components/Home/HomePage.jsx";
import Products from "./components/Products/Products.jsx";
import AccessoriesPage from './components/ProductDetails/Pages/AccessoriesPage.jsx';
import ClothesPage from './components/ProductDetails/Pages/ClothesPage.jsx';
import ElectronicsPage from './components/ProductDetails/Pages/ElectronicsPage.jsx';
import Cart from './components/Cart/CartPage.jsx';
import { createContext } from 'react';
export const userContext = createContext();

function App() {
  return (
    <userContext.Provider value={"hello"}>
    <Routes>
      <Route path="/" element={<RegisterForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/products" element={<Products />} />
      <Route path="/electronics" element={<ElectronicsPage />} />
      <Route path="/accessories" element={<AccessoriesPage />} />
      <Route path="/clothes" element={<ClothesPage />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
    </userContext.Provider>
  );
}

export default App;
