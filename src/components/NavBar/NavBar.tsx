/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { IoSearchSharp } from "react-icons/io5";
import { IoMdMoon } from "react-icons/io";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface navVars {
  user_name: string;
  email: string;
  image_URL: string;
}
const NavBar = () => {
  const navigate = useNavigate()
  const [navValues, setValues] = useState<navVars | undefined>({
    user_name: '',
    email: '',
    image_URL: ''
  })
  const user = localStorage.getItem('user');
  const Token_info = user ? JSON.parse(user) : ''

  let user_n: string = ''
  let user_email: string = ''
  let img_URL: string = ''

  if (Token_info != '') {
    user_n = Token_info?.user['user_name']
    user_email = Token_info?.user['email']
    img_URL = Token_info?.user['profile_image_url']
  }
  const setUserInfo = () => {
    setValues({ ...navValues, ['user_name']: user_n, ['email']: user_email, ['image_URL']: img_URL })
  }
  const goToLogin = () => {
    navigate('/auth')
  }
  useEffect(() => {
    if (Token_info) { setUserInfo() }
    else
      goToLogin()
  }, [])


  return (
    <nav className="fixed flex items-center justify-between top-0 left-40 pr-40 w-full h-14 bg-white">
      <div>
        <IoSearchSharp className="absolute top-1/3 left-2" />
        <input className="w-80 py-1 px-8 rounded-3xl bg-gray-100" type="text" placeholder="Search Product" />
      </div>
      <div className="flex items-center justify-between gap-4">
        <img className="w-10 h-10 rounded-full" src={navValues?.image_URL} alt="" />

        <div>
          <p className="text-sm font-semibold">{navValues?.user_name}</p>
          <p className="text-xs">{navValues?.email}</p>
        </div>
        <span>|</span>
        <IoMdMoon className="w-6 h-6" />

      </div>
    </nav>
  )
}

export default NavBar