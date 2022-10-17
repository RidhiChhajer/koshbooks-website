import { Helmet } from "react-helmet";
import "./explore.css";

const Explore = () => {
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
                <title>Products</title>
            </Helmet>
            <body>
                <header id="header">
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <a href="/">
                            <img
                                src="https://raw.githubusercontent.com/RidhiChhajer/koshbooks-website/main/koshbooks-website/assets/logo-removebg-preview.png"
                                id="header-img"
                                alt="KoshBooks Logo"
                                width="80"
                                height="60"
                            />
                        </a>

                        <div class="search-box">
                            <div class="search-icon">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                            <input type="text" placeholder="Search..." />
                        </div>

                        <button
                            class="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>

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

                            <form action="/">
                                <button class="btn" type="submit">
                                    <i class="fa-solid fa-house"></i> home
                                </button>
                            </form>
                        </div>
                    </nav>
                </header>

                <div class="featured-product" id="pricing">
                    <div class="h">
                        <h1>
                            <strong>BOOKS</strong>
                        </h1>
                    </div>

                    <div class="featured-products">
                        <div class="product-wrap apple">
                            <div class="product-img">
                                <img
                                    src="https://junealholder.files.wordpress.com/2019/05/img_20190505_155026_731.jpg"
                                    alt=""
                                />
                            </div>

                            <div class="product-icons">
                                <div class="stage">
                                    <div class="heart"></div>
                                </div>
                            </div>

                            <div class="product-description">
                                <p class="product-name">The Alchemist</p>
                                <p class="author">by Paulo Coelho</p>
                                <p class="price">
                                    <ins>
                                        <span>200</span>RS
                                    </ins>
                                </p>
                                <div class="Book Details">
                                    <a href="/bookdetails">
                                        <button
                                            type="button"
                                            class="btn btn-outline-dark bd-btn"
                                            name="button"
                                        >
                                            Book Details
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="product-wrap">
                            <div class="product-img">
                                <img src="https://bookwritten.com/wp-content/uploads/2019/12/The-Undying-Friendship-of-Hassan-for-Amir-in-The-Kite-Runner-scaled.jpeg" />
                            </div>

                            <div class="product-icons">
                                <div class="add-to-favorite">
                                    <span class="icon-heart"></span>
                                </div>
                                <p>
                                    <span class="discount">20</span>% off
                                </p>
                            </div>

                            <div class="product-description">
                                <p class="product-name">The Kite Runner</p>
                                <p class="price">
                                    Price:
                                    <del>
                                        <span>150</span>
                                    </del>
                                    <ins>
                                        <span>599</span>RS
                                    </ins>
                                </p>
                                <div class="Book Details">
                                    <a href="/bookdetails">
                                        <button
                                            type="button"
                                            class="btn btn-outline-dark bd-btn"
                                            name="button"
                                        >
                                            Book Details
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="product-wrap">
                            <div class="product-img">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8D1rSW0FIC1uQSCcIW13hIj0tONoLod0o6A&usqp=CAU:*" />
                            </div>

                            <div class="product-icons">
                                <div class="add-to-favorite">
                                    <span class="icon-heart"></span>
                                </div>
                                <p>
                                    <span class="discount">18</span>% off
                                </p>
                            </div>

                            <div class="product-description">
                                <p class="product-name">Oneplus 10 Pro</p>
                                <p class="price">
                                    Price:
                                    <del>
                                        <span>38999</span>
                                    </del>
                                    <ins>
                                        <span>32250</span>RS
                                    </ins>
                                </p>
                                <div class="Book Details">
                                    <a href="/bookdetails">
                                        <button
                                            type="button"
                                            class="btn btn-outline-dark bd-btn"
                                            name="button"
                                        >
                                            Book Details
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="product-wrap">
                            <div class="product-img">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQaxfSKIMrSzOA0yI9uyrkjMUIwhoBoJk54g&usqp=CAU" />
                            </div>

                            <div class="product-icons">
                                <div class="add-to-favorite">
                                    <span class="icon-heart"></span>
                                </div>
                                <p>
                                    <span class="discount">24</span>% off
                                </p>
                            </div>

                            <div class="product-description">
                                <p class="product-name">Apple Watch Series 3</p>
                                <p class="price">
                                    Price:
                                    <del>
                                        <span>31999</span>
                                    </del>
                                    <ins>
                                        <span>29999</span>RS
                                    </ins>
                                </p>
                                <div class="Book Details">
                                    <a href="/bookdetails">
                                        <button
                                            type="button"
                                            class="btn btn-outline-dark bd-btn"
                                            name="button"
                                        >
                                            Book Details
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="product-wrap">
                            <div class="product-img">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcxsRHBtzAUM-Xk4wkybU9sapgG-FptlgFGg&usqp=CAU" />
                            </div>

                            <div class="product-icons">
                                <div class="add-to-favorite">
                                    <span class="icon-heart"></span>
                                </div>
                                <p>
                                    <span class="discount">22</span>% off
                                </p>
                            </div>

                            <div class="product-description">
                                <p class="product-name">Samsung Powerbank</p>
                                <p class="price">
                                    Price:
                                    <del>
                                        <span>2299</span>
                                    </del>
                                    <ins>
                                        <span>1699</span>RS
                                    </ins>
                                </p>
                                <div class="Book Details">
                                    <a href="/bookdetails">
                                        <button
                                            type="button"
                                            class="btn btn-outline-dark bd-btn"
                                            name="button"
                                        >
                                            Book Details
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="product-wrap">
                            <div class="product-img">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGRooSuGGpTuUao-9akW-LY6lWFHGGjKqTTw&usqp=CAU" />
                            </div>

                            <div class="product-icons">
                                <div class="add-to-favorite">
                                    <span class="icon-heart"></span>
                                </div>
                                <p>
                                    <span class="discount">20</span>% off
                                </p>
                            </div>

                            <div class="product-description">
                                <p class="product-name">MI Cables</p>
                                <p class="price">
                                    Price:
                                    <del>
                                        <span>350</span>
                                    </del>
                                    <ins>
                                        <span>250</span>RS
                                    </ins>
                                </p>
                                <div class="Book Details">
                                    <a href="/bookdetails">
                                        <button
                                            type="button"
                                            class="btn btn-outline-dark bd-btn"
                                            name="button"
                                        >
                                            Book Details
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="product-wrap">
                            <div class="product-img">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSChI-YgikBGaWlAK0nu440j5FcHW6ESZY0qPtzitazbzxv26PDo5lgrN0uaQJMUVU-Dss&usqp=CAU" />
                            </div>

                            <div class="product-icons">
                                <div class="add-to-favorite">
                                    <span class="icon-heart"></span>
                                </div>
                                <p>
                                    <span class="discount">12</span>% off
                                </p>
                            </div>

                            <div class="product-description">
                                <p class="product-name">Philips Hair Dryer</p>
                                <p class="price">
                                    Price:
                                    <del>
                                        <span>1999</span>
                                    </del>
                                    <ins>
                                        <span>1299</span>RS
                                    </ins>
                                </p>
                                <div class="Book Details">
                                    <a href="/bookdetails">
                                        <button
                                            type="button"
                                            class="btn btn-outline-dark bd-btn"
                                            name="button"
                                        >
                                            Book Details
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="product-wrap">
                            <div class="product-img">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ_39Fwyq6XcmtJP2i8b09L-p2mSQr4LFHWQ&usqp=CAU" />
                            </div>

                            <div class="product-icons">
                                <div class="add-to-favorite">
                                    <span class="icon-heart"></span>
                                </div>
                                <p>
                                    <span class="discount">10</span>% off
                                </p>
                            </div>

                            <div class="product-description">
                                <p class="product-name">JBL Speaker</p>
                                <p class="price">
                                    Price:
                                    <del>
                                        <span>1899</span>
                                    </del>
                                    <ins>
                                        <span>1399</span>RS
                                    </ins>
                                </p>
                                <div class="Book Details">
                                    <a href="/bookdetails">
                                        <button
                                            type="button"
                                            class="btn btn-outline-dark bd-btn"
                                            name="button"
                                        >
                                            Book Details
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="product-wrap">
                            <div class="product-img">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW8T5E1mJpfX7SxlcAUv8l-AubxIptazz94w&usqp=CAU" />
                            </div>

                            <div class="product-icons">
                                <div class="add-to-favorite">
                                    <span class="icon-heart"></span>
                                </div>
                                <p>
                                    <span class="discount">18</span>% off
                                </p>
                            </div>

                            <div class="product-description">
                                <p class="product-name">Nikon Camera</p>
                                <p class="price">
                                    Price:
                                    <del>
                                        <span>44999</span>
                                    </del>
                                    <ins>
                                        <span>39,999</span>RS
                                    </ins>
                                </p>
                                <div class="Book Details">
                                    <a href="/bookdetails">
                                        <button
                                            type="button"
                                            class="btn btn-outline-dark bd-btn"
                                            name="button"
                                        >
                                            Book Details
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="product-wrap">
                            <div class="product-img">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTkkiWDRs8Kjeg4CHsz3KBdCxbIs3BZw_4Vw&usqp=CAU" />
                            </div>

                            <div class="product-icons">
                                <div class="add-to-favorite">
                                    <span class="icon-heart"></span>
                                </div>
                                <p>
                                    <span class="discount">24</span>% off
                                </p>
                            </div>

                            <div class="product-description">
                                <p class="product-name">WIFI Router</p>
                                <p class="price">
                                    Price:
                                    <del>
                                        <span>1799</span>
                                    </del>
                                    <ins>
                                        <span>1199</span>RS
                                    </ins>
                                </p>
                                <div class="Book Details">
                                    <a href="/bookdetails">
                                        <button
                                            type="button"
                                            class="btn btn-outline-dark bd-btn"
                                            name="button"
                                        >
                                            Book Details
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="product-wrap">
                            <div class="product-img">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvLhOPOngLqJoqggl_1Z4BUHgBEgFQe6orMw&usqp=CAU" />
                            </div>

                            <div class="product-icons">
                                <div class="add-to-favorite">
                                    <span class="icon-heart"></span>
                                </div>
                                <p>
                                    <span class="discount">22</span>% off
                                </p>
                            </div>

                            <div class="product-description">
                                <p class="product-name">Sandisk Pendrive</p>
                                <p class="price">
                                    Price:
                                    <del>
                                        <span>1299</span>
                                    </del>
                                    <ins>
                                        <span>899</span>RS
                                    </ins>
                                </p>
                                <div class="Book Details">
                                    <a href="/bookdetails">
                                        <button
                                            type="button"
                                            class="btn btn-outline-dark bd-btn"
                                            name="button"
                                        >
                                            Book Details
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="product-wrap">
                            <div class="product-img">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-r25QTkHJri5valL0bIlR7dFEldN2jkAeiQ&usqp=CAU" />
                            </div>

                            <div class="product-icons">
                                <div class="add-to-favorite">
                                    <span class="icon-heart"></span>
                                </div>
                                <p>
                                    <span class="discount">16</span>% off
                                </p>
                            </div>

                            <div class="product-description">
                                <p class="product-name">Noise Airpods</p>
                                <p class="price">
                                    Price:
                                    <del>
                                        <span>2299</span>
                                    </del>
                                    <ins>
                                        <span>1599</span>RS
                                    </ins>
                                </p>
                                <div class="Book Details">
                                    <a href="/bookdetails">
                                        <button
                                            type="button"
                                            class="btn btn-outline-dark bd-btn"
                                            name="button"
                                        >
                                            Book Details
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="product-wrap">
                            <div class="product-img">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNQX2VLck4RjPYF3KRbPoR4uj9CvNiL__nLA&usqp=CAU" />
                            </div>

                            <div class="product-icons">
                                <div class="add-to-favorite">
                                    <span class="icon-heart"></span>
                                </div>
                                <p>
                                    <span class="discount">26</span>% off
                                </p>
                            </div>

                            <div class="product-description">
                                <p class="product-name">Samsung Tab</p>
                                <p class="price">
                                    Price:
                                    <del>
                                        <span>15999</span>
                                    </del>
                                    <ins>
                                        <span>12999</span>RS
                                    </ins>
                                </p>
                                <div class="Book Details">
                                    <a href="/bookdetails">
                                        <button
                                            type="button"
                                            class="btn btn-outline-dark bd-btn"
                                            name="button"
                                        >
                                            Book Details
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="product-wrap">
                            <div class="product-img">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxg7uJRAJxR486KRY-8HiUMlWG5qk2lFMGgg&usqp=CAU" />
                            </div>

                            <div class="product-icons">
                                <div class="add-to-favorite">
                                    <span class="icon-heart"></span>
                                </div>
                                <p>
                                    <span class="discount">12</span>% off
                                </p>
                            </div>

                            <div class="product-description">
                                <p class="product-name">IFB Washing Machine</p>
                                <p class="price">
                                    Price:
                                    <del>
                                        <span>51999</span>
                                    </del>
                                    <ins>
                                        <span>45999</span>RS
                                    </ins>
                                </p>
                                <div class="Book Details">
                                    <a href="/bookdetails">
                                        <button
                                            type="button"
                                            class="btn btn-outline-dark bd-btn"
                                            name="button"
                                        >
                                            Book Details
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="product-wrap">
                            <div class="product-img">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsAMsbqFQmBhOuBRvNd1udLyH6bZSU0DBy-Q&usqp=CAU" />
                            </div>

                            <div class="product-icons">
                                <div class="add-to-favorite">
                                    <span class="icon-heart"></span>
                                </div>
                                <p>
                                    <span class="discount">16</span>% off
                                </p>
                            </div>

                            <div class="product-description">
                                <p class="product-name">Bosch Micro Oven</p>
                                <p class="price">
                                    Price:
                                    <del>
                                        <span>12999</span>
                                    </del>
                                    <ins>
                                        <span>8999</span>RS
                                    </ins>
                                </p>
                                <div class="Book Details">
                                    <a href="/bookdetails">
                                        <button
                                            type="button"
                                            class="btn btn-outline-dark bd-btn"
                                            name="button"
                                        >
                                            Book Details
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="remove-confirmation-message">
                    <div class="remove-message-wrap">
                        <div class="remove-message-title">
                            <h2>Remove item confirmation message</h2>
                        </div>

                        <div class="remove-message-button">
                            <button id="remove-confirm-btn">Remove</button>
                            <button id="remove-cancel-btn">Cancel</button>
                        </div>
                    </div>
                </div>

                <div class="popup-shadow"></div>
            </body>
        </>
    );
};

export default Explore;
