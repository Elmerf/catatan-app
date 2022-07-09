import React from "react";
import AppItem from "./AppItem";

function AppList({ header, items, deleteCatatan, toggleArchive }) {
  return (
    <div>
      <h3 className="fw-bold">{ header }</h3>
      { 
        items.length === 0 ? 
        <div className="mb-3">Tidak Ada Catatan</div> : 
        <div className="row mb-3">
          { 
            items
            .sort((a, b) => (b.id - a.id))
            .map(item => (
              <AppItem 
                key={item.id} 
                deleteCatatan={deleteCatatan} 
                toggleArchive={toggleArchive} 
                {...item} />)) 
          }
        </div>
      }
    </div>
  )
}

export default AppList;