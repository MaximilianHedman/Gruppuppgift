import "./ThankYouCard.css";
import React from "react";

const ThankYouCard = () => {
    return (
        <>
        <div className="thankyou-wrapper">
        <div className="thankyou-card">
            <h2>Thank you for your purchase!</h2>
            <p>Your order has been received and is being processed. You will receive a confirmation email shortly.</p>
            <button>VIEW ORDER</button>
        </div>
        </div>
        </>

    );

}

export default ThankYouCard;