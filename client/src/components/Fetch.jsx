// import './Style.css'
// import React, { useState, useEffect } from 'react';
// import axios from "axios"
// function Fetch() {

//   const [data, setData] = useState("")

//   const userData = () => {
//     axios.get("https://jsonplaceholder.typicode.com/users")
//       .then((res) => {
//         console.log(res.data);
//         setData(res.data)
//       })
//       .catch((error) => {
//         console.log(error);
//       })
//   }

//   useEffect(() => {
//     userData();
//   }, [])

//   return (
//     <>
//     <table>
//       <tr>
//         <th className='one'>ID</th>
//         <th className='two'>Name</th>
//         <th className='two'>Username</th>
//         <th className='two'>Email</th>
//         <th className='two'>Company Name</th>
//       </tr>
//     </table>
//       {
//         data ?
//           (data.map((data) => {
//             return (
//               <table>
//                 <tr>
//                   <td className='one'>{data.id}</td>
//                   <td className='two'>{data.name}</td>
//                   <td className='two'>{data.username}</td> 
//                   <td className='two'>{data.email}</td> 
//                   <td className='two'>{data.company.name}</td> 
//                 </tr>
//               </table>
//             )
//           }))
//           :
//           <div> Data Not Recived</div>
//       }
//     </>
//   )
// }

// export default Fetch









import React, { useState, useEffect } from "react"
import axios from "axios"
import './Style.css'

function Fetch() {

  const [data, setData] = useState("")

  const userDatas = () => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
        setData(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    userDatas();
  }, [])

  return (
    <>

<table>
  <tr>
    <th className='one' >ID</th>
    <th className='two'>Name</th>
    <th className='two'>UserName</th>
  </tr>
</table>


{
  data? (data.map((data)=>{
return(
  <>
  <table>
    <tr>
      <td className='one'> {data.id} </td>
      <td className='two'> {data.name} </td>
      <td className='two'> {data.username} </td>
    </tr>
  </table>
  
  </>
)
  }))
  :
  <div></div>
}
    </>
  )
}

export default Fetch