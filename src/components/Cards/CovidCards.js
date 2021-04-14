function CardsItem({Numero, NumeroRec, Pais}){
return(
    <section className=" bg-gradient-to-r from-indigo-300 to-blue-900 m-6 border border-gray-300 rounded shadow-lg">
        <h2 className="text-center py-10 text-3xl font-semibold">{Pais}</h2>
    <section className="flex m-3">
        <div class="shadow-2xl flex flex-col justify-center bg-gradient-to-r from-red-600 to-red-400 border border-gray-300 rounded w-1/2 m-2">
                                <div class="flex w-full h-full">
                                    <div class="h-32 relative cursor-pointer w-1/3 flex bg-red-300 m-2">
                                        <div class="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
                                        <div class="absolute inset-0 transform  hover:scale-75 transition duration-300">
                                        <div class="h-full w-full bg-red-600 rounded-lg shadow-2xl items-center justify-center"> <p class=" py-10 text-3xl font-semibold text-center text-white">{Numero}</p></div>
                                        </div>
                                    </div>
                                    <div class="w-2/3 flex items-center justify-center ">
                                        <p class="text-2xl text-center text-gray-900">Muertes</p>
                                    </div>
                                </div>
        </div>
        <div class="shadow-2xl flex flex-col justify-center bg-gradient-to-r from-green-400 to-blue-500 border border-gray-300 rounded w-1/2 m-2">
                                <div class="flex w-full h-full">
                                    <div class="h-32 relative cursor-pointer mb-5 w-1/3 flex bg-green-300 m-2">
                                        <div class="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
                                        <div class="absolute inset-0 transform  hover:scale-75 transition duration-300">
                                        <div class="h-full w-full bg-green-600 rounded-lg shadow-2xl items-center justify-center"> <p class=" py-10 text-3xl font-semibold text-center text-white">{NumeroRec}</p></div>
                                        </div>
                                    </div>
                                    <div class="w-2/3 flex items-center justify-center ">
                                        <p class="text-2xl text-center text-gray-900">Recuperados</p>
                                    </div>
                                </div>
        </div>
     </section>
     </section>
);

}

function CovidCards({cdl}){
    const CardsList = cdl.map((o)=>{
        return (
          <CardsItem
          Pais={o.country}
          Numero={o.deaths}
          NumeroRec={o.recovered}
          />
        )
      });
    return(
        <div className="grid sm:h-24 sm:grid-flow-row sm:gap-4 sm:grid-cols-3 grid-cols-1 md:grid-cols-1 mt-3 ">
                <div className="col-span-2"> {CardsList}</div>
         </div>
    );

    
}

export default CovidCards;