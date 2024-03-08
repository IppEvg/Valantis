import md5 from "md5"
import { getPasswordWithTimestamp } from "./getterTimeStamp"

export const handlerGetter = async function(action,params,func){
    try {
      let response = await fetch('http://api.valantis.store:40000/',{
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
        }
    } catch (error) {
      console.log(error);
    }
}