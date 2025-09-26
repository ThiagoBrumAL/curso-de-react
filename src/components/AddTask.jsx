import Input from "./ComponentsElements/Input";
import { useState } from "react";

function AddTask({onAddTaskSubmit}){

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    return (
        <div className="text-gray-800 bg-slate-300 font-mono p-6  rounded-sm shadow flex flex-col gap-2">
            <Input 
                type="text" 
                placeholder="Digite o titulo da tarefa" 
                value={title} 
                onChange={(event) => setTitle(event.target.value)}
            />
            <Input 
                type="text" 
                placeholder="Digite a descrição da tarefa" 
                value={description} 
                onChange={(event) => setDescription(event.target.value)}
            />
            <button  
                className="bg-slate-500 text-slate-800 py-2 rounded-sm font-medium"
                onClick={() => {
                    if(!(title.trim() && description.trim())) return alert("Fields Empty")
                    onAddTaskSubmit(title, description)
                }}
            >
                Adicionar
            </button>
        </div>
    );
}

export default AddTask;