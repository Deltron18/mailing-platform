import React, { useState } from 'react'
import { IoMdStar } from 'react-icons/io'
import { LuPencil } from 'react-icons/lu'
import { MdOutlineDrafts, MdOutlineKeyboardArrowDown, MdOutlineWatchLater} from 'react-icons/md'
import {TbSend2 } from 'react-icons/tb'
import { useDispatch } from 'react-redux'
import { setOpen } from '../redux/appslice'

const Sidebaritems = [
  {
    icon: <LuPencil size={"24px"} />,
    text: "inbox"
  },
  {
    icon: <IoMdStar size={"24px"} />,
    text: "starred"
  },
  {
    icon: <MdOutlineWatchLater size={"24px"} />,
    text: "snoozed"
  },
  {
    icon: <TbSend2 size={"24px"} />,
    text: "sent"
  },
  {
    icon: <MdOutlineDrafts size={"24px"} />,
    text: "drafts"
  },
  {
    icon: <MdOutlineKeyboardArrowDown size={"24px"} />,
    text: "more"
  },
]

const Sidebar = () => {
  // const [open, setOpen] = useState(false)
  const dispatch = useDispatch();
  return (
    <div className='w-[15%]'>
      <div className='p-3'>
        <button onClick={()=>
         {
          // console.log('clicked');
          dispatch(setOpen(true))}}
          // style={{ zIndex: 9999, position: 'relative' }}
          className='flex items-center gap-2 p-4 rounded-2xl hover:shadow-lg cursor-pointer bg-[#c2e7ff]'>
          <LuPencil size={"24px"} />
          compose
        </button>
      </div>
      <div className='text-gray-500'>
        {
          Sidebaritems.map((item, index) => {
            return (
              <div key={index} className='flex items-center gap-4 rounded-r-full pl-6 py-1 hover:bg-gray-200 cursor-pointer'>
                {item.icon}
                <p>{item.text}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Sidebar