import React from 'react';
import './Form.css';

function Form() {
    return (
        <div id="contact">
            <div className="new">
                <h2>CONTACT US</h2>
            </div>
            <div className="contact-us">
                <form action="https://formsubmit.co/bipulmahapatra2005@gmail.com" method="POST">
                    <input type="text" placeholder="Name" name="Name" required />
                    <input type="email" placeholder="Email" name="Email" required />
                    <textarea cols="30" rows="3" placeholder="Enter Your Message" name="Message" required></textarea>
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value="https://phonenation.vercel.app/thanks" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Form;
