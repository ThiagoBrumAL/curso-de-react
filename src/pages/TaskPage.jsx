import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/ComponentsElements/Title";

function TaskPage(){
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title")
    const description = searchParams.get("description")
    const navigate = useNavigate();

    function backToHome(){
        return navigate("/")
    }

    return (
        <div className=" p-6 flex flex-col items-center">
            <div className=" space-y-4 flex flex-col">
                <div>
                    <Title>
                        Detalhes da Tarefa
                    </Title>
                </div>
                <div className="bg-stone-50 p-6 rounded-md">
                    <h1 className="text-gray-500 font-bold bg-yellow-300 text-xl">&nbsp;&nbsp;{title}&nbsp;&nbsp;</h1>
                    <h2 className="text-gray-600 text-lg my-4">{description}</h2>
                </div>
                <button className="text-slate-50 bg-blue-400 py-2 px-10 rounded-md font-medium w-full" onClick={() => backToHome()}>Retornar</button>
            </div>
        </div>
    )
}

export default TaskPage;