import React from "react";
import { showFormattedDate } from "../utils";

function AppItem({ id, title, body, archived, createdAt, deleteCatatan, toggleArchive }) {
  return (
    <div className="col-6 col-lg-4 g-2">
      <div className="card shadow-sm h-100">
        <div className="card-header text-center">
          <p className="card-subtitle" style={{ fontSize: "0.85rem" }}>{ showFormattedDate(createdAt) }</p>
        </div>
        <div className="card-body">
          <h5 className="card-title">{ title }</h5>
          <p className="card-text" style={{ fontSize: "0.9rem" }}>{ body }</p>
        </div>
        <div className="card-footer">
          <div className="row">
            <button className="col btn btn-danger mx-2" onClick={() => deleteCatatan(id)}>Hapus</button>
            <button 
              className="col btn btn-primary mx-2" 
              onClick={() => toggleArchive(id)}>
                { archived ? "Pindahkan" : "Arsipkan"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppItem;