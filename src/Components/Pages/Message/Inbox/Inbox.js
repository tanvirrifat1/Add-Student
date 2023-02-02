import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';



const Inbox = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const time = new Date().toLocaleString();


    const handleSubmitData = (data) => {
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
        reset()

        fetch(`https://add-student-server.vercel.app/students`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allStudent)
        })
            .then(res => res.json())
            .then(data => {

                if (data.acknowledged) {
                    toast.success('confirmed', { autoClose: 500 })
                }
            })
    }



    return (
        <div className='border border-red-200 bg-base-100'>
            <div className='flex justify-between'>
                <h1 className='text-xl font-semibold m-4'>Add Student</h1>
                <p className='text-xl m-2 font-semibold'>{time}</p>
            </div>
            <section className="p-6 bg-base-100">
                <form onSubmit={handleSubmit(handleSubmitData)} className="justify-center ">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm ">

                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-2">
                                <label for="firstName" className="text-sm text-black">FirstName</label>
                                {/* <input name="firstName" type="text" placeholder="FirstName" className="input bg-white text-black input-ghost w-full  input-bordered input-primary " /> */}

                                <input type="text" placeholder="FirstName" className='input bg-white text-black input-ghost w-full  input-bordered input-primary ' {...register("firstName", {
                                    required: "Product Name is required"
                                })} />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label for="middleName" className="text-sm text-black">MiddleName</label>
                                {/* <input name="middleName" type="text" placeholder="MiddleName" className="input bg-white text-black input-ghost w-full  input-bordered input-primary " /> */}

                                <input type="text" placeholder="MiddleName" className='input bg-white text-black input-ghost w-full  input-bordered input-primary ' {...register("middleName", {
                                    required: "Product Name is required"
                                })} />

                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label for="lastName" className="text-sm text-black">LastName</label>
                                {/* <input name="lastName" type="text" placeholder="LastName" className="input bg-white text-black input-ghost w-full  input-bordered input-primary " /> */}

                                <input type="text" placeholder="lastName" className='input bg-white text-black input-ghost w-full  input-bordered input-primary ' {...register("lastName", {
                                    required: "Product Name is required"
                                })} />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label for="SelectClass" className="text-sm text-black">SelectClass</label>
                                <select defaultValue={''}
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
                                <select defaultValue={''}
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

                                <input type="number" placeholder="number" className='input bg-white text-black input-ghost w-full  input-bordered input-primary ' {...register("number", {
                                    required: "Product Name is required"
                                })} />
                            </div>
                            <div className="col-span-full lg:grid-cols-2">
                                <label for="addressLine1" className="text-sm text-black">Address Line 1</label>
                                {/* <input name="addressLine1" type="text" placeholder="Address Line 1" className="input bg-white text-black input-ghost w-full  input-bordered input-primary " /> */}

                                <input type="text" placeholder="addressLine1" className='input bg-white text-black input-ghost w-full  input-bordered input-primary ' {...register("addressLine1", {
                                    required: "Product Name is required"
                                })} />
                            </div>
                            <div className="col-span-full lg:grid-cols-2">
                                <label for="addressLine2" className="text-sm text-black">Address Line 2</label>
                                {/* <input name="addressLine2" type="text" placeholder="Address Line 2" className="input bg-white text-black input-ghost w-full  input-bordered input-primary " /> */}

                                <input type="text" placeholder="addressLine2" className='input bg-white text-black input-ghost w-full  input-bordered input-primary ' {...register("addressLine2", {
                                    required: "Product Name is required"
                                })} />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label for="LandMark" className="text-sm text-black">LandMark</label>
                                {/* <input name="LandMark" type="text" placeholder="LandMark" className="input bg-white text-black input-ghost w-full  input-bordered input-primary " /> */}

                                <input type="text" placeholder="LandMark" className='input bg-white text-black input-ghost w-full  input-bordered input-primary ' {...register("LandMark", {
                                    required: "Product Name is required"
                                })} />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label for="city" className="text-sm text-black">City</label>
                                {/* <input name="city" type="text" placeholder="City" className="input bg-white text-black input-ghost w-full  input-bordered input-primary " /> */}

                                <input type="text" placeholder="city" className='input bg-white text-black input-ghost w-full  input-bordered input-primary ' {...register("city", {
                                    required: "Product Name is required"
                                })} />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label for="pin" className="text-sm text-black">Pin code</label>
                                {/* <input name="pin" type="number" placeholder="Pin code" className="input bg-white text-black input-ghost w-full  input-bordered input-primary " /> */}

                                <input type="number" placeholder="city" className='input bg-white text-black input-ghost w-full  input-bordered input-primary ' {...register("pin", {
                                    required: "Product Name is required"
                                })} />
                            </div>
                        </div>
                    </fieldset>
                    <div className='ml-6'>
                        <button type='submit' className='btn bg-red-500 w-80'>Add Student</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Inbox;