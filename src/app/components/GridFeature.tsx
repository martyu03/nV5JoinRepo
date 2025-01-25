import React from 'react';

interface GridItem {
  snippet: {
    title: string;
    description?: string;
    thumbnails?: {
      high?: {
        url: string;
      };
    };
    publishedAt?: string;
    resourceId?: {
      videoId: string;
    };
  };
}

interface GridFeatureProps {
  gridID: string;
  gridTitle: string;
  gridViewAll?: string;
  grid?: GridItem[];
  gridCat?: string;
  gridPostText?: string;
  gridIsVideo?: boolean;
  playlistId?: string;
}

const GridFeature: React.FC<GridFeatureProps> = ({
  gridID,
  gridTitle,
  gridViewAll,
  grid,
  gridCat,
  gridPostText,
  gridIsVideo,
  playlistId,
}) => {
  const createUrl = (
    title: string,
    videoId: string,
    playlistId?: string
  ) => {
    const formattedTitle = title.toLowerCase().replace(/[^a-zA-Z0-9\s\-]/g, '').replace(/\s+/g, '-');
    if (gridCat) {
      return `/${gridCat}/${formattedTitle}/watch/${videoId}/${formattedTitle}/${playlistId}`;
    }
    return `/${formattedTitle}/watch/${videoId}/${formattedTitle}/${playlistId}`;
  };

  const gridChecked = grid?.filter(
    (item) => item.snippet?.thumbnails?.high?.url
  ) || [];

  return (
    <section className="grid grid-feature" id={gridID}>
      <div className="head">
        <div className="grid-title">{gridTitle}</div>
        {gridViewAll && (
          <a className="view-all" href={gridViewAll}>
            View All <i className="fas fa-eye"></i>
          </a>
        )}
      </div>

      <div className="inner-row">
        {gridChecked.length > 0 && (
          <>
            <div className="inner-col-6">
              {gridChecked.slice(0, 1).map((g, index) => (
                <a
                  key={index}
                  href={createUrl(
                    g.snippet.title,
                    g.snippet.resourceId?.videoId ?? '',
                    playlistId
                  )}
                >
                  <div className="box by-ones watch">
                    <div
                      className="image"
                      style={{
                        backgroundImage: `url(${g.snippet.thumbnails?.high?.url})`,
                      }}
                    >
                      {gridIsVideo && <i className="fas fa-play"></i>}
                    </div>
                    <div className="inner">
                      {g.snippet.title && <div className="title">{g.snippet.title}</div>}
                      {g.snippet.description && (
                        <div className="desc">{g.snippet.description}</div>
                      )}
                      {gridPostText && <div className="watch-now">{gridPostText}</div>}
                      {g.snippet.publishedAt && (
                        <div className="date">
                          Published On: {new Date(g.snippet.publishedAt).toLocaleDateString()}
                        </div>
                      )}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="inner-col-6">
              {gridChecked.slice(1).map((g, index) => (
                <a
                  key={index}
                  href={createUrl(
                    g.snippet.title,
                    g.snippet.resourceId?.videoId ?? '',
                    playlistId
                  )}
                >
                  <div className="box by-ones list">
                    <div
                      className="image"
                      style={{
                        backgroundImage: `url(${g.snippet.thumbnails?.high?.url})`,
                      }}
                    >
                      {gridIsVideo && <i className="fas fa-play"></i>}
                    </div>
                    <div className="inner">
                      {g.snippet.title && <div className="title">{g.snippet.title}</div>}
                      {g.snippet.description && (
                        <div className="desc">{g.snippet.description}</div>
                      )}
                      {g.snippet.publishedAt && (
                        <div className="date">
                          Published On: {new Date(g.snippet.publishedAt).toLocaleDateString()}
                        </div>
                      )}
                      <div className="watch-now">Watch Now</div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default GridFeature;
