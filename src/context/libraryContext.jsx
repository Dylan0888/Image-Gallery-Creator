import { useState, createContext } from "react";
import img1 from '../assets/test-images/img1-min.jpg'
import img2 from '../assets/test-images/img2.jpg'
import img3 from '../assets/test-images/img3.jpg'


export const LibContext = createContext()

// All children are going to received the state hook 
export const LibProvider = ({children}) => {
      const [selectedLibrary, setSelected] = useState(() => {
      try {
          const savedLib = localStorage.getItem("image");
          const parsed = savedLib ? JSON.parse(savedLib) : null;
          return Array.isArray(parsed)
            ? parsed
            : [
                {
                  id: crypto.randomUUID(),
                  imgLink: img1,
                  date: "23/23/2023",
                  location: "Wales",
                  desc: "Sample description for image 1",
                },
                {
                  id: crypto.randomUUID(),
                  imgLink: img3,
                  date: "23/23/1990",
                  location: "Birkenhead",
                  desc: "Sample description for image 3",
                },
                {
                  id: crypto.randomUUID(),
                  imgLink: img2,
                  date: "23/23/2005",
                  location: "New Brighton",
                  desc: "Sample description for image 2",
                },
              ];
        } catch (err) {
          console.error("Error parsing localStorage:", err);
          return [];
        }
      });
      
    return(
        <LibContext.Provider value={{selectedLibrary, setSelected}}>
            {children}
        </LibContext.Provider>
    );
};
