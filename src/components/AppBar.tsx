
import {SearchBar} from "./SearchBar"
export const AppBar = () => {
    return<div className="flex justify-around">
        <div className="text-md inline-flex items-center">YouTube        </div>
        <div><SearchBar/>   </div>
        <div>Sign-in      </div>

    </div>
}