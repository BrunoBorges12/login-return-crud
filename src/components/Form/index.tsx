import Input from "../Input"


function Form (){
        return(
            <form className="my-[114px] w-96 font-titilliumWeb">
                <div className="  flex flex-col  gap-4 mb-10">
                <h1 className="   text-slate-800	  font-bold text-4xl ">Acesse a plataforma</h1>
                <h2 className=" text-base text-slate-600">Faça login ou registre-se para começar a construir seus projetos ainda hoje.</h2>
                </div>
                    
                <Input name="email" label="E-email" placeholder="Digite seu e-email" type="email"/>
                <Input name="password" label="Senha" placeholder="Digite sua senha" type="password" forgotPassword={true}/>
                <button className=" flex justify-center items-center py-4 px-6 gap-2 rounded bg-violet-800 my-8 w-full text-white  text-base font-titilliumWeb font-bold hover:bg-violet-800/60 transition-all" type="submit">Entrar</button>
                <div className=" text-base">
                    <span className=" text-slate-600">Ainda não tem uma conta?</span>
                    <span className=" text-violet-600 cursor-pointer hover:underline transition-all">Inscreva-se</span>
                </div>
            </form>
        )
}

export default Form