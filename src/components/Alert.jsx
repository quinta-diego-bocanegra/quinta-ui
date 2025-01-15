import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons/faTriangleExclamation'
import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner'

function Alert({type, children}) {
    return (
        <div className="w-full grow flex flex-col items-center justify-center">
            <div className="basis-8 h-8 flex justify-center items-center">
                <LoadIcon type={type}/>
            </div>
            <p className="font-medium text-neutral-900">{children}</p>
        </div>
    )
}

function LoadIcon({type}){
    switch(type){
        case "error":
            return <FontAwesomeIcon icon={faTriangleExclamation} size='xl'/>;
        case "success":
            return <FontAwesomeIcon icon={faCheck} size='xl'/>;
        case "loading":
            return <FontAwesomeIcon icon={faSpinner} size='xl' spin/>;
    }
}

export default Alert;