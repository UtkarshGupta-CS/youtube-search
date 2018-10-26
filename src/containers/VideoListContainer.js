import * as React from "react";
import { inject, observer } from "mobx-react";
import { VideosList } from "../components";

export const VideoListContainer = inject("store")(
  observer(
    class VideoListContainer extends React.Component {
      render() {
        const { store } = this.props;

        return (
          <VideosList
            searchResults={store.searchResults}
          />
        );
      }
    }
  )
);

export default VideoListContainer;
