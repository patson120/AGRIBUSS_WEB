import { BsBell } from "react-icons/bs";
import { userImages } from "../../constants/images";

export default function Notification(){
    return(
        <div>
            <div className="flex justify-between p-2">
                <p className="font-bold text-lg">Notifications</p>
                <p className="text-sm text-gray-400">Mark all as read</p>
            </div>
            <div className="flex flex-col gap-4 rounded-lg">
                <div className="flex bg-white justify-between rounded-lg border-[1px] border-slate-200 p-4">
                    <div className="flex gap-2">
                        <div className="my-1"><BsBell size="18" className="text-gray-400"/></div>
                        <div className="flex flex-col ">
                            <p className="font-bold text-sm">Push Notification</p>
                            <p className="text-gray-400 text-sm">Automatically send new notificatons</p>
                        </div>
    
                    </div>
                    <div>
                        <input
                        className="sr-only peer"
                        id={`react-switch-new`}
                        type="checkbox"
                    />
                    <label
                        className="flex align-center justify-between cursor-pointer w-8 h-4 bg-gray-300 rounded-xl relative transition after:bg-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all  after:content-[''] after:absolute  peer-checked:after:translate-x-full duration-500"
                        htmlFor={`react-switch-new`}
                    >
                    </label>
                    </div>
                </div>
                <div className="flex flex-wrap justify-between overflow-auto gap-4">
                {
                    userImages?.map((item, index) => (
                        <div key={index.toString()} className=" border-[1px] w-[48%] bg-white rounded-lg flex gap-4 border-slate-200 p-4">
                            <img src={item} className="w-12 h-12 bg-green-500 rounded-full"/>
                            <div className=" flex flex-col gap-2">
                                <div className="flex justify-between">
                                    <p className="font-semibold ">Lesley Gruaer</p>
                                    <p className="text-xs font-medium text-gray-400">4m ago</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="text-sm w-7/8 text-gray-400">Lesley Gruaer long text that represent the notification message</p>
                                    <div className="w-1/8 flex justify-end "><p className="w-2 mx-2 h-2 bg-green-500 rounded-full"></p></div>
                                </div>
                                <div className="flex gap-2">
                                    <button className="hidden ring-1 ring-primary p-2 rounded text-primary  md:block w-24 md:text-sm xl:text-md bg-opacity-50">
                                        Read
                                    </button>
    
                                    <button className="hidden bg-primary p-2 rounded text-white  md:block w-24 font-semibold md:text-sm xl:text-md ml-2">Delete</button>
                                
                                </div>
                            </div>
                        </div>
                    ))
                }
                </div>
                <div></div>
            </div>
        </div>
    )
 }