function CovidListItem({confirmed, code, recovered, country, deaths, lastChange, lastUpdate}){
    
      return (
       /* <li className="flex my-6 justify-between border-b-2 border-indigo-400">
            <span className="ml-4">{code}</span>
            <span className="ml-4">{country}</span>
            <span className="ml-4">{confirmed}</span>
            <span className="ml-4">{recovered}</span>
            <span className="ml-4">{deaths}</span>
            <span className="ml-4">{lastChange}</span>
            <span className="ml-4">{lastUpdate}</span>
            <div className="flex">
            </div>
        </li>*/
        <tr className="hover:bg-blue-400 bg-indigo-500">
              <td class="border px-8 py-4">{country}</td>
              <td class="border px-8 py-4">{code}</td>
              <td class="border px-8 py-4">{confirmed}</td>
              <td class="border px-8 py-4">{lastChange}</td>
              <td class="border px-8 py-4">{lastUpdate}</td>
        </tr>
      );
    
}

function CovidList({cvd}){
    const covidItems = cvd.map((o)=>{
      return (
        <CovidListItem
          country={o.country}
          code={o.code}
          confirmed={o.confirmed}
          fb_id={o.fb_id}
          lastChange={o.lastChange}
          lastUpdate={o.lastUpdate}
        />
      )
    });
    return (
      <section className="CovidTable mx-96 justify-center px-44">
        <table class="shadow-lg">
            <tr>
              <th class="bg-indigo-600 border text-left px-8 py-4 text-white">País</th>
              <th class="bg-indigo-600 border text-left px-8 py-4 text-white">Codigo</th>
              <th class="bg-indigo-600 border text-left px-8 py-4 text-white">Infectados</th>
              <th class="bg-indigo-600 border text-left px-8 py-4 text-white">Ultimo Cambio</th>
              <th class="bg-indigo-600 border text-left px-8 py-4 text-white">Ultima Actualización</th>
            </tr>
            {covidItems}
        </table>
      </section>
    );
  }

export default CovidList;