import React,{useState,useEffect} from 'react';
import {useHistory} from "react-router-dom";


const People=()=>{
    const [data,setData]=useState([]);

    const history=useHistory();

    useEffect(() => {
        fetch("https://swapi.dev/api/people")
        .then((res)=>{
            return res.json();
        })
        .then((finalData)=>{
            setData(finalData.results);
        })
    }, [])
   
    const getPersonDetail=(personId)=>{
        history.push(`/people/${personId}`);
    }

    return(
            <div className="center_div">
                {console.log(data)}
                {
                   data.map((entry,id)=>{
                     return(<div className="person_div" key={id}>
                      <h4>{entry.name}</h4>
                      <button className="btn" onClick={()=>getPersonDetail(id+1)}>View Details</button>
                     </div>
                     );
                   }) 
                }
            </div>
    );
}
export default People;