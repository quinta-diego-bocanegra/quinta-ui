import { ArgTypes, Title } from "@storybook/blocks";
import Alert from "../components/Alert";


export default {
    Title: "Alerts/BasicAlert",
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
      },
    component: Alert,
    argTypes: {
        type: {
            control: "select",
            options: ["error", "success", "loading"]
        }
    }
}

export const Loading = {
    args: {
        type: "loading",
        children: "Cargando..."
    }
}

export const Success = {
    args: {
        type: "success",
        children: "Completado con exito!"
    }
}

export const Error = {
    args: {
        type: "error",
        children: "Ocurrio un problema"
    }
}