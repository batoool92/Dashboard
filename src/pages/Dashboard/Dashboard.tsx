import { Outlet } from "react-router-dom"
import SidBar from "../../components/SidBar/SidBar"
import NavBar from "../../components/NavBar/NavBar"
import { BiBorderOuter } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";




const Dashboard = () => {



  const links = [
    {
      to: '/ReadProducts',
      title: 'products',
     icon: <BiBorderOuter />
    },
    {
      to: '/Favourite',
      title: 'favourites',
      icon: <FaRegHeart />
    },
    {
      to: '/OrderLists',
      title: 'order lists',
      icon: <FaListCheck />
    },
  ]

  return (
    <div className="flex">
      <SidBar Links={links} />
      <div className="pl-44 h-screen w-screen bg-slate-100">
        <NavBar />
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard