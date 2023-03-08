import React, {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import API from "../../api"

import "./style.scss";

function index() {

 const {names} = useParams()
 const [data, setData] = useState([])


useEffect(()=>{
  API.getItem(names).then(res=>{
    setData(res.data[0])
   })
},[names])

 const { flag, population, nativeName,  capital, region,subregion,topLevelDomain}=data;

console.log(data);
 

  return (
    <div className="container">
      <div style={{ marginTop: "140px" }}>
        <Link className="mb-5 d-block py-2 px-3 bg-white shadow rounded" style={{width:"100px"}} to="*">Go Back</Link>
        <div className="d-flex mt-2 justify-content-between flex-wrap gap-5 align-items-center">
          <div>
            <img
              style={{ width: "560px", height: "401px" }}
              src={flag}
              alt={nativeName}
            />
          </div>

          <div>
            <div>
              <h2 className="text-black mb-5">{names}</h2>
              <div className="d-flex justify-content-between">
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <strong>Native:{nativeName} </strong>
                  </li>
                  <li className="mb-3">
                    <strong>Population:{population} </strong>
                  </li>
                  <li className="mb-3">
                    <strong>Region:{region  } </strong>
                  </li>
                  <li className="mb-3">
                    <strong>Sub Region :{subregion} </strong>
                  </li>
                  <li className="mb-3">
                    <strong>Capital:{capital} </strong>
                  </li>
                </ul>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <strong>Top Level Domain: :{topLevelDomain} </strong>
                  </li>
                  <li className="mb-3">
                    <strong>Currencies: Euro </strong>
                  </li>
                  <li className="mb-3">
                    <strong>Languages: Engliash</strong>
                  </li>
                </ul>
              </div>
            </div>

            <div className="d-flex gap-5 flex-wrap align-items-center">
              <span>Border Countries:</span>
              <button className="btn btn-light border shadow">France</button>
              <button className="btn btn-light border shadow">Germany</button>
              <button className="btn btn-light border shadow">
                Netherlands
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
