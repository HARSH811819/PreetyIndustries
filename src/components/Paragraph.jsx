import React from 'react'

function Paragraph({childrens, classes,...props}) {
  return (
    <>
        {
            childrens && <div className={ `w-[80%] m-auto text-balance  sm:w-[70%]  md:w-[50%]  ${classes} my-4 ` }>{childrens}</div> 
        }
    </>
  )
}

export default Paragraph
