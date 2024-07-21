import React, { useEffect, useState } from 'react'
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import axiosInstance from '../api/api';
import userImage from "../assets/user.png"


const UserReview = ({productId, productTitle}) => {
    const [rating, setRating] = useState(1)
    const [review, setReview] = useState("");
    const [reviews, setReviews] = useState([]);
    const [loadingReviews, setLoadingReviews] = useState(true);
  
    const user = JSON.parse(localStorage.getItem("user"));
    const handleRating = (index) => {
        setRating(index+1)
    }  

    const handleSubmit = async (e) => {
        e.preventDefault();
try {
    const res = await axiosInstance.post(`/product/${productId}/review`, {
        review: review,
        displayName: user.displayName,
        rating: rating,
    });
    if (res.status === 200) {
        alert("Review submitted successfully!");
        setRating(0);
        setReview("")
    }
} catch (error) {
    console.error('Error submitting review', error);
}
    }

    useEffect(()=>{
        const fetchReviews = async () => {
            try {
              const res = await axiosInstance.get(`/product/${productId}/review`);
              setReviews(res.data)
              setLoadingReviews(false);
            } catch (error) {
              console.log("Failed to fetch reviews", error);
              setLoadingReviews(false);
            }
          }
          fetchReviews()
    },[])

  return (
    <div className='bg-white w-[75%] m-auto mb-5 mt-5 p-5'>
        {reviews.length > 0 ? <h3 className='mb-5 font-medium'>{reviews.length} Reviews for {productTitle} </h3>: <h3 className='font-medium mb-5'>No Reviews Yet</h3>}
   
    <div className='flex flex-col gap-5'>
        {reviews.map((review)=>(
            <div className='flex gap-4 bg-gray-50 p-3'>
            <div>
                <img src={userImage} alt="" srcset="" width={"20px"} height={"20px"} />
            </div>
            <div>
                <h4 className='flex'> 
                    {[...Array(5)].map((_, index)=> (
                        index < review.rating ? <FaStar color="#FFD700" /> : <CiStar/>
                    ))}
                     </h4>
                <h5>{review.author}</h5>
                <p>{review.content}</p>
            </div>
        </div>
        ))}
   

    </div>
    <div className=''>
        <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
        <h4>Hey <span  className='font-medium'>{user?.displayName}</span> Rate Your Experience👋</h4>
        <p>We love to hear from you! How's your experience with the <span className='font-medium'>{productTitle}</span>?</p>
        <p className='flex'>
        {[...Array(5)].map((_,index)=>(
            <span key={index} onClick={ ()=> (handleRating(index))} className='text-3xl cursor-pointer'>{index < rating ? <FaStar color="#FFD700" /> : <CiStar />}</span> 
        ))}
        </p>
        <textarea className='resize-none border w-full h-28' name="" id="" onChange={(e)=> setReview(e.target.value)}></textarea>
        <button type='submit' className='bg-blue-700 text-white p-2 rounded-sm'>Submit</button>
        </form>
    </div>
    </div>
  )
}

export default UserReview