import { useEffect, useState } from 'react';

interface GridProps {
  gridID: string;
  gridTitle: string;
  gridViewAll?: string;
  data?: Array<any>;
  gridCat?: string;
  gridPostText?: string;
  gridIsVideo?: boolean;
}

const GridDefault: React.FC<GridProps> = ({
  gridID,
  gridTitle,
  gridViewAll,
  data, 
  gridCat,
  gridPostText,
  gridIsVideo,
}) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const getVideoUrl = (g: any) => {
    const title = g.snippet.title.replace(/[^a-zA-Z0-9\s\-]/g, "").toLowerCase().replace(/\s+/g, "-");
    if (gridID === "grid-bilangpilipino") {
      return `/bilangpilipino/watch/${g.snippet.resourceId.videoId}/${title}/${g.snippet.playlistId}`;
    } else if (gridCat) {
      return `/${gridCat}/${title}/watch/${g.snippet.resourceId.videoId}/${title}/${g.snippet.playlistId}`;
    } else {
      return `/${title}/watch/${g.snippet.resourceId.videoId}/${title}/${g.snippet.playlistId}`;
    }
  };

  return (
    <section className={`grid grid-default`} id={gridID}>
      <div className="head">
        <div className="grid-title">{gridTitle}</div>
        {gridViewAll && (
          <a className="view-all" href={gridViewAll}>
            View All <i className="fas fa-eye"></i>
          </a>
        )}
      </div>

      {data && data.length > 0 ? ( 
        data.map((g, key) => {
          if (g.snippet.title !== 'Private video' && g.snippet.title !== 'Deleted video') {
            if (g.snippet.thumbnails?.high?.url) {
              return (
                <a key={key} data-link="base" href={getVideoUrl(g)}>
                  <div className="box">
                    <div className="image" style={{ backgroundImage: `url(${g.snippet.thumbnails.high.url})` }}>
                      {gridIsVideo && <i className="fas fa-play"></i>}
                    </div>
                    <div className="inner">
                      {g.snippet.title && <div className="title">{g.snippet.title}</div>}
                      {g.snippet.description && <div className="desc">{g.snippet.description}</div>}
                      {gridPostText && <div className="watch-now">{gridPostText}</div>}
                      {g.snippet.publishedAt && (
                        <div className="date">
                          Published On: {new Date(g.snippet.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </div>
                      )}
                    </div>
                  </div>
                </a>
              );
            }
          }
          return null;
        })
      ) : (
        <p>No content available</p>
      )}
    </section>
  );
};

export default GridDefault;
