import "./cover.css";
export default function Cover({ label, img }) {
  return (
    <div
      className="cover"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <h1>{label}</h1>
    </div>
  );
}
