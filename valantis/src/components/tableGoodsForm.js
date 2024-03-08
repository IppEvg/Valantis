import { useState } from "react"
import { useSelector} from "react-redux"

import { handlerGetter } from "../store/profile/handlerGetter"
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import gif from "../assets/icons8-поиск.svg"
import "./tableGoodsForm-style.css"

export function TableGoodsForm({getGoodsFromApi,getterIdFromApi}){
 const listBrand= useSelector(store=>store.listBrand)
  const[input,setInput]=useState('')
  const listId= useSelector(store=>store.listId)
  const page= useSelector(store=>store.page)

  const getFilter=(e)=>{
      e.preventDefault()
    if(input.match(/\d+/i)){
     handlerGetter("filter", {"price": +input}, getterIdFromApi)
    }else if (listBrand.find(item=>item===input)){
      handlerGetter("filter", {"brand": input}, getterIdFromApi)
    }else if(input.match(/\D+/i)){
      handlerGetter("filter", {"product": input}, getterIdFromApi)
    }
    if(input===""){
      handlerGetter("get_items", {"ids":listId.slice((page-1)*50,page*50)},getGoodsFromApi)
    }
    handlerGetter("get_items", {"ids":listId.slice((page-1)*50,page*50)},getGoodsFromApi)
  }

    return(
      <>
        <h1 className="titleList"> Список продуктов</h1>
        <form onSubmit={getFilter} className="filterForm" >
          <div className="filterForm_block" >
            <div>
            <TextField id="standard-basic" label="Поиск" variant="standard" onChange={(e)=>setInput(e.target.value)} className="inputSearch"/>
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