import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Thanks = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/home");
        }, 2000);
    }, [navigate]);

    return <h2>Thanks for contacting us! Redirecting to home...</h2>;
};

export default Thanks;
