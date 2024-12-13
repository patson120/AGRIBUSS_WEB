export default function Messages({recieve, key, text}){
    console.log("status recieve :", recieve)
    return(
        <div key={key} className={` p-4 flex ${recieve ==="user"  ? 'justify-end' : 'justify-start'} `}>
            <div className={`${recieve ==="user" ? 'bg-nav border-[1px] mr-4 border-primary rounded-ss-lg rounded-r-lg' : 'bg-white border rounded-se-lg rounded-l-lg'} max-w-[70%] text-gray-600 p-2 flex `}>
                <p className="p-2">{text}</p>
                <div className="text-xs self-end pl-4">
                    <p></p>
                    <p>12:30</p>
                </div>
            </div>
        </div>
    )
}