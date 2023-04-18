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
    return(
            <p className="gap-2  flex justify-start flex-col pt-4">
                <label className=" flex  text-sm  font-semibold justify-between  items-center pb-2" htmlFor={name}>
                <span className="  text-slate-800">{label}</span>
                <span className=" text-violet-600 cursor-pointer hover:underline transition-all">{forgotPassword? 'esqueceu a senha': ''}</span>
                </label>
                <input value={value} onChange={onChange} className="  text-slate-800  gap-3  text-sm  py-4 px-3 border border-slate-200 rounded  placeholder:text-slate-400 focus-visible:border-purple-400  focus-visible:outline-none"  type={type} name={name} placeholder={placeholder? placeholder : ''} />
            </p>
    )
}

export default  Input