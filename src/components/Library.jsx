import React, {useState, useEffect, useContext} from 'react'
import UI from './UI';
import {LibContext} from '../context/libraryContext'

const Library = () => {
  
  const {selectedLibrary} = useContext(LibContext)

  const [selectedImage, setSelectedImage] = useState();
  const [openUI, setOpenUI] = useState(false);

  //Update local storage every time selected library changes 
  useEffect(() => {
    localStorage.setItem("image", JSON.stringify(selectedLibrary))
  },[selectedLibrary])

  
  //Opens the ui when an image is clicked 
  useEffect(()=> {
    setOpenUI(
      selectedImage ? true : false
    )
  },[selectedImage])
  
  return (
    <section className='m-2 p-2 shadow-xl rounded-xl'>
        <div className='grid gap-5 grid-cols-1  /* default: 1 column on very small screens */
                  sm:grid-cols-2    
                  md:grid-cols-3    
                  lg:grid-cols-4    
                  xl:grid-cols-5   
                  auto-rows-fr"'>

            {selectedLibrary.map((image) =>  
                <figure className=' relative cursor-pointer rounded-lg overflow-hidden' 
                  key={image.id} 
                  onClick={() => (setSelectedImage(image))}
                >
                    <img src={image.imgLink} alt="Copied Image" className='w-[100%] h-[100%]'/>
                    <figcaption className='absolute w-full h-[13%] flex items-center justify-center bottom-0  backdrop-blur-xs p-4 font-bold text-sm lg:text-lg  md:text-sm'> 
                      {image.date} - {image.location}
                    </figcaption>
                </figure>
            )}


            {openUI && <UI data={selectedImage} setOpen={setOpenUI}/>}

        </div>
    </section>
  )
}

export default Library
