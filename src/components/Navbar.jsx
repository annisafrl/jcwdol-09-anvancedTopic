import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchUser } from "../features/user/userSlice";


function Navbar() {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUser())
    }, [])

    return (
        <div className="flex flex-row gap-10 justify-center items-center bg-purple-300 text-black h-20">
            <button
                onClick={() => {
                    navigate("/");
                }}
                className="hover:font-semibold"
            >
                Sign Up
            </button>
            <button
                onClick={() => {
                    navigate("/datauser");
                }}
                className="hover:font-semibold"
            >
                User List
            </button>
        </div>
    );
}
export default Navbar;