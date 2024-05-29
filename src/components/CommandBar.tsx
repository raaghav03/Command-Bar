import React, { ReactNode, useState } from "react";
import CommandItem from "./CommandItem";
import SearchInput from "./SearchInput";
import Footer from "./Footer";
import { Home, BellIcon, CircleDot, Search } from "lucide-react";

const CommandBar: React.FC = () => {
    type CommandItem = { text: string; icon: ReactNode; shortcut?: string };
    const [searchQuery, setSearchQuery] = useState("");
    const commandItems: CommandItem[] = [
        { text: "Dashboard", icon: <Home />, shortcut: "H" },
        { text: "Notfications", icon: <BellIcon />, shortcut: "⌘K" },
        { text: "Issues", icon: <CircleDot /> },
        { text: "Search your Team", icon: <Search /> },
        { text: "Search your Team", icon: <Search /> },
        { text: "Search your Team", icon: <Search /> },
        { text: "Search your Team", icon: <Search /> },
        { text: "Search your Team", icon: <Search /> },
        { text: "Search your Team", icon: <Search /> },
        { text: "Search your Team", icon: <Search /> },
    ];

    const filteredItems = commandItems.filter((item) => 
        item.text.toLowerCase().includes(searchQuery.toLowerCase()))
    
    return (
        <div className="border border-gray-100 rounded-lg flex flex-col max-h-128 overflow-hidden">
            <div className="sticky top-0 z-10 border-b-2 border-gray-50">
                <SearchInput
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />
            </div>
            <div className="flex-grow overflow-y-auto p-2">
                <div className="flex flex-col space-y-2">
                    {filteredItems.map((item, index) => (
                        <CommandItem
                            text={item.text}
                            icon={item.icon}
                            key={index}
                            shortcut={item.shortcut}
                        ></CommandItem>
                    ))}
                </div>
            </div>
            <div className="">
                <Footer />
            </div>
        </div>
    );
};

export default CommandBar;
