import Login from '../Login/Login';
import logo from './OFICIALMENU.png';
function Cuerpo(){
    
    return(
        
        <section className="flex w-full h-screen">
            <section className="p-0 w-full m-0">
                <img src={logo} alt="" className="w-full h-full"/>
            </section>
            <section className="w-full m-0 p-0 h-full bg-purple-400 justify-items-center justify-center">
                <Login></Login>
            </section>
        </section>
    )
    
}

export default Cuerpo;