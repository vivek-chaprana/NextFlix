import MovieCard from "../components/movieCard";
import getMoviesInfo from "../lib/getMoviesInfo";
import styles from "../styles/common.module.css";


export const metadata = {
  title: `NextFlix | Movies`,
  description: 'Best place to find great shows and movies to watch.',
}


const Movie = async () => {
  

  const data = await getMoviesInfo();
  const mainTitles = data.titles;

  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series & Movies</h1>
          <div className={styles.card_section}>

          {mainTitles.map((movie) => (
            <MovieCard key={movie.jawSummary.id} {...movie} />
          ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Movie;
