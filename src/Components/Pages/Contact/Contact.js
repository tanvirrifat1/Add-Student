import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { AiFillDelete, AiFillEye } from 'react-icons/ai';
import { FaPen } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import ContactModal from './ContactEdit';

const Contact = () => {
    const [modalData, setModalData] = useState({})


    console.log(modalData)

    const { data: allStudents = [], refetch } = useQuery({
        queryKey: ['allStudents'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allStudents')
            const data = await res.json()
            return data
        }
    })

    console.log(allStudents)

    const handleDelete = id => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.error('Delete', { autoClose: 1000 })
                    refetch()
                }
            })
    }

    return (
        <div className='border border-red-200 bg-base-100'>
            <div>
                <div className=''>
                    <h1 className='text-xl font-semibold m-4'>Manage Student</h1>
                </div>
            </div>
            <div className="overflow-x-auto ">
                <table className="table w-full ">

                    <thead className='bg-red-500'>
                        <tr >
                            <th>Name</th>
                            <th>Class</th>
                            <th>Roll No.</th>
                            <th>View/Edit/Delete</th>
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
                                        <label onClick={() => handleDelete(students._id)} className='flex text-2xl '>  <AiFillDelete className='ml-5' /></label>
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
                                    <h3 className="text-lg font-bold">{ }</h3>
                                    <p className="py-4 font-semibold">Name {modalData.firstName} {modalData.middleName} {modalData.lastName}</p>
                                    <p className=" font-semibold">Class {modalData.SelectClass} </p>
                                    <p className=" font-semibold">Roll No. {modalData.number} </p>
                                    <p className=" font-semibold">addressLine1. {modalData.addressLine1} </p>
                                    <p className=" font-semibold">addressLine2. {modalData.addressLine2} </p>
                                    <p className=" font-semibold">city. {modalData.city} </p>
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