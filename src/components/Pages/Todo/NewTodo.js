import FormField from '../../Forms/FormField1';
import { MdAdd } from 'react-icons/md';

function NewTodo({onChange, value, onAddNew}){
    
    return(
        <section className="TodoAddNew">
                <section className="flex justify-between w-screen items-start px-4 border">
                    <FormField
                        type="text"
                        id= "txtNTodo"
                        fname= "txtNTodo"
                        onChange={onChange}
                        value={value}
                        caption="Nuevo Todo="
                        className="flex-col p-2 m-2 mt-0 ml-32 w-60 bg-white shadow border-2 border-gray-500 border-opacity-30 bor hover:border-gray-600"
                        labelClassName="flex  w-5/6"
                        placeholder="Ingrese un nuevo Todo Aqui..."
                        onKeyUp={(e) => { if (e.keyCode == 13) { onAddNew(e);} }}
                    />
                    <MdAdd size={"3rem"} onClick={onAddNew}></MdAdd>
                </section>
            </section>
    );
}

export default NewTodo;