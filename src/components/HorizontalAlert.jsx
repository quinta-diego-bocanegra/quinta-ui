import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

export default function HorizontalAlert ({message, type, children, display = "row"}) {
    return (
        <div className={"p-2 flex flex-col justify-center items-center rounded-xl border shadow-md border-slate-50 " + getStyle(type)}>
            <div className={display == "col" ? "flex flex-col gap-2 my-2" : "flex items-center gap-2"}>
            <FontAwesomeIcon icon={getIcon(type)} size={display == "col" && "xl"}/>
            <h5 className={"text-neutral-900 text-center "}>{message}</h5>
            </div>
            {
                children && (
                    <div className="py-2 basis-full flex gap-4 justify-center items-center">
                        {children}
                    </div>
                )
            }
            
        </div>
    )
}

function getStyle(type){
    switch(type){
        case "error":
            return "bg-gradient-to-b from-red-100 text-red-400"
        case "warning":
            return "bg-gradient-to-b from-orange-100 text-orange-400"
        case "info":
            return "bg-gradient-to-b from-blue-100 text-blue-400"
    }
}


export function getIcon(type){
    switch(type){
        case "error": 
            return faCircleExclamation
        case "warning":
            return faTriangleExclamation
        case "info":
            return faCircleInfo
    }
}