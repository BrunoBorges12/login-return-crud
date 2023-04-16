import { useState } from "react"
import Input from "../Input"
import ReactLoading from 'react-loading';


function Form (){
    const [signUp,setSignUp] = useState<boolean>(false)
    const  [loading,setLoading] = useState(false)
    
        return(
            <>
            {loading && (<> <div className="  absolute   w-full h-full">

            <ReactLoading type="spin" color="#5B20B6"  className=" lg:left-[80%] lg:top-[30%]   left-[43%] top-[24%] z-[999999] absolute  text-violet-800  " height={'10%'} width={'10%'} ></ReactLoading>
            </div>
            <div className=" fixed w-screen h-screen top-0 left-0 z-[9999] backdrop-opacity-60  bg-white/70  "></div>
            
            </>

            )}
            


            <form className="my-20 w-full font-titilliumWeb">   

             
                <div className="  flex flex-col justify-center  gap-4 mb-10">
                <h1 className="   text-slate-800	  font-bold lg:text-4xl text-2xl ">  {signUp ? 'Inscreve-se':'Acesse a plataforma'}</h1>
                <h2 className=" text-sm  text-slate-600">Faça login ou registre-se para começar a construir seus projetos ainda hoje.</h2>
                </div>
                    
                <Input name="email" label="E-email" placeholder="Digite seu e-email" type="email"/>
                <Input name="password" label="Senha" placeholder="Digite sua senha" type="password" forgotPassword={true}/>
                <button  onClick={(e)=>{
                        e.preventDefault()
                        setLoading(true)
                        setTimeout(()=>{
                            setLoading(false)
                        },500)

                }} className=" flex justify-center items-center py-4 px-6 gap-2 rounded bg-violet-800 my-8 w-full text-white  text-base font-titilliumWeb font-bold hover:bg-violet-800/60 transition-all" type="submit">
                    {signUp ? 'Inscreve-se':'Entra'}
                </button>
                {!signUp &&  (  
                <div className=" lg:text-base text-sm ">
                    <span className=" text-slate-600">Ainda não tem uma conta?</span>
                    <span className=" text-violet-600 cursor-pointer hover:underline transition-all" onClick={()=>{ 
                        setLoading(true)
                        setTimeout(()=>{
                            setLoading(false)
                        },500)
                        setSignUp(true)
                        }}>Inscreva-se</span>
                </div>
                )}
              
            </form>
            </>
        )
}

export default Form