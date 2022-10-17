import React from "react";
import { Helmet } from "react-helmet";
import "./ccu.css";

const ccuReact = () => {
    return (
        <>
            <Helmet>
                <title>Feedback</title>
                <link
                    href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800&display=swap"
                    rel="stylesheet"
                ></link>
            </Helmet>
            <div class="content">
                <div class="wrapper-1">
                    <div class="wrapper-2">
                        <h1>Thank you !</h1>
                        <p>Thanks for your feedback.</p>
                        <p>We will get back to you shortly.</p>
                        <form action="../landingPage/lp.html">
                            <button class="go-home">Go Home</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ccuReact;
