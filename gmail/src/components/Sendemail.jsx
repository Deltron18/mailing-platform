import React, { useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { useDispatch, useSelector } from 'react-redux'
import { setOpen } from '../redux/appslice'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../Firebase'

const Sendemail = () => {
const [formadta, setFormadta] = useState({
  to:"",
  subject:"",
  message:""
})

const open = useSelector(store => store.appslice.open);
  const dispatch = useDispatch()

  const changehandler= (e)=>{
setFormadta({...formadta,[e.target.name]:e.target.value});
  }

  const submithandler =  async (e)=>{
e.preventDefault();
await addDoc(collection(db ,"emails" ),{
  to:formadta.to,
  subject:formadta.subject,
  message:formadta.message,
  createdAt:serverTimestamp(),
})
dispatch(setOpen(false));
setFormadta({
  to:"",
  subject:"",
  message:""
})
  }

  return (
    <div className={`${open ?  'block'  : 'hidden'} bg-white max-w-6xl shadow-xl shadow-slate-600 rounded-t-md`}>
      <div className=' flex px-3 py-2 bg-[#f2f6fc] justify-between rounded-t-md'>
        <h1>new message</h1>
        <div onClick={() => {
          dispatch(setOpen(false))}}
          className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
          <RxCross2 sixe={"20px"} />
        </div>
      </div>
      <form onSubmit={submithandler} className='flex flex-col p-3 gap-2 bg-white '>
        <input  onChange={changehandler} value={formadta.to}  name="to" type='text' placeholder='to' className='outline-none py-1' />
        <input  onChange={changehandler} value={formadta.subject} name="subject" type='text' placeholder='subejct' className='outline-none py-1' />
        <textarea onChange={changehandler} value={formadta.message} name="message" cols={'30'} rows={10} className='outline-none p-1'></textarea>
        <button type='submit' className='rounded-full w-fit px-4 text-white font-medium bg-blue-800'>send</button>
      </form>
    </div>
  )
}

export default Sendemail