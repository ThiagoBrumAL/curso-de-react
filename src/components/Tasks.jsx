import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./ComponentsElements/Button";
import ButtonIcon from "./ComponentsElements/ButtonIcon";

function Tasks({tasks, onDeleteTaskClick, onTaskClick}){
    const navigate = useNavigate()
    function onSeeDatailsClick(task){
        const query = new URLSearchParams()
        query.set("title", task.title)
        query.set("description", task.description)
        navigate(`/task?${query.toString()}`)
    }
    return <ul className="space-y-4 p-6 bg-slate-200 rounded-sm shadow">
        {tasks.map(t => 
            <li key={t.id} className="flex gap-2">
                <Button 
                    onClick={()=> onTaskClick(t.id)} 
                    title={t.title}
                    isCompleted={t.isCompleted}
                />
                    
                <ButtonIcon 
                    onClick={() => onSeeDatailsClick(t)} 
                >
                    <ChevronRightIcon/>
                </ButtonIcon>

                <ButtonIcon 
                    onClick={() => onDeleteTaskClick(t.id)} 
                >
                    <TrashIcon/>
                </ButtonIcon>
            </li>
        )}
        </ul>
}

export default Tasks;