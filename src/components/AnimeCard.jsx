import React from 'react'

function AnimeCard({anime}) {
  return (
    <article className="anime-card">
        <a className="animeimg" href={anime.url} target="_blank" rel="noreferrer">
            <figure>
                <img src={anime.image_url} alt="anime image" />
            </figure>
            <h4>{anime.title}</h4>
        </a>
    </article>
  )
}

export default AnimeCard