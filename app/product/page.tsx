import AddProduct from "./addProduct"
import DeleteProduct from "./deleteProduct"
import UpdateProduct from "./updateProduct"

type Product = {
    id : number
    title : string
    price : number
}
async function getProducts() {
    const res = await fetch("http://localhost:5000/Products",{cache:"no-cache"})
    return res.json()
}

export default async function productList() {
    const products : Product[] = await getProducts()
  return (
    <div className="flex justify-center  h-screen">
    <div className="w-full max-w-4xl">
      <div className="py-4">
        <AddProduct />
      </div>
      <table className="w-full border-collapse table-auto table">
      <thead className="bg-base-200">
  <tr>
    <th className="p-2">#</th>
    <th className="p-2">Product Name</th>
    <th className="p-2">Price</th>
    <th className="p-2 text-center">Actions</th>
  </tr>
</thead>
<tbody>
  {products.map((product, index) => (
    <tr key={product.id}>
      <td className="p-2">{index + 1}</td>
      <td className="p-2">{product.title}</td>
      <td className="p-2">Rp. {product.price}</td>
      <td className="p-2 flex justify-center">
        <div className="mr-1">
          <UpdateProduct {...product} />
        </div>
        <DeleteProduct {...product} />
      </td>
    </tr>
  ))}
</tbody>

      </table>
    </div>
  </div>
  )
}
