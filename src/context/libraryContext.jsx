import { useState, createContext } from "react";
import img1 from '../assets/test-images/img1-min.jpg'
import img2 from '../assets/test-images/img2.jpg'
import img3 from '../assets/test-images/img3.jpg'


export const LibContext = createContext()

// All chidlren are going to received the state hook 
export const LibProvider = ({children}) => {
      const [selectedLibrary, setSelected] = useState([
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
  ]);
    
    return(
        <LibContext.Provider value={{selectedLibrary, setSelected}}>
            {children}
        </LibContext.Provider>

    );

};
