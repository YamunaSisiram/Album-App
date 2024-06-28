import { createContext } from "react";
import { useState } from "react";
import AlbumForm from "./components/AlbumForm";
import { useContext } from "react";

const albumContext = createContext();

export function useValue(){
  return useContext(albumContext);
}

function CustomAlbumContext({children}){
    const [showAlbumForm, setShowAlbumForm] = useState(false);

    const toggleAlbumFormView = ()=> {
      setShowAlbumForm(!showAlbumForm);
    }

    return (
        <albumContext.Provider
          value={{ toggleAlbumFormView}}
        >
          {showAlbumForm && <AlbumForm/>}
          {!showAlbumForm && children}
        </albumContext.Provider>
      );

}

export default CustomAlbumContext;