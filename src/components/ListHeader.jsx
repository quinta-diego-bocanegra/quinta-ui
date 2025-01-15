export default function ListHeader({icon, children, className}){
    return (
        <div className={"basis-16 w-full px-4 bg-gray-100 rounded-xl flex items-center gap-4 " + (className ?? "")}>
            {
                icon && (
                    <div className="bg-white h-12 basis-12 shrink-0 grow-0 rounded-full shadow-md flex items-center justify-center" >
                        {icon}
                    </div>
                )
            }
            <div className="flex-auto flex flex-row ">
                {children}
            </div>
        </div>
    )
}

export const ListHeaderCell = ({title, children, justify = "left"}) => {
    return (
        <div className={"flex-auto flex flex-col gap-2 " + (justify === "right" && "text-right")}>
            <p className={"text-xs font-uncut text-gray-400 leading-none"}>{title}</p>
            {
                children
            }
        </div>
    )
}

export const ListHeaderCellValue = ({children}) => {
    return (
        <p className="text-gray-600 leading-none ">
            {children}
        </p>
    )
}