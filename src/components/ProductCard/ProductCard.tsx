import { RiDeleteBin6Line } from "react-icons/ri";

interface ProductCardParam {
    ProductImg: string;
    ProductName: string;
    ProductPrice: number;
}

const ProductCard = ({ ProductImg, ProductName, ProductPrice }: ProductCardParam) => {
    
    return (
        <div className="border p-4 flex flex-col items-start gap-2 max-w-fit my-8 bg-white rounded-2xl shadow-lg">
            <img className='w-40 h-40 rounded-2xl mx-auto' src={ProductImg} alt="" />
            <p className='font-semibold text-lg'>{ProductName}</p>
            <p className="text-green-400 text-sm">${ProductPrice}</p>
            <div className="flex justify-between items-center gap-12">
                <button className="py-1 px-8 rounded-2xl bg-gray-200 text-sm">Edit Product</button>
                <RiDeleteBin6Line />
            </div>

        </div>
    )
}

export default ProductCard