import Llanta from "./Llanta"
import DecoradorLlanta from "./DecoradorLlanta"

function ComponenteLlanta({ variant = TireStyles.LLANTA_BASE, position = 0, onClick, shrink = "none", className}) {

  function createTire(style) {
   
    let tire;
    let tireDecorator;

    switch (style) {
      
      case TireStyles.MILIMETRAJE_BUENO:

        tireDecorator = <DecoradorLlanta className={"fill-green-400"} />
        tire = <Llanta h={"72%"} w={"90%"} x={"5%"} y={"14%"}  />

        return [tireDecorator, tire]

      case TireStyles.MILIMETRAJE_MEDIO:

        tire = <Llanta h={"72%"} w={"90%"} x={"5%"} y={"14%"}  />
        tireDecorator = <DecoradorLlanta className={"fill-amber-400"} />

        return [tireDecorator, tire]

      case TireStyles.MILIMETRAJE_MALO:

        tire = <Llanta h={"72%"} w={"90%"} x={"5%"} y={"14%"} />
        tireDecorator = <DecoradorLlanta className={"fill-red-400"} />

        return [tireDecorator, tire]

      case TireStyles.LLANTA_BASE:

        tire = <Llanta h={"100%"} w={"100%"} x={"0%"} y={"0%"} />

        return [tire]

      case TireStyles.LLANTA_NO_MONTADA:

        tire = <Llanta h={"80%"} w={"94%"} x={"3%"} y={"10%"} className="fill-slate-50" />
        tireDecorator = <DecoradorLlanta className={"fill-slate-200"} />

        return [tireDecorator, tire]

      case TireStyles.LLANTA_SELECCIONADA:

        tire = <Llanta h={"72%"} w={"90%"} x={"5%"} y={"14%"}  />
        tireDecorator = <DecoradorLlanta className={"fill-blue-300"} />

        return [tireDecorator, tire]

      case TireStyles.BUSCANDO_LLANTA:

        tire = <Llanta h={"100%"} w={"100%"} x={"0%"} y={"0%"} className="fill-slate-600 animate-pulse" />

        return [tire]
    }
  }

  return (
    <>
      <svg viewBox="0 0 30.6 10.536" version="1.1" id="svg1" y={position} onClick={onClick} cals>

        <g className={"cursor-pointer " + (shrink == "shrinked" ? " scale-[0.85] translate-x-[7.5%] translate-y-[7.5%] " : (shrink == "shrinkable" && " transition ease-in-out delay-150 hover:scale-[0.85] hover:translate-x-[7.5%] hover:translate-y-[7.5%] duration-300 ") + className)}>
          {createTire(variant)}
        </g>
        
      </svg>
    </>
  )
}

export const TireStyles = Object.freeze({
  MILIMETRAJE_BUENO: 1,
  MILIMETRAJE_MEDIO: 2,
  MILIMETRAJE_MALO: 3,
  LLANTA_BASE: 4,
  LLANTA_NO_MONTADA: 5,
  LLANTA_SELECCIONADA: 6,
  BUSCANDO_LLANTA: 7,
})

export default ComponenteLlanta