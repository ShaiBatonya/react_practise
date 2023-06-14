import  { useState } from 'react';

const CarouselCom = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
  };

  const previousImage = () => {
    setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
  };

  return (
    <>
    <div className="homepage2">
      <button onClick={previousImage}>Previous</button>
      <img  src={images[currentImage]} alt="Carousel Image"  />
      <button onClick={nextImage}>Next</button>
    </div>
    </>
  );
};

export default CarouselCom;
