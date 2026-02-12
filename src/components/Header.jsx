import React from 'react';
import {
    Search, Bell, MessageSquare, Moon, Menu, LayoutGrid, Mail
} from 'lucide-react';

const Header = () => {
    return (
        <header className="h-15 px-8 flex items-center justify-between mb-1 mt-2 transition-all duration-300 bg-transparent flex-shrink-0">
            <div className="flex items-center gap-6">
                <button className="text-gray-400 hover:text-primary transition-colors hover:bg-primary/5 p-2 rounded-full">
                    <Menu size={24} />
                </button>
                {/*<button className="text-gray-400 hover:text-primary transition-colors hover:bg-primary/5 p-2 rounded-full">
                        <LayoutGrid size={24} />
                    </button>*/}
                <button className="text-gray-400 hover:text-primary transition-colors hover:bg-primary/5 p-2 rounded-full">
                    <Search size={24} />
                </button>
            </div>

            <div className="flex items-center gap-6">
                <button className="text-gray-400 hover:text-primary transition-colors hover:bg-primary/5 p-2 rounded-full">
                    <Moon size={24} />
                </button>
                {/*<button className="text-gray-400 hover:text-primary transition-colors p-2 rounded-full text-xl hover:bg-primary/5">
                        🇬🇧
                    </button>*/}
                <button className="relative text-gray-400 hover:text-primary transition-colors hover:bg-primary/5 p-2 rounded-full">
                    <Mail size={24} />
                    <span className="absolute top-0 right-0 w-4 h-4 bg-primary text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white dark:border-background-dark">3</span>
                </button>
                <button className="relative text-gray-400 hover:text-primary transition-colors hover:bg-primary/5 p-2 rounded-full">
                    <Bell size={24} />
                    <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white dark:border-background-dark">5</span>
                </button>
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20 cursor-pointer hover:border-primary transition-all ring-2 ring-transparent hover:ring-primary/20">
                    <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNrWV5lLvMZ6vQcl1E1Nhz2akbmN32mWdZXODox34Cy7YGMB_0-u7lsVZWeo7wmK0KvRDYlXsqJInCjJMMCLEdv_ro8z7CLbbhiFZ9fNvSHQAN47wGZVDWNLhyG5D7KQfD4aKfeU_vAJyC20h-5hPC6Wg7faYhNvpel2rBKXkgMlG-TQQynQ989mUzTDsC6JOtG4jB_mqd7HQ8aRR1YN_UpqGAx_njVOahc9uwICJFFTmvoMCia8kzMEFq68_XVnbzcFRKSQEdrPIt"
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
