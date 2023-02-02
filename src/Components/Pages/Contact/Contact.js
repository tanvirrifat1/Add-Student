import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import { AiFillDelete, AiFillEye } from 'react-icons/ai';
import { FaPen } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


const Contact = () => {
    const [modalData, setModalData] = useState({})


    const time = new Date().toLocaleString();

    const { data: allStudents = [], refetch } = useQuery({
        queryKey: ['allStudents'],
        queryFn: async () => {
            const res = await fetch('https://add-student-server.vercel.app/allStudents')
            const data = await res.json()
            return data
        }
    })


    const handleDelete = id => {
        const confirmed = window.confirm('are you sure to delete')

        if (confirmed) {
            fetch(`https://add-student-server.vercel.app/delete/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {

                        toast.error('Delete confirmed', { autoClose: 1000 })
                        refetch()
                    }
                })
        }

    }

    return (
        <div className='border border-red-200 bg-base-100'>
            <div>
                <div className='flex justify-between'>
                    <h1 className='text-xl font-semibold m-4'>Manage Student</h1>
                    <p className='text-xl m-2 font-semibold'>{time}</p>
                </div>
            </div>
            <div className="overflow-x-auto ">
                <table className="table w-full ">

                    <thead className=' hover:bg-red-500'>
                        <tr >
                            <th className='hover:bg-red-500 text-[15px] hover:text-white '>Name</th>
                            <th className='hover:bg-red-500 text-[15px] hover:text-white '>Class</th>
                            <th className='hover:bg-red-500 text-[15px] hover:text-white '>Roll No.</th>
                            <th className='hover:bg-red-500 text-[15px] hover:text-white '>View/Edit/Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allStudents?.map(students =>
                                <tr>
                                    <th>{students.firstName} {students.middleName} {students.lastName}</th>
                                    <td className='font-semibold'>{students.SelectClass}</td>
                                    <td className='font-semibold'>{students.number}</td>
                                    <div className='flex py-2'>
                                        <label onClick={() => setModalData(students)} className='flex text-2xl ml-4' htmlFor="openModal" ><AiFillEye /></label>
                                        <Link to={`/edit/${students._id}`} className='flex text-2xl ml-4'  > <FaPen /></Link>
                                        <label htmlFor="deleteModal" onClick={() => handleDelete(students._id)} className='flex text-2xl '>  <AiFillDelete className='ml-5' /></label>
                                    </div>
                                </tr>
                            )
                        }
                        <div>
                            {/* Put this part before </body> tag */}
                            <input type="checkbox" id="openModal" className="modal-toggle" />
                            <div className="modal">
                                <div className="modal-box relative">
                                    <label htmlFor="openModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                    {/* <h3 className="text-lg font-bold">{ }</h3> */}
                                    <p className="py-4 text-2xl font-semibold">Name {modalData.firstName} {modalData.middleName} {modalData.lastName}</p>
                                    <p className=" font-semibold">Class {modalData.SelectClass} </p>
                                    <p className=" font-semibold">Roll No. {modalData.number} </p>
                                    <p className=" font-semibold">addressLine1. {modalData.addressLine1} </p>
                                    <p className=" font-semibold">addressLine2. {modalData.addressLine2} </p>
                                    <p className=" font-semibold">city. {modalData.city} </p>
                                    <p className=" font-semibold">Division. {modalData.Division} </p>
                                    <p className=" font-semibold">LandMark. {modalData.LandMark} </p>
                                </div>
                            </div>
                        </div>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Contact;