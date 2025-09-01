import React from 'react'

const UIButton = ({clickFunc, text, purpose}) => {
  
    // create way of add different volour / shadow depenidn on purpose 
  
    const style = 
        purpose === "saveUpdate" ? "bg-blue-500/40 hover:bg-blue-500 focus:bg-blue-800"
        : purpose === "del" ? "bg-red-500/40 hover:bg-red-500 focus:bg-red-800"
        : "bg-orange-500/40 hover:bg-orange-500 focus:bg-orange-800"
  
    return (
    <button onClick={clickFunc} className={`${style} p-1 rounded-lg duration-150 ease-in-out hover:scale-115 text-white/40 hover:text-white`}>
      {text}
    </button>
  )
}

export default UIButton
