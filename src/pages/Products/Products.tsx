import { Outlet } from "react-router-dom"



const Products = () => {

  return (
    <div className="pl-8 pt-20">    
        <Outlet />  
    </div>
  )
}

export default Products