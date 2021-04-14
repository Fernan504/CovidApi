function FormField({type, id, fname, onChange, caption, value, error, labelClassName, ...attr}){
  
    return(
        <section>
            <label className={labelClassName}>{caption}</label>
            <input type={type} id={id} name={fname} onChange={onChange} value={value} {...attr}/>
            {(error && true) ? (<section>{error}</section>):null}
        </section>

    );
}

export default FormField;