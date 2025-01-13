import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function ShadowButton({onClick, icon, children, iconColor, className, ...props}){
    return (
        <button
            className={"m-[calc(2px-0.66666667px)] p-2 bg-white text-black border border-slate-50 shadow-md hover:m-0 hover:border-2 hover:border-black px-2 rounded-lg flex items-center gap-2 " + className}
            onClick={ onClick ?? (() => {})}
            type="button"
            {...props}>
            {
                icon && (
                    <div className="flex justify-center basis-6">
                        <FontAwesomeIcon icon={icon} className={iconColor} {...props}/>
                    </div>
                )
            }
            <p className="font-esphimere whitespace-nowrap text-neutral-900">{children}</p>
        </button>
    )
}