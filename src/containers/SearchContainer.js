import * as React from "react";
import { inject, observer } from "mobx-react";
import logo from "../youtubelogo-960x623.jpg";
import { SearchInput } from "../components";
import { Header, Logo } from "./styles";

export const SearchContainer = inject("store")(
  observer(
    class SearchContainer extends React.Component {
      render() {
        const { store } = this.props;

        return (
          <Header>
            <Logo src={logo} alt="logo" />
            <SearchInput searchKeyword={store.searchKeyword} />
          </Header>
        );
      }
    }
  )
);
