export default function Slide({ slide }) {
  return (
    <li className="slide-container">
      <div className="slide-image">
        <img src={slide.src} alt="Slide Cover" />
        <div
          className="carousel-content"
          style={{ backgroundColor: slide.color }}
        >
          <h1>{slide.title}</h1>
          <h4>{slide.content}</h4>
        </div>
      </div>
      <div className="carousel-controls">
        <label for={slide.prev} className="prev-slide">
          <span>&lsaquo;</span>
        </label>
        <label for={slide.next} className="next-slide">
          <span>&rsaquo;</span>
        </label>
      </div>
    </li>
  );
}
