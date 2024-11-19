import { NavLink, useNavigate } from "react-router-dom"
import { RiLogoutCircleLine } from "react-icons/ri";
import './SidBar.css'
import axios from "axios";



interface link {
    to: string;
    title: string;
    icon: React.ReactNode;

}
interface SideBarProps {
    Links: link[]
}
const SidBar = ({ Links }: SideBarProps) => {
    const navigate = useNavigate()
    const logout = () => {
        const Token = localStorage?.getItem('user');
        if(Token) {
            axios.post('https://vica.website/api/logout', null, {
                headers: {
                    Authorization: `Bearer ${JSON.parse(Token).token}` 
                }
            }).then(() => {localStorage.removeItem('user'); navigate('/auth')})
            .catch(err => console.log(err))
        }
                
    }

    return (
        <div className="p-6 pr-10 flex flex-col justify-between absolute top-0 left-0 w-40 bg-white h-screen">
            {/* logo */}
            <div>
                <h1 className="text-green-400 font-bold text-2xl mb-8">Dash<span className="text-black">Stack</span></h1>
                <div className="flex flex-col gap-4">
                    {Links.map((item, index) => {
                        return (
                            <div className="flex items-center gap-2">
                                {item.icon}
                                <NavLink
                                    key={index}
                                    to={item.to}
                                    className={({ isActive }) =>
                                        isActive ? "active" : "" } >
                                    {item.title}
                                </NavLink>
                            </div>
                        )
                    })}
                </div>
            </div>
            <button onClick={logout} className="w-full py-1 flex items-center justify-center gap-1 bg-green-500 rounded text-white font-semibold">
                <span><RiLogoutCircleLine /></span>
                Log out</button>
        </div>
    )
}

export default SidBar