import React, { useState } from 'react';
import { HousePlug, Crown } from 'lucide-react';
import '../pages/css/Podcast.css';
import Footer from '../components/Footer';

const Podcast = () => {
  // State for search term
  const [searchTerm, setSearchTerm] = useState('');

  // Sample data for podcasts
  const podcasts = [
    { id: 1, title: 'Akbar & Birbal', episodes: '20 Episodes', image: 'https://i.pinimg.com/736x/64/9d/7e/649d7e02ca4a3d1cc23da4b4f87656b0.jpg', author: 'Free' },
    { id: 2, title: 'Heidi', episodes: '20 Songs', image: 'https://i.pinimg.com/564x/5b/60/d8/5b60d8111d09ca55e7020cc3b29c10a9.jpg', author: 'Free' },
    { id: 3, title: 'ShinChan\'s Crazy Classroom', episodes: '100 Episodes', image: 'src/assets/img/shinchan podcast.jpg', author: <Crown/> },
    { id: 4, title: 'Tom and Jerry: A Day at the Beach', episodes: '50 Episodes', image: 'src/assets/img/tom_and_jerry.jpg', author: <Crown/> },
    { id: 5, title: 'Red\'s Mighty Feathers', episodes: '30 Episodes', image: 'src/assets/img/angry_bird.jpg', author: <Crown/> },
    { id: 6, title: 'Moral Stories', episodes: '25 Episodes', image: 'https://cdn-icons-png.flaticon.com/256/130/130885.png',author: 'Free' },
    { id: 7, title: 'Classical Stories', episodes: '22 Songs', image: 'https://cdn-icons-png.flaticon.com/256/6074/6074694.png',author: 'Free' },
    { id: 8, title: 'Vikram Betal (Original Tamil Podcast)', episodes: '10 Songs', image: 'https://i.pinimg.com/564x/97/95/36/979536a240d0625db5cabcd876269d96.jpg',author: 'Free' },
    { id: 9, title: 'Grandma\'s Stories', episodes: '50 Episodes', image: 'https://cdn-icons-png.flaticon.com/256/3250/3250606.png',author: 'Free' },
    { id: 10, title: 'Bed-time stories', episodes: '20 Episodes', image: 'https://cdn-icons-png.flaticon.com/256/3552/3552878.png',author: 'Free' },
  ];

  // Filter podcasts based on search term
  const filteredPodcasts = podcasts.filter(podcast =>
    podcast.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="phone">
      <header className="header">
        <div className="header-logo">
          <div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="header-title">
          Podcast
        </div>
        <div className="header-buttons">
          <button className="notifications">
            <i className="ai-bell"></i>
          </button>
          <button className="avatar">
            <img src="https://cdn-icons-png.flaticon.com/256/1077/1077114.png" alt="Avatar" />
          </button>
        </div>
      </header>

      <section className="title">
        <h1>Listen Everyday</h1>
        <p>Explore Podcasts according to your taste</p>
      </section>

      <center>
        <section className="search">
          <div className="search-inner">
            <button className="search-button">
              <i className="ai-search"></i>
            </button>
            <input
              type="text"
              className="search-input"
              placeholder="Search Podcasts!"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </section>
      </center>

      <section className="playlists">
        {filteredPodcasts.map(podcast => (
          <article className="card" key={podcast.id}>
            <div className="card-inner">
              <span className="card-pin"></span>
              <div className="card-image">
                <img src={podcast.image} alt="Card" />
              </div>
              <div className="card-content">
                <div className="card-meta">
                  <span className="card-meta-number">{podcast.episodes}</span>
                  <button className="card-meta-button">
                    <i className="ai-circle-triangle-right-fill"></i>
                  </button>
                </div>
                <h2 className="card-title">{podcast.title}</h2>
                <p className='author'>{podcast.author}</p>
              </div>
            </div>
          </article>
        ))}
      </section>

      <Footer />
    </div>
  );
}

export default Podcast;
