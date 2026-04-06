import Level1Render from "../render/Level1Render";
import AndonView from "../view/AndonView";

import EnvironmentalView from "../view/EnvironmentalView";
import FactoryProductionDataView from "../view/FactoryProductionDataView";
import PersonalManagmentView from "../view/PersonalManagmentView";

export default function Level1Layout() {
    return (
        <main className="w-full h-screen p-2 flex flex-col">
            <section className="w-full min-h-[120px] h-[120px] ">
                <div className="w-full h-full  flex flex-row items-center">
                    {/*<FoxconnLogo width={220} height={50} />*/}
                    <PersonalManagmentView />
                    <EnvironmentalView />
                    <FactoryProductionDataView />
                    <AndonView />
                </div>
            </section>
            <section className="w-full h-full  ">
                <Level1Render />
            </section>
            <section className="w-full min-h-[50px] h-[50px] border border-white">ss</section>
        </main>
    );
}
