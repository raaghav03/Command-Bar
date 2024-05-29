import React from 'react';
import CommandItem from "./CommandItem";
import SearchInput from "./SearchInput";
import Footer from "./Footer";
import { Home, BellIcon, CircleDot, Search } from "lucide-react";

const CommandBar: React.FC = () => {
    const commandItems = [
        { text: "Dashboard", icon: <Home />, shorctut: "H" },
        { text: "Notfications", icon: <BellIcon />, shorctut: "⌘K" },
        { text: "Issues", icon: <CircleDot /> },
        { text: "Search your Team", icon: <Search /> },
        { text: "Search your Team", icon: <Search /> },
        { text: "Search your Team", icon: <Search /> },
        { text: "Search your Team", icon: <Search /> },
        { text: "Search your Team", icon: <Search /> },
        { text: "Search your Team", icon: <Search /> },
        { text: "Search your Team", icon: <Search /> },
    ];
    return (
        <div className="border border-gray-100 rounded-lg flex flex-col h-128 overflow-hidden">
            <div className="sticky top-0 z-10 border-b-2 border-gray-50">
                <SearchInput />
            </div>
            <div className="flex-grow overflow-y-auto p-2">
                <div className="flex flex-col space-y-2">
                    {commandItems.map((item, index) => (
                        <CommandItem text={item.text} icon={item.icon} key={index} shortcut={item.shorctut}></CommandItem>
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