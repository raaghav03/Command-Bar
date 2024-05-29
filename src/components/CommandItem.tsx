import { Kbd } from "@radix-ui/themes";
import React, { ReactNode } from "react";

interface CommandItemProps {
    text: string;
    icon?: ReactNode;
    shortcut?: ReactNode;
}

const CommandItem: React.FC<CommandItemProps> = ({ text, icon, shortcut }) => {
    return (
        <div className="flex p-4 justify-between bg-white hover:bg-slate-100 ">
            <div className="flex items-center gap-4">
                <div className="inline-block">{icon}</div>
                <div className="inline-block ">{text}</div>{" "}
            </div>
            <div>
                <div>{shortcut && <Kbd>{shortcut}</Kbd>}</div>
            </div>
        </div>
    );
};

export default CommandItem;
