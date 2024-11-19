/* eslint-disable @typescript-eslint/no-unused-vars */
// create and update form
import axios from "axios";
import { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";


interface CRUPFormItem {
    label: string,
    type: string,
    value: string | number
    placeholder: string;
    name: string
}
interface CRUPFormProps {
    inputs: Array<CRUPFormItem>,
    btn: string,
}


interface CRUPdata {
    [key: string]: string | number | File
}

const CRUPForm = ({ inputs, btn }: CRUPFormProps) => {
    const [CRUPinfo, setCRUPinfo] = useState<CRUPdata>()

    const handleChange = (name: string, event: React.ChangeEvent<HTMLInputElement>) => {
        setCRUPinfo({ ...CRUPinfo, [name]: event.target.value })
        console.log(CRUPinfo)
    }

    const handleImg = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setCRUPinfo({ ...CRUPinfo, ['image']: event.target.files[0] })         
            console.log(event)
        }

    }

    const add = () => {
        console.log('test')
        axios.post('https://vica.website/api/items', CRUPinfo, {
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem('user') || '').token}`,
            }
        }).then((res)=> console.log(res)).catch(err => console.log(err))
    }
    const update = () => {

    }

    return (
        <div className="flex justify-between items-center pr-4 w-full">
            <div className="w-1/2">
                {inputs.map((item, index) => {
                    return (
                        <div key={index} className="flex flex-col pr-4">
                            <label className="my-4 w-full" htmlFor="">{item.label}</label>
                            <input onChange={(event) => handleChange(item.name, event)} className="w-full h-10 rounded bg-slate-100 border p-2" type={item.type} defaultValue={item?.value} placeholder={item.placeholder} />
                        </div>
                    )
                })}
                <input onClick={btn == 'Add' ? () => add() : () => update()} className='mt-8 py-1 px-12 rounded-md text-center bg-slate-300 font-semibold' type="submit" value={btn} />
            </div>
            <div className="flex flex-col justify-center items-center w-1/2 h-56 border-2 border-emerald-400 border-dotted rounded-lg">
                <label className="flex flex-col justify-center items-center" htmlFor="btn">
                    <FiUploadCloud className="text-green-400 text-6xl" />
                    <span className="text-slate-800 text-lg font-semibold">Upload Product Image</span>
                </label>
                <input onChange={(event) => handleImg(event)} id="btn" className="hidden" type="file" />
            </div>

        </div>
    )
}

export default CRUPForm