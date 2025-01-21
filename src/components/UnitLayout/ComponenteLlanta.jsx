import Llanta from "./Llanta"
import DecoradorLlanta from "./DecoradorLlanta"

function ComponenteLlanta({ variant = "LLANTA_BASE", position = 0, onClick, shrink = "none", children, className}) {

  return (
    <>
      <svg viewBox="0 0 30.6 10.536" version="1.1" id="svg1" y={position} onClick={onClick} cals>
        <g className={"cursor-pointer " + (shrink == "shrinked" ? " scale-[0.85] translate-x-[7.5%] translate-y-[7.5%] " : (shrink == "shrinkable" && " transition ease-in-out delay-150 hover:scale-[0.85] hover:translate-x-[7.5%] hover:translate-y-[7.5%] duration-300 ") + className)}>
          {TireStyles[variant]}
        </g>
        <svg viewBox="0 0 10.536 10.536">
          {children}
        </svg>
      </svg>
    </>
  )
}

export const TireStyles = Object.freeze({
  MILIMETRAJE_BUENO: [
    <DecoradorLlanta className={"fill-green-400"} />,
    <Llanta h={"72%"} w={"90%"} x={"5%"} y={"14%"}  />
  ],
  MILIMETRAJE_MEDIO: [
    <DecoradorLlanta className={"fill-amber-400"} />,
    <Llanta h={"72%"} w={"90%"} x={"5%"} y={"14%"}  />
  ],
  MILIMETRAJE_MALO: [
    <DecoradorLlanta className={"fill-red-400"} />,
    <Llanta h={"72%"} w={"90%"} x={"5%"} y={"14%"} />,
  ],
  LLANTA_BASE: <Llanta h={"100%"} w={"100%"} x={"0%"} y={"0%"} />,
  LLANTA_NO_MONTADA: [
    <DecoradorLlanta className={"fill-slate-200"} />,
    <Llanta h={"80%"} w={"94%"} x={"3%"} y={"10%"} className="fill-slate-50" />,
  ],
  LLANTA_SELECCIONADA: [
    <DecoradorLlanta className={"fill-blue-300"} />,
    <Llanta h={"72%"} w={"90%"} x={"5%"} y={"14%"}  />,
  ],
  BUSCANDO_LLANTA: <Llanta h={"100%"} w={"100%"} x={"0%"} y={"0%"} className="fill-slate-600 animate-pulse" />,
})

export default ComponenteLlanta