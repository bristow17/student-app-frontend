import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddStudent = () => {

    const [data, setdata] = useState(

        {
            // "_id": "",
            "firstname": "",
            "lastname": "",
            "college": "",
            "dob": "",
            "course": "",
            "mobile": "",
            "email": "",
            "address": "",


        }
    )

    const inputhandler = (event) => {
        setdata({ ...data, [event.target.name]: event.target.value })
    }

    const readvalue = () => {
        axios.post("http://localhost:8080/add",data).then(
            (response)=>{
                console.log(response.data)
                    if (response.data.status=="success") {
                        alert("Added Successfully");
                    } else {
                        alert(response.data);
                    }
                
            }
        ).catch(
            (error)=>{
                    alert("error");
            }
        )
    }

  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="label form-label">First Name</label>
                                <input type="text" className="input form-control" name='firstname' value={data.firstname} onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="label form-label">Last Name</label>
                                <input type="text" className="input form-control" name='lastname' value={data.lastname} onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="label form-label">College</label>
                                <input type="text" className="input form-control" name='college' value={data.college} onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="label form-label">DOB</label>
                                <input type="date" name="dob" id="" className="form-control" value={data.dob} onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="label form-label">Course</label>
                                <input type="text" className="input form-control" name='course' value={data.course} onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="label form-label">Mobile</label>
                                <input type="text" className="input form-control" name='mobile' value={data.mobile} onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="label form-label">Email</label>
                                <input type="text" className="input form-control" name='email' value={data.email} onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="label form-label">Address</label>
                                <textarea name="address" id="" className="form-control" value={data.address} onChange={inputhandler}></textarea>
                            </div>
                            {/* <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="label form-label">__v</label>
                        <input type="text" className="input form-control" />
                        </div> */}
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-primary" onClick={readvalue}>ADD STUDENT</button>
                            </div>
                </div>

                </div>
            </div>
        </div>
    
    </div>
  )
}

export default AddStudent