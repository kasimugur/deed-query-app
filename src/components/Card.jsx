import React, { useEffect, useRef, useState } from "react";
import List from "./List";
import axios from "axios";
import { SiteContext } from "../context/Page";
import { dataDeedJson } from "../page/dataDeed";

export default function Card() {
  const [listQuery, setListQuery] = useState();
  const [fieldOption, setFieldOption] = useState();
  const [filterName, setFilterName] = useState('');
  const [filterNameTyp, setFilterNameTyp] = useState('');

  const parcelNo = [...new Set(dataDeedJson.map((parcel) => parcel.parsel_no))];
  // parsel no

  const islandNo = [...new Set(dataDeedJson.map((island) => island.ada_no))];
  // ada no

  const uniqueFieldIsimleri = [...new Set(dataDeedJson.map((field) => field.tarla_ismi))];
  // tarla isimleri

  const deedType = [...new Set(dataDeedJson.map(typ => typ.türü))]
  // tapu türleri 

  const handleChange = (event) => {
    setFilterName(event.target.value);
  };

  const handleChangeTyp = (event) => {
    setFilterNameTyp(event.target.value);
  };




  // const handleSubmit = () => {

  //   console.log(filterName)
  // }

  const dataNames = dataDeedJson.filter(e => e.tarla_ismi === filterName)

  const dataBag = dataDeedJson.filter(e => e.türü === filterNameTyp)

  console.log(dataBag)

  const data = {
    fieldOption,
    dataNames
  };

  return (
    <>
      <SiteContext.Provider value={data}>
        
        <div className="flex flex-col justify-center ">

          <div className=" md:gap-x-20 flex w-full h-36 mt-10 p-2 justify-center items-center ">
            
            <select className=" max-h-28 w-28 p-2 rounded-md  outline-none" onChange={handleChange}>
              {uniqueFieldIsimleri.map((field, index) => (
                <option className="text-xs md:text-sm" key={index} value={field} >
                  {field}
                </option>
              ))}
            </select>

            <select className=" p-2 rounded-md  outline-none" onChange={handleChangeTyp}>
              {deedType.map((typ, i) => (
                <option value={typ} key={i}>
                  {typ}
                </option>
              ))
              }
            </select>

          </div>

          <List />

          

          {/* <button className="bg-cyan-500 ml-4 p-2" onClick={() => handleSubmit()}>liste</button> */}

        </div>
      </SiteContext.Provider>
    </>
  );
}
