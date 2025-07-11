import React, { useState } from 'react'
import { MdCropSquare, MdInbox, MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { FaCaretDown, FaUserFriends, } from 'react-icons/fa'
import { IoMdMore, IoMdRefresh } from 'react-icons/io'
import { GoTag } from 'react-icons/go'
import Mesagges from './Mesagges'

const mailtype = [
  {
    icon: <MdInbox size={"20px"} />,
    text: "primary"
  },
  {
    icon: <GoTag size={"20px"} />,
    text: "promotions"
  },
  {
    icon: <FaUserFriends size={"20px"} />,
    text: "social"
  }
]

const Inbox = () => {
  const [mailtypeselected, setMailtypeselected] = useState(0);
  return (
    <div className='flex-1 bg-white rounded-xl mx-5'>
      <div className='flex items-center justify-between px-4'>
        <div className='flex items-center gap-2 text-gray-700 py-2'>
          <div className='flex items-center gap-1'>
            <MdCropSquare size={"20px"} />
            <FaCaretDown size={"20px"} />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
            <IoMdRefresh size={"20px"} />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
            <IoMdMore size={"20px"} />
          </div>
        </div>
        <div className='flex items-center gap-2'>
<p className='text-sm text-gray-500'>1-50 of 1000</p>
<button className='hover:rounded-full hover:bg-gray-100'>
  <MdKeyboardArrowLeft size={"20px"}/>
</button>
<button className='hover:rounded-full hover:bg-gray-100'>
<MdKeyboardArrowRight size={"20px"}/>
</button>
        </div>
      </div>
      <div className='h-[90vh] overflow-y-auto'>
        <div className='flex items-center gap-3'>
          {
            mailtype.map((item, index) => {
              return (
                <button key={index}
                className={`${mailtypeselected === index ? 'border-b-4 border-b-blue-400 text-blue-400' :'border-b-4 border-b-transparent'} flex items-center w-52 hover:bg-gray-100 gap-5 p-4`}
                onClick={()=>{setMailtypeselected(index)}}>
                  {item.icon}
                  <span>{item.text}</span>
                </button>
              )
            })
          }
        </div>
        <Mesagges/>
      </div>
    </div>
  )
}

export default Inbox