import { Star } from "lucide-react";
import { useLoaderData } from "react-router";
import AllBooks from "./AllBooks";

const Books = () => {
  const books = useLoaderData();
  console.log(books);
  return (
    <div>
      <h1 className="text-center text-6xl mb-8 playfair">Books</h1>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-10 mb-25">
        {books.map((book) => (
          <AllBooks key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
