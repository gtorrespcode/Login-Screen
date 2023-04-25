import Header from "./Header"
import Form from "./Form"
import { useState } from "react"
import { AiOutlineCloseCircle } from "react-icons/ai";


export default function Login(){

    const [loginM, setLoginM] = useState(false);

    const ShowPopUp = () => {
        setLoginM(!loginM);
    }

    

    return (
        <div className="w-[70%] h-[70%] bg-white flex flex-col items-center justify-center rounded-md shadow-[0px_4px_4px_black] p-[4%] 
        lg:w-[50%] lg:flex-row lg:justify-evenly relative">
        <div className={loginM ? "transition-all duration-1000 w-[80%] h-[100%] absolute left-0 top-0  bg-gradient-to-r from-[#0486AC] to-[#06AADC] border-b-[1px] border-r-[1px] border-black break-words px-6 py-[33%]" : "hidden"}>
            <p className="text-white">Esse é apenas um projeto simples utilizando React e Tailwind. Se você gostaria de ver mais projetos, acesse meu <a href="https://github.com/gtorrespcode" className="text-[#74DCFB]">GitHub</a>.</p>
            <AiOutlineCloseCircle onClick={ShowPopUp} className={loginM ? "text-white w-5 h-5 my-4 cursor-pointer hover:scale-90" : "hidden"}>X</AiOutlineCloseCircle>
        </div>
            <Header/>
            <Form popUp={() => ShowPopUp()}/>
            
        </div>
        
    )
}