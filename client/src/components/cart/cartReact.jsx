import React from "react";
import { Helmet } from "react-helmet";
import "./cart.css";

const cartReact = () => {
    return (
        <>
            <Helmet>
                <title>Cart</title>
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT"
                    crossorigin="anonymous"
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                />
                <link rel="stylesheet" href="../explore/explore.css" />
                <script
                    src="https://kit.fontawesome.com/de33fbad5c.js"
                    crossorigin="anonymous"
                ></script>
            </Helmet>
            <body>
                <header id="header">
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <div class="logo">
                            <a href="http://localhost:5000/">
                                <img
                                    src="https://raw.githubusercontent.com/RidhiChhajer/koshbooks-website/main/koshbooks-website/assets/logo-removebg-preview.png"
                                    id="header-img"
                                    alt="KoshBooks Logo"
                                    width="80"
                                    height="60"
                                />
                            </a>
                        </div>

                        <div
                            class="section-title collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <form action="cart">
                                <button class="btn" type="submit">
                                    <i class="shopping-cart fa-solid fa-cart-shopping"></i>{" "}
                                    cart
                                </button>
                            </form>

                            <form action="wishlist">
                                <button class="btn" type="submit">
                                    <i class="fa-solid fa-heart"></i> wishlist
                                </button>
                            </form>

                            <form action="profile">
                                <button class="btn" type="submit">
                                    <i class="fa-solid fa-user"></i> profile
                                </button>
                            </form>

                            <form action="landingPage">
                                <button class="btn" type="submit">
                                    <i class="fa-solid fa-house"></i> home
                                </button>
                            </form>
                        </div>
                    </nav>
                </header>
                <div class="wrap cf">
                    <h1 class="projTitle">My Shopping Cart</h1>
                    <div class="heading cf">
                        <h1>My Cart</h1>
                        <a href="/explore" class="continue">
                            Continue Shopping
                        </a>
                    </div>
                    <div class="cart">
                        <ul class="cartWrap">
                            <li class="items odd">
                                <div class="infoWrap">
                                    <div class="cartSection">
                                        <img
                                            src="http://lorempixel.com/output/technics-q-c-300-300-4.jpg"
                                            alt=""
                                            class="itemImg"
                                        />
                                        <p class="itemNumber">
                                            #QUE-007544-002
                                        </p>
                                        <h3>Item Name 1</h3>

                                        <p>
                                            {" "}
                                            <input
                                                type="text"
                                                class="qty"
                                                placeholder="3"
                                            />{" "}
                                            x $5.00
                                        </p>

                                        <p class="stockStatus"> In Stock</p>
                                    </div>

                                    <div class="prodTotal cartSection">
                                        <p>$15.00</p>
                                    </div>
                                    <div class="cartSection removeWrap">
                                        <a href="#" class="remove">
                                            x
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li class="items even">
                                <div class="infoWrap">
                                    <div class="cartSection">
                                        <img
                                            src="http://lorempixel.com/output/technics-q-c-300-300-4.jpg"
                                            alt=""
                                            class="itemImg"
                                        />
                                        <p class="itemNumber">
                                            #QUE-007544-002
                                        </p>
                                        <h3>Item Name 1</h3>

                                        <p>
                                            {" "}
                                            <input
                                                type="text"
                                                class="qty"
                                                placeholder="3"
                                            />{" "}
                                            x $5.00
                                        </p>

                                        <p class="stockStatus"> In Stock</p>
                                    </div>

                                    <div class="prodTotal cartSection">
                                        <p>$15.00</p>
                                    </div>
                                    <div class="cartSection removeWrap">
                                        <a href="#" class="remove">
                                            x
                                        </a>
                                    </div>
                                </div>
                            </li>

                            <li class="items odd">
                                <div class="infoWrap">
                                    <div class="cartSection">
                                        <img
                                            src="http://lorempixel.com/output/technics-q-c-300-300-4.jpg"
                                            alt=""
                                            class="itemImg"
                                        />
                                        <p class="itemNumber">
                                            #QUE-007544-002
                                        </p>
                                        <h3>Item Name 1</h3>

                                        <p>
                                            {" "}
                                            <input
                                                type="text"
                                                class="qty"
                                                placeholder="3"
                                            />{" "}
                                            x $5.00
                                        </p>

                                        <p class="stockStatus out">
                                            {" "}
                                            Out of Stock
                                        </p>
                                    </div>

                                    <div class="prodTotal cartSection">
                                        <p>$15.00</p>
                                    </div>
                                    <div class="cartSection removeWrap">
                                        <a href="#" class="remove">
                                            x
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li class="items even">
                                <div class="infoWrap">
                                    <div class="cartSection info">
                                        <img
                                            src="http://lorempixel.com/output/technics-q-c-300-300-4.jpg"
                                            alt=""
                                            class="itemImg"
                                        />
                                        <p class="itemNumber">
                                            #QUE-007544-002
                                        </p>
                                        <h3>Item Name 1</h3>

                                        <p>
                                            {" "}
                                            <input
                                                type="text"
                                                class="qty"
                                                placeholder="3"
                                            />{" "}
                                            x $5.00
                                        </p>

                                        <p class="stockStatus"> In Stock</p>
                                    </div>

                                    <div class="prodTotal cartSection">
                                        <p>$15.00</p>
                                    </div>

                                    <div class="cartSection removeWrap">
                                        <a href="#" class="remove">
                                            x
                                        </a>
                                    </div>
                                </div>
                                <div class="special">
                                    <div class="specialContent">
                                        Free gift with purchase!, gift wrap,
                                        etc!!
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div class="promoCode">
                        <label for="promo">Have A Promo Code?</label>
                        <input
                            type="text"
                            name="promo"
                            placholder="Enter Code"
                        />
                        <a href="#" class="btn"></a>
                    </div>

                    <div class="subtotal cf">
                        <ul>
                            <li class="totalRow">
                                <span class="label">Subtotal</span>
                                <span class="value">$35.00</span>
                            </li>

                            <li class="totalRow">
                                <span class="label">Shipping</span>
                                <span class="value">$5.00</span>
                            </li>

                            <li class="totalRow">
                                <span class="label">Tax</span>
                                <span class="value">$4.00</span>
                            </li>
                            <li class="totalRow final">
                                <span class="label">Total</span>
                                <span class="value">$44.00</span>
                            </li>
                            <li class="totalRow">
                                <a href="#" class="btn continue">
                                    Checkout
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </body>
        </>
    );
};

export default cartReact;
