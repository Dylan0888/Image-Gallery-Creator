import React, {useState, useEffect, useContext} from 'react'
import UI from './UI';
import {LibContext} from '../context/libraryContext'


// import EditImage from './EditImage'

const Library = () => {
  
  const {selectedLibrary} = useContext(LibContext)

  
  const [selectedImage, setSelectedImage] = useState();
  const [openUI, setOpenUI] = useState(false);
  
  useEffect(()=> {
    setOpenUI(
      selectedImage ? true : false
    )
   
  },[selectedImage])
  
  return (
    <section className='m-2 p-2 shadow-xl rounded-xl'>
        <div className='grid grid-cols-3 gap-5'>

            {selectedLibrary.map((image) =>  
                <figure className=' relative cursor-pointer rounded-lg overflow-hidden' 
                  key={image.id} 
                  onClick={() => (setSelectedImage(image))}
                >
                    <img src={image.imgLink} alt="Copied Image" className='w-[100%] h-[100%]'/>
                    <figcaption className='absolute w-full h-[12%] flex items-center justify-center bottom-0  backdrop-blur-xs p-4 font-bold'> 
                      {image.date} - {image.location}
                    </figcaption>
                </figure>
            )}


            {openUI && <UI data={selectedImage}/>}

            

            {/* {openPopup && <EditImage {...selectedImage} setMethod={setSelectedImage} setOpen={setOpenPopup} mode={"edit"} setLibrary={setLibrary} selectedLibrary={selectedLibrary}/>} */}

        </div>
    </section>
  )
}

export default Library
