import { ArgTypes, Title } from "@storybook/blocks";
import HorizontalAlert from "../components/HorizontalAlert";
import ShadowButton from "../components/ShadowButton";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { fn } from '@storybook/test';

export default {
    Title: "Alerts/HorizontalAlert",
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
      },
    component: HorizontalAlert,
    argTypes: {
        type: {
            control: "select",
            options: ["error", "warning", "info"]
        },
        display: {
            control: "radio",
            options: ["horizontal", "vertical"],
            mapping: {horizontal: "row", vertical: "col"}
        }
    }
}

export const Warning = {
    args: {
        type: "warning",
        message: "Precaución, esta acción es permanente"
    }
}

export const Error = {
    args: {
        type: "error",
        message: "Ocurrio un error, por favor intente de nuevo mas tarde"
    }
}

export const Info = {
    args: {
        type: "info",
        message: "Utilize el menu lateral para desplazarse mas rapido",
        display: "col",
        children: (
            <ShadowButton
                onClick={fn}
                icon={faCheck}
                type={"submit"}
                iconColor={"text-blue-400"}>
                Entendido
            </ShadowButton>
        )
    }
}

export const Vertical = {
    args: {
        ...Warning.args,
        display: "col"
    }
}

export const WithChildren = {
    args: {
        ...Vertical.args,
        children: (
            <>
                <ShadowButton onClick={fn} icon={faXmark}>Cancelar</ShadowButton>
                <ShadowButton
                    onClick={fn}
                    icon={faCheck}
                    type={"submit"}
                    iconColor={"text-blue-400"}>
                    Confirmar
                </ShadowButton>
            </>
        )
            
    }
}


