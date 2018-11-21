import { observable, action, decorate, computed } from "mobx";
import axios from "axios";

export const SearchStore = decorate(
  class SearchStore {
    searchResults = [];
    sortType = "name";

    searchKeyword = async keyword => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyC0ohFUZsmX5-uRuyKKNP7nHug97dvXIsg&maxResults=25&q=${keyword}&videoEmbeddable=true&type=video`
        );
        // console.log(response);
        let res = response.hasOwnProperty("data") ? response.data.items : [];

        res.sort(function(a, b) {
          let date1 = new Date(a.snippet.publishedAt);
          let date2 = new Date(b.snippet.publishedAt);

          if (date1 > date2) {
            return 1;
          } else if (date1 === date2) {
            return 0;
          }
          return -1;
        });
        this.searchResults = res;
      } catch (error) {
        console.error(error);
      }
    };

    sortSearchResults = sortType => {
      this.sortType = sortType;
    };

    get sortedResults() {
      if (this.sortType === "date") {
        return this.searchResults.sort(function(a, b) {
          let date1 = new Date(a.snippet.publishedAt);
          let date2 = new Date(b.snippet.publishedAt);

          if (date1 > date2) {
            return 1;
          } else if (date1 === date2) {
            return 0;
          }
          return -1;
        });
      }

      return this.searchResults.sort(function(a, b) {
        let title1 = a.snippet.title;
        let title2 = b.snippet.title;

        if (title1 > title2) {
          return 1;
        } else if (title1 === title2) {
          return 0;
        }
        return -1;
      });
    }
  },
  {
    searchResults: observable,
    searchKeyword: action,
    sortedResults: computed,
    sortType: observable
  }
);
