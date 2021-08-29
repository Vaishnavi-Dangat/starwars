import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';

const PeopleDetails=()=>{
    const [personData,setPersonData]=useState({});
    const {id}= useParams();

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${id}`)
        .then((res)=>{
            return res.json();
        })
        .then((finalData)=>{
          console.log(finalData)
            setPersonData(finalData);
        })
    }, [])
    return(
   <div className="personInfo_center">
       <div className="personInfo_div">
         <h2>{personData.name}</h2>
         <div className="personInfo_grid">
             <div>
              <h3>Heigth</h3>
              <h4>{personData.height}</h4>
             </div>
             <div>
               <h3>Mass</h3>
               <h4>{personData.mass}</h4></div>
             <div>
               <h3>Hair Color</h3>
               <h4>{personData.hair_color}</h4></div>
             <div>
              <h3>Skin Color</h3>
              <h4>{personData.skin_color}</h4></div>
             <div>
              <h3>Eye Color</h3>
              <h4>{personData.eye_color}</h4></div>
             <div>
              <h3>Birth Year</h3>
              <h4>{personData.birth_year}</h4></div>
             <div>
              <h3>Gender</h3>
              <h4>{personData.gender}</h4></div>
         </div>
       </div>
    </div>
    );
}
export default PeopleDetails;