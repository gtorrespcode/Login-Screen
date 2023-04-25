
export default function Form (props){


    const handleClick = (e) => {
        e.preventDefault();
        props.popUp();
    }
    

     return (
        <form className="text-sm flex flex-col items-center">
        <div className="flex flex-col items-start pt-8">
        <label for="email">Email:</label>
        <input type="email" id="email" required className="text-[#0486AC] border-[1px] border-[#0486AC] my-1 p-2 focus:outline-[#0486AC]"/>
        <label for="password">Senha:</label>
        <input type="password" id="password" name="password" required className="text-[#0486AC] border-[1px] border-[#0486AC] my-1 p-2 focus:outline-[#0486AC]"/>
        </div>
        
        <button onClick={handleClick} type="submit" className="bg-[#0486AC] text-white px-5 py-2 mt-8 hover:scale-95">Entrar</button>
        <p className="py-4 text-xs text-[#0486AC] hover:text-[#06BCF3]" onClick={handleClick}>Esqueci a senha</p>
        </form>
     )
}