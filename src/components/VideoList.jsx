import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onSelectVideo }) => {
  const renderList = videos.map((video) => {
    return <VideoItem video={video} onSelectVideo={onSelectVideo} />;
  });

  return (
    <>
      <div>{renderList}</div>
    </>
  );
};

export default VideoList;
