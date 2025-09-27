function Button(props){
    return (
        <button 
            className={`text-zinc-400 border-[2px] border-gray-200 font-sans px-4 py-2 rounded-md w-full font-bold text-left shadow-sm ${props.isCompleted && 'line-through'}`}
            onClick={props.onClick}
        >
            {props.title}
        </button>
    )
}

export default Button;