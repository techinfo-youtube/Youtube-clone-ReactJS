import React from "react";

const VideoItem = ({ video, onSelectVideo }) => {
  return (
    <>
      <div
        className="col-md-12"
        onClick={() => {
          onSelectVideo(video);
        }}
      >
        <div className="row border p-2" style={{ cursor: "pointer" }}>
          <div className="col-md-3">
            <img
              height="50px"
              width="60px"
              alt={video.snippet.title}
              src={video.snippet.thumbnails.medium.url}
            />
          </div>
          <div className="col-md-9">
            <p>{video.snippet.title}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoItem;
