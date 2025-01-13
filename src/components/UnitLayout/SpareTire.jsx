import ComponenteLlanta from "./ComponenteLlanta"

export default function SpareTire({tireProps, position}){
    return (
        <svg viewBox="0 0 30.6 90" x={position}>
            <svg viewBox="0 0 30.6 30.6">
                <g transform="rotate(270) translate(-30.6,5.268)" >
                    <ComponenteLlanta {...tireProps} />
                </g>
            </svg> 
        </svg>
    )
}