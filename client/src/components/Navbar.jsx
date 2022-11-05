import React from "react";
import { useSelector } from "react-redux";
import "./nav.css";

const Navbar = () => {
    const quantity = useSelector((state) => state.cart.quantity);
    return (
        <div id="header">
            <div class="navigation">
                <a href="/">
                    <img
                        src="https://raw.githubusercontent.com/RidhiChhajer/koshbooks-website/main/koshbooks-website/assets/logo-removebg-preview.png"
                        id="header-img"
                        alt="KoshBooks Logo"
                        width="80"
                        height="60"
                    />
                </a>

                <div class="navigate">
                    <a href="/explore" className="ll">
                        <div className="navi">
                            <i class="fa-solid fa-bars"></i>
                            <div>Menu</div>
                        </div>
                    </a>
                    <a href="/wishlist" className="ll">
                        <div className="navi">
                            <i class="fa-solid fa-heart"></i>
                            <div>Wishlist</div>
                        </div>
                    </a>
                    <a href="/profile" className="ll">
                        <div className="navi">
                            <i class="fa-solid fa-user"></i>
                            <div>Profile</div>
                        </div>
                    </a>
                    <a href="/cart" className="ll">
                        <div className="navi">
                            <i class="fa-solid fa-cart-shopping"></i>
                            <div>Cart</div>
                            <div className="cart_quantity">{quantity}</div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
