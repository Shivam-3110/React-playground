import React from 'react'

function Form () {
  return (
    <div>
        <h1> Create User </h1>
        <form>
            <input type="text"
             placeholder='enter the name' name="name"/>
             <input type="email"
             placeholder="enter the email" name="email"/>
              <input type="Number"
             placeholder="enter the mobile No" name="mobile"/>
              <input type="url"
             placeholder="enter the image url" name="image"/>
             <button> Add user </button>
        </form>
    </div>
  )
}

export default Form;