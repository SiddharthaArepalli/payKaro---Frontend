import React, { useState } from 'react';
import { BottomWarning } from "../utils/BottomWarning";
import { Button } from "../utils/Button";
import { Heading } from "../utils/Heading";
import { InputBox } from "../utils/InputBox";
import { SubHeading } from "../utils/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignIn = async () => {
        try {
            const backendUrl = import.meta.env.VITE_BACKEND_URL.replace(/\/+$/, "");
            const response = await axios.post(`${backendUrl}/api/v1/user/signin`, {
                username,
                password
            });
            localStorage.setItem("token", response.data.token);
            navigate("/dashboard");
        } catch (error) {
            console.error("Sign-in failed:", error.response?.data || error.message);
            alert("Sign-in failed: " + (error.response?.data?.message || "Unknown error"));
        }
    };

    return <div className="bg-gradient-to-b from-black via-gray-900 to-black h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"Sign in"} />
                <SubHeading label={"Enter your credentials to access your account"} />
                <InputBox
                    placeholder="example@gmail.com"
                    label={"Email"}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <InputBox
                    placeholder="123456"
                    label={"Password"}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className="pt-4">
                    <Button label={"Sign in"} onClick={handleSignIn} />
                </div>
                <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
            </div>
        </div>
    </div>;
};

export default Signin;