import { useState } from 'react';
import { Link } from 'react-router-dom';
import './AuthPages.css';
import phoneImage1 from './phone1.png';
import phoneImage2 from './phone2.jpeg';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { IoEye, IoEyeOff } from "react-icons/io5";

const SignupPage = () => {
    const [formData, setFormData] = useState({
        name: '',
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
    const backendURL = import.meta.env.VITE_BACKEND_URL;

    const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${backendURL}signup`, formData)
            .then(result => {
                console.log(result)
                navigate('/login')
            })
            .catch(err => console.log(err));
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
                    <h2>Create Account</h2>
                    <p>Join our mobile shopping community</p>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Full Name"
                            />
                        </div>

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
                                placeholder="Password (at least 6 characters)"
                                minLength="6"

                                className="password-input"
                            />
                            <span
                                className="password-icon"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <IoEyeOff /> : <IoEye />}
                            </span>
                        </div>

                        <button type="submit" className="auth-button">Sign Up</button>
                    </form>

                    <div className="auth-footer">
                        <p>Already have an account? <Link to="/login">Log in</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;