import Input from "./ComponentsElements/Input";
import { useState } from "react";

function AddTask({onAddTaskSubmit}){

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    return (
        <div className="text-gray-800 bg-stone-50 font-sans p-6  rounded-md shadow-sm flex flex-col gap-2 w-[100%]">
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
                className="bg-blue-400 py-2 font-bold rounded-md text-slate-100"
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