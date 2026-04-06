import { User2 } from "lucide-react";

const PersonalManagmentView = () => {
    return (
        <div className="w-git h-full flex flex-row gap-2 p-2 text-blue-100">
            <div className="flex flex-col  justify-center p-2 px-3 rounded-2xl bg-[var(--surface)] ">
                <div className="flex flex-col ">
                    {/*<span className="text-sm">Temperature</span>*/}

                    <div className="flex flex-row gap-2  items-center">
                        <User2 size={30} />
                        <div>
                            <strong className="text-3xl">392</strong>
                            {/*<strong className="text-2xl"></strong>*/}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col ">
                    {/*<span className="text-sm">Temperature</span>*/}

                    <div className="flex flex-row gap-2 items-center">
                        <User2 size={30} />
                        <div>
                            <strong className="text-3xl">121</strong>
                            {/*<strong className="text-2xl">%</strong>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalManagmentView;
