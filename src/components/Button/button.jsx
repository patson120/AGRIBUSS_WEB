function Button({text}){
    return(
        <div>
            <button className="bg-btngrade py-2 rounded-lg hover:scale-105 text-white font-bold cursor-pointer shadow px-6">
                {text}
            </button>
        </div>
    )
}

export default Button;