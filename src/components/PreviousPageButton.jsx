import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

export default function PreviousPageButton({path, children}){
    return(
        <div className="w-full flex justify-start">
            <Link to={path} className="h-12 flex items-center text-gray-400 hover:text-neutral-900">
                <FontAwesomeIcon icon={faArrowLeft}/>
                <h4 className="ml-2 leading-none mb-1">{children}</h4>
            </Link>
        </div>
    )
}