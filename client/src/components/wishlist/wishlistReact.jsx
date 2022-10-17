import React from "react";
import "./wishlist.css";
import { Helmet } from "react-helmet";

const wishlistReact = () => {
    return (
        <>
            <Helmet>
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
                <link rel="stylesheet" href="icon.css" />
                <link rel="stylesheet" href="wishlist.css" />
                <link rel="stylesheet" href="../explore/explore.css" />
                <link rel="stylesheet" href="responsive.css" />
                <script
                    src="https://kit.fontawesome.com/de33fbad5c.js"
                    crossorigin="anonymous"
                ></script>
            </Helmet>
            <body>
                <header id="header">
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <div class="logo">
                            <a href="">
                                <img
                                    src="https://raw.githubusercontent.com/RidhiChhajer/koshbooks-website/main/koshbooks-website/assets/logo-removebg-preview.png"
                                    id="header-img"
                                    alt="KoshBooks Logo"
                                    width="100"
                                    height="60"
                                />
                            </a>
                        </div>

                        <div
                            class="section-title collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <form action="/cart">
                                <button class="btn" type="submit">
                                    <i class="shopping-cart fa-solid fa-cart-shopping"></i>{" "}
                                    cart
                                </button>
                            </form>

                            <form action="/wishlist">
                                <button class="btn" type="submit">
                                    <i class="fa-solid fa-heart"></i> wishlist
                                </button>
                            </form>

                            <form action="/profile">
                                <button class="btn" type="submit">
                                    <i class="fa-solid fa-user"></i> profile
                                </button>
                            </form>

                            <form action="/landingPage">
                                <button class="btn" type="submit">
                                    <i class="fa-solid fa-house"></i> home
                                </button>
                            </form>
                        </div>
                    </nav>
                </header>

                <div class="wrap cf">
                    <h1 class="projTitle">My wishlist</h1>
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
                </div>
            </body>
        </>
    );
};

export default wishlistReact;
