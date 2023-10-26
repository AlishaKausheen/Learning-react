import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//const title = ;
//const author = "Joseph Murphy";
//const img = "";
const books = [
  {
    author: "Joseph Murphy",
    title: "The power of your subconscious mind",
    img: "https://m.media-amazon.com/images/I/61k1giyuJ5L._SY425_.jpg",
    id: 1,
  },
  {
    author: "James Clear",
    title: "Atomic Habits",
    img: "https://m.media-amazon.com/images/I/91bYsX41DVL._SY425_.jpg",
    id: 2,
  },
  {
    author: "Morgan Housel",
    title: "The Psychology Of Money",
    img: "https://m.media-amazon.com/images/I/41r6F2LRf8L._SY445_SX342_.jpg",
    id: 3,
  },
  {
    author: "Napoleon Hill",
    title: "THINK AND GROW RICH ",
    img: "https://m.media-amazon.com/images/I/41DmBeq8oIL._SY445_SX342_.jpg",
    id: 4,
  },
];
function BookList() {
  return (
    <section className="bookList">
      <EventsExample />
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;
  const displayTitle = ()=>{
    console.log(title);
  }
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title} </h2>
      <button onClick={displayTitle}>{ title}</button>
      <h4>{author}</h4>
    </article>
  );
};
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
