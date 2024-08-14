
"use client"
import React, { useState } from 'react'


function page() {

  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")

  const [mainTask, setMainTask] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault()
    setMainTask([...mainTask, {title,desc}]);
    settitle("")
    setdesc("")
    console.log(mainTask)
  }
  const deleteHandler = (i)=>{
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setMainTask(copyTask)
  }

  let renderTask = <h2>No task available!</h2>
  if(mainTask.length > 0){
    renderTask = mainTask.map((t,i)=>{
      return(
        <li key={i} className="flex justify-between items-center mb-5">
          <div className="flex justify-between w-2/3">
          <h5 className="font-bold text-xl">{t.title}</h5>
          <h6 className="text-lg ml-10">{t.desc}</h6>
        </div>
        <button 
        onClick={()=>{
          deleteHandler(i)
        }}
        className="bg-red-500 text-white rounded font-bold px-3 py-1">Delete</button>
        </li>
      )
    })
  }

  return (
    <>
      <h1 className="bg-black text-center text text-white py-2 text-2xl font-semibold">
        <p className="text-orange-600 text-3xl font-bold">ATLAS'S</p> Todo List
      </h1>

      <form onSubmit={submitHandler}>

        <input className=" text-xl border-zinc-800 border-2 m-10 rounded px-3 py-2" 
        placeholder="Enter title here" 
        value={title}
        onChange={(e)=>{
          settitle(e.target.value)
        }}
        />
        <input className="text-xl border-zinc-800 border-2 m-10 rounded px-3 py-2" placeholder="Enter description here" 
          value={desc}
          onChange={(e)=>{
            setdesc(e.target.value)
          }}

        />
        
        <button className="bg-purple-500 px-6 py-3 rounded-md font-semibold text-xl m-10"> Add Task </button>
      </form>
      <hr className="h-0.5 bg-black mb-1" />
      <div className="p-8 bg-blue-200">
            <ul>
              {renderTask}
            </ul>
      </div>        

    </>
  )
}

export default page
