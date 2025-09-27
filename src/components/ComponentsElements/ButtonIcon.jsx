import clsx from "clsx"

function ButtonIcon(props){
    return (
        <button 
            className={clsx("p-2 text-slate-100 rounded-md shadow-sm", props.id === "trash" ? "bg-red-500" : "bg-blue-400")}
            {...props}
        >
            {props.children}
        </button>
    )
}

export default ButtonIcon;