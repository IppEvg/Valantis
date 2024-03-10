import md5 from "md5"
import { getPasswordWithTimestamp } from "./getterTimeStamp"

export const handlerGetter = async function(action,params,func,reloadItem =0){
    try {
      let response = await fetch('https://api.valantis.store:41000/',{
    method:'POST',
    headers:{
      'X-Auth':md5(getPasswordWithTimestamp()),
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'action':action,
      'params': params
      })
  })
        if (response.ok) {
          let data= await response.json()
          func(data)
        }else{
          console.log('Ошибка при получении данных',response)
          reloadItem++
          if (reloadItem<2){
            setTimeout(() => handlerGetter(action, params, func, reloadItem), 1000)
          }
        }
    } catch (error) {
      console.log(error)
    }
}