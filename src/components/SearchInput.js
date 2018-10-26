import * as React from "react";
import { observer } from "mobx-react";
import { Button, Container, Input } from "./styles";

export const SearchInput = observer(
  class SearchInput extends React.Component {
    state = {
      keyword: ""
    };
    handleChange = event => {
      this.setState({ keyword: event.target.value });
    };
    render() {
      const { searchKeyword } = this.props;
      const { keyword } = this.state;

      return (
        <Container>
          <Input
            value={keyword}
            type="text"
            name="search_input"
            placeholder="Search the keyword"
            onChange={this.handleChange}
          />
          <Button
            type="button"
            onClick={() => {
              searchKeyword(keyword);
            }}
          >
            Search
          </Button>
        </Container>
      );
    }
  }
);
