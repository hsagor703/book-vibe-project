import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getFromLocalStore } from "../LocalStore/LocalStore";
import Book from "../Components/Book";

const ListBooks = () => {
  const books = useLoaderData();
  const [bookList, setBookList] = useState([]);
  const [sort, setSort] = useState('')

  useEffect(() => {
    const getDataFromLocalStore = getFromLocalStore();
    const convertGetDataFromLocalStore = getDataFromLocalStore.map((id) =>
      Number(id)
    );
    const getMatchWithFilter = books.filter((book) =>
      convertGetDataFromLocalStore.includes(book.bookId)
    );
    setBookList(getMatchWithFilter);
  }, []);

  const handleSort = (types) => {
    setSort(types);
    if (types === "Pages") {
        const sortByPages = [...bookList].sort((a,b) =>a.totalPages - b.totalPages );
        setBookList(sortByPages);
    }
    if (types === "Rating") {
        const sortByRating = [...bookList].sort((a, b) => a.rating - b.rating);
        setBookList(sortByRating);
    }
  }
  return (
    <div className="">
      <Tabs>
        <TabList>
          <Tab>Read Book List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <div className="text-center my-10">
          <details className="dropdown">
            <summary className="btn m-1 bg-green-500 text-white ">
              Sort By : {sort ? sort :''}
            </summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
              <li onClick={() => handleSort('Pages')}>
                <a>Pages</a>
              </li>
              <li onClick={() => handleSort('Rating')}>
                <a>Rating</a>
              </li>
            </ul>
          </details>
        </div>

        <TabPanel>
          {bookList.map((singleBook) => (
            <Book key={singleBook.bookId} singleBook={singleBook} />
          ))}
        </TabPanel>
        <TabPanel>
          <h2>this is wishBook section</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListBooks;
<h2>this is list books page</h2>;
