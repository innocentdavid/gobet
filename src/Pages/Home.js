const Home = () => {
    return (<>
        <div className="pt-[21px] flex justify-between items-start relative">
            <div className="py-[10px] px-[35px] bg-[rgba(0,0,0,.5)] rounded-r-[10px]">
                <img src="/images/Gobet Draw.png" alt="" className="w-[204px] h-[fit-content]" />
                <p className="text-white font-bold text-[16px] leading-[19.2px] font-akkuratPro">User : 0x778...ccA44</p>
                <h2 className="text-[19.48px] font-bold text-[#DA8329] leading-[23.38px] font-akkuratPro">0.3 BNB</h2>
            </div>

            <img src="/images/Logo (1).png" alt="" className="w-[426.82px] h-[fit-content] absolute left-[50%] -translate-x-[50%] hidden lg:block" />

            <div className="py-[10px] px-[25px] bg-[rgba(0,0,0,.5)] rounded-l-[10px]">
                <img src="/images/Icon.png" alt="" className="w-[44px] h-[fit-content]" onClick={() => { window.location = "/login" }} />
            </div>
        </div>

        <div className="flex justify-center items-center w-full my-5">
            <img src="/images/Logo (1).png" alt="" className="w-[270px] md:w-[426.82px] h-[fit-content] lg:hidden" />
        </div>

        <div className="flex flex-col items-center mt-[80px] lg:mt-[284px] pb-20">
            <div className="sm-items-center flex flex-col lg:flex-row gap-5">
                <div style={{ borderTop: 'none' }} className="flex flex-col rounded-b-[10px]">
                    <div style={{ background: "radial-gradient(circle, rgba(255, 232, 113, 1) 0%, rgba(188, 110, 21, 1) 100%)" }} className=" text-[#330707] font-[400] text-[66.32px] leading-[77.65px] px-[70px] py-3 font-exotc">The Next BNB Draw</div>
                    <div style={{ borderTop: 'none' }} className="bg-[rgba(0,0,0,.5)] rounded-b-[10px] py-[20px] px-[20px] border-[5px] border-[#EA9E1A]">
                        <div className="flex flex-col gap-5">
                            <div className="flex-1 flex flex-col items-center justify-center border-[3px] pt-2 pb-4 border-[#EA9E1A] rounded-[10px]">
                                <p className="text-[17px] text-white font-akkuratPro">Total Pool</p>
                                <h2 className="text-[28.8px] text-[#F08717] font-akkuratPro">0.00 BNB</h2>
                            </div>
                            <div className="flex-1 flex flex-col items-center justify-center border-[3px] pt-2 pb-4 border-[#EA9E1A] rounded-[10px]">
                                <p className="text-[17px] text-white font-akkuratPro">Ticket Remaining</p>
                                <h2 className="text-[28.8px] text-[#F08717] font-akkuratPro">1000000</h2>
                            </div>
                        </div>

                        <p className="text-lg text-center text-white py-3 font-akkuratPro">Ticket Sales have now CLOSED for this draw</p>

                        <div className="flex flex-col md:flex-row justify-between font-anton">
                            <div className="text-center">
                                <div style={{ background: "linear-gradient(165deg, rgba(132, 93, 13, 1) 0%, rgba(162, 168, 68, 1) 56%)" }} className="px-[30px] py-[10px] rounded-[10px] leading-[109.02px] text-[72.42px] text-[#330707] font-bold">00</div>
                                <p className="mt-1 text-lg text-white font-akkuratPro">Hours</p>
                            </div>
                            <div className="flex flex-col justify-center gap-5 -translate-y-2 px-5">
                                <div style={{ background: "linear-gradient(165deg, rgba(132, 93, 13, 1) 0%, rgba(162, 168, 68, 1) 56%)" }} className="w-[15px] h-[15px] rounded-full"></div>
                                <div style={{ background: "linear-gradient(165deg, rgba(132, 93, 13, 1) 0%, rgba(162, 168, 68, 1) 56%)" }} className="w-[15px] h-[15px] rounded-full"></div>
                            </div>
                            <div className="text-center">
                                <div style={{ background: "linear-gradient(165deg, rgba(132, 93, 13, 1) 0%, rgba(162, 168, 68, 1) 56%)" }} className="px-[30px] py-[10px] rounded-[10px] leading-[109.02px] text-[72.42px] text-[#330707] font-bold">00</div>
                                <p className="mt-1 text-lg text-white font-akkuratPro">Minutes</p>
                            </div>
                            <div className="flex flex-col justify-center gap-5 -translate-y-2 px-5">
                                <div style={{ background: "linear-gradient(165deg, rgba(132, 93, 13, 1) 0%, rgba(162, 168, 68, 1) 56%)" }} className="w-[15px] h-[15px] rounded-full"></div>
                                <div style={{ background: "linear-gradient(165deg, rgba(132, 93, 13, 1) 0%, rgba(162, 168, 68, 1) 56%)" }} className="w-[15px] h-[15px] rounded-full"></div>
                            </div>
                            <div className="text-center">
                                <div style={{ background: "linear-gradient(165deg, rgba(132, 93, 13, 1) 0%, rgba(162, 168, 68, 1) 56%)" }} className="px-[30px] py-[10px] rounded-[10px] leading-[109.02px] text-[72.42px] text-[#330707] font-bold">00</div>
                                <p className="mt-1 text-lg text-white font-akkuratPro">second</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[rgba(0,0,0,.5)] rounded-[10px] w-[506px] pr-2 font-akkuratPro">
                    <div style={{ background: 'url(/images/Group2.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className="min-h-[340px] bg-center bg-no-repeat px-[35px] pt-[50px]">
                        {/* <img src="/images/Group2.png" alt="" className="absolute top-0 left-0 w-full" /> */}
                        <div className="flex justify-between text-[#3D1105] font-bold text-[17px]">
                            <p>Price per ticket</p>
                            <p>0.0080 BNB</p>
                        </div>

                        <div className="flex items-end gap-2 mt-3 justify-center">
                            <p className="ptext text-[61.02px] leading-[73.23px] -mb-2">1</p>
                            <p className="ptext2 text-[22.85px] leading-[27.42px] -mt-[10px]">Tickets</p>
                        </div>

                        <div className="mt-[50px] flex flex-col gap-2">
                            <div className="flex justify-between text-[#3D1105] font-bold text-[19px]">
                                <p>Price per ticket</p>
                                <p>0.0080 BNB</p>
                            </div>
                            <div className="flex justify-between text-[#3D1105] font-[400] text-[17px]">
                                <p>Service fees</p>
                                <p>0.0028 BNB</p>
                            </div>
                            <div className="flex justify-between text-[#3D1105] font-[400] text-[17px]">
                                <p>+ Network fees</p>
                                <p>TBD</p>
                            </div>
                        </div>

                    </div>

                    <div className="relative mt-10 px-[20px]">
                        <img src="/images/star.png" alt="" className="absolute -bottom-5 -right-1" />
                        <button style={{
                            background: "linear-gradient(180deg, rgba(248, 216, 120, 1) 0%, rgba(222,139,47,1) 56%)"
                        }} className="
                border-4 border-[#de8b2f] rounded-[8px] px-[35px] w-full py-[10px] flex justify-center items-center gap-5 text-[#3D1105] text-[19.45px] font-bold">Buy 1 tickets for 0.0080 BNB</button>
                    </div>
                </div>
            </div>


            <div className="mt-10 py-[20px] px-[35px] bg-[rgba(0,0,0,.5)] rounded-[10px] flex items-center font-akkuratPro">
                <div className="relative">
                    <img src="/images/star.png" alt="" className="absolute -top-5 -right-5" />

                    <button onClick={() => { window.location = "/" }} style={{
                        background: "linear-gradient(180deg, rgba(248, 216, 120, 1) 0%, rgba(222,139,47,1) 56%)"
                    }} className="
                border-4 border-[#de8b2f] rounded-[8px] px-[35px] py-[10px] flex items-center gap-5 text-[#3D1105] text-[19.45px] font-bold">Telegram</button>
                </div>
                <div className="mx-[80px] text-white text-[19.45px] leading-[23.34px] font-[700]">Logout</div>
            </div>
        </div>
    </>);
};

export default Home;