import React from "react";
import { getInitialData } from "../utils";
import AppInput from "./AppInput";
import AppList from "./AppList";
import AppSearch from "./AppSearch";

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      catatanItems: getInitialData(),
      searchString: "",
    };
    this.onDeleteCatatanHandler = this.onDeleteCatatanHandler.bind(this);
    this.onAddCatatanHandler = this.onAddCatatanHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onSearchQueryChangeHandler = this.onSearchQueryChangeHandler.bind(this);
  }

  onDeleteCatatanHandler(id) {
    const catatanItems = this.state.catatanItems.filter((item => item.id !== id));
    this.setState({ catatanItems });
  }

  onAddCatatanHandler({ title, body}) {
    this.setState((prevState) => {
      return {
        searchString: "",
        catatanItems: [
          ...prevState.catatanItems,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date().toISOString(),
          }
        ]
      }
    })
  }

  onArchiveHandler(id) {
    const catatanitemIndex = this.state.catatanItems.findIndex((item) => item.id === id );
    const catatanItem = this.state.catatanItems[catatanitemIndex];
    catatanItem.archived = !catatanItem.archived;
    this.setState((prevState) => {
      return {
        catatanItems: [
          ...prevState.catatanItems.slice(0, catatanitemIndex),
          catatanItem,
          ...prevState.catatanItems.slice(catatanitemIndex + 1), 
        ]
      }
    })
  }

  onSearchQueryChangeHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        searchString: event.target.value.toLowerCase(),
      }
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <AppSearch 
          searchQuery={this.state.searchString}
          onChangeSearchQuery={this.onSearchQueryChangeHandler}
          searchCatatan={this.onSearchHandler} />
        <div className="row">
          <div className="col-12 col-lg-4">
            <AppInput addCatatan={this.onAddCatatanHandler} />
          </div>
          <div className="col-12 col-lg-8">
            <AppList 
              header="Catatanku" 
              items=
              {
                this.state.catatanItems
                  .filter((item) => 
                    item.archived === false && 
                    item.title.toLowerCase().includes(this.state.searchString))
              }
              deleteCatatan={this.onDeleteCatatanHandler}
              toggleArchive={this.onArchiveHandler} />
            <AppList 
              header="Archives" 
              items=
              {
                this.state.catatanItems
                  .filter((item) => 
                    item.archived === true && 
                    item.title.toLowerCase().includes(this.state.searchString))
              }
              deleteCatatan={this.onDeleteCatatanHandler} 
              toggleArchive={this.onArchiveHandler}  />
          </div>
        </div>
      </div>
    )
  }
}

export default AppContainer;