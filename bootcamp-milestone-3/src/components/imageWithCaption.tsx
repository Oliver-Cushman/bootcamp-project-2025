import styles from "./imageWithCaption.module.css";

type ImageWithCaptionProps = {
  image: string;
  alt: string;
  caption: string;
};

export default function ImageWithCaption(props: ImageWithCaptionProps) {
  return (
    <div className={styles.image_with_caption}>
      <img className={styles.image} src={props.image} alt={props.alt} />
      <p>{props.caption}</p>
    </div>
  );
}
