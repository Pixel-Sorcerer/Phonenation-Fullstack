import { useState } from 'react';
import { Link } from 'react-router-dom';
import './AuthPages.css';
import phoneImage1 from './phone1.png';
import phoneImage2 from './phone2.jpeg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { IoEye, IoEyeOff } from "react-icons/io5";


const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev);
    };

    const backendURL = import.meta.env.VITE_BACKEND_URL;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${backendURL}login`, formData);

            if (response.data.status === "Success") {

                localStorage.setItem('customerId', response.data.userId);


                navigate('/home');
            } else {

                console.error("Login failed:", response.data.status);
                alert(response.data.status);
            }
        } catch (err) {
            console.error("Login error:", err);
            alert("Login failed. Please try again.");
        }
    };

    return (
        <div className="login-container">
            <div className="phone-images">
                <img src={phoneImage1} alt="Smartphone" className="phone-img phone-img-1" />
                <img src={phoneImage2} alt="Smartphone" className="phone-img phone-img-2" />
            </div>

            <div className="login-content">
                <div className="brand-header">
                    <h1>PHONE NATION</h1>
                    <p>Your Ultimate Mobile Destination</p>
                </div>

                <div className="auth-card">
                    <h2>Welcome Back</h2>
                    <p>Login to your account</p>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Email Address"
                            />
                        </div>

                        <div className="form-group password-input-wrapper">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                placeholder="Password"
                                className="password-input"
                            />
                            <span
                                className="password-icon"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <IoEyeOff /> : <IoEye />}
                            </span>
                        </div>



                        <button type="submit" className="auth-button">Log In</button>
                    </form>

                    <div className="auth-footer">
                        <p>New to Phone Nation? <Link to="/signup">Create account</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;