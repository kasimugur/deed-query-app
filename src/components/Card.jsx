import React, { useEffect, useRef, useState } from "react";
import List from "./List";
import axios from "axios";
import { SiteContext } from "../context/Page";
import { dataDeedJson } from "../page/dataDeed";

export default function Card() {
  const [listQuery, setListQuery] = useState();
  const [fieldOption, setFieldOption] = useState();
  const [filterName, setFilterName] = useState('');

  const parcelNo = [...new Set(dataDeedJson.map((parcel) => parcel.parsel_no))];
  // parsel no

  const islandNo = [...new Set(dataDeedJson.map((island) => island.ada_no))];
  // ada no

  const uniqueFieldIsimleri = [...new Set(dataDeedJson.map((field) => field.tarla_ismi))];
  // tarla isimleri

  const handleChange = (event) => {
    setFilterName(event.target.value);
  };
  const data = {
    fieldOption,
  };

  const handleSubmit = () => {

    console.log(filterName)
  }
  const dataNames = dataDeedJson.filter(e => e.tarla_ismi === filterName )
  const dataBag = dataDeedJson.filter(e => e.tarla_ismi === filterName )
  console.log()

  return (
    <>
      <SiteContext.Provider value={data}>
        <List />
        <select   onChange={handleChange}>
          {uniqueFieldIsimleri.map((field, index) => (
            <option
              key={index}
              value={field}
            >
              {field}
            </option>
          ))}
        </select>
        <h1 className="text-2xl text-red-700 bg-cyan-400">
          {filterName}
        </h1>
          {dataNames.map((e, i) => (
            <div key={i}>
            <h2>{e.tarla_ismi} </h2>
            <h2>{e.ada_no} </h2>
            <h2>{e.metrekare} </h2>
            <h2>{e.parsel_no} </h2>
            <h2>{e.sulak_mi} </h2>
            <h2>{e.türü} </h2>
            </div>
          ))}
      
        <button className="bg-cyan-500 ml-4 p-2" onClick={() => handleSubmit()}>liste</button>
      </SiteContext.Provider>
    </>
  );
}
