'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './VideoGallery.module.css';

// Array of real YouTube videos with titles and embed IDs
const videos = [
  { id: 'video1', title: '', embedId: '9m9r4uBWUyY' },
  { id: 'video2', title: '', embedId: '973hnZiboQg' },
  { id: 'video3', title: '', embedId: 'k2zhEfLgO9o' },
  { id: 'video4', title: '', embedId: '_MilRm5R2gU' },
  { id: 'video5', title: '', embedId: 'sRzGyL9g45o'},
  { id: 'video6', title: '', embedId: 'qKLnvF9XYHU' },
  { id: 'video7', title: '', embedId: 'd6IPOjpNt0o' },
  { id: 'video8', title: '', embedId: '5cv4Gus495U' },
  { id: 'video9', title: '', embedId: 'GWEQmFPowjc' },
  { id: 'video10', title: '', embedId: 'S0z5UZsT_Ao' },
  { id: 'video11', title: '', embedId: '1Fnr4i9c7UE' },
  { id: 'video12', title: '', embedId: 'XKkNKWHQScg' },
  { id: 'video13', title: '', embedId: 'PbyafRnKxos' },
  { id: 'video14', title: '', embedId: 'XURJ_MHYhbU' },
  { id: 'video15', title: '', embedId: 'ABtH0Mvl0aI' },
];

const VideoGallery: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  return (
    <div className={styles.gallery}>
      {/* Central Featured Video */}
      <div className={styles.featuredVideo}>
        <iframe
          width="100%"
          height="400"
          src={`https://www.youtube.com/embed/${selectedVideo.embedId}?autoplay=1`}
          title={selectedVideo.title}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      
      {/* Thumbnail Grid */}
      <div className={styles.thumbnailGrid}>
        {videos.map((video) => (
          <div
            key={video.id}
            className={styles.thumbnail}
            onClick={() => setSelectedVideo(video)}
          >
            <Image
              src={`https://img.youtube.com/vi/${video.embedId}/0.jpg`}
              alt={video.title}
              className={styles.thumbnailImage}
              width={160}
              height={90}
              priority
            />
            <p className={styles.thumbnailTitle}>{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
