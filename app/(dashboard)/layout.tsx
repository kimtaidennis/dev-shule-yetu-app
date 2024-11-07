import Menu from "@/components/common/Menu";
import Navbar from "@/components/common/Navbar";
import Image from "next/image";
import Link from "next/link";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-screen flex">
            {/* LEFT */}
            <div className="w-[14%] md::w-[16%] xl:w-[14%] bg-slate-50 p-4">
                <Link
                    href="/"
                    className="flex items-center justify-center lg:justify-start gap-2"
                >
                    <Image
                        src="/images/logo.png"
                        width={20}
                        height={20}
                        alt="Logo"
                    />
                    <span className="hidden lg:block font-medium text-gray-600 text-lg">
                        ShuleYetu
                    </span>
                </Link>
                <Menu />
            </div>

            <div className="w-[86%] md::w-[84%] xl:w-[86%] bg-slate-100">
                <Navbar />
                {children}
            </div>
        </div>
    );
};

export default Layout;
