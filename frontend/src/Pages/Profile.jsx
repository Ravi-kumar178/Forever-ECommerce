import React, { useContext, useEffect, useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import Title from '../Components/Common/Title';
import axios from 'axios';
import { ShopContext } from '../Context/ShopContext';
import { toast } from 'react-toastify';


const Profile = () => {
    const { backendUrl, token, navigate } = useContext(ShopContext);
    const [profileData, setProfileData] = useState(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        currentPassword: '',
        newPassword: '',
    });

    const getUserDetails = async () => {
        try {
            if (!token) {
                navigate('/login');
                return; // Added return to prevent further execution
            }

            const response = await axios.get(`${backendUrl}/api/user/profile`, { headers: { token } });
            console.log(response.data);
            if (response.data.success) {
                setProfileData(response.data.user);
                // Set form data based on profile data
                setFormData({
                    name: response.data.user.name,
                    email: response.data.user.email,
                    currentPassword: '',
                    newPassword: '',
                });
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    useEffect(() => {
        getUserDetails();
    }, [token]);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Implement your update logic here
        try {
            const response = await axios.put(`${backendUrl}/api/user/profile/update`, formData, { headers: { token } });
            if (response.data.success) {
                toast.success("Profile updated successfully!");
                // You may also want to refetch user details here
                getUserDetails();
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    return (
        <div className='text-gray-300 px-8 pt-6 '>

            <div className='w-full'>
                <div className='flex items-center gap-1'>
                    <IoIosArrowBack />
                    <p>Back</p>
                </div>
            
                <div className='sm:text-2xl text-base my-8'>
                    <Title text1={"MY"} text2={"PROFILE"} />
                </div>

                    {
                        profileData && (
                            <div className='flex flex-col gap-y-8 w-full'>
                                <img src={profileData.profileImage} alt={profileData.name} loading='lazy' className='w-24 h-24' />
                                <form onSubmit={handleSubmit} className='flex flex-col gap-y-4 w-3/4 sm:w-1/2'>
                                    <div className='flex flex-col gap-1'>
                                        <p className='text-gray-300'>Name: </p>
                                        <input 
                                        type="text" 
                                        name="name" 
                                        value={formData.name} 
                                        onChange={handleChange} 
                                        placeholder="Name" 
                                        className=" bg-gray-800 text-xl border border-gray-900 text-gray-300 focus:outline-none focus:outline-blue-500 rounded py-1.5 px-3.5 w-full "
                                    />
                                    </div>
                                    <div className='flex flex-col gap-1'>
                                        <p className='text-gray-300'>Email: </p>
                                        <input 
                                        type="email" 
                                        name="email" 
                                        value={formData.email} 
                                        onChange={handleChange} 
                                        placeholder="Email" 
                                        className=" bg-gray-800 text-xl border border-gray-900 text-gray-300 focus:outline-none focus:outline-blue-500 rounded py-1.5 px-3.5 w-full "
                                    />
                                    </div>
                                    <div className='flex flex-col gap-1'>
                                        <p className='text-gray-300'>Current Password: </p>
                                        <input 
                                        type="password" 
                                        name="currentPassword" 
                                        value={formData.currentPassword} 
                                        onChange={handleChange} 
                                        placeholder="Current Password" 
                                        className=" bg-gray-800 text-xl border border-gray-900 text-gray-300 focus:outline-none focus:outline-blue-500 rounded py-1.5 px-3.5 w-full "
                                    />
                                    </div>
                                    <div className='flex flex-col gap-1'>
                                        <p className='text-gray-300'>New Password: </p>

                                        <input 
                                        type="password" 
                                        name="newPassword" 
                                        value={formData.newPassword} 
                                        onChange={handleChange} 
                                        placeholder="New Password" 
                                        className=" bg-gray-800 text-xl border border-gray-900 text-gray-300 focus:outline-none focus:outline-blue-500 rounded py-1.5 px-3.5 w-full "
                                    />
                                    </div>

                                    <button type="submit" className=" bg-gray-600 hover:bg-gray-300 hover:text-gray-800 text-white transition-all duration-500 px-4  py-3 my-4 rounded-md w-fit">Update Profile</button>
                                </form>
                            </div>
                        )
                    }
                      
                
               
            </div>

          
           
        </div>
    );
}

export default Profile;
