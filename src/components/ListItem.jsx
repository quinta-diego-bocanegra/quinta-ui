import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function ListItem ({icon, title, children, display = "col"}){
    return (
        <div className={"basis-16 px-4 grow-0 shrink-0 flex flex-row items-center"}>
            {
                icon && (
                    <div className="basis-16 shrink-0 grow-0 flex items-center justify-start">
                        <div className="min-h-12 basis-12 grow-0 bg-slate-200 rounded-full flex flex-row items-center justify-center">
                            <FontAwesomeIcon icon={icon} size="lg"/>
                        </div>
                    </div>
                )
            }
            <div className={"flex-auto flex " + (display === "col" ? "flex-col gap-2" : "flex-row justify-between")}>
                <p className={"font-uncut text-xs text-gray-400 leading-none " + (display == "row" && "self-center")}>{title}</p>
                {children}
            </div>
        </div>
    )
}


export const ListItemValue = ({children}) => {
    return (
        <p className={" text-gray-600 leading-none w-fit "}>
            {children}
        </p>
    )
}