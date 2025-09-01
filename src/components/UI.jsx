import React, { useEffect, useState, useContext } from 'react'
import {LibContext} from '../context/libraryContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import toast from 'react-hot-toast'
import UIButton from './UIButton'
import UIInput from './UIInput'

const UI = ({ data, setOpen }) => {
  //Data - either obj or string 
  //setOpen - resp for closing ui 

  const {selectedLibrary, setSelected} = useContext(LibContext)
  const [newImage, setNew] = useState(
    {id: "", imgLink: "", date:"", location:"", desc: ""}
  ) //creates a new obj to be saved back to library

useEffect(() => {
  if (!data) return; 
  
  const imageObj =
    typeof data === "string"
      ? {
          id: crypto.randomUUID(),
          imgLink: data,
          date: "",
          location: "",
          desc: "",
        }
      : {
        id: data.id,
        imgLink: data.imgLink,
        date: data.date,
        location: data.location,
        desc: data.desc
      };

  setNew(imageObj);
}, [data]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value)
    setNew((prev) => ({ ...prev, [name]: value }));
  };

  const closeWindow = () =>{
    setOpen(prev => !prev)
  }

  const clearForm = ()=>{
    setNew(prev => ({
      ...prev,
      date: "",
      location: "",
      desc: ""
    }))
  }

  //Removes the clicked img and adds newimage with the changes 
  const saveChanges = () => {

    if (newImage.date !=="" && newImage.location !== "" && newImage.desc !== ""){
      setSelected( (prevLib) => [
        ...prevLib.filter(img => img.id !== newImage.id), //Removes existing copy 
        newImage // adds back the new object 
      ]) 
      toast.success("Image saved!");
      closeWindow()
    }else{
      toast.error("Please Fill in all fields!")
    }
  }

  const deleteImage = () => {
    setSelected( selectedLibrary.filter(img => img.id !== newImage.id)) 
    closeWindow()
  }

  return (
      
    <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50">
        <section className="min-w-[50%] max-w-[70%] bg-neutral-800 shadow-2xl p-4 rounded-xl relative">
            <div className="flex flex-row  gap-2">
                {/* Image */}
                <div className="w-[50%] min-h-[200px] bg-gray-700 flex items-center justify-center rounded-lg">
                    {newImage.imgLink ? (
                    <img src={newImage.imgLink} alt="img" className="w-full h-full object-cover rounded-lg" />
                    ) : (
                    <span className="text-gray-400">No Image</span>
                    )}
                </div>

                    {/* Form */}
                <article className="w-[50%] flex flex-col gap-2 bg-amber-300">
                    <UIInput
                    htmlFor="date-input"
                    inputName="date"
                    labelText="Date:"
                    value={newImage.date}
                    handleChange={handleChange}
                    type="text"
                    />

                    <UIInput
                    htmlFor="location-input"
                    inputName="location"
                    labelText="Location:"
                    value={newImage.location}
                    handleChange={handleChange}
                    type="text"
                    />

                    <UIInput
                    htmlFor="desc-input"
                    inputName="desc"
                    labelText="Description:"
                    value={newImage.desc}
                    handleChange={handleChange}
                    type="area"
                    />

                    {/* Buttons */}
                    <div className="flex-1 flex justify-center items-center gap-5 mt-2">
                    {data !== "string" && (
                        <UIButton
                        clickFunc={() => deleteImage()}
                        text={<FontAwesomeIcon icon={faTrashCan} />}
                        purpose="del"
                        />
                    )}

                    <UIButton clickFunc={clearForm} text="Clear" purpose="clear" />

                    <UIButton
                        clickFunc={saveChanges}
                        text={data === "string" ? "Save" : "Update"}
                        purpose="saveUpdate"/>

                    </div>
                </article>
            </div>

            {/* Close Button */}
            <div
            onClick={() => closeWindow()}
            className="absolute -top-4 -right-4 bg-red-500/70 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:bg-red-600 text-white text-sm shadow-md"
            >
            <FontAwesomeIcon icon={faX} />
            </div>
        </section>
        </div>

        )
    }


export default UI