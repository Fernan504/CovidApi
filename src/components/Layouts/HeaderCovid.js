import fondo from './COVID-19-visual.jpg';

function HeaderCovid(){
    return(
        <section className="p-0 w-full m-0">
             <img src={fondo} alt="" className="w-full h-96"/>
        </section>
    )
}

export default HeaderCovid;