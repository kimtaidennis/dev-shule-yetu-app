import Image from "next/image";
import React from "react";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between  px-4 py-3 bg-slate-200">
            {/* SEARCH BAR */}
            <div className="hidden md:flex items-center gap-2 rounded-full ring-[1.5px] ring-slate-200 px-4 py-3 bg-slate-100">
                <Image
                    src="/images/search.png"
                    height={14}
                    width={14}
                    alt="Search"
                />
                <input
                    type="text"
                    placeholder="Search"
                    className="outline-none bg-inherit"
                />
            </div>

            {/* ICONS AND USER */}
            <div className="flex items-center justify-end w-full gap-4 md:gap-6">
                <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
                    <Image
                        src="/images/message.png"
                        height={20}
                        width={20}
                        alt=""
                    />
                </div>
                <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center relative">
                    <Image
                        src="/images/announcement.png"
                        height={20}
                        width={20}
                        alt=""
                    />
                    <div className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center bg-purple-700 text-white rounded-full p-1 text-xs">
                        1
                    </div>
                </div>
                <div className=" flex flex-col">
                    <span className="text-xs leading-3 font-medium">
                        Kimtai Dev
                    </span>
                    <span className="text-sm text-[10px] text-gray-500 text-right">
                        isAdmin
                    </span>
                </div>
                <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
                    <Image
                        src="/images/avatar.png"
                        height={20}
                        width={20}
                        alt=""
                        className="rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
