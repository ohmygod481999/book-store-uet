import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Product from "./Pages/Product";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Products from "./Pages/Products";
import Cart from "./Components/Cart";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Payment from "./Pages/Payment";

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/products" component={Products} />
                <Route path="/product/:id" component={Product} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/payment" component={Payment} />
            </Switch>

            <Cart />
            <Footer />
            <ToastContainer position="bottom-left" />
        </div>
    );
}

export default App;
