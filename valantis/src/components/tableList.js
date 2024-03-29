import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react'

import { handlerGetter } from "./handlerGetter"
import { Box, Grid } from "@mui/material"
import "./tableList-style.css"

export function TableList() {
  const dispatch = useDispatch()
  let page = useSelector((store)=>store.page)
  let listId=useSelector(store=>store.listId)
  let goods = useSelector(store => store.listGoods)

  const getGoodsFromApi=(data)=>{
    let normalItems =data.result.filter((item, index, self) => index === self.findIndex((e) => e.id === item.id))
    dispatch({type:'LOAD_GOODS_OF_PAGE',payload:normalItems})
  }
  
  useEffect(()=>{ 
    handlerGetter("get_items", {"ids":listId.slice((page-1)*50,page*50)},getGoodsFromApi)
  }, [listId,page])

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          {goods.map(item => (
            <Grid item xs={12} key={item.id} className="row">
              <div>{item.id}</div>
              <div>{item.product}</div>
              <div>{item.brand ? item.brand : "..."}</div>
              <div>{item.price}</div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  )
}