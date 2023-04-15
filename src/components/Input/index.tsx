type InputProps = {
    type:string
    name:string
    placeholder:string
    label:string
}
function Input({type,name,placeholder,label}:InputProps){
    return(
            <p className="gap-2  flex justify-start flex-col">
                <label htmlFor={name}>{label}</label>
                <input className="  text-gray-800  gap-3  py-4 px-3 border border-slate-200 rounded  placeholder:text-slate-400 focus-visible:border-purple-400  focus-visible:outline-none"  type={type} name={name} placeholder={placeholder? placeholder : ''} />
            </p>
    )
}

export default  Input