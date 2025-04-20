import { useState } from "react";
import { BottomWarning } from "../utils/BottomWarning";
import { Button } from "../utils/Button";
import { Heading } from "../utils/Heading";
import { InputBox } from "../utils/InputBox";
import { SubHeading } from "../utils/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return <div className="bg-gradient-to-b from-black via-gray-900 to-black h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"Sign up"} />
                <SubHeading label={"Enter your information to create an account"} />
                <InputBox onChange={e => {
                    setFirstName(e.target.value);
                }} placeholder="John" label={"First Name"} />
                <InputBox onChange={(e) => {
                    setLastName(e.target.value);
                }} placeholder="Doe" label={"Last Name"} />
                <InputBox onChange={e => {
                    setUsername(e.target.value);
                }} placeholder="harkirat@gmail.com" label={"Email"} />
                <InputBox onChange={(e) => {
                    setPassword(e.target.value);
                }} placeholder="123456" label={"Password"} />
                <div className="pt-4">
                    <Button onClick={async () => {
                        try {
                            const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                                username,
                                firstName,
                                lastName,
                                password
                            });
                            localStorage.setItem("token", response.data.token);
                            navigate("/signin");
                        } catch (error) {
                            console.error("Signup failed:", error.response?.data || error.message);
                            alert("Signup failed: " + (error.response?.data?.message || "Unknown error"));
                        }
                    }} label={"Sign up"} />
                </div>
                <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
            </div>
        </div>
    </div>;
};
export default Signup;
