import {useState} from 'react';

export default function ChatInput({sendMessage}){

  const [value, setValue] = useState("")

  const handleSubmit = () => {
    if(value === "") return;
    sendMessage({sender: "user", message: value})
    setValue("")
  }
  return (
    <div className='w-full bg-white bg-opacity-10 max-h-40 rounded-lg py-4 overflow-auto relative'>
        <textarea 
        onKeyDown={(e)=>{
          e.keyCode === 13 && e.shiftKey === false && handleSubmit()
        }} 
        rows={1}
        className='border-0 bg-transparent outline-none w-11/12'
        value={value}
        type="text"
        onChange={(e)=> setValue(e.target.value)}/>
        <img onClick={handleSubmit} width={20} className="absolute top-4 right-3 hover:cursor-pointer ease-in duration-100 hover:scale-125" src="./src/assets/send.png" alt="send-button"/>
    </div>
  )
}