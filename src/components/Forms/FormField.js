function FormField({type, id, fname, onChange, caption, value, error, ...attr}){
    let myClasses = [ 
        "hover:bg-gray-300 " , 
        "text-white ",
        "font-bold ",
        "py-5 ",
        "px-5 ",
        "border-b-4 ", 
        "border-blue-700 ",
        "hover:border-blue-500 ", 
        "rounded ",
        "ml-10 "
    ];
    return(
        <section className="m-52 justify-center justify-items-center">
            <label>{caption}</label>
            <input className={myClasses.join("")} type={type} id={id} name={fname} onChange={onChange} value={value} {...attr}/>
            {(error && true) ? (<section>{error}</section>):null}
        </section>

    );
}

export default FormField;