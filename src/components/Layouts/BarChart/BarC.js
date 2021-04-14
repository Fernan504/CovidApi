import React from 'react';
import ChartistGraph from 'react-chartist';
import './Bar.css';

function BarC({data, options, type}){
  var data = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre'],
    series: [[5000, 20000, 40000, 80000, 60000, 20000, 10000, 40000, 60000, 10000]]
  };

  var options = {
    high: 100000,
    low: 0,
    axisX: {
      labelInterpolationFnc: function(value, index) {
        return index % 1 === 0 ? value : null;
      }
    }

  };

  var type = 'Bar';
    
    return(
        <div className="p-0 mt-40 bg-gray-600 bar-container">
         <ChartistGraph className="p-0 h-full bar" data={data} options={options} type={type} />
       </div>
    );
}
  
  export default BarC;