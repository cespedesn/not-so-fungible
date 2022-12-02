import React from 'react'

function Logout({setCurrentUser}) {

    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => setCurrentUser(null));
      }

  return (
    <div>
      <button className='button' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout