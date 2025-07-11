import React, { useEffect, useState } from 'react'
import Message from './Message'
import { collection, getDocs, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../Firebase'
import { useDispatch, useSelector } from 'react-redux'
import { setEmails } from '../redux/appslice'

const Mesagges = () => {
const dispatch = useDispatch();
const {searchtext, emails} = useSelector(store=>store.appslice);
const [tempemail, setTempemail] = useState(emails)

// console.log(emails);


useEffect(() => {
  const q = query(collection(db,"emails"), orderBy('createdAt','desc'));
  const unsubscribe = onSnapshot(q, (snapshot)=>{
    const allemails = snapshot.docs.map((doc)=>({...doc.data
      (), id:doc.id}));
      // console.log(allemails)
      dispatch(setEmails(allemails));
  })
// cleanuppp
return()=> unsubscribe();
}, []);

useEffect(() => {
const filteredemail = emails?.filter((email)=>{
  return email?.subject?.toLowerCase().includes(searchtext.toLowerCase()) || email?.to?.toLowerCase().includes(searchtext.toLowerCase()) || email?.message?.toLowerCase().includes(searchtext.toLowerCase())
})
setTempemail(filteredemail);
}, [searchtext,emails]);


  return (
    <div>
      {
        tempemail && tempemail?.map((email)=> <Message email={email}/>)
      }
     


     


    </div>
  )
}

export default Mesagges