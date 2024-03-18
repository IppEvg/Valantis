import {  useState } from "react"
import { useDispatch, useSelector} from "react-redux"

import { handlerGetter } from "./handlerGetter"
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import gif from "../assets/icons8-поиск.svg"
import "./tableGoodsForm-style.css"

export function TableGoodsForm({getterIdFromApi}){
  const dispatch= useDispatch()
  const[input,setInput]=useState('')
  const listBrand= useSelector(store=>store.listBrand)
  
  const getFilter=(e)=>{
    e.preventDefault()
    dispatch({type:'CHANGE_PAGE',payload:1})
    if(input.match(/\d+/i)){
    handlerGetter("filter", {"price": +input}, getterIdFromApi)
    }else if (listBrand.find(item=>item===input)){
    handlerGetter("filter", {"brand": input}, getterIdFromApi)
    }else if(input.match(/\D+/i)){
    handlerGetter("filter", {"product": input}, getterIdFromApi)
    }
    if(input===""){
    handlerGetter("get_ids", {}, getterIdFromApi)
    }
  }
  
    return(
      <>
        <h1 className="titleList"> Список продуктов</h1>
        <form onSubmit={getFilter} className="filterForm" >
          <div className="filterForm_block" >
            <div>
            <TextField id="standard-basic" label="Поиск" variant="standard" onChange={(e)=>setInput(e.target.value.trim())} className="inputSearch"/>
            </div>
            <div>
              <IconButton type="submit">
                <img src={gif} className="filterForm_icon"  alt="find"/>
              </IconButton>
            </div>
          </div>
        </form>
      </>  
    )
}