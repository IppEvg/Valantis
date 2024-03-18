import { useDispatch, useSelector } from 'react-redux'
import { useEffect} from 'react'

import { FooterComp } from './components/footerComp'
import { TableGoodsForm } from './components/tableGoodsForm'
import {TableList} from './components/tableList'
import { handlerGetter } from './components/handlerGetter'
import {Box, CircularProgress, Pagination} from '@mui/material'
import './App.css'


function App() {
  const dispatch = useDispatch()
  let page = useSelector(store=>store.page)
  let listId=useSelector(store=>store.listId)
  let loading=useSelector(store=>store.loading)
  let countPages =Math.ceil(listId.length / 50)

  const getterIdFromApi=(data)=>{
    let newList  = [...new Set(data.result)]
    dispatch({type:'LOAD_IDS',payload:newList})
  }

  const getListBrands=(data)=>{
    dispatch({type:'LOAD_BRANDS',payload:[...new Set(data.result)]})
  }

  const handleChange = (e,target) => {
    dispatch({type:'CHANGE_PAGE',payload:target})
  }

  useEffect(()=>{
    handlerGetter("get_ids", {}, getterIdFromApi)
    handlerGetter("get_fields", {"field": "brand"}, getListBrands)
  }, [])
  
  return (
      <div className="container">
        <section className='wrapper'>
          <main>
            {loading? 
              <Box sx={{ display: 'flex' }}>
                <CircularProgress />
              </Box>:
              <>
                <TableGoodsForm getterIdFromApi={getterIdFromApi}/>
                <TableList/> 
              </>
        }
          </main>
          <Pagination count={countPages} page={page} onChange={handleChange} className='pagination' />   
          <FooterComp/>
        </section>
      </div>
  )
}

export default App
