import { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import SectionTitle from '../components/SectionTitle'
import MovieCard from '../components/MovieCard'
import { EP } from '../api/tmdb'

const toMovieProps = (movie, badgeText) => ({
  id: movie.id,
  title: movie.title,
  genre: movie.genre_ids?.[0] ?? '',
  year: movie.release_date?.slice(0, 4) ?? '',
  badgeText,
  posterUrl: EP.img(movie.poster_path),
})

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState([])
  const [newMovies, setNewMovies] = useState([])

  useEffect(() => {
    EP.popular('movie').then((res) => {
      setPopularMovies(res.data.results.map((m) => toMovieProps(m, 'VODA 추천')))
    })
    EP.nowPlaying('movie').then((res) => {
      setNewMovies(res.data.results.map((m) => toMovieProps(m, '최신')))
    })
  }, [])

  return (
    <div className='text-white'>
      <Hero />

      <div className='max-w-screen-2xl mx-auto px-12 py-16 flex flex-col gap-16'>

        <section>
          <SectionTitle title='인기 영화' subtitle='지금 가장 많이 보는 영화' link='/movie' />
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>
            {popularMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                title={movie.title}
                genre={movie.genre}
                year={movie.year}
                badgeText={movie.badgeText}
                posterUrl={movie.posterUrl}
              />
            ))}
          </div>
        </section>

        <section>
          <SectionTitle title='최신 영화' subtitle='막 개봉한 따끈한 신작' link='/movie' />
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>
            {newMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                title={movie.title}
                genre={movie.genre}
                year={movie.year}
                badgeText={movie.badgeText}
                posterUrl={movie.posterUrl}
              />
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}

export default HomePage
