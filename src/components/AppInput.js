import React from "react";
import { charactersCount } from "../utils";

class AppInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    if (charactersCount(event.target.value) <= 50) {
      this.setState((prevState) => {
        return {
          ...prevState,
          title: event.target.value,
        }
      })
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        body: event.target.value,
      }
    })
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addCatatan(this.state);
    this.setState({
      title: "",
      body: "",
    });
  }

  render() {
    return (
      <div className="card shadow-sm">
        <div className="card-body">
          <h4 className="card-title text-center">Catatan Baru</h4>
          <form onSubmit={this.onSubmitEventHandler}>
            <div className="mb-3">
              <div className="row justify-content-between">
                <label htmlFor="catatanTitle" className="form-label fw-bold col">Title</label>
                <span 
                  className={
                    `col 
                    text-end 
                    ${(charactersCount(this.state.title) === 50 ? 'text-danger' : '')}`
                  }>{ charactersCount(this.state.title) }/50</span>
              </div>
              <input 
                type="text" 
                className="form-control" 
                id="catatanTitle" 
                placeholder="Masukkan judul catatan"
                autoComplete="off"
                value={this.state.title}
                onChange={this.onTitleChangeEventHandler} 
              />
            </div>
            <div className="mb-3">
              <label htmlFor="catatanBody" className="form-label fw-bold">Body</label>
              <textarea 
                className="form-control" 
                id="catatanBody" 
                rows="4" 
                style={{resize: "none"}} 
                placeholder="Masukkan apa yang ingin dicatat"
                value={this.state.body}
                onChange={this.onBodyChangeEventHandler} 
              />
            </div>
            <button type="submit" className="btn btn-primary">Tambah Catatan</button>
          </form>  
        </div>
      </div>
    );
  }
}

export default AppInput;