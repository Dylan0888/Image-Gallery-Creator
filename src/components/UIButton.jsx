import React from 'react'

const UIButton = ({clickFunc, text, purpose}) => {
  
    // create way of add different volour / shadow depenidn on purpose 
  
    const style = 
        purpose === "saveUpdate" ? "bg-green-500"
        : purpose === "del" ? "bg-red-500"
        : "bg-orange-500"
  
    return (
    <button onClick={clickFunc} className={`${style}`}>
      {text}
    </button>
  )
}

export default UIButton
