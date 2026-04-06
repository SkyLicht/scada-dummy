import { EstadisticasEstadoMaquinas } from "../components/MachineSate";

const FactoryProductionDataView = () => {
    return (
        <div className="w-fit h-full flex flex-row gap-2 p-2 text-neutral-200">
            <div className="flex flex-row gap-3 justify-center p-2 px-3 rounded-2xl bg-[var(--surface)] ">
                <div className="flex flex-col justify-center items-center">
                    <h3 className="  font-semibold">LUR</h3>
                    <div className="text-xl ">
                        <strong className="text-4xl">24.6</strong>
                        <strong className="text-lg">%</strong>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <h3 className="  font-semibold">MRR</h3>
                    <div className="text-xl">
                        <strong className="text-4xl">21.2</strong>
                        <strong className="text-lg">%</strong>
                    </div>
                </div>
            </div>

            <div className=" flex flex-row gap-3 justify-center p-2 px-3 rounded-2xl bg-[var(--surface)] ">
                <EstadisticasEstadoMaquinas
                    statuses={[
                        { label: "Running", value: 84 },
                        { label: "Idle", value: 10 },
                        { label: "Standby", value: 221 },
                        { label: "Faild", value: 3 },
                    ]}
                />
            </div>
        </div>
    );
};

export default FactoryProductionDataView;
