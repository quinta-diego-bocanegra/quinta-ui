import { TireStyles } from "../components/UnitLayout/ComponenteLlanta";
import ComponenteCaja from "../components/UnitLayout/ComponenteCaja";
import { GoodDepth, MediumDepth, BadDepth, Default as defaultTire, Loading, SelectedTire, UnmountedTire } from "./Tire.stories";
import { TirePositions } from "../components/UnitLayout/ComponenteEje";

export default {
    title: 'UnitLayout/DryVan',
    component: ComponenteCaja,
    parameters: {
      layout: 'centered',
    },
    argTypes:{
      variant: {
        control: "select",
        options: ["ThreeAxles", "TwoAxles"]
      },
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
        tireVariant: TireStyles.LLANTA_BASE,
    },
    tags: ['autodocs'],
};

export const TwoAxles = {
  args: {},
  render: ({tireVariant, ...args}) => <div className="w-[768px]"><ComponenteCaja tires={RenderTires.TwoAxles(tireVariant)}  {...args}/></div>
}

export const ThreeAxles = {
  args: {
      variant: "ThreeAxles",
  },
  render: ({tireVariant, ...args}) => <div className="w-[768px]"><ComponenteCaja tires={RenderTires.ThreeAxles(tireVariant)}  {...args}/></div>
}

const RenderTires = {
  LoadTires: (tireVariant) => (
      [
          {position: TirePositions.DERECHA_EXTERIOR, ...tireVariant},
          {position: TirePositions.DERECHA_INTERIOR, ...tireVariant},
          {position: TirePositions.IZQUIERDA_EXTERIOR, ...tireVariant},
          {position: TirePositions.IZQUIERDA_INTERIOR, ...tireVariant},
      ]
  ),
  ThreeAxles: function (tireVariant) {
      return {
          FirstAxle: this.LoadTires(tireVariant),
          SecondAxle: this.LoadTires(tireVariant),
          ThirdAxle: this.LoadTires(tireVariant),
          SPARE_TIRE: {...tireVariant}
      }
  },
  TwoAxles: function (tireVariant) {
      return {
          FirstAxle: this.LoadTires(tireVariant),
          SecondAxle: this.LoadTires(tireVariant),
          SPARE_TIRE: {...tireVariant},
      }
  },
}