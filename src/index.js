import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { books } from "./books";
import Book from "./Book";
//const title = ;
//const author = "Joseph Murphy";
//const img = "";

function BookList() {
  return (
    <section className="bookList">
      <EventsExample/>
      {books.map((book) => {
        return <Book {...book} key={book.id}/>;
      })}
      
    </section>
  );
}


const EventsExample = () => {
  const handleFormInput = (e) => {
    console.log("handle form input");
    console.log(e.target.name);
    
  };
  const handleButtonClick = () => {
    alert("button is clicked");
  };
  const handleFormSubmission = (e) => {
    console.log("Form Submitted");
    e.preventDefault();
  }
  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>Typical form</h2>
        <input
          type="text"
          name="example"
          onClick={handleFormInput}
          style={{ margin: "1rem 0" }}
        />
        <button onClick={handleButtonClick} type="button">Click me</button>
      </form>
      <button onClick={handleButtonClick} type="submit">Submit</button>
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById(`root`));
root.render(<BookList />);
