import React from 'react'

export default function ChatBody({chat}){

    const aiStyle ="bg-white bg-opacity-40 backdrop-blur-lg dropshadow-md mr-auto"
  return (
    <div className="flex flex-col gap-4">

        {
            chat.map((message, index)=> {
                return(
                <div key={index}className={`border-[#999999] break-words
                border-2 rounded-xl self-end px-3 py-3 max-w-[80%] 
                ${message.sender === "ai" && aiStyle
                }`}>
                    <pre className='whitespaces-pre-wrap'>
                        <span>{message.message}</span>
                    </pre>
                </div>
                )
            })
        }
    </div>
  )
}
