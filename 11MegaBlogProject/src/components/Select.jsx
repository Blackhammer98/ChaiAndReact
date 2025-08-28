import React, { useId } from 'react'

function Select({
    options = [],//by default having a array to avoid crash in app when we loop option in select field
    lable,
    className = "",//by default having an empty string to avoid crash in app when we use custom classes in select field
    ref,
    ...props 
}) {
    const id = useId()
  return (
    <div className='w-full'>
        {lable && <lable htmlFor = {id} className=""></lable>}
        <select
        {...props}
            id={id}
            ref={ref}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            >
        {options?.map((option) => (
            <option key={option} value={option} /*it always need a value of an array */>
              {option}
            </option>
        ) )}
            
        </select>
    </div>
  )
}

export default Select