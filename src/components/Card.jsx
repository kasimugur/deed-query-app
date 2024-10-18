import React, { useEffect, useRef, useState } from "react";
import List from "./List";
import axios from "axios";
import { SiteContext } from "../context/Page";
import { dataDeedJson } from "../page/dataDeed";

export default function Card() {
  const [listQuery, setListQuery] = useState();
  const [fieldOption, setFieldOption] = useState();
  const [filterName, setFilterName] = useState("all");

  const parcelNo = [...new Set(dataDeedJson.map((parcel) => parcel.parsel_no))];
  // parsel no
  const islandNo = [...new Set(dataDeedJson.map((island) => island.ada_no))];
  // ada no
  const uniqueFieldIsimleri = [
    ...new Set(dataDeedJson.map((field) => field.tarla_ismi)),
  ];
  // tarla isimleri
  const fieldQuery = dataDeedJson.filter((e) => e.tarla_ismi === filterName);

  const handleSubmit = () => {
    // switch (filterName) {
    //   case fieldOption:
    //     return ;
    // }
    if (fieldQuery) {
      return fieldQuery.forEach((element) => {
        setListQuery(element);
      });
    }
  };

  const data = {
    fieldOption,
  };

  return (
    <>
      <SiteContext.Provider value={data}>
        <List />
        <select>
          {uniqueFieldIsimleri.map((field, index) => (
            <option
              onClick={(e) => setFilterName(e.target.value)}
              onChange={(e) => setOption(e.target.value)}
              key={index}
              value={field}
            >
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
  );
}
