function ButtonIcon(props){
    return (
        <button 
            className="bg-slate-300 p-2 text-gray-800 rounded-sm"
            {...props}
        >
            {props.children}
        </button>
    )
}

export default ButtonIcon;