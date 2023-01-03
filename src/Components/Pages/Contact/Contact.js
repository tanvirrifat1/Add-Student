import React from 'react';
import img from '../../../assets/phone.webp'
import img2 from '../../../assets/Email3.png'


const Contact = () => {
    return (
        <div>
            <section className="py-6 ">
                <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                    <div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <div className=''>
                                    <h4 className='text-xl'>Phone</h4>
                                    <p className='mt-2'>+91 0215641564</p>
                                    <div className="card-actions justify-end">
                                        <img className='h-32 w-32' src={img} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 shadow-xl mt-2">
                            <div className="card-body">
                                <div className=''>
                                    <h4 className='text-xl'>Email</h4>
                                    <p className='mt-2'>tom@gmail.com</p>
                                    <div className="card-actions justify-end">
                                        <img className='h-32 w-32' src={img2} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                    <form className="flex w-full flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
                        <div className='flex justify-center gap-6 '>
                            <div>
                                <input type="text " placeholder="Name" className="input input-bordered input-info w-full max-w-xs" />
                                <input type="text mt-3" placeholder="Email" className="input mt-4 input-bordered input-info w-full max-w-xs" />
                            </div>
                            <div>
                                <input type="text" placeholder="Subject" className="input input-bordered input-info w-full max-w-xs" />
                                <input type="text" placeholder="Phone" className="input input-bordered mt-4 input-info w-full max-w-xs" />
                            </div>
                        </div>

                        <label>
                            <span className="mb-1">Message</span>
                            <textarea rows="3" className="block w-full rounded-md focus:ring focus:ring-opacity-75 "></textarea>
                        </label>
                        <button className="btn btn-outline btn-info">Submit</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;