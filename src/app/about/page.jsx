import Hero from "../components/Hero";

export const metadata = {
    title: `NextFlix | About`,
    description: 'About us page for NextFlix, Best place to find great shows and movies to watch.',
  }

const About = () => {
    const title = "our story"
    const imageUrl = "hero.svg"
    return (
        <Hero  imageUrl={imageUrl} title={title} />
    )
}

export default About;