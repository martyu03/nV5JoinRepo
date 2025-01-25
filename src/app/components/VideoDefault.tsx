import React, { useState } from 'react';

const VideoDefault = () => {
  const [isOpen, setIsOpen] = useState(true);

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'row', // Align items side by side
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      marginTop: '140px', // Adjust for margin
      width: '100vw', // Ensure full width
      height: '100vh', // Ensure full height of the viewport
      boxSizing: 'border-box', // Include padding in the width calculation
    },
    video: {
      flex: '2', // Take up more space // Add space between video and sidebar
    },
    iframe: {
      width: '100%',
      height: '750px', // Adjust height as needed
      display: 'block',
    },
    sidebar: {
      flex: '0.5', // Sidebar width
      padding: '10px',
      border: '1px solid #ddd',
      backgroundColor: '#f9f9f9', // Light background for contrast
    },
    topStoriesHeader: {
      color: 'red',
      fontWeight: 'bold',
      fontSize: '24px',
      marginBottom: '10px',
    },
    featureHeader: {
      textAlign: 'center',
      backgroundColor: '#f00',
      color: '#fff',
      fontSize: '32px',
      padding: '10px',
    },
    grayBox: {
      backgroundColor: 'gray',
      padding: '10px',
      marginTop: '20px',
    },
  };

  return (
    <section className="video-container" style={styles.container}>
      {/* Video Section */}
      <div className="video" style={styles.video}>
        {isOpen && (
          <div className="embed">
            <iframe
              src="https://www.youtube.com/embed/videoseries?si=GeW2NEDSIq61i9GP&list=PL5HOfFlVmenanN8IoRTZ-zcVMt9owVVAa"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={styles.iframe}
            />
            {/* Features Section */}
            <div className="video-live bottom mobile">
              <div className="video-meta flex flex-row">
                <div className="head" style={styles.featureHeader}>FEATURES</div>
                <div className="basis-2/3" style={styles.grayBox}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Sidebar Section */}
      <div className="sidebar" style={styles.sidebar}>
        <div className="head" style={styles.topStoriesHeader}>TOP STORIES</div>
        <ul>
          <li>Story 1</li>
          <li>Story 2</li>
          <li>Story 3</li>
        </ul>
      </div>
    </section>
  );
};

export default VideoDefault;
