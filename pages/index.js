import Head from 'next/head'
//import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="screen">
      <header>
        <section className="media-nav">
          <a href="#" className='active' >Games</a>
          <a href="#">Media</a>
        </section>
        <section className="settings">
          <span className='icon'>
            <i className='fa fa-search'></i>
          </span>
          <span className='icon'>
            <i className='fa fa-cog'></i>
          </span>
          <span className='icon'>
            <img className='user' src="https://randomuser.me/api/portraits/men/22.jpg" alt="user"/>
          </span>
          <span className="time">8:56 PM</span>
        </section>
      </header>

      <div className="container">
        <section className="game-nav">
          <div className="game active">
            <i className="fa fa-location-arrow"></i>
          </div>
          <div className="game">
            <div 
              className="img"
              style={{
                background: "url('https://i.redd.it/8pvdi0pne8a51.png')",
                backgroundSize: "contain",
	              backgroundPosition: "center",
              	transform: "scale(1.5)",
              }} />
          </div>
          <div className="game">
            <div 
              className="img"
              style={{
                background: "url('https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6427/6427993cv11d.jpg;maxHeight=640;maxWidth=550')",
                backgroundSize: "contain",
	              backgroundPosition: "center",
              	transform: "scale(1.5)",
              }} />
          </div>
          <div className="game">
            <div 
              className="img"
              style={{
                background: "url('https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6430/6430152_sd.jpg;maxHeight=640;maxWidth=550')",
                backgroundSize: "contain",
	              backgroundPosition: "center",
              	transform: "scale(1.5)",
              }} />
          </div>
          <div className="game">
            <div 
              className="img"
              style={{
                background: "url('https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6433/6433147_sd.jpg;maxHeight=640;maxWidth=550')",
                backgroundSize: "contain",
	              backgroundPosition: "center",
              	transform: "scale(1.5)",
              }} />
          </div>
          <div className="game">
            <div 
              className="img"
              style={{
                background: "url('https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6430/6430758_sd.jpg;maxHeight=640;maxWidth=550')",
                backgroundSize: "contain",
	              backgroundPosition: "center",
              	transform: "scale(1.5)",
              }} />
          </div>
          <div className="game">
            <div 
              className="img"
              style={{
                background: "url('https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6450/6450472_sd.jpg;maxHeight=640;maxWidth=550')",
                backgroundSize: "contain",
	              backgroundPosition: "center",
              	transform: "scale(1.5)",
              }} />
          </div>
        </section>
      <section className="info">
        <span className="subtitle">
          Official news from Playstation 1/28/2021
        </span>
        <h1>Ready for a PS5 Adventrue?</h1>
        <p>ASTRO's PLAYROOM is pre-loaded and waiting for you!
          Explore the new capabilities of PS5 and feel the world...
        </p>
      </section>
      </div>
      <section className='video-trailers'>
        <div className="trailer">
          <img 
            className="image" 
            src="https://bnetcmsus-a.akamaihd.net/cms/blog_header/mj/MJBPE77P0K3U1599681246441.jpg" 
            alt="game"
          />
          <div className="video-info">
            <div className="circle-player">
              <i className='fa fa-play'></i>
            </div>
            <span className='title'>Call of Duty: Black Ops Cold War</span>
          </div>
        </div>
        <div className="trailer">
          <img 
            className="image" 
            src="https://i.ytimg.com/vi/JsNgEBb4ZD0/maxresdefault.jpg" 
            alt="game"
          />
          <div className="video-info">
            <div className="circle-player">
              <i className='fa fa-play'></i>
            </div>
            <span className='title'>Spider-Man: Miles Morales</span>
          </div>
        </div>
        <div className="trailer">
          <img 
            className="image" 
            src="https://i.ytimg.com/vi/2TMs2E6cms4/maxresdefault.jpg" 
            alt="game"
          />
          <div className="video-info">
            <div className="circle-player">
              <i className='fa fa-play'></i>
            </div>
            <span className='title'>Demon Souls</span>
          </div>
        </div>
        <div className="trailer">
          <img 
            className="image" 
            src="https://i.ytimg.com/vi/ai3o0XtrnM8/maxresdefault.jpg" 
            alt="game"
          />
          <div className="video-info">
            <div className="circle-player">
              <i className='fa fa-play'></i>
            </div>
            <span className='title'>Ratchet and Clank: Rift Apart</span>
          </div>
        </div>
        <div className="trailer">
          <img 
            className="image" 
            src="https://i.ytimg.com/vi/OEQsQqkEKMA/maxresdefault.jpg" 
            alt="game"
          />
          <div className="video-info">
            <div className="circle-player">
              <i className='fa fa-play'></i>
            </div>
            <span className='title'>Mortal Kombat 11</span>
          </div>
        </div>
        
      </section>
    </div>
  )
}