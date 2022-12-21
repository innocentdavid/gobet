const Home = () => {
    return (<>
        <div className="pt-[21px] flex justify-between items-start relative">
            <div className="py-[10px] px-[35px] bg-[rgba(0,0,0,.5)] rounded-r-[10px]">
                <img src="/images/Gobet Draw.png" alt="" className="w-[204px] h-[fit-content]" />
                <p className="text-white font-bold text-[16px] leading-[19.2px]">User : 0x778...ccA44</p>
                <h2 className="text-[19.48px] font-bold text-[#DA8329] leading-[23.38px]">0.3 BNB</h2>
            </div>

            <img src="/images/Logo (1).png" alt="" className="w-[426.82px] h-[fit-content] absolute left-[50%] -translate-x-[50%]" />

            <div className="py-[10px] px-[25px] bg-[rgba(0,0,0,.5)] rounded-l-[10px]">
                <img src="/images/Icon.png" alt="" className="w-[44px] h-[fit-content]" onClick={() => { window.location = "/login" }} />
            </div>
        </div>
        <div className="flex flex-col items-center mt-[284px]">

            <div className="flex gap-5">
                <div className="flex flex-col border-4 border-[#b76a17] rounded-b-[10px]">
                    <div className="bg-[#b76a17] text-[#330707] font-[400] text-[66.32px] leading-[77.65px] px-[70px] py-3">The Next BNB Draw</div>
                    <div className="flex gap-5 bg-[rgba(0,0,0,.5)] rounded-b-[10px] py-[10px] px-[20px]">
                        <div className="flex-1 flex flex-col items-center justify-center border-[3px] pt-1 pb-3 border-[#b76a17]">
                            <p className="text-[17px] text-white">Total Pool</p>
                            <h2 className="text-[28.8px] text-[#F08717]">0.00 BNB</h2>
                        </div>
                        <div className="flex-1 flex flex-col items-center justify-center border-[3px] pt-1 pb-3 border-[#b76a17]">
                            <p className="text-[17px] text-white">Ticket Remaining</p>
                            <h2 className="text-[28.8px] text-[#F08717]">1000000</h2>
                        </div>
                    </div>
                    <p className="text-lg text-center text-white py-3">Ticket Sales have now CLOSED for this draw</p>
                    <div className="flex">
                        <div className="text-center">
                            <div style={{ background: "linear-gradient(165deg, rgba(132, 93, 13, 1) 0%, rgba(162, 168, 68, 1) 56%)" }} className="px-[30px] py-[10px] rounded-[10px] leading-[109.02px] text-[72.42px] text-[#330707] font-bold">00</div>
                            <p className="">Hours</p>
                        </div>
                    </div>
                </div>
                <div className="">side 1</div>
            </div>


            <div className="mt-10 py-[20px] px-[35px] bg-[rgba(0,0,0,.5)] rounded-[10px] flex items-center ">
                <div className="relative">
                    <img src="/images/star.png" alt="" className="absolute -top-5 -right-5" />
                    <button onClick={() => { window.location = "/" }} style={{
                        background: "linear-gradient(180deg, rgba(248, 216, 120, 1) 0%, rgba(222,139,47,1) 56%)"
                    }} className="
                border-4 border-[#de8b2f] rounded-[15px] px-[35px] py-[10px] flex items-center gap-5 text-[#3D1105] text-[19.45px] font-bold">Telegram</button>
                </div>
                <div className="mx-[80px] text-white text-[19.45px] leading-[23.34px] font-[700]">Logout</div>
            </div>
        </div>
    </>);
};

export default Home;