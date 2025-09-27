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
    return (
        <div className="w-[100%]">
            <ul className="space-y-4 p-6 bg-stone-50 rounded-2xl">
            {tasks.map(t => 
                <li key={t.id} className="flex gap-2">
                    <Button 
                        onClick={()=> onTaskClick(t.id)} 
                        title={t.title}
                        isCompleted={t.isCompleted}
                    />
                        
                    <ButtonIcon
                        id={"arrow"} 
                        onClick={() => onSeeDatailsClick(t)} 
                    >
                        <ChevronRightIcon/>
                    </ButtonIcon>

                    <ButtonIcon
                        id={"trash"} 
                        onClick={() => onDeleteTaskClick(t.id)}
                    >
                        <TrashIcon/>
                    </ButtonIcon>
                </li>
            )}
            </ul>
        </div>
    )
}

export default Tasks;