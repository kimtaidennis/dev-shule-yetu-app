import DashboardCards from "@/components/cards/DashboardCards";
import React from "react";

const Home = () => {
    return (
        <>
            <div className="p-3 flex flex-col md:flex-row gap-4 md:gap-6">
                {/* LEFT */}
                <div className="w-full lg:w-3/4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full">
                        <DashboardCards
                            date={"2024/25"}
                            total={2000}
                            label={"Students"}
                        />
                        <DashboardCards
                            date={"2024/25"}
                            total={2000}
                            label={"Teachers"}
                        />
                        <DashboardCards
                            date={"2024/25"}
                            total={2000}
                            label={"Parents"}
                        />
                        <DashboardCards
                            date={"2024/25"}
                            total={2000}
                            label={"Staffs"}
                        />
                    </div>
                </div>

                {/* RIGHT */}
                <div className="w-full lg:w-1/4"></div>
            </div>
        </>
    );
};

export default Home;
