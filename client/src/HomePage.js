import React, { useEffect, useState } from 'react'

function HomePage() {
  const [user, setUser] = useState(null);
// const [nfts, setNfts] = useState([])
// const [errors, setErrors] = useState(false)

//     useEffect(() => {
//         fetch('/nfts')
//         .then(res => {
//             if(res.ok){
//                 res.json().then((data) => {
//                     console.log('data', data)
//                     setNfts(data)
//                 })
//             } else {
//                 res.json().then(data => setErrors(data.error))
//             }
//         })
//     })


useEffect(() => {
  fetch("/login").then((res) => {
    if (res.ok) {
      res.json().then((user) => setUser(user));
    }
  });
}, []);

if (user) {
  return (
    <div>
      <h1>Welcome, {user.user_name}!</h1>
    </div>
  )
  }else {
    return null
  }
}
export default HomePage