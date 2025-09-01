import React, { useState} from 'react';
import toast from 'react-hot-toast';
import UI from './UI';

const HeaderInput = () => {

  

  const [openUI, setOpenUI] = useState(false);
  const [link, setLink] = useState("");


  const handleChange = (e) => {
    setLink(e.target.value)
  };


  const checkImage = (url) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
    });
  };

  const handleAddClick = async () => {
  if (!link) {
    toast.error("Please enter an image URL!");
    return;
  }
  const valid = await checkImage(link);
  if (valid) {
    setOpenUI(true);
     toast.success("Image link is valid!");
  } else {
    setOpenUI(false);
      toast.error("Invalid image URL!");
  }
};

       

   
  return (
    <>
      <div className="flex h-30 justify-center items-center mt-7">
        <div className="flex w-[80%] bg-white border border-black rounded-xl overflow-hidden
                        text-black shadow-xl shadow-black/40 transform focus-within:scale-105 duration-100 ease-in-out">
          <input
            type="text"
            placeholder="Paste Valid Image Link: (Including file type)"
            required
            name="imgLink"
            value={link}
            onChange={handleChange}
            className="flex-grow p-2 outline-none"
          />
          <button
            onClick={handleAddClick}
            className="bg-blue-500 text-white px-2 hover:bg-blue-800 duration-150 ease-in-out w-[15%] cursor-pointer"
          >
            Add
          </button>
        </div>
      </div>

        {openUI && <UI data={link}/>}



      {/* {openUI && (
        <EditImage
          {...addImage}
          setMethod={setAddImage}
          setOpen={setOpenUI}
          setLibrary={setLibrary}
          selectedLibrary={selectedLibrary}
          mode="add"
  
        />
      )} */}
    </>
  );
};

export default HeaderInput;