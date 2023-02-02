import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ContactEdit = () => {

    const allInformation = useLoaderData()

    const navigate = useNavigate()

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const handleEdit = (data) => {
        const firstName = data.firstName;
        const middleName = data.middleName;
        const lastName = data.lastName;
        const SelectClass = data.SelectClass;
        const Division = data.Division;
        const number = data.number;
        const addressLine1 = data.addressLine1;
        const addressLine2 = data.addressLine2;
        const LandMark = data.LandMark;
        const city = data.city;
        const pin = data.pin;

        const allStudent = {
            firstName,
            middleName,
            lastName,
            number,
            addressLine1,
            addressLine2,
            LandMark,
            city,
            pin,
            SelectClass,
            Division
        }

        fetch(`https://add-student-server.vercel.app/allStudents`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allStudent)
        })
            .then(res => res.json())
            .then(data => {
                navigate('/message/contact')
                if (data.modifiedCount > 0) {
                    toast.success('Edit Confirmed', { autoClose: 500 })
                }
                else {
                    toast.info('No Change ', { autoClose: 500 })
                }
            })
    }

    return (
        <div>
            <section className="p-6 bg-base-100">
                <form onSubmit={handleSubmit(handleEdit)} className="justify-center ">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm ">

                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-2">
                                <label for="firstName" className="text-sm text-black">FirstName</label>
                                {/* <input name="firstName" type="text" placeholder="FirstName" className="input bg-white text-black input-ghost w-full  input-bordered input-primary " /> */}

                                <input type="text" placeholder="FirstName" defaultValue={allInformation.firstName} className='input bg-white text-black input-ghost w-full  input-bordered input-primary ' {...register("firstName", {
                                    required: "Product Name is required"
                                })} />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label for="middleName" className="text-sm text-black">MiddleName</label>
                                {/* <input name="middleName" type="text" placeholder="MiddleName" className="input bg-white text-black input-ghost w-full  input-bordered input-primary " /> */}

                                <input type="text" placeholder="MiddleName" defaultValue={allInformation.middleName} className='input bg-white text-black input-ghost w-full  input-bordered input-primary ' {...register("middleName", {
                                    required: "Product Name is required"
                                })} />

                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label for="lastName" className="text-sm text-black">LastName</label>
                                {/* <input name="lastName" type="text" placeholder="LastName" className="input bg-white text-black input-ghost w-full  input-bordered input-primary " /> */}

                                <input type="text" placeholder="lastName" defaultValue={allInformation.lastName} className='input bg-white text-black input-ghost w-full  input-bordered input-primary ' {...register("lastName", {
                                    required: "Product Name is required"
                                })} />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label for="SelectClass" className="text-sm text-black">SelectClass</label>
                                <select defaultValue={allInformation.SelectClass}
                                    className='input bg-white text-black input-ghost w-full  input-bordered input-primary ' {...register("SelectClass", {
                                        required: "Brand is required"
                                    })}>
                                    <option value={''} disabled selected>SelectClass</option>
                                    <option value='6'>class6</option>
                                    <option value='7'>class7</option>
                                    <option value='8'>class8</option>
                                    <option value='9'>class9</option>
                                    <option value='10'>class10</option>
                                </select>
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label for="Division" className="text-sm text-black">Select Division</label>
                                <select defaultValue={allInformation.Division}
                                    className='input bg-white text-black input-ghost w-full  input-bordered input-primary ' {...register("Division", {
                                        required: "Brand is required"
                                    })}>
                                    <option value={''} disabled selected>SelectClass</option>
                                    <option value='a'>a</option>
                                    <option value='b'>b</option>
                                    <option value='c'>c</option>
                                </select>
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label for="number" className="text-sm text-black">Enter Roll Number in Digits</label>
                                {/* <input name="number" type="number" placeholder="Enter Roll Number" className="input bg-white text-black input-ghost w-full  input-bordered input-primary " /> */}

                                <input type="number" defaultValue={allInformation.number} placeholder="number" className='input bg-white text-black input-ghost w-full  input-bordered input-primary ' {...register("number", {
                                    required: "Product Name is required"
                                })} />
                            </div>
                            <div className="col-span-full lg:grid-cols-2">
                                <label for="addressLine1" className="text-sm text-black">Address Line 1</label>
                                {/* <input name="addressLine1" type="text" placeholder="Address Line 1" className="input bg-white text-black input-ghost w-full  input-bordered input-primary " /> */}

                                <input type="text" defaultValue={allInformation.addressLine1} placeholder="addressLine1" className='input bg-white text-black input-ghost w-full  input-bordered input-primary ' {...register("addressLine1", {
                                    required: "Product Name is required"
                                })} />
                            </div>
                            <div className="col-span-full lg:grid-cols-2">
                                <label for="addressLine2" className="text-sm text-black">Address Line 2</label>
                                {/* <input name="addressLine2" type="text" placeholder="Address Line 2" className="input bg-white text-black input-ghost w-full  input-bordered input-primary " /> */}

                                <input type="text" defaultValue={allInformation.addressLine2} placeholder="addressLine2" className='input bg-white text-black input-ghost w-full  input-bordered input-primary ' {...register("addressLine2", {
                                    required: "Product Name is required"
                                })} />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label for="LandMark" className="text-sm text-black">LandMark</label>
                                {/* <input name="LandMark" type="text" placeholder="LandMark" className="input bg-white text-black input-ghost w-full  input-bordered input-primary " /> */}

                                <input type="text" defaultValue={allInformation.LandMark} placeholder="LandMark" className='input bg-white text-black input-ghost w-full  input-bordered input-primary ' {...register("LandMark", {
                                    required: "Product Name is required"
                                })} />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label for="city" className="text-sm text-black">City</label>
                                {/* <input name="city" type="text" placeholder="City" className="input bg-white text-black input-ghost w-full  input-bordered input-primary " /> */}

                                <input type="text" defaultValue={allInformation.city} placeholder="city" className='input bg-white text-black input-ghost w-full  input-bordered input-primary ' {...register("city", {
                                    required: "Product Name is required"
                                })} />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label for="pin" className="text-sm text-black">Pin code</label>
                                {/* <input name="pin" type="number" placeholder="Pin code" className="input bg-white text-black input-ghost w-full  input-bordered input-primary " /> */}

                                <input type="number" defaultValue={allInformation.pin} placeholder="city" className='input bg-white text-black input-ghost w-full  input-bordered input-primary ' {...register("pin", {
                                    required: "Product Name is required"
                                })} />
                            </div>
                        </div>
                    </fieldset>
                    <div className='ml-6'>
                        <button type='submit' className='btn bg-red-500 w-80'>Manage Student</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default ContactEdit;