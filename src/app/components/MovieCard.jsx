import Image from 'next/image';
import styles from '../styles/common.module.css'
import Link from 'next/link';

const MovieCard = (movie) => {

  const { id, title, synopsis } = movie.jawSummary;
  return (
    <div className={styles.card}>
      <div className={styles.card_image}>
        <Image src={movie.jawSummary.backgroundImage.url} alt={title} width={260} height={200} />
      </div>
      <div className={styles.card_data}>
        <h2>{title.substring(0,18)}</h2>
        <p>
          {synopsis.substring(0,66) + "..."}
        </p>
        <Link href={`/movie/${id}`}>
          <button>
            Read More
          </button>
        </Link>
      </div>
    </div>
  )
}

export default MovieCard;