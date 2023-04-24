import getMovieInfo from "@/app/lib/getMovieInfo";
import styles from "../../styles/common.module.css";
import Image from "next/image";
import NotFound from "@/app/not-found";
import getMoviesInfo from "@/app/lib/getMoviesInfo";



export async function generateStaticParams() {
  const moviesInfo = await getMoviesInfo();
  const mainTitle = moviesInfo.titles;

  return mainTitle.map(movie => movie.jawSummary.id);

}

export async function generateMetadata({ params }) {

  const data = await getMovieInfo(params.movieId);
  if (data[0]?.details?.title === undefined) {
    return {
      title: 'Post Not Found'
  }
  }

  const main_data = data[0].details;

  return {
      title: main_data.title,
  }
}



const page = async ({ params }) => {
  const data = await getMovieInfo(params.movieId);

  if (data[0]?.details?.title === undefined) {
    return NotFound();
  }
  const main_data = data[0].details;

  return (
    <div className={styles.container}>
      <h2 className={styles.movie_title}>
        Netflix \ <span>{main_data.type}</span>
      </h2>
      <div>
        <Image
          src={main_data.backgroundImage.url}
          alt={main_data.title}
          width={600}
          height={300}
        />
      </div>
      <div>
        <h1>{main_data.title}</h1>
        <p>{main_data.synopsis}</p>
      </div>
    </div>
  );
};

export default page;
