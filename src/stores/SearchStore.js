import { observable, action, decorate } from "mobx";
import axios from "axios";

export const SearchStore = decorate(
  class SearchStore {
    searchResults = [];

    searchKeyword = async keyword => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyC0ohFUZsmX5-uRuyKKNP7nHug97dvXIsg&maxResults=25&q=${keyword}&videoEmbeddable=true&type=video`
        );
        console.log(response);
        this.searchResults = response.hasOwnProperty("data")
          ? response.data.items
          : [];
      } catch (error) {
        console.error(error);
      }
    };
  },
  {
    searchResults: observable,
    searchKeyword: action
  }
);
