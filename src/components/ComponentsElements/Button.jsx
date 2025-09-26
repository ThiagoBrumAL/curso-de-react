function Button(props){
    return (
        <button 
            className={`text-gray-800 bg-slate-300 font-mono p-2 rounded-sm w-full text-left ${props.isCompleted && 'line-through'}`}
            onClick={props.onClick}
        >
            {props.title}
        </button>
    )
}

export default Button;