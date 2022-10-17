import React from "react";
import "./profile.css";
import { Helmet } from "react-helmet";

const profileReact = () => {
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
                <script
                    src="https://kit.fontawesome.com/de33fbad5c.js"
                    crossorigin="anonymous"
                ></script>
            </Helmet>
            <body>
                <header id="header">
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <div class="logo">
                            <img
                                class="logo-img"
                                src="../assets/logo-removebg-preview.png"
                                alt="logo"
                            />
                        </div>

                        <div
                            class="section-title collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <form action="../cart/cart.html">
                                <button class="btn" type="submit">
                                    <i class="shopping-cart fa-solid fa-cart-shopping"></i>{" "}
                                    cart
                                </button>
                            </form>

                            <form action="../wishlist/wishlist.html">
                                <button class="btn" type="submit">
                                    <i class="fa-solid fa-heart"></i> wishlist
                                </button>
                            </form>

                            <form action="../profile/profile.html">
                                <button class="btn" type="submit">
                                    <i class="fa-solid fa-user"></i> profile
                                </button>
                            </form>

                            <form action="../landingPage/lp.html">
                                <button class="btn" type="submit">
                                    <i class="fa-solid fa-house"></i> home
                                </button>
                            </form>
                        </div>
                    </nav>
                </header>
                <div class="container">
                    <div class="rightbox">
                        <div class="profile">
                            <h1>Personal Info</h1>
                            <h2>Full Name</h2>
                            <p>
                                Julie Park <button class="btn1">update</button>
                            </p>
                            <h2>Birthday</h2>
                            <p>July 21</p>
                            <h2>Gender</h2>
                            <p>Female</p>
                            <h2>Email</h2>
                            <p>
                                example@example.com{" "}
                                <button class="btn1">update</button>
                            </p>
                            <h2>Password </h2>
                            <p>
                                ••••••• <button class="btn1">Change</button>
                            </p>
                        </div>
                    </div>
                </div>
            </body>
        </>
    );
};

export default profileReact;
