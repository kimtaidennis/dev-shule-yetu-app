import Image from "next/image";
import React from "react";

type Props = {
    date: string;
    total: number;
    label: string;
};

const DashboardCards = ({ date, label, total }: Props) => {
    return (
        <div className="rounded-md p-4 space-y-3 odd:bg-slate-300 even:bg-gray-300 w-full">
            <div className="flex items-center justify-between py-1">
                <span className="bg-slate-100 text-slate-800 rounded-full px-2.5 py-0.5 text-[10px]">
                    {date}
                </span>
                <Image
                    src="/images/more.png"
                    height={10}
                    width={10}
                    alt="more"
                />
            </div>
            <h3 className="font-semibold text-md">{total.toLocaleString()}</h3>
            <p className="font-medium">{label}</p>
        </div>
    );
};

export default DashboardCards;
