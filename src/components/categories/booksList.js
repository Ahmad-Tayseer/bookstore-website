import Card from "../card/card";

export default function BooksList({ books }) {
  return (
    <div className="categoryList">
      {books.map((book) => {
        return <Card book={book} />;
      })}
    </div>
  );
}
