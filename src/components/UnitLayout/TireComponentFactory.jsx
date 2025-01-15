import Llanta from "./Llanta"
import DecoradorLlanta from "./DecoradorLlanta"
import TireStyles from "@/core/enums/TireStyles"
import Warning from "@/assets/Warning"
import Error from "@/assets/Error"

class TireComponentFactory {
  
  createTire(style) {
   
    let tire;
    let tireDecorator;
    let icon;

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

      case TireStyles.LLANTA_NO_ASIGNADA:

        tire = <Llanta h={"100%"} w={"100%"} x={"0%"} y={"0%"} />
        icon = <Warning />

        return [tire, icon]

      case TireStyles.LLANTA_NO_MONTADA:

        tire = <Llanta h={"80%"} w={"94%"} x={"3%"} y={"10%"} className="fill-slate-50" />
        tireDecorator = <DecoradorLlanta className={"fill-slate-200"} />

        return [tireDecorator, tire]

      case TireStyles.LLANTA_SELECCIONADA:

        tire = <Llanta h={"72%"} w={"90%"} x={"5%"} y={"14%"}  />
        tireDecorator = <DecoradorLlanta className={"fill-blue-300"} />

        return [tireDecorator, tire]

      case TireStyles.LLANTA_NO_ENCONTRADA:

        tire = <Llanta h={"100%"} w={"100%"} x={"0%"} y={"0%"} />
        icon = <Error />

        return [tire, icon]

      case TireStyles.BUSCANDO_LLANTA:

        tire = <Llanta h={"100%"} w={"100%"} x={"0%"} y={"0%"} className="fill-slate-600 animate-pulse" />

        return [tire]
    }
  }
}

export default TireComponentFactory