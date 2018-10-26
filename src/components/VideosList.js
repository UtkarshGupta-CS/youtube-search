import * as React from "react";
import { observer } from "mobx-react";
import { VideoRow, StyledVideosList } from "./styles";

export const VideosList = observer(
  class VideosList extends React.Component {
    render() {
      const { searchResults } = this.props;

      return (
        <StyledVideosList>
          {searchResults &&
            searchResults.length > 0 &&
            searchResults.map((video, index) => (
              <VideoRow
                key={video.id.videoId}
                onClick={() => {
                  window.location = `https://youtu.be/${video.id.videoId}`;
                }}
              >
                <img
                  src={video.snippet.thumbnails.default.url}
                  alt="thumbnail"
                  width={230}
                  height={120}
                />
                <div>
                  <p>{video.snippet.title}</p>
                  <p>{video.snippet.channelTitle}</p>
                </div>
                <br />
              </VideoRow>
            ))}
        </StyledVideosList>
      );
    }
  }
);
