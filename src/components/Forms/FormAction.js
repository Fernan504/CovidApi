function FormAction({caption, onClick}){
    let myClasses = [
        "bg-blue-600 ", 
        "hover:bg-blue-400 " , 
        "text-white ",
        "font-bold ",
        "py-5 ",
        "px-10 ",
        "border-b-4 ", 
        "border-blue-700 ",
        "hover:border-blue-500 ", 
        "rounded ",
        "ml-80 "
    ];
    return(
        <button onClick={onClick} className={myClasses.join("")}>{caption}</button>
    );
}

export default FormAction;