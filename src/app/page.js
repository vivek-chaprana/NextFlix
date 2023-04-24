import Hero from "./components/Hero";


export const metadata = {
  title: `NextFlix | Home`,
  description: 'Best place to find great shows and movies to watch.',
}

export default function Home() {
  const title = "Let's watch some great movies together."
  const imageUrl = "/about1.svg"
  return (
    <Hero title={title} imageUrl={imageUrl}/>
  )
}
