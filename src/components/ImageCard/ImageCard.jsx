import css from "./ImageCard.module.css";
export default function ImageCard({ data: { urls, alt_description } }) {
  return (
    <div>
      <img src={urls.small} alt={alt_description} className={css.item} />
    </div>
  );
}
