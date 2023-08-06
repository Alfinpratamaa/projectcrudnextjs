"use client"

import {useState,SyntheticEvent} from 'react'
import { json } from 'stream/consumers'
import { useRouter } from 'next/navigation'

export default function AddProduct() {
    const [title,setTitle] = useState("")
    const [price,setPrice] = useState("")
    const [modal,setModal] = useState(false)
    const [isLoading,setIsLoading] = useState(false)

    const router = useRouter()

    const handleChange = () => {
        setModal(!modal)
    }
    async function handleSubmit(e:SyntheticEvent) {
        e.preventDefault()
        setIsLoading(true)
        await fetch('http://localhost:5000/Products',{
            method: 'POST',
            headers: {
                "Content-Type" : 'application/json'
            },
            body: JSON.stringify({
                title: title,
                price:price
            })
        })
        setIsLoading(false)
        setTitle("")
        setPrice("")
        router.refresh()
        setModal(false)
    }
  return (
    <div>
        <button className="btn btn-primary" onClick={handleChange}>Add New</button>
        <input type="checkbox" checked={modal} onChange={handleChange} className='modal-toggle'/>
        <div className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">add new product</h3>
                <form onSubmit={handleSubmit} >
                    <div className="form-control">
                        <label  className="label font-bold">title</label>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="input w-full input-bordered" placeholder='product name' />
                    </div>
                    <div className="form-control">
                        <label  className="label font-bold">price</label>
                        <input type='number' value={price} onChange={(e) => setPrice(e.target.value )} className="input w-full input-bordered" placeholder='product price'/>
                    </div>
                    <div className="modal-action">
                        <button type='button' className="btn btn-error" onClick={handleChange}>Close</button>
                        {!isLoading ? (
                            
                            <button type='submit' className="btn btn-success">save</button>
                        ):(
                            
                            <button type='button' className="btn loading">saving..</button>
                        )}

                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
