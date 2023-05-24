export function Song() {
  return (
    <div className='song-container'>
      <p>Esa joya es para ti, te la mando con unos besitos en tu colita &#128525;</p>
      <iframe
        style={{ borderRadius: 12 }}
        src="https://open.spotify.com/embed/track/1RmyiGvfXWPRgPZQp7df2A?utm_source=generator&theme=0"
        width="100%"
        height={152}
        frameBorder={0}
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title='I love you'
      />
    </div>
  )
}