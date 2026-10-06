import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

import "./App.css";

// Home Page
function Home() {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "Men's T-Shirt",
      price: 799,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 2,
      name: "Women's Dress",
      price: 1299,
      image:
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 3,
      name: "Sports Shoes",
      price: 1999,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 4,
      name: "Smart Watch",
      price: 2499,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80",
    },
  ];

  // Add product to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar">
        <h1>🛒 SmartShop</h1>

        <div className="nav-links">
          <a href="#home">Home</a>

          <a href="#products">Products</a>

          <a href="#about">About</a>

          <a href="#contact">Contact</a>

          <Link to="/login">Login</Link>

          <Link to="/signup">Sign Up</Link>

          <button className="cart-btn">
            🛒 Cart ({cart.length})
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h2>Welcome to SmartShop</h2>

          <p>
            Discover amazing products at the best prices.
          </p>

          <button
            className="shop-btn"
            onClick={() => {
              document
                .getElementById("products")
                .scrollIntoView({
                  behavior: "smooth",
                });
            }}
          >
            Shop Now
          </button>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="products-section" id="products">
        <h2>Featured Products</h2>

        <div className="products">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={product.image}
                alt={product.name}
              />

              <h3>{product.name}</h3>

              <p className="price">
                ₹{product.price}
              </p>

              <button
                className="add-btn"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about" id="about">
        <h2>About SmartShop</h2>

        <p>
          SmartShop is a modern e-commerce platform
          where customers can discover and purchase
          quality products easily and conveniently.
        </p>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact" id="contact">
        <h2>Contact Us</h2>

        <p>📧 Email: smartshop@example.com</p>

        <p>📞 Phone: +91 98765 43210</p>

        <p>📍 Location: India</p>
      </section>

      {/* FOOTER */}
      <footer>
        <p>
          © 2026 SmartShop. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

// MAIN APP
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* LOGIN */}
        <Route path="/login" element={<Login />} />

        {/* SIGN UP */}
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
