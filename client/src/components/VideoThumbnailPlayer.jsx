import React, { useState, useEffect } from 'react';

const VideoThumbnailPlayer = ({ videoId, style, overlayText, thumbnailSrc, autoPlay = false }) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [thumbnail, setThumbnail] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  // Use vimeo's HD thumbnail URL
  const thumbnailUrl = thumbnailSrc || `https://vumbnail.com/${videoId}.jpg`; // Regular thumbnail

  // Fetch the thumbnail when the component mounts
  useEffect(() => {
    // Here you can make additional requests if necessary to fetch the highest quality thumbnail
    setThumbnail(thumbnailUrl); // In this case, the thumbnail URL is set directly
  }, [videoId]);

  // Set explicit container dimensions (optional, adjust as needed)
  // const containerStyle = {
  //   position: 'relative',
  //   width: '100%',
  //   // height: isMobile? '150%' : '70%',
  //   // maxHeight: '500px',
  //   backgroundColor: 'transparent',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   // marginTop: isMobile ? '-50px' : '72px',
  //   ...style,
  // };

  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: isMobile ? '70%' : '70%',
    maxHeight: '500px',
    backgroundColor: 'transparent',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: isMobile ? '0' : '72px',
    ...style,
  };



  // const thumbnailStyle = {
  //   backgroundImage: `url(${thumbnail})`,
  //   backgroundSize: 'cover', // Ensures the image fills the container
  //   backgroundPosition: 'center',
  //   backgroundRepeat: 'no-repeat',
  //   width: '100%',
  //   height: '100%',
  //   cursor: 'pointer',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // };

  const thumbnailStyle = {
    backgroundImage: `url(${thumbnail})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };


  return (
      <div style={containerStyle}>
        {!isPlaying ? (
            <div
                style={thumbnailStyle}
                onClick={handlePlay}
            >
              <button
                  style={{
                    background: 'transparent',
                    border: '3px solid #fff',
                    borderRadius: '50%',
                    padding: '15px',
                    cursor: 'pointer',
                    fontSize: '24px',
                    color: '#fff',
                    fontWeight: 'bold',
                    outline: 'none',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  }}
                  onMouseDown={e => e.preventDefault()}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.1)';
                    e.target.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
                  }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="white">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
        ) : (
            <iframe
                src={`https://player.vimeo.com/video/${videoId}?autoplay=1&dnt=1`}
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                }}
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
            />

        )}
      </div>
  );
};

export default VideoThumbnailPlayer;
