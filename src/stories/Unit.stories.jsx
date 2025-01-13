import ComponenteUnidad from "../components/UnitLayout/ComponenteUnidad";
import { UnitsTemplates } from "../components/UnitLayout/ComponenteUnidad";
import ComponenteEje from "../components/UnitLayout/ComponenteEje";
import { Default } from "./Axle.stories";
import { WithDifferential } from "./Axle.stories";
import { AxlePositions } from "../components/UnitLayout/ComponenteTracto";
import { TirePositions } from "../components/UnitLayout/ComponenteEje";
import ComponenteLlanta, { TireStyles } from "../components/UnitLayout/ComponenteLlanta";
import { AxlePositions as DryVanAxlePositions } from "../components/UnitLayout/ComponenteCaja";

export default {
    title: 'UnitLayout/Unit',
    component: ComponenteUnidad,
    parameters: {
      layout: 'centered',
    },
    argTypes:{
      templateName: {
        control: "select",
        options: Object.keys(UnitsTemplates),
      },
      frame: {
        control: "select",
        options: ["default", "long"]
      },
      tireVariant: {
        control: "select",
        options: Object.keys(TireStyles),
        mapping: {...TireStyles}
      }
    },
    args: {
        tireVariant: TireStyles.LLANTA_BASE,
    },
    tags: ['autodocs'],
};

export const SemiTruck ={
    args: {
        templateName: "TRACTOCAMION"
    },
    render: ({tireVariant, ...args}) => (
        <div className="w-[768px]">
            <ComponenteUnidad {...args}>
                <ComponenteEje {...Default.args} position={AxlePositions.STEERING_AXLE} children={renderTires(2, tireVariant)}/>
                <ComponenteEje {...WithDifferential.args}  position={AxlePositions.FIRST_DRIVE_AXLE} children={renderTires(4, tireVariant)}/>
                <ComponenteEje {...WithDifferential.args} position={AxlePositions.SECOND_DRIVE_AXLE} children={renderTires(4, tireVariant)}/>
            </ComponenteUnidad>
        </div>
    )
}

export const DryVan ={
    args: {
        templateName: "CAJA SECA",
        frame: "long"
    },
    render: ({tireVariant, ...args}) => (
        <div className="w-[768px]">
            <ComponenteUnidad {...args}>
                <ComponenteEje {...Default.args} position={DryVanAxlePositions.twoAxles.FirstAxle} children={renderTires(4, tireVariant)}/>
                <ComponenteEje {...Default.args} position={DryVanAxlePositions.twoAxles.SecondAxle} children={renderTires(4, tireVariant)}/>
            </ComponenteUnidad>
        </div>
    )
}

function renderTires(numberOfTires, tireVariant){
    switch(numberOfTires){
        case 1: 
            return [<ComponenteLlanta position={TirePositions.DERECHA_EXTERIOR} variant={tireVariant}/>]
        case 2:
            return [
                <ComponenteLlanta position={TirePositions.DERECHA_EXTERIOR} variant={tireVariant}/>,
                <ComponenteLlanta position={TirePositions.IZQUIERDA_EXTERIOR} variant={tireVariant}/>
            ]
        case 3: 
            return [
                <ComponenteLlanta position={TirePositions.DERECHA_EXTERIOR} variant={tireVariant}/>,
                <ComponenteLlanta position={TirePositions.DERECHA_INTERIOR} variant={tireVariant}/>,
                <ComponenteLlanta position={TirePositions.IZQUIERDA_EXTERIOR} variant={tireVariant}/>
            ]
        case 4:
            return [
                <ComponenteLlanta position={TirePositions.DERECHA_EXTERIOR} variant={tireVariant}/>,
                <ComponenteLlanta position={TirePositions.DERECHA_INTERIOR} variant={tireVariant}/>,
                <ComponenteLlanta position={TirePositions.IZQUIERDA_INTERIOR} variant={tireVariant}/>,
                <ComponenteLlanta position={TirePositions.IZQUIERDA_EXTERIOR} variant={tireVariant}/>
            ]
        default: 
            return []
    }
}
