/* eslint-disable react-hooks/exhaustive-deps */
import { FaPlusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import axios from "axios";
import { useEffect, useState } from "react";

interface Card {
  created_at: string;
  id: number;
  image_url: string;
  name: string;
  price: number;
  updated_at: string;
}
interface ArrayCards {
  Cards: Card[]
}
const ReadProducts = () => {
  const [ArrayItems, setArrayitems] = useState<ArrayCards>()
  const navigate = useNavigate()
  const Token = localStorage?.getItem('user')

  const set = (data: ArrayCards) => {
    setArrayitems(data)
  }


  useEffect(() => {
    if (Token) {
      axios.get('https://vica.website/api/items', {
        headers: {
          Authorization: `Bearer ${JSON.parse(Token).token}`
        }
      }).then((res) => set(res.data))

    }
    else {
      console.log("first")
    }
  }, [])



  const goToCreat = () => {
    navigate('/CreateProduct')
  }
  return (
    <div>
      <div className="pr-6 flex justify-between items-center">
        <h1 className="font-semibold text-2xl">All Products</h1>
        <button onClick={() => goToCreat()} className="flex gap-2 items-center px-4 py-1 rounded text-white font-semibold bg-green-500"><span><FaPlusCircle className="color-white text-lg font-bold" /></span>Add Product</button>
      </div>
      <div className="pb-2 flex justify-around flex-wrap ">
        {ArrayItems ? Object.entries(ArrayItems).map((item, index) => {
          console.log(item)
          return (
            <ProductCard key={index} ProductImg={item[1].image_url} ProductName={item[1].name} ProductPrice={item[1].price} />
          )

        })

          : <h1>There are no products</h1>
        }
      </div>
    </div>
  )
}

export default ReadProducts