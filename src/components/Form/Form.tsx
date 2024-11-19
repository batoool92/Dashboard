/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react'
import './Form.css'
import axios from 'axios';
import {useNavigate } from 'react-router-dom';

interface ArrayItem {
  label: string;
  type: string;
  placeholder: string;
  name: string;
}

interface FormParam {
  title: string,
  desc: string,
  inputs: ArrayItem[],
  btn: string,
  end: string,
  URL: string,
}

interface FormDataObject {
  [key: string]: string | number | File;
}

const Form = ({ title, desc, inputs, btn, end, URL }: FormParam) => {
  const navigate = useNavigate()

  const [data, setData] = useState<FormDataObject>()
  const [selectedFile, setSelectedFile] = useState<File | null>();

  const handleData = (name: string, event: React.ChangeEvent<HTMLInputElement>) => {

    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files?.[0])
    }
    else {
      setData({ ...data, [name]: event.target.value })
    }
    if (selectedFile) {   
      setData({ ...data, [name]: selectedFile })
      console.log(data)
    }
 
  }

  const handleSubmit = () => {
    axios.post(URL, data, {
      headers: {
        "Content-Type": 'multipart/form-data'
      }
    }).then(res => {
            localStorage.setItem('user', JSON.stringify(res.data))

      navigate('/ReadProducts')
    }).catch(error => console.log(error))
  }
  // 
  // 
  return (
    <div className="bg-white max-w-2xl rounded-3xl px-8 py-3">
      <h1 className="text-center font-bold mb-4">{title}</h1>
      <p className="text-center mb-5">{desc}</p>
      <div className={inputs?.length > 3 ? "flex flex-wrap" : ''}>
        {inputs?.map((item, index) => {
          return (
            <div className={(item?.type == 'email' ? "flex flex-col mb-3 mr-1 w-full" : "flex flex-col mb-2 mr-1")} key={index}>
              <label className="text-start mb-1" htmlFor="">{item?.label}</label>
              {(item?.type == "file") ? <label htmlFor="inputId"><img className="w-1/4" src='/assets/profile-pic.jpg' alt="" /></label> : null}
              <input id={(item?.type == "file") ? "inputId" : ''}
                className={(item?.type == "file" ? "hidden" : "bg-slate-200 p-2 rounded-xl")}
                type={item?.type}
                placeholder={item?.placeholder}
                onChange={(event) => handleData(item?.name, event)}
              />
            </div>
          )
        })}
      </div>
      <div className="w-full text-center">
        <button onClick={handleSubmit} className="w-1/2 items-center font-semibold text-center bg-emerald-700 rounded-2xl mb-5 py-1 text-white" >{btn}</button>
        <p>{end}</p>
      </div>
    </div>
  )
}

export default Form