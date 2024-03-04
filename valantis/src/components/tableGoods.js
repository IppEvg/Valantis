import "./tableGoods-style.css"
import gif from "../assets/icons8-поиск.svg"
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
export function TableGoods(){
    return(
      <>
    <h1 className="titleList"> Список продуктов</h1>
    <form  className="filterForm" >
      <div className="filterForm_block" >
        <div>
        <TextField id="standard-basic" label="Поиск" variant="standard" className="inputSearch"/>
        </div>
        <div>
            <IconButton>
                <img src={gif} className="filterForm_icon"  alt="find"/>
            </IconButton>
        </div>
      </div>
    </form>
</>  
    )
    
}