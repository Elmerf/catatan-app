import React from "react";

function AppSearch({ searchQuery, onChangeSearchQuery }) {
  return (
    <div className="input-group w-50 m-auto my-4">
      <input 
        type="text" 
        className="form-control" 
        placeholder="Cari Catatan" 
        value={searchQuery}
        onChange={onChangeSearchQuery} />
    </div>
  )
}

export default AppSearch;