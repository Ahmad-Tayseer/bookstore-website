export default function Dot({ slide }) {
  return (
    <label for={slide.id} className="carousel-dot" id={slide.dot_id}></label>
  );
}
