import React from "react";

const HomeMainVideo = () => {
  const styles = {
    iframe: {
      width: "100%",
      height: "750px", // Adjust height as needed
      display: "block",
    },
  };

  return (
    <div>
      <iframe
        src="https://www.youtube.com/embed/videoseries?si=GeW2NEDSIq61i9GP&list=PL5HOfFlVmenanN8IoRTZ-zcVMt9owVVAa"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={styles.iframe}
      />
      <iframe
        src="https://www.youtube.com/watch?v=fJgrZxi4Jws&t=1s"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={styles.iframe}
      />
    </div>
  );
};

export default HomeMainVideo;
