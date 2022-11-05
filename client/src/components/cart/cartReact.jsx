import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "./cart_react.css";
import { Helmet } from "react-helmet";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import axios from "axios";
import Navbar from "../Navbar";
import { reset } from "../../redux/cartSlice";
import { useHistory } from "react-router-dom";

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const [open, setOpen] = useState(false);
    const [cash, setCash] = useState(false);
    const amount = cart.total;
    const currency = "USD";
    const style = { layout: "vertical" };
    const history = useHistory();
    const dispatch = useDispatch();

    const createOrder = async (data) => {
        try {
            console.log("data-->", data);
            // const res = await axios.post(
            //     "http://localhost:3000/api/orders",
            //     data
            // );
            console.log("Connected");
            // res.status === 201 && history.push("/orders/" + res.data._id);
            // dispatch(reset());
            history.push("/ccu");
        } catch (error) {
            console.log(error);
        }
    };

    const ButtonWrapper = ({ currency, showSpinner }) => {
        // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
        // This is the main reason to wrap the PayPalButtons in a new component
        const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

        useEffect(() => {
            dispatch({
                type: "resetOptions",
                value: {
                    ...options,
                    currency: currency,
                },
            });
        }, [currency, showSpinner]);

        return (
            <>
                {showSpinner && isPending && <div className="spinner" />}
                <PayPalButtons
                    style={style}
                    disabled={false}
                    forceReRender={[1, currency, style]}
                    fundingSource={undefined}
                    createOrder={(data, actions) => {
                        return actions.order
                            .create({
                                purchase_units: [
                                    {
                                        amount: {
                                            currency_code: currency,
                                            value: 1,
                                        },
                                    },
                                ],
                            })
                            .then((orderId) => {
                                // Your code here after create the order
                                return orderId;
                            });
                    }}
                    onApprove={function (data, actions) {
                        return actions.order.capture().then(function (details) {
                            // Your code here after capture the order
                            const shipping = details.purchase_units[0].shipping;
                            createOrder({
                                customer: shipping.name.full_name,
                                address: shipping.address.address_line_1,
                                total: cart.total,
                                method: 1,
                            });
                        });
                    }}
                />
            </>
        );
    };

    return (
        <>
            <Helmet>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                />
                <script
                    src="https://kit.fontawesome.com/de33fbad5c.js"
                    crossorigin="anonymous"
                ></script>
            </Helmet>
            <Navbar />
            <div className="container_c">
                <div className="left_c">
                    <table className="table_c">
                        <tbody>
                            <tr className="tr_title">
                                <th>Product</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </tbody>
                        {cart.products.map((product) => (
                            <tbody key={product._id}>
                                <tr className="tr_c">
                                    <td>
                                        <div className="imgContainer_c">
                                            <img src={product.image} alt="" />
                                        </div>
                                    </td>
                                    <td>
                                        <span className="name_c">
                                            {product.name}
                                        </span>
                                    </td>
                                    <td>
                                        <span className="price_c">
                                            ${product.price}
                                        </span>
                                    </td>
                                    <td>
                                        <span className="quantity_c">
                                            {product.quantity}
                                        </span>
                                    </td>
                                    <td>
                                        <span className="total_c">
                                            ${product.price * product.quantity}
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                </div>
                <div className="right_c">
                    <div className="wrapper_c">
                        <h2 className="title_c">CART TOTAL</h2>
                        <div className="total_text_c">
                            <b className="totalTextTitle_c">Quantity:</b>2
                        </div>
                        <div className="total_text_c">
                            <b className="totalTextTitle_c">Total:</b>$ 500
                        </div>
                        {open ? (
                            <div className="payment_methods">
                                <button
                                    className="paybutton"
                                    onClick={() => setCash(true)}
                                >
                                    CASH ON DELIVERY
                                </button>
                                <PayPalScriptProvider
                                    options={{
                                        "client-id":
                                            "ASnPxSusZ32j7LyBrGmLMg5MCJe3XmX9Ls18BsfN06oIlom_ZdzhFEeFAJ_tslyVVBt6dc3cf8nOmqJn",
                                        components: "buttons",
                                        currency: "USD",
                                        "disable-funding": "credit,card,p24",
                                    }}
                                >
                                    <ButtonWrapper
                                        currency={currency}
                                        showSpinner={false}
                                    />
                                </PayPalScriptProvider>
                            </div>
                        ) : (
                            <button
                                onClick={() => setOpen(true)}
                                className="button_c"
                            >
                                CHECKOUT NOW!
                            </button>
                        )}
                    </div>
                </div>
                {cash &&
                    createOrder({
                        customer: "Willam Jones",
                        address: "33 Cali, HK - 64",
                        total: 500,
                        method: 2,
                    })}
            </div>
        </>
    );
};

export default Cart;
