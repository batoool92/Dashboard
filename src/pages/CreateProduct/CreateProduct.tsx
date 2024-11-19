import CRUPForm from "../../components/CRUPForm/CRUPForm"

const CreateProduct = () => {
  const inputs = [
    {
      label: 'Product Name',
      type: 'text',
      value: '',
      placeholder: 'Enter Product Name',
      name: 'name'
    },
    {
      label: 'Product Price',
      type: 'number',
      value: '',
      placeholder: 'Enter Product Price',
      name: 'price'
    },

  ]
  return (
    <div>
      <h1 className="font-semibold text-2xl mb-8">Add Product</h1>
      <CRUPForm inputs={inputs} btn="Add" />
    </div>

  )
}

export default CreateProduct