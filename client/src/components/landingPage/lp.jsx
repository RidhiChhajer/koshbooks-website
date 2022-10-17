import { Helmet } from "react-helmet";
import "./lp";
import "./lp.css";

const Landing = () => {
    return (
        <>
            <Helmet>
                <meta charset="utf-8" />
                <title>KoshBooks</title>
                <script
                    src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
                    integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3"
                    crossorigin="anonymous"
                ></script>
                <script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js"
                    integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz"
                    crossorigin="anonymous"
                ></script>

                <link
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,300;1,400&family=Quicksand:wght@300;400;600;700&display=swap"
                    rel="stylesheet"
                />
                <link
                    rel="stylesheet"
                    href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
                />
            </Helmet>{" "}
            <img
                src="logo-removebg-preview.png"
                id="header-img"
                alt="Soygo Logo"
            />
            <form action="../signup/index.html">
                <button class="btn" type="submit">
                    Sign Up
                </button>
            </form>
            <main>
                <section id="home">
                    <div class="overlay"></div>
                    <div class="header-message">
                        <h2>
                            Drink Wild. <br />
                            Hangout With Friends. <br />
                            Establish Deep Connection.
                        </h2>
                        <p>
                            Start your day with us, grab one cup and help us to
                            spread love in this world.
                        </p>
                        <div>
                            <a href="../explore/explore.html">Explore</a>
                        </div>
                    </div>
                </section>
                <section id="services">
                    <div class="header-message">
                        <h2>Why choose us?</h2>
                        <p>Our services.</p>
                    </div>
                    <div class="services">
                        <div class="service">
                            <img
                                class="services-images service-icon"
                                src="https://media.istockphoto.com/photos/knowledge-sharing-between-people-picture-id1153885263?k=20&m=1153885263&s=612x612&w=0&h=TYxLn0zwCILB4-OYCN6pCdyvTVKa_KmTh8PZlXm_GNg="
                                alt="Hot beverages"
                            />
                            <div class="service-message">
                                <h3>Always serve at the right temperature!</h3>
                                <p>
                                    We always assure that the drinks you order
                                    to us is neither hot nor cold. Depending on
                                    your request, we will send it at a preserved
                                    temperature so that it will satisfy your
                                    taste.
                                </p>
                            </div>
                        </div>
                        <div class="service">
                            <img
                                class="services-images"
                                src="https://media.istockphoto.com/photos/mailbox-with-books-3d-rendering-isolated-on-white-background-picture-id1130336342?k=20&m=1130336342&s=612x612&w=0&h=3XgQd8xebYCzHsvzvxYCRbKP-Fu311-uI78zyP_8aI0="
                                alt="Fast delivery"
                            />
                            <div class="service-message">
                                <h3>Delivery in no time!</h3>
                                <p>
                                    We make sure that all the orders will be
                                    delivered as soon as the processing took
                                    place. We would not want to delay any moment
                                    for your favorite drinks.
                                </p>
                            </div>
                        </div>
                        <div class="service">
                            <img
                                class="services-images service-icon"
                                src="https://raw.githubusercontent.com/Ming-desu/fcc-landing-page/7cb6177f2965ecc78fca9926d7dceb34c0b03dfc/img/undraw_environment_iaus.svg"
                                alt="Eco-friendly"
                            />
                            <div class="service-message">
                                <h3>Love nature, love mother earth!</h3>
                                <p>
                                    We are actively participating some clean and
                                    green projects that aims to make the
                                    pollution in the planet Earth lessen. All of
                                    the items being used in our place is 100%
                                    from recycled materials.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="how">
                    <h2>Watch some random video!</h2>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/Nwd5a3-tVYA"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </section>
                <section id="contact">
                    <div class="contact-us">
                        <h2>We are right here.</h2>
                        <p>How can we assist you.</p>
                    </div>
                    <form
                        action="../confirmation-contact-us/ccu.html"
                        id="form"
                    >
                        <div class="form-group">
                            <label for="email">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="E.g. example@domain.com"
                            />
                        </div>
                        <div class="form-group">
                            <label for="message">Personal Message</label>
                            <textarea
                                name="message"
                                id="message"
                                cols="30"
                                rows="10"
                                placeholder="What do you want to tell us?"
                            ></textarea>
                        </div>
                        <div class="right">
                            <input type="submit" id="submit" value="Send" />
                        </div>
                    </form>
                </section>
            </main>
        </>
    );
};

export default Landing;
