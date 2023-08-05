import React from 'react'
import { useState } from 'react'
import User from './HospitalApi'
import UserCard from './DisplayCard'
import Filter from './Filter'



const uniqueList = [
  ...new Set(
    User.map((curElem)=>{
      return curElem.location
    })
  ),
  "All",
]
const UserData = () => {
  const [data,setData]=useState(User)
  const [userList,setUserList] = useState(uniqueList)

  const filterItem = (location)=>{
    if (location ==="All"){
      setData(User)
      return ;
    }
    const updateList = User.filter((curElem)=>{
      return curElem.location === location
    })

    setData(updateList)

  }
  return (
    <>
    <Filter filterItem={filterItem} userList={userList}></Filter>
    <UserCard data={data}></UserCard>
    </>
  )
}

export default UserData
