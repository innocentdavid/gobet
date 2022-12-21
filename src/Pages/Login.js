import React from "react";

const Login = () => {

    return (
        <>
            <div className="h-screen w-full flex flex-col justify-center items-center text-white">
                <img src="/images/Logo (1).png" alt="" className="w-[736px] h-[fit-content]" />
                <img src="/images/Gobet Crypto text.png" alt="" className="w-[611px] h-[fit-content]" />
                <p className="-mt-5 text-lg">Get Started By Choosing Your Wallet</p>
                <div className="relative mt-10">
                    <img src="/images/star.png" alt="" className="absolute -top-5 -right-5" />
                    <button onClick={() => { window.location = "/" }} style={{
                        background: "linear-gradient(180deg, rgba(248, 216, 120, 1) 0%, rgba(222,139,47,1) 56%)"
                    }} className="
                border-4 border-[#de8b2f] rounded-[15px] px-[35px] py-[10px] flex items-center gap-5 text-[#3D1105] text-[19.45px] font-bold">Connect Wallet <img src="/images/Vector 1.png" alt="" /></button>
                </div>
            </div>
        </>
    );
};

export default Login;