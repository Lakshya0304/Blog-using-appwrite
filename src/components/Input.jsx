import { forwardRef, useId } from "react"
import React from 'react'

const Input = forwardRef(function Input(
    {   
        label ,
        type = "text",
        className = "" ,
        ...props 

    },ref)
    {

    const id = useId();

    return (
        <div className="w-full">
            {/* If label given then label get displayed */}

            {/* if( {label} ){
                <label className="inline-block mb-1 pl-1" htmlFor={id}>
                    {label}
                </label>
            } */}

            {label && 
                <label className="inline-block mb-1 pl-1" htmlFor={id}>
                    {label}
                </label>
            }
            <input
                type={type} 
                className={`p-3 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
                ref = { ref }
                {...props}
                id={id}
            />  
        </div>
    )

    }
)

export default Input