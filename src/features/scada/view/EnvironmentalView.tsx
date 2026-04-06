import { Droplets, Thermometer, Zap } from "lucide-react";

const EnvironmentalView = () => {
    return (
        <div className="w-git h-full flex flex-row gap-2 p-2 text-blue-100">
            <div className="flex flex-col  justify-center p-2 px-3 rounded-2xl bg-[var(--surface)] ">
                <div className="flex flex-col ">
                    {/*<span className="text-sm">Temperature</span>*/}

                    <div className="flex flex-row gap-2  items-center">
                        <Thermometer size={36} />
                        <div>
                            <strong className="text-4xl">45.3</strong>
                            <strong className="text-2xl">°C</strong>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col ">
                    {/*<span className="text-sm">Temperature</span>*/}

                    <div className="flex flex-row gap-2 items-center">
                        <Droplets size={36} />
                        <div>
                            <strong className="text-4xl">32.1</strong>
                            <strong className="text-2xl">%</strong>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col  justify-center p-2 px-3 rounded-2xl bg-[var(--surface)] ">
                <div className="flex flex-col ">
                    {/*<span className="text-sm">Total Energy Consumption</span>*/}
                    {/*
                    <div className="flex flex-row   justify-center items-center">
                        <Zap size={24} className="text-amber-100" />

                        <div className="flex flex-row gap-1">
                            <strong className="text-xl text-amber-400">82,128,270.0</strong>
                            <strong className="text-xl text-amber-400">KWh</strong>
                        </div>
                    </div>*/}
                </div>
                <div className="flex flex-row gap-3 justify-between">
                    <div className="flex flex-col  items-center">
                        <Zap size={24} className="text-amber-100" />
                        <h3 className="text-sm text-amber-100 font-semibold">Power</h3>
                        <div className="text-xl text-amber-400">
                            <strong className="text-3xl">724.6</strong>
                            <strong className="text-lg">KW</strong>
                        </div>
                    </div>

                    {/*<div className="border-l border-amber-100"></div>*/}

                    <div className="flex flex-col  items-center">
                        <Zap size={24} className="text-amber-100" />
                        <h3 className="text-sm  text-amber-100 font-semibold">Daily</h3>
                        <div className="text-xl text-amber-400">
                            <strong className="text-3xl">9921.2</strong>
                            <strong className="text-lg">KWh</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EnvironmentalView;
