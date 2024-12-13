import { BsPersonCircle } from "react-icons/bs";
import image from "../../../../constants/images";

export default function UserMessage({read, key, text}){
    return(
        <div key={key} className="p-3 border-b-[1px] border-gray-200 flex justify-between bg-white">
            <div className="h-11 w-11 bg-gray-100 text-gray-300 text-center rounded-full">
                <BsPersonCircle  size={45} />
            </div>
            <div className="w-[75%]   ">
                <p className="font-semibold text-gray-600">John Doe</p>
                <p className="text-sm text-gray-500">{text}</p>
            </div>
            <div className="text-sm flex flex-col justify-between">
                {
                    !read &&
                    <div className="flex justify-end"><p className={"bg-primary px-1 rounded-full text-white w-fit text-xs"}>2</p></div>
                }
                <p></p>
                <p className={`text-xs ${!read ? 'text-primary': 'text-gray-400'}`}>12:30</p>
            </div>

        </div>
    )
}