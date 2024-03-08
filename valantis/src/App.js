import { useDispatch, useSelector } from 'react-redux'
import { useCallback, useEffect} from 'react'

import { FooterComp } from './components/footerComp'
import { TableGoodsForm } from './components/tableGoodsForm'
import {TableList} from './components/tableList'
import { handlerGetter } from './store/profile/handlerGetter'
import {Pagination} from '@mui/material'
import './App.css'


function App() {
  const dispatch = useDispatch()
  let page = useSelector((store)=>store.page)
  let listId=useSelector(store=>store.listId)
  let countPages =Math.ceil(listId.length / 50)

  const getterIdFromApi=useCallback((data)=>{
    let newList  = [...new Set(data.result)]//избавляемся от дублей сразу, если они есть 
    dispatch({type:'LOAD_IDS',payload:newList})
  },[])

const getListBrands=useCallback((data)=>{
  dispatch({type:'LOAD_BRANDS',payload:[...new Set(data.result)]})
  },[])

  const getGoodsFromApi=useCallback((data)=>{
    let normalItems =data.result.filter((item, index, self) => index === self.findIndex((e) => e.id === item.id))
    dispatch({type:'LOAD_GOODS_OF_PAGE',payload:normalItems})
    },[])
   
const handleChange = (event, value) => {
      dispatch({type:'CHANGE_PAGE',payload:value})
    }

  useEffect(()=>{
     handlerGetter("get_ids", {}, getterIdFromApi)
     handlerGetter("get_fields", {"field": "brand"}, getListBrands)
  }, [])
  
  return (
      <div className="container">
        <section className='wrapper'>
          <main>
              <TableGoodsForm getGoodsFromApi={getGoodsFromApi} getterIdFromApi={getterIdFromApi}/>
              <TableList getGoodsFromApi={getGoodsFromApi}/> 
          </main>
          <Pagination count={countPages} page={page} onChange={handleChange} className='pagination' />   
          <FooterComp/>
        </section>
      </div>
  );
}

export default App;
