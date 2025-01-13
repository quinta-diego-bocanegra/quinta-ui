

export default function List({children}) {

    return (
        <div className="px-3 pt-3 pb-1 rounded-xl border-2 border-gray-100 flex flex-col">
            {children}
        </div>
    )
}

export const ListBodyContainer = ({children}) => {
    return (
        <div className="basis-full grow-0 overflow-auto flex flex-col divide-y">
            {children}
        </div>
    )
}