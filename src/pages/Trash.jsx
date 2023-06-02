import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addPath, emptyToCart } from '../services/search';
import { Link } from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";


const Trash = () => {

    const dispatch = useDispatch();

    const binItems = useSelector((state) => state.search.cartItems);

    const notify = () => toast.error("Trash is Emptied");

    useEffect(() => {
        dispatch(addPath("contactList"))
    }, [dispatch])


  return (

    <>
    
        <div className=' flex items-center justify-center mt-20'>

        {binItems?.length > 0 ? (
                        <div>

                        <button onClick={() => dispatch(emptyToCart(),notify())} className=' bg-red-600 text-slate-100 rounded-md px-3 py-2 my-10'>
                            Trash All
                        </button>
            
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Email
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Phone
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Address
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {binItems?.map((item,index) => {
                                        return (
                                            <tr key={item?.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                <td className="px-6 py-4">
                                                    {item?.name}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {item?.email}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {item?.phone}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {item?.address}
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a>
                                                </td>
                                            </tr>
                                        )
                                    })}
            
                                </tbody>
                            </table>
                        </div>
            
                        </div>
        ): (
            <div className=' '>
                <Link to={'/'}>
                <button className=' bg-blue-600 text-slate-100 px-3 py-2 rounded-md'>Go Back</button>
                </Link>

                <p className=' outline-yellow-400 outline text-slate-600 px-3 py-2 rounded-md mt-10'>Trash is Empty</p>
            </div>
        )}

        </div>
    
    </>
  )
}

export default Trash