import { cn } from "@/lib/utils";

export default function Frame({children}){
    return (
        <div className="relative w-full grid grid-cols-[minmax(96px,_1fr)_minmax(auto,_768px)_minmax(96px,_1fr)]">            
            {children}
        </div>
    )
}

export const MainSection = ({children}) => {
    return (
        <div className="col-start-2 col-end-3 min-h-[calc(100vh/1.6)] py-10 flex flex-col justify-center">
            {children}
        </div>
    )
}

export const AsideSection = ({className, children}) => {
    return (
        <div className={cn('col-start-3 col-end-4', className)}>
            {children}
        </div>
    )  
}