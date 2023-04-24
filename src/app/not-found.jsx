import Link from 'next/link'

export const metadata = {
    title: `Page Not Found`,
    description: 'Best place to find great shows and movies to watch.',
  }

const NotFound = () => {
    return(
        <section className="error_container">
            <div className="error_page">
                <h1>Error 404</h1>
                <h2>Page Not Found</h2>
                <p>Could not find the requested resource</p>
                <Link href="/">
                    <button>
                        Go to Home Page
                    </button>
                </Link>
            </div>
        </section>
    )
}


export default NotFound