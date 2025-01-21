import ComponenteLlanta from "../components/UnitLayout/ComponenteLlanta";
import { TireStyles } from "../components/UnitLayout/ComponenteLlanta";
import TireNumberBadge from "@/components/TireNumberBadge";

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
      },
      shrink: {
        control: "select",
        options: ["none", "shrinked", "shrinkable"]
      }
    },
    tags: ['autodocs'],
    render: args => <div className="w-32"><ComponenteLlanta {...args}/></div>
};


export const Default = {
    args:{},
}

export const Shrinkable = {
    args: {
        shrink: "shrinkable"
    },
}

export const Loading = {
  args: {
    variant: "BUSCANDO_LLANTA"
  },
}

export const UnmountedTire = {
  args: {
    variant: "LLANTA_NO_MONTADA"
  },
}

export const GoodDepth = {
  args: {
    variant: "MILIMETRAJE_BUENO",
    shrink: "shrinkable"
  },
}

export const BadDepth = {
  args: {
    variant: "MILIMETRAJE_MALO",
    shrink: "shrinkable"
  },
}

export const MediumDepth = {
  args: {
    variant: "MILIMETRAJE_MEDIO",
    shrink: "shrinkable"
  },
}

export const SelectedTire = {
  args: {
    variant: "LLANTA_SELECCIONADA",
    shrink: "shrinked"
  },
}

export const Children = {
  args: {
    children: <TireNumberBadge>1</TireNumberBadge>
  }
}

