export default function SpeakersItem({ img, alt, name, job }) {
  return (
    <div>
      <img src={img} alt={alt} />
      <h2>{name}</h2>
      <h3>{job}</h3>
    </div>
  );
}
