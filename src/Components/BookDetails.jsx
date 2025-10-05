import { Star } from "lucide-react";
import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addFromLocalStore } from "../LocalStore/LocalStore";

const BookDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const findData = data?.find(
    (singleData) => singleData?.bookId === Number(id)
  );
  console.log(findData);

  const {
    author,
    category,
    bookId,
    bookName,
    image,
    rating,
    tags,
    review,
    publisher,
    totalPages,
    yearOfPublishing,
  } = findData;

  const [tag1, tag2] = tags;

  const handleMarkToRead = (id) => {
    addFromLocalStore(id)
  }
  return (
    <div>
      <div className="border-2 border-gray-300 p-6 rounded-xl md:flex  justify-center gap-10 mb-3">
        <div className="bg-gray-300 p-20 rounded-xl md:w-1/2">
          <img className="md:h-100 mx-auto" src={image} alt="" />
        </div>

        <div className=" space-y-3 md:w-1/2">
          <div className="space-y-3">
            <h2 className="playfair text-4xl font-bold">{bookName}</h2>
            <p className="text-lg font-medium  ">By : {author}</p>
            <hr className=" border-b-1 border-dashed border-gray-300" />
            <p className="font-semibold ">{category}</p>
            <hr className=" border-b-1 border-dashed  border-gray-300" />
            <p>
              <span className="font-bold">Review</span> : {review}
            </p>

            {/* <hr className=" border-b-1 border-dashed  border-gray-300" /> */}
          </div>

          <div className="flex items-center gap-10 ">
            <p className="font-bold">Tag</p>
            <div>
              <p className="btn bg-green-100 text-green-600 border-0 mr-10">
                {tag1}
              </p>
              <p className="btn bg-green-100 text-green-600 border-0">{tag2}</p>
            </div>
          </div>

          <hr className=" border-b-2 border-dashed border-gray-300" />

          <div className=" items-center  gap-2 justify-between md:w-67 ">
            <span className="flex justify-between">
              <p className="">Number of Pages:</p>
              <p className="font-bold ">{totalPages}</p>
            </span>
            <span className="flex justify-between ">
              <p className="">Publisher:</p>
              <p className="font-bold">{publisher}</p>
            </span>
            <span className="flex justify-between">
              <p className="">Year of Publishing:</p>
              <p className="font-bold">{yearOfPublishing}</p>
            </span>
            <span className="flex justify-between">
              <p className="">Rating:</p>
              <div className="flex ">
                <p className="font-bold">{rating}</p>
                <Star color="#e0da1f" fill="#e0da1f" />
              </div>
            </span>

            <div className="mt-3">
              <button onClick={() => handleMarkToRead(id)} className="btn mr-3 font-bold">Mark To Read</button>
              <button className="btn border-0 text-white bg-[#50B1C9]">Add To Wishlist</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
