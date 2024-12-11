mport React from "react";
import { useDispatch, useSelector } from "react-redux";

const Books = () => {
    const books = useSelector((state) => state.books);
    const dispatch = useDispatch();

    const addBook = () => {
        dispatch({ type: "ADD_BOOK", payload: { id: books.length + 1, title: "New Book" } });
    };

    return (
        <div>
            <h2>Books</h2>
            <button onClick={addBook}>Add Book</button>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>{book.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Books;