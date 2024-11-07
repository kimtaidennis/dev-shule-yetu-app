import { menuItems } from "@/lib/utils/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Menu = () => {
    return (
        <>
            <div className="mt-6 tetx-sm space-y-6">
                {menuItems.map((el, i) => (
                    <div className="flex flex-col gap-2" key={`key-${i}`}>
                        <span className="hidden lg:block font-semibold text-gray-500 border-b pb-2">
                            {el.title}
                        </span>
                        {el.items.map((item) => (
                            <Link
                                title={item.label}
                                href={item.href}
                                key={item.label}
                                className="flex items-center justify-center md:justify-start text-gray-500 gap-3 py-1.5 font-medium"
                            >
                                <Image
                                    src={`/images${item.icon}`}
                                    alt={item.label}
                                    width={15}
                                    height={15}
                                />
                                <span className="hidden lg:block hover:text-gray-800">
                                    {item.label}
                                </span>
                            </Link>
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
};

export default Menu;
