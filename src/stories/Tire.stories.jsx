import ComponenteLlanta from "../components/UnitLayout/ComponenteLlanta";
import { TireStyles } from "../components/UnitLayout/ComponenteLlanta";

export default {
    title: 'UnitLayout/Tire',
    component: ComponenteLlanta,
    parameters: {
      layout: 'centered',
    },
    argTypes:{
      variant: {
        control: "select",
        options: Object.keys(TireStyles),
        mapping: {...TireStyles}
      },
      shrink: {
        control: "select",
        options: ["none", "shrinked", "shrinkable"]
      }
    },
    tags: ['autodocs'],
};


export const Default = {
    args:{},
    render: args => <div className="w-32"><ComponenteLlanta {...args}/></div>
}

export const Shrinkable = {
    args: {
        shrink: "shrinkable"
    },
    render: Default.render
}

export const Loading = {
  args: {
    variant: TireStyles.BUSCANDO_LLANTA
  },
  render: Default.render
}

export const UnmountedTire = {
  args: {
    variant: TireStyles.LLANTA_NO_MONTADA
  },
  render: Default.render
}

export const GoodDepth = {
  args: {
    variant: TireStyles.MILIMETRAJE_BUENO,
    shrink: "shrinkable"
  },
  render: Default.render
}

export const BadDepth = {
  args: {
    variant: TireStyles.MILIMETRAJE_MALO,
    shrink: "shrinkable"
  },
  render: Default.render
}

export const MediumDepth = {
  args: {
    variant: TireStyles.MILIMETRAJE_MEDIO,
    shrink: "shrinkable"
  },
  render: Default.render
}

export const SelectedTire = {
  args: {
    variant: TireStyles.LLANTA_SELECCIONADA,
    shrink: "shrinked"
  },
  render: Default.render
}

