import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Button } from '../ui/button'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { ArrowLeft, Loader2 } from 'lucide-react'
import { setLoading } from '@/redux/authSlice'
import axios from 'axios'
import { BUSINESS_API_END_POINT } from '@/utils/constant'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'sonner'
import { useSelector } from 'react-redux'
import setup from '../../assets/setup.gif';
import useGetBussinessById from '@/hooks/useGetBussinessById'
import Footer from '../shared/Footer'

const BusinessSetup = () => {
    const params = useParams();
    useGetBussinessById(params.id);
    const [input, setInput] = useState({
        name: "",
        description: "",
        website: "",
        location: "",
        file: null
    });
    
    const {singleBusiness} = useSelector(store=>store.business);
    const [loading ,setLoading] = useState(false);
    const navigate = useNavigate();


    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }
    const changeFileHandler = (e) => {
        const file = e.target.files?.[0];
        setInput({ ...input, file });
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(input);
        const formData = new FormData();
        formData.append("name", input.name);
        formData.append("description", input.description);
        formData.append("website", input.website);
        formData.append("location", input.location);
        if (input.file) {
            formData.append("file", input.file);
        }
        try {
            setLoading(true);
            const res = await axios.put(`${BUSINESS_API_END_POINT}/update/${params.id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                withCredentials: true
            });
            if (res.data.success) {
                toast.success(res.data.message);
                navigate("/admin/businesses");
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        setInput({
            name: singleBusiness.name || "",
            description: singleBusiness.description || "",
            website: singleBusiness.website || "",
            location: singleBusiness.location || "",
            file: singleBusiness.file || null
        })
    },[singleBusiness]);

  return (
    <div>
        <Navbar/>
        <div className='max-w-xl mx-auto my-10 text-[#ffffff]'>
                <form onSubmit={submitHandler}>
                    <div className='flex items-center gap-20 p-1'>
                        <Button onClick={() => navigate("/admin/businesses")} variant="outline" className="flex items-center gap-2 text-gray-500 font-semibold mr-10">
                            <ArrowLeft />
                            <span>Back</span>
                        </Button>
                        <h1 className='font-bold text-xl text-[#ffffff]'>Business Setup 💸</h1>
                    </div><br /><br />
                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <Label>Business Name</Label>
                            <Input className='text-[#000000]'
                                type="text"
                                name="name"
                                value={input.name}
                                onChange={changeEventHandler}
                            />
                        </div>
                        <div>
                            <Label>Description</Label>
                            <Input className='text-[#000000]'
                                type="text"
                                name="description"
                                value={input.description}
                                onChange={changeEventHandler}
                            />
                        </div>
                        <div>
                            <Label>Website</Label>
                            <Input className='text-[#000000]'
                                type="text"
                                name="website"
                                value={input.website}
                                onChange={changeEventHandler}
                            />
                        </div>
                        <div>
                            <Label>Location</Label>
                            <Input className='text-[#000000]'
                                type="text"
                                name="location"
                                value={input.location}
                                onChange={changeEventHandler}
                            />
                        </div>
                        <div>
                            <Label>Logo</Label>
                            <Input className='text-[#000000]'
                                type="file"
                                accept="image/*"
                                onChange={changeFileHandler}
                            />
                        </div>
                    </div>
                    {
                        loading ? <Button className="w-full my-4 bg-gray-700"> <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait </Button> : <Button type="submit" className="w-full my-4 bg-gray-700">Update</Button>
                    }
                </form>
            </div>
            <div className="flex justify-center my-4">  
        <img src={setup} className='w-96' alt="Login GIF" /> 
      </div>
      <Footer/>
    </div>
  )
}

export default BusinessSetup