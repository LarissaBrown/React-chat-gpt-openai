import { useState } from 'react';
import ChatBody from './components/ChatBody';
import ChatInput from "./components/ChatInput";
import { useMutation } from 'react-query';
import { fetchResponse } from './api';

function App() {

  const [chat, setChat] = useState ([])
  console.log("chat", chat)

  const mutation = useMutation({
    mutationFn: ()=> {
      return fetchResponse(chat)
    },
    onSuccess: (data)=> console.log(data)
  })

  const sendMessage = async (message)=> {
    await Promise.resolve(setChat((prev)=> [...prev, message]))
    mutation.mutate()
  }

  return (
    
    <div className='
    bg-[#1A232E] 
    h-screen 
    py-6 
    relative 
    sm:px-16
    px-12
    text-white 
    overflow-hidden 
    flex 
    flex-col 
    justify-between 
    align-middle'>
    <div className="gradient-01 z-0 absolute"></div>
    <div className="gradient-02 z-0 absolute"></div> 

      <div className="
      uppercase 
      font-bold 
      text-2x1 
      text-center
      mb-3
      ">ChatGpt2.0</div>

      <div className="h[90%] overflow-auto w-full max-w-4x1 min-w-[20rem] py-8 px-4 self-center">
        <ChatBody chat={chat}/>
      </div>

      <div className="w-full max-w-4xl min-w-[20rem] self-center">
        <ChatInput sendMessage={sendMessage}/>
      </div>

    </div>
  )
}

export default App
