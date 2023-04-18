import classNames from "classnames"
import { useEffect, useState } from "react"

type InputProps = {
    type:string
    name:string
    placeholder:string
    label:string
    forgotPassword?:boolean
    value:string
    onChange:()=> void
}
function Input({type,name,placeholder,label,forgotPassword,value,onChange}:InputProps){
    const [showViewPassword,setShowViewPassword] = useState(false)
    const [changeTypePassword,setChangeTypePassword] = useState(type)
    useEffect(()=>{
        if(type === 'password'){
            setChangeTypePassword(showViewPassword? 'text':'password')

           
        }
    },[changeTypePassword,type,showViewPassword])
    return(
            <p className="  flex justify-start flex-col pt-4 relative">
                <label className=" flex  text-sm  font-semibold justify-between  items-center pb-2" htmlFor={name}>
                <span className="  text-slate-800">{label}</span>
                <span className=" text-violet-600 cursor-pointer hover:underline transition-all">{forgotPassword? 'esqueceu a senha': ''}</span>
                </label>
                {forgotPassword?(<span className="absolute inset-y-16 mt-2 right-0 flex items-center px-2">
                <svg onClick={()=> setShowViewPassword(true)} className={classNames(showViewPassword? 'hidden':'block','cursor-pointer')} width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_15_64)">
                            <path d="M14.95 15.4501C13.5255 16.5359 11.791 17.1374 10 17.1667C4.16671 17.1667 0.833374 10.5001 0.833374 10.5001C1.86995 8.56831 3.30765 6.88057 5.05004 5.55006M8.25004 4.03339C8.82365 3.89913 9.41093 3.83201 10 3.8334C15.8334 3.8334 19.1667 10.5001 19.1667 10.5001C18.6609 11.4464 18.0576 12.3373 17.3667 13.1584M11.7667 12.2667C11.5378 12.5124 11.2618 12.7094 10.9552 12.846C10.6485 12.9826 10.3175 13.0561 9.98178 13.062C9.64611 13.068 9.31268 13.0062 9.00138 12.8805C8.69009 12.7547 8.40731 12.5676 8.16991 12.3302C7.93252 12.0928 7.74537 11.81 7.61963 11.4987C7.4939 11.1874 7.43215 10.854 7.43807 10.5183C7.44399 10.1826 7.51746 9.8516 7.6541 9.54493C7.79074 9.23827 7.98775 8.96227 8.23337 8.7334" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M0.833374 1.33339L19.1667 19.6667" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_15_64">
                            <rect width="20" height="20" fill="white" transform="translate(0 0.500061)"/>
                            </clipPath>
                            </defs>
                </svg>
                <svg  onClick={()=> setShowViewPassword(false)}  className={classNames(showViewPassword? 'block':'hidden','cursor-pointer')}   width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.833374 10.5001C0.833374 10.5001 4.16671 3.8334 10 3.8334C15.8334 3.8334 19.1667 10.5001 19.1667 10.5001C19.1667 10.5001 15.8334 17.1667 10 17.1667C4.16671 17.1667 0.833374 10.5001 0.833374 10.5001Z" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10 13.0001C11.3807 13.0001 12.5 11.8808 12.5 10.5001C12.5 9.11935 11.3807 8.00006 10 8.00006C8.61929 8.00006 7.5 9.11935 7.5 10.5001C7.5 11.8808 8.61929 13.0001 10 13.0001Z" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>


                </span>):''}
                
                <input value={value} onChange={onChange} className="  text-slate-800  gap-3  text-sm  py-4 px-3 border border-slate-200 rounded  placeholder:text-slate-400 focus-visible:border-purple-400  focus-visible:outline-none"  type={type === 'password'? changeTypePassword:type} name={name} placeholder={placeholder? placeholder : ''} />

            </p>
    )
}

export default  Input