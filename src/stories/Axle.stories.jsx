import ComponenteLlanta, { TireStyles } from "../components/UnitLayout/ComponenteLlanta";
import ComponenteEje from "../components/UnitLayout/ComponenteEje";
import { TirePositions } from "../components/UnitLayout/ComponenteEje";

export default {
    title: 'UnitLayout/Axle',
    component: ComponenteEje,
    parameters: {
      layout: 'centered',
    },
    argTypes:{
      numberOfChildren:{
        control: {
            type:"number",
            min: 0,
            max: 4,
        }
      },
      variant: {
        control: "select",
        options: ["Basic", "Axle-Differential"]
      },
      tireVariant: {
        control: "select",
        options: Object.keys(TireStyles),
        mapping: {...TireStyles}
      }
    },
    args: {
      numberOfChildren: 4,
      tireVariant: TireStyles.LLANTA_BASE,
    },
    tags: ['autodocs'],
};

export const Default = {
    args: {},
    render: ({numberOfChildren, tireVariant, ...args}) => (
        <div className="w-32">
            <ComponenteEje {...args}>
                {renderChildren(numberOfChildren, tireVariant)}
            </ComponenteEje>
        </div>
    )
}

export const WithDifferential = {
    args: {
        variant: "Axle-Differential"
    },
    render: Default.render
}


function renderChildren(numberOfChildren, tireVariant){
    switch(numberOfChildren){
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