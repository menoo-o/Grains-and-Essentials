import { useState, useEffect } from 'react';

const ImageLoader = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setLoaded(true);
  }, [src]);

  return (
    <>
      {!loaded && (
        <div className="image-loading-spinner">
          <img src='/logo.jpg' alt="Loading" className="my-svg" /> {/* Loading spinner */}
        </div>
      )}
      {loaded && <img src={src} alt={alt} className={className} />}
    </>
  );
};

export default ImageLoader;
