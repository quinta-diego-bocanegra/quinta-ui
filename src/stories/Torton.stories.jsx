import { TirePositions } from "../components/UnitLayout/ComponenteEje";
import { TireStyles } from "../components/UnitLayout/ComponenteLlanta";
import ComponenteTorton from "../components/UnitLayout/ComponenteTorton";
import { GoodDepth, BadDepth, MediumDepth, Default as defaultTire, UnmountedTire, Loading, SelectedTire } from "./Tire.stories";

export default {
    title: 'UnitLayout/Torton',
    component: ComponenteTorton,
    parameters: {
      layout: 'centered',
    },
    argTypes:{
      tireVariant: {
        control: "select",
        options: Object.keys(TireStyles),
        mapping: {
            MILIMETRAJE_BUENO: GoodDepth.args,
            MILIMETRAJE_MEDIO: MediumDepth.args,
            MILIMETRAJE_MALO: BadDepth.args,
            LLANTA_BASE: defaultTire.args,
            LLANTA_NO_MONTADA: UnmountedTire.args,
            BUSCANDO_LLANTA: Loading.args,
            LLANTA_SELECCIONADA: SelectedTire.args,
        }
      }
    },
    args: {
        tireVariant: defaultTire.args,
    },
    tags: ['autodocs'],
};

export const Default = {
    args: {},
    render: ({tireVariant, ...args}) => <div className="w-[768px]"><ComponenteTorton tires={RenderTires.ThreeAxles(tireVariant)}  {...args}/></div>
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
