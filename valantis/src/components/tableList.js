import {  useSelector } from "react-redux"
import { useEffect } from 'react'

import { handlerGetter } from "../store/profile/handlerGetter"
import { Box, Grid } from "@mui/material"
import "./tableList-style.css"

export function TableList({getGoodsFromApi}) {
  let page = useSelector((store)=>store.page)
  let listId=useSelector(store=>store.listId)
  let goods = useSelector(store => store.listGoods)

    useEffect(()=>{ 
    handlerGetter("get_items", {"ids":listId.slice((page-1)*50,page*50)},getGoodsFromApi)
     }, [page,listId])

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