import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"

const ShadowButton = forwardRef (({onClick, icon, children, iconColor, iconLocaton = "left", className, type, ...props}, ref) => {
    return (
        <button
            className={cn("m-[calc(2px-0.66666667px)] p-2 bg-white text-black border border-slate-50 shadow-md hover:m-0 hover:border-2 hover:border-black px-2 rounded-lg flex items-center gap-2", 
                          (iconLocaton === "right" && "flex-row-reverse justify-between"),
                          (!icon && "justify-center"),
                          className)}
            onClick={ onClick ?? (() => {})}
            type={type || "button"}
            ref={ref}
            {...props}>
            {
                icon && (
                    <div className="flex justify-center basis-6">
                        <FontAwesomeIcon icon={icon} className={iconColor} {...props}/>
                    </div>
                )
            }
            {children && <p className="font-esphimere whitespace-nowrap">{children}</p>}
        </button>
    )
})

export default ShadowButton
