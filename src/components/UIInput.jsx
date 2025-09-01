import React from 'react';

const ImageInput = ({ htmlFor, inputName, labelText, value, handleChange, type }) => {
   return ( 
   <div className="flex-1 flex items-center gap-3 min-h-[40px]">
      <label htmlFor={htmlFor} className="font-bold">{labelText}</label>
      {type === "text" ? (
        <input
          type="text"
          id={htmlFor}
          name={inputName}
          value={value || ""}
          onChange={handleChange}
          className="bg-white text-black outline-none p-1 rounded-md flex flex-grow shadow-black/70 shadow-md"
        />
      ) : (
        <textarea
          id={htmlFor}
          name={inputName}
          value={value || ""}
          onChange={handleChange}
          className="bg-white text-black outline-none p-1 rounded-md flex flex-grow shadow-black/70 shadow-md"
        />
      )}
    </div>
  );
};

export default ImageInput;