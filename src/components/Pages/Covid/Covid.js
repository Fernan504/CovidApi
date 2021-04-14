import {useEffect,useState} from 'react';
import HeaderC from '../../Layouts/HeaderCovid';
import getCountryCodeTotal from './CovidApi';
import BarChart from '../../Layouts/BarChart/BarC';
import firebaseSDK from '../../../FireBaseInit1';
import CovidList from './CovidForm';
import CCard from '../../Cards/CovidCards';

function Covid(){


  const [valiData, setValidData] = useState({
    ValidD:[],
    newValid:"",
    waiting:false
  });

  var cref;
  useEffect(
    
    ()=>{
      const covidRef = firebaseSDK.database().ref('covid').orderByKey().limitToLast(100);
      covidRef.on('child_added', snapshot =>{
        let newValid = {...snapshot.val(), fb_id: snapshot.key}
        let newValids = valiData.ValidD;
        newValids.push(newValid);
        setValidData({...valiData, ValidD: newValids});
      });
  covidRef.on('child_removed', (snapshot)=>{
    const deletedKey = snapshot.key;
    let newValids = valiData.ValidD.filter(o=>{
      return o.fb_id !==deletedKey;
    });
    setValidData({...valiData, ValidD: newValids});
    });
  covidRef.on('child_changed', (snapshot) => {
    const changedKey = snapshot.key;
    const dats = snapshot.val();
    console.log(dats);
    let newTodos = valiData.ValidD.map(o => {
      if (o.fb_id == changedKey) {
        o = {...dats, fb_id:changedKey};
      }
      return o;
    });
    setValidData({...valiData, ValidD: newTodos});
  });
  return ()=>{
    covidRef.off();
  }
  
    }
    ,[]
    );

  useEffect(
    
    function(){
      getCountryCodeTotal(
        (err, data)=>{
          if(err){
            console.log(err);
          } else {
            console.log(data);  
              if(valiData.ValidD == data){
                alert("Pais registrado actualmente");
                
              }
              else{
                alert("Se ha registrado un nuevo país");
                firebaseSDK.database().ref("covid").push(data);
               console.log(valiData.ValidD);
               console.log(data);
              }
            
          }
        }
      )
    }
    ,[]
  );


  return (
    <section>
        <HeaderC></HeaderC>
        <h1 className="text-center italic font-bold text-5xl font m-3">Paises Infectados de Covid-19</h1>
        <CovidList cvd={valiData.ValidD}></CovidList>
        <CCard cdl={valiData.ValidD} cdl1={valiData.ValidD} titl={valiData.ValidD}></CCard>
    </section>
  );
}


export default Covid;