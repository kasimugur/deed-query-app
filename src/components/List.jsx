import React, { useContext } from 'react'
import { SiteContext } from '../context/Page'

export default function List() {
  const { dataNames } = useContext(SiteContext)

  return (
    <div className=' flex basis-1"  transition flex-wrap gap-5 justify-center ' >
      {dataNames.map((e, i) => (
        <div 
        className='flex justify-center  bg-red-50 drop-shadow-2xl rounded-xl
         transition duration-500 hover:scale-105
         md:hover:scale-110 w-72 gap-x-2 md:w-96 p-3 mb-5 ' 
         key={i}>
          <div className=" p-2 flex  flex-col hover: h-36">
          <div className="text-center border-b-2  border-red-300">
          <h1 className=' text-xl text-red-700 font-bold  '>{e.tarla_ismi} </h1>
          <span className=' text-sm text-red-400 mb-2 ' >( {e.türü} ) </span>
          </div>
            <div>

              <div className=" text-neutral-600 text- flex my-2 gap-4 justify-center">

                <h3>Ada No =  {e.ada_no} </h3>
                <h3>Parsel No =  {e.parsel_no} </h3>
              </div>
              <div className=" flex justify-center  ">
                <h2>Metrekare =  {e.metrekare}m² </h2>
                
              </div>
              <a href={e.url_data}>tapuya git </a>
            </div>
          </div>

        </div>
      ))}
    </div>
  )
}
