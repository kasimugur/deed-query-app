import React, { useEffect, useRef, useState } from 'react'
import List from './List'
import axios from 'axios'
import { SiteContext } from "../context/Page"
import { dataDeedJson } from '../page/dataDeed'



export default function Card() {
  const [dataDeed, setDataDeed] = useState();
  const  [option , setOption] = useState();
  const  optionFieldRef = useRef();

  const parcelNo = [...new Set(dataDeedJson.map(parcel => parcel.parsel_no))]
  // parsel no
  const islandNo = [...new Set(dataDeedJson.map(island => island.ada_no))]
  // ada no 
  const uniqueFieldIsimleri = [...new Set(dataDeedJson.map(field => field.tarla_ismi))];
  // tarla isimleri 
  const data = {

  }

  // console.log(optionFieldRef.current.index )
  return (
    <>

      <SiteContext.Provider value={data} >
        <List />
        <select name={"bir isim seçiniZ"}>
          {uniqueFieldIsimleri.map((field, index) => (
            <option  key={index} value={field}>
              {field}
            </option>
          ))}
        </select>
        <select>
          {islandNo.map((island, index) => (
            <option value={island} key={index}>
              {island}
            </option>
          ))}
        </select>
        <select>
          {parcelNo.map((parcel, index) => (
            <option value={parcel} key={index}>
              {parcel}
            </option>
          ))}
        </select>

      </SiteContext.Provider>

    </>
  )
}
