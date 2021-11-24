import React from 'react'

const Checkout = () => {
    return (
        <div className = "last">
            {/* <img src = "./image"/> */}
        <div className = "forms">
         <form className = "form">
  <label >
    Name:
    <input type="text" className="name"   />
  </label>
  <label>
    Email
    <input type="text" className="email" />
  </label>
  <label>
  Mobile no:
    <input type="number" className="number" />
  </label>
  <label>
  Address
    <input type="name" className="address" />
  </label>
  
  
  <button  className = "submit" onClick="Congratulations! Your Order has been Placed!">Submit</button>
      {/* <script>
      function myFunction() {
          alert("Congratulations! Your Order has been Placed!")
      }
      </script> */}


</form>
</div>
     </div>
    )
}


export default Checkout
