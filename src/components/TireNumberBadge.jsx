import { cn } from "@/lib/utils";

export default function TireNumberBadge ({children}){
    return (
        <svg viewBox="0 0 32 32" width={"100%"} xmlns="http://www.w3.org/2000/svg">
            <foreignObject width={"100%"} height={"100%"}>
            <div xmlns="http://www.w3.org/1999/xhtml" className="w-full h-full flex justify-center items-center">
                <div className={cn(" flex justify-center items-center rounded-full sm:bg-orange-400", !children ? "animate-ping w-1/2 h-1/2" : "w-3/4 h-3/4")}>
                <p className="text-white font-youth text-3xl sm:text-lg leading-none ">
                    {children}
                </p>
                </div>
            </div>
            </foreignObject>
        </svg>
    )
}