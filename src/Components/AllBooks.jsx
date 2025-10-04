import { Star } from "lucide-react";
import React from "react";

const AllBooks = ({ book }) => {
  const {author, bookId, bookName, image, rating, tags } = book;

const [tag1, tag2] = tags

  return (
    <div className="">
        <div className="border-2 border-gray-300 p-6 rounded-xl ">
          <div className="bg-gray-300 p-5 rounded-xl">
            <img className="h-50 mx-auto" src={image} alt="" />
          </div>

          <div className="mt-5">
            <div className="mb-3">
              <p className="btn bg-green-100 text-green-600 border-0 mr-10">
                {tag1}
              </p>
              <p className="btn bg-green-100 text-green-600 border-0">
                {tag2}
              </p>
            </div>

            <h2 className="playfair text-2xl font-medium">
              {bookName}
            </h2>
            <p className="text-lg font-medium my-2 ">{author}</p>

            <hr className="mt-6 border-b-2 border-dashed border-gray-300" />

            <div className="flex items-center mt-5 gap-2 justify-between">
              <p className="font-semibold">Fiction</p>
              <div className="flex gap-2">
                <p className="font-semibold">{rating}</p>
                <Star color="#e0da1f" fill="#e0da1f" />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default AllBooks;
