import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./register.css";
import axios from "axios";

const Registration = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        email: undefined,
        password: undefined,
    });
    const { loading, error, dispatch } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "REGISTER_START" });
        try {
            const res = await axios.post("/auth/register", credentials); 
            dispatch({ type: "REGISTER_SUCCESS", payload: res.data });
            navigate("/");
        } catch (err) {
            dispatch({ type: "REGISTER_FAILURE", payload: err.response.data });
            
        }
    };

    return (
        <div className="registration">
            <div className="rContainer">
                <input
                    type="text"
                    placeholder="Username"
                    id="username"
                    onChange={handleChange}
                    className="rInput"
                />
                <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    onChange={handleChange}
                    className="rInput"
                />
                <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    onChange={handleChange}
                    className="rInput"
                />
                <button disabled={loading} onClick={handleClick} className="rButton">
                    Register
                </button>
                {error && <span className="errorMessage">{error.message}</span>}
            </div>
        </div>
    );
};

export default Registration;
