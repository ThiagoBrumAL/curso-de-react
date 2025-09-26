import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/ComponentsElements/Title";

function TaskPage(){
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title")
    const description = searchParams.get("description")
    const navigate = useNavigate();

    function backToHome(){
        return navigate("/home")
    }

    return (
        <div className="w-screen h-screen bg-slate-500 p-6 flex flex-col items-center">
            <div className="w-[500px] space-y-4">
                <div className="flex justify-between">
                    <button className="text-slate-800 bg-slate-200 py-2 px-10 rounded-md font-medium" onClick={() => backToHome()}>Retornar</button>
                    <Title>
                        Detalhes da Tarefa
                    </Title>
                </div>
                <div className="bg-slate-900 p-6 rounded-md">
                    <h1 className="text-red-50 text-xl">{title}</h1>
                    <h2 className="text-sky-200 text-lg">{description}</h2>
                </div>
            </div>
        </div>
    )
}

export default TaskPage;