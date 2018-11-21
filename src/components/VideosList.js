import * as React from "react";
import { observer } from "mobx-react";
import { VideoRow, StyledVideosList } from "./styles";

export const VideosList = observer(
  class VideosList extends React.Component {
    onSortOptionSelect = event => {
      this.props.sortSearchResults(event.target.value)
    };
    
    render() {
      const { searchResults, sortSearchResults, sortedResults } = this.props;

      return (
        <StyledVideosList>
          <select onChange={e => this.onSortOptionSelect(e)}>
            <option value="name">Name</option>
            <option value="date">Published Date</option>
          </select>
          {sortedResults &&
            sortedResults.length > 0 &&
            sortedResults.map((video, index) => (
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
                  <p>
                    {new Date(video.snippet.publishedAt).getDate() +
                      "/" +
                      new Date(video.snippet.publishedAt).getMonth() +
                      "/" +
                      new Date(video.snippet.publishedAt).getFullYear()}
                  </p>
                </div>
                <br />
              </VideoRow>
            ))}
        </StyledVideosList>
      );
    }
  }
);
