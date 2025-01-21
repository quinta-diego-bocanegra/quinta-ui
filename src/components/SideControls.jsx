import { faRotate, faCircleExclamation, faCircleCheck, faFloppyDisk, faPencil, faXmark } from "@fortawesome/free-solid-svg-icons";
import ShadowButton from "./ShadowButton";

export default function SideControls({onEdit, onCancel, isEditing, ...props}){
    return (
        <div className="w-10 flex flex-col gap-2">
            {
                isEditing ? (
                    <>
                        <ShadowButton icon={faXmark} onClick={onCancel}/>
                        <SaveControl {...props}/>
                    </>
                    
                ) : (
                    <ShadowButton icon={faPencil} onClick={onEdit}/>
                )
            }
        </div>
    )
}

function SaveControl({isError, isPending, isSuccess, onSave, ...props}) {
    return (
        <ShadowButton icon={
            isPending ? (
                faRotate
            ) : (
                isError ? (
                    faCircleExclamation
                ) : (
                    isSuccess ? (
                        faCircleCheck
                    ) : (
                        faFloppyDisk
                    )
                )
            )
        } onClick={onSave} spin={isPending && true} {...props}/>
    )
}