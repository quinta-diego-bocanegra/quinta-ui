import Frame from "@/components/PagesLayout/CenteredNarrow/Frame";
import { MainSection, AsideSection } from "@/components/PagesLayout/CenteredNarrow/Frame";
import ComboBox from "@/components/ComboBox";
import { Default as defaultComboBox } from "@/stories/ComboBox.stories";
import ComponenteTorton from "@/components/UnitLayout/ComponenteTorton";
import { Children } from "@/stories/Tire.stories";
import { TirePositions } from "@/components/UnitLayout/ComponenteEje";
import HorizontalAlert from "@/components/HorizontalAlert";
import ShadowButton from "@/components/ShadowButton";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import SideControls from "@/components/SideControls";
import { useState } from "react";


export default function ExamplePage(){
    const [isEditing, setIsEditing] = useState(false)
    const [unitType, setUnitType] = useState(false)

    console.log(unitType)

    return (
        <Frame>
            <MainSection>
                <h1 className="pt-4 text-5xl font-uncut text-center">Posiciones semaforeo</h1>
                <div className="mt-8 flex justify-center">
                    <ComboBox className={"w-64 overflow-y-auto max-h-48"} value={unitType} onChange={setUnitType} {...defaultComboBox.args}/>
                </div>
                {
                    unitType && (
                        <div className=" mt-12">
                            <ComponenteTorton tires={RenderTires.ThreeAxles(Children.args)}/>
                        </div>
                    )
                }
            </MainSection>
            {  
                unitType && (
                    <AsideSection className={"pt-[230px] pl-4"}>
                        <SideControls isEditing={isEditing} onEdit={() => setIsEditing(true)} onCancel={() => setIsEditing(false)} isPending={true} />
                    </AsideSection>
                )
            }
            {false && <div className="fixed h-screen w-full flex justify-center items-center ">
                <div className="bg-white rounded-xl">
                    <HorizontalAlert type={"info"} display="col" message={"Seleccione los neumaticos en el orden que desea realizar el semaforeo"}>
                        <ShadowButton
                            icon={faCheck}
                            type={"submit"}
                            iconColor={"text-blue-400"}>
                            Entendido
                        </ShadowButton>
                    </HorizontalAlert>
                </div>
            </div>}
        </Frame>
    )
}
const RenderTires = {
    LoadDriveTires: (tireVariant) => (
        [
            {position: TirePositions.DERECHA_EXTERIOR, ...tireVariant},
            {position: TirePositions.DERECHA_INTERIOR, ...tireVariant},
            {position: TirePositions.IZQUIERDA_EXTERIOR, ...tireVariant},
            {position: TirePositions.IZQUIERDA_INTERIOR, ...tireVariant},
        ]
    ),
    LoadDirectiontires: (tireVariant) => (
        [
            {position: TirePositions.DERECHA_EXTERIOR, ...tireVariant},
            {position: TirePositions.IZQUIERDA_EXTERIOR, ...tireVariant},
        ]
    ),
    ThreeAxles: function (tireVariant) {
        return {
            STEERING_AXLE: this.LoadDirectiontires(tireVariant),
            FIRST_DRIVE_AXLE: this.LoadDriveTires(tireVariant),
            SECOND_DRIVE_AXLE: this.LoadDriveTires(tireVariant),
            SPARE_TIRE: {...tireVariant}
        }
    },
}