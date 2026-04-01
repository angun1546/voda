import { useState } from 'react'

/**
 * ChatWindow: 채팅창의 최소 기본 틀
 */
const ChatWindow = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className='fixed bottom-28 right-8 z-50 h-[500px] w-[380px] overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 transition-all'>
      <div className='flex items-center justify-between bg-primary-500 p-4 text-white'>
        <span className='font-bold'>VODA AI 어시스턴트</span>
        <button onClick={onClose} className='cursor-pointer hover:text-gray-200'>
          <i className='fa-solid fa-xmark'></i>
        </button>
      </div>
      <div className='p-4 text-gray-600'>
        질문을 입력해주세요.
      </div>
    </div>
  )
}

/**
 * ChatBtn: 채팅창 토글 버튼
 */
const ChatBtn = () => {
  const [isChatOpen, setIsChatOpen] = useState(false)

  const toggleChat = () => {
    setIsChatOpen((prev) => !prev)
  }

  return (
    <>
      <ChatWindow isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      <button
        onClick={toggleChat}
        className='fixed bottom-8 right-8 z-50 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-primary-500 text-white shadow-lg transition hover:bg-primary-400 active:scale-95'
      >
        {isChatOpen ? (
          <i className='fa-solid fa-chevron-down text-2xl'></i>
        ) : (
          <i className='fa-solid fa-robot text-2xl'></i>
        )}
      </button>
    </>
  )
}

export default ChatBtn