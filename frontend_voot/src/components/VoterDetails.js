import React, { useState } from 'react'
import Navbar from './Navbar'
// import { Button } from 'react-bootstrap';
// import Edit_Profile from './Edit_Profile';
import { Navigate } from 'react-router-dom';

const VoterDetails = () => {


    const [Records, setRecords] = useState([]);
    const [redirectToEditProfile, setRedirectToEditProfile] = useState(false);
    const [userRegistration, setUserRegistration] = useState({
        employmentStatus: "",
        jobRole: "",
        industry: "",
        experience: "",
        spouseName: "",
        dependentMembers: "",
        education: "",
        institute: "",
        certifications: "",
    })
    const handleinput = (e) => {
        const { name, type, checked, value } = e.target;
        setUserRegistration({ ...userRegistration, [name]: type === "checkbox" ? checked : value, });
    };
    const handelsubmit = async (e) => {
        e.preventDefault();
        const newRecords = ({ ...userRegistration, id: new Date().getTime().toString() })
        console.log(Records);
        setRecords([...Records, newRecords]);
        console.log(Records);
        alert("Voter Details Save Successfully..!")
        setRedirectToEditProfile(true);
    };
    // useEffect(() => {
    //     console.log(Records);
    // }, [Records]);

    const educationLevels = [
        "No Formal Education",
        "Primary Education",
        "Secondary Education",
        "High School Diploma or Equivalent",
        "Vocational Training or Certification",
        "Associate Degree",
        "Bachelor's Degree",
        "Master's Degree",
        "Doctorate (PhD)",
        "Professional Degree (e.g., MD, JD)",
        "Postdoctoral Studies",
        "Other",
    ];
    if (redirectToEditProfile) {
        // Conditionally render Navigate component
        return <Navigate to="/Edit_Profile" />;
    }

    return (
        <>
            <Navbar />
            {/* <div className="container-fluid bg-dark vh-100 d-flex justify-content-center align-items-center"> */}
            <form action="" onSubmit={handelsubmit} className='bg-secondary mt-0 p-3'>
                <h1 className='text-center p-5' style={{ color: 'white' }}><strong>Voter Details</strong></h1>
                <div className="container  justify-content-center w-50 mt-2">


                    <div className="card mb-4">
                        <div className="card-header text-center bg-warning bg-gradient">
                            <h2>Occupation Details</h2>
                        </div>
                        <div className="card-body">

                            <form>
                                <div className="mb-3">
                                    <label htmlFor="employmentStatus" className="form-label"><strong>Employee Status : </strong></label>
                                    <select
                                        id="employmentStatus"
                                        name='employmentStatus'
                                        className="form-select"
                                        value={userRegistration.employmentStatus}
                                        onChange={handleinput}
                                        required>
                                        <option value="" hidden>Select Your Status</option>
                                        <option value="employed">Employee</option>
                                        <option value="unemployed">Unemployee</option>
                                        <option value="student">Student</option>
                                    </select>
                                </div>


                                <div className="mb-3">
                                    <label htmlFor="jobRole" className="form-label"><strong>Job Role : </strong></label>
                                    <input
                                        type="text"
                                        id="jobRole"
                                        name='jobRole'
                                        className="form-control"
                                        value={userRegistration.jobRole}
                                        onChange={handleinput}
                                        required />
                                </div>


                                <div className="mb-3">
                                    <label htmlFor="industry" className="form-label"><strong>Industry : </strong></label>
                                    <input
                                        type="text"
                                        id="industry"
                                        name='industry'
                                        value={userRegistration.industry}
                                        onChange={handleinput}
                                        className="form-control"
                                        required />
                                </div>


                                <div className="mb-3">
                                    <label htmlFor="experience" className="form-label"><strong>Years of Experience : </strong></label>
                                    <select
                                        id="experience"
                                        name='experience'
                                        value={userRegistration.experience}
                                        onChange={handleinput}
                                        required
                                        className="form-select">
                                        <option value="" hidden>Select Your Experience</option>
                                        <option value="0">0 - 1 Years</option>
                                        <option value="1">0 - 1 Years</option>
                                        <option value="2">1 - 2 Years</option>
                                        <option value="3">2 - 3 Years</option>
                                        <option value="4">3 - 4 Years</option>
                                        <option value="5">4 - 5 Years</option>
                                    </select>
                                </div>

                            </form>
                        </div>
                    </div>





                    <div className="card mb-4">
                        <div className="card-header text-center bg-warning bg-gradient">
                            <h2>Family Details</h2>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="spouseName" className="form-label"><strong>Spouse Name : </strong></label>
                                    <input
                                        type="text"
                                        id="spouseName"
                                        name='spouseName'
                                        value={userRegistration.spouseName}
                                        onChange={handleinput}
                                        className="form-control"
                                        required />
                                </div>


                                <div className="mb-3">
                                    <label htmlFor="dependentMembers" className="form-label"><strong>Number of Dependent Family Members : </strong></label>
                                    <input
                                        type="number"
                                        id="dependentMembers"
                                        name='dependentMembers'
                                        value={userRegistration.dependentMembers}
                                        onChange={handleinput}
                                        className="form-control"
                                        required />
                                </div>

                            </form>
                        </div>
                    </div>



                    <div className="card mb-4">
                        <div className="card-header text-center bg-warning bg-gradient">
                            <h2>Education Details</h2>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="education" className="form-label"><strong>Select Your Highest Level of Education : </strong></label>
                                    <select
                                        id="education"
                                        className="form-select"
                                        value={userRegistration.education}
                                        onChange={handleinput}
                                        name='education'
                                    >
                                        <option value="" hidden>Select Your Education : </option>
                                        {educationLevels.map((level, index) => (
                                            <option key={index} value={level}>
                                                {level}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="institute" className="form-label"><strong>Institute / College : </strong></label>
                                    <input
                                        type="text"
                                        name='institute'
                                        id="institute"
                                        value={userRegistration.institute}
                                        onChange={handleinput}
                                        className="form-control"
                                        required />
                                </div>


                                <div className="mb-3">
                                    <label htmlFor="certifications" className="form-label"><strong>Certifications : </strong></label>
                                    <input
                                        id="certifications"
                                        name='certifications'
                                        type="file"
                                        value={userRegistration.certifications}
                                        onChange={handleinput}
                                        className="form-control"
                                        multiple
                                        required
                                    />
                                </div>
                            </form>
                        </div>
                    </div>



                    <div className="text-center mb-5">
                        <button
                            className="btn btn-primary "
                            type="submit"
                            id='button'
                            name='button'
                            style={{
                                height: "50px",
                                width: "200px",
                                backgroundColor: "#4eac3f",
                                color: "white",
                                border: "none",
                                borderRadius: "5px",
                                fontSize: "30px"
                              }}
                        >
                            Save Details
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default VoterDetails;