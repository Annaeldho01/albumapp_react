import React, { useEffect, useState } from 'react'
import NavBar from './Navbar'
import axios from 'axios'


const ViewAll = () => {
    const [data,changeData] = useState([])
    const fetchData=()=>{
      axios.get("https://jsonplaceholder.typicode.com/albums").then(
        (response)=>{
          changeData(response.data)
        }
      ).catch().finally()
    }

    useEffect(()=>fetchData(),[])

    return (
        <div>
            <NavBar/>
            <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              
                <table className="table table-striped">
                    <thead>
                        <tr>
                          
                          <th scope="col">USER ID</th>
                          <th scope="col">ID</th>
                          <th scope="col">TITLE</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map(
                            (value,index)=>{
                                return<tr>
                          <td>{value.userId}</td>
                          <td>{value.id}</td>
                          <td>{value.title}</td>
                        </tr>
                            }
                        )}
                        
                      </tbody>
                  

                </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewAll