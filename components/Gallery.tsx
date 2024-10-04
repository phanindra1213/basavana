import { useState } from 'react';
import styles from './Gallery.module.css';
import { BsDownload } from 'react-icons/bs';
import { IoExpandOutline, IoClose } from 'react-icons/io5';
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr';
import Image from 'next/image';

const images = [
  '/images/Basava-1.jpg',
  '/images/Basava-2.jpg',
  '/images/Basava-3.jpg',
  '/images/Basava-4.jpg',
  '/images/Basava-5.jpg',
  '/images/Basava-6.jpg',
  '/images/Basava-7.jpg',
  '/images/Basava-8.jpg',
  '/images/Basava-9.jpg',
  '/images/Basava-10.jpg',
  '/images/Basava-11.jpg',
  '/images/Basava-12.jpg',
  '/images/Basava-13.jpg',
  '/images/Basava-14.jpg',
  '/images/Basava-15.jpg',
  '/images/Basava-16.jpg',
  '/images/Basava-17.jpg',
  '/images/Basava-18.jpg',
  // Add more image paths as needed
];

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpen = (index: number) => {
    setCurrentIndex(index);
    setCurrentImage(images[index]);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    setCurrentImage(images[nextIndex]);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
    setCurrentImage(images[prevIndex]);
  };

  return (
    <div className="bg-gradient-to-r from-white via-blue-100 to-white min-h-screen flex flex-col">
      <div className={styles.galleryContainer}>
        <div className={styles.galleryGrid}>
          {images.map((image, index) => (
            <div key={index} className={styles.imageWrapper}>
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                width={400}
                height={400}
                className={styles.image}
                onClick={() => handleOpen(index)}
              />
              <div className={styles.iconContainer}>
                <a href={image} download>
                  <BsDownload className={styles.icon} />
                </a>
                <a href={image} target="_blank" rel="noopener noreferrer">
                  <IoExpandOutline className={styles.icon} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {isOpen && (
          <div className={styles.modal}>
            <button onClick={handleClose} className={styles.closeButton}>
              <IoClose />
            </button>
            <Image src={currentImage} alt="Expanded" width={800} height={600} className={styles.expandedImage} />
            <button onClick={handleNext} className={styles.nextButton}>
              <GrLinkNext />
            </button>
            <button onClick={handlePrev} className={styles.prevButton}>
              <GrLinkPrevious />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
