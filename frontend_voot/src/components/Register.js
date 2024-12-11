import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import './registration.css';


const Register = () => {

    const talukas = ["Karveer", "Panhala", "Shanuwadi", "Kogal", "Hatkanangle", "Shirol", "Gadhinglaj", "Chandgad", "Ajra", "Bhudergad", "Radhanagari", "Gagan Bavda"]

    const districts = ["Ahmednagar", "Akola", "Amravati", "Chhatrapati Sambhajinagar", "Beed", "Bhandara", "Buldhana", "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai City", "Mumbai Suburban", "Nagpur", "Nanded", "Nandurbar", "Nashik", "Osmanabad", "Palghar", "Parbhani", "Pune", "Raigad", "Ratnagiri", "Sangli", "Satara", "Sindhudurg", "Solapur", "Thane", "Wardha", "Washim", "Yavatmal"]

    const [Records] = useState([]);
    const [userRegistration, setUserRegistration] = useState({
        firstname: "",
        lastname: "",
        dob: "",
        email: "",
        mobileno: "",
        altmobileno: "",
        gender: "",
        address: "",
        village: "",
        taluka: "",
        district: "",
        state: "",
        pincode: "",
        photo: null,
        kycvideo: null,
        kycdocument_1: null,
        kycdocument_2: null,
        languages: [],
        terms: false,
        username: "",
        password: "",
    });
    const navigate = useNavigate();

    const handleInput = (e) => {
        const { name, type, checked, value, files } = e.target;


        // If the input is a checkbox for languages, handle it separately
        if (type === "checkbox" && name === "languages") {
            setUserRegistration((prevState) => ({
                ...prevState,
                languages: checked
                    ? [...prevState.languages, value] // Add the language if checked
                    : prevState.languages.filter((item) => item !== value), // Remove the language if unchecked
            }));
        } else {
            // For other fields, handle the input normally
            setUserRegistration((prevState) => ({
                ...prevState,
                [name]: type === "checkbox" ? checked : files ? files[0] : value,
            }));
        }

        console.log(userRegistration.languages); // Ensure this is logged after the state is updated
    };




    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (const key in userRegistration) {
            formData.append(key, userRegistration[key]);
        }

        try {
            const response = await fetch("http://localhost:5000/api/register", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || "Unknown error");
            }

            alert("Registration Successful");
            navigate("/");
        } catch (error) {
            console.error("Error during registration:", error.message);
            alert(`Error: ${error.message}`);
        }
    };

    useEffect(() => {
        console.log(Records);
    }, [Records]);


    return (
        <>
            <h1 className="text-center m-0 bg-dark pt-5" style={{ color: "yellow" }}><strong>Voter Registration Form</strong></h1>

            <div className="bg-dark text-light  d-flex justify-content-center  align-items-center ">

                <div className="col-md-8 col-sm-6 bg-white text-dark shadow p-4 mt-5 mb-5 border-secondary rounded">

                    <form action="" onSubmit={handleSubmit}>


                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label className="form-label" htmlFor="firstname"><strong>First Name:</strong></label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="firstname"
                                    name="firstname"
                                    autoComplete="off"
                                    placeholder="Enter your first name"
                                    required
                                    value={userRegistration.firstname}
                                    onChange={handleInput}
                                />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label" htmlFor="lastname"><strong>Last Name:</strong></label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="lastname"
                                    name="lastname"
                                    autoComplete="off"
                                    placeholder="Enter your last name"
                                    required
                                    value={userRegistration.lastname}
                                    onChange={handleInput}
                                />
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-md-6">
                                <label className="form-label mb-2 " htmlFor="email"><strong>Email Id:</strong></label>
                                <input
                                    className="form-control"
                                    type="email"
                                    id="email"
                                    name="email"
                                    autoComplete="off"
                                    placeholder="Enter your email address"
                                    required
                                    value={userRegistration.email}
                                    onChange={handleInput}
                                />
                            </div>

                            <div className="col-md-6 mb-3">
                                <label className="form-label" htmlFor="dateofbirth"><strong>Date Of Birth:</strong></label>
                                <input
                                    className="form-control col-md-12 mb-3"
                                    type="date"
                                    id="dob"
                                    name="dob"
                                    autoComplete="off"
                                    required
                                    value={userRegistration.dob}
                                    onChange={handleInput}
                                />
                            </div>
                        </div>


                        <div className="row">
                            {/* Mobile Number */}
                            <div className="col-md-6 mb-3">
                                <label className="form-label" htmlFor="mobileno"><strong>Mobile No:</strong></label>
                                <input
                                    className="form-control"
                                    type="text" // Use 'text' instead of 'number' for better length validation
                                    id="mobileno"
                                    name="mobileno"
                                    autoComplete="off"
                                    placeholder="Enter your mobile number"
                                    pattern="\d{10}"
                                    minLength={10}
                                    maxLength={10}
                                    required
                                    value={userRegistration.mobileno}
                                    onChange={handleInput}
                                />

                            </div>

                            {/* Alternate Mobile Number */}
                            <div className="col-md-6 mb-3">
                                <label className="form-label mb-2" htmlFor="altmobileno"><strong>Alternate Mobile No:</strong></label>
                                <input
                                    className="form-control"
                                    type="text" // Use 'text' to ensure better control over length
                                    id="altmobileno"
                                    name="altmobileno"
                                    autoComplete="off"
                                    placeholder="Enter alternate mobile number"
                                    pattern="\d{10}"
                                    minLength={10}
                                    maxLength={10}
                                    required
                                    value={userRegistration.altmobileno}
                                    onChange={handleInput}
                                />

                            </div>
                        </div>




                        <div className="mt-1 mb-3">
                            <label ><strong>Gender:</strong></label>
                            <input className="ms-3" style={{ width: '20px', height: '20px' }} type="radio" id="male" name="gender" value="male" onChange={handleInput} checked={userRegistration.gender === 'male'} /><strong className="ms-2">Male</strong>
                            <input className="ms-3" style={{ width: '20px', height: '20px' }} type="radio" id="female" name="gender" value="female" onChange={handleInput} checked={userRegistration.gender === 'female'} /><strong className="ms-2">Female</strong>
                            <input className="ms-3" style={{ width: '20px', height: '20px' }} type="radio" id="other" name="gender" value="other" onChange={handleInput} checked={userRegistration.gender === 'other'} /><strong className="ms-2">Other</strong>
                        </div>



                        <div className="mb-3">
                            <label className="form-label" htmlFor="address"><strong>Address:</strong></label>
                            <textarea
                                className="form-control"
                                type="textarea"
                                id="address"
                                name="address"
                                autoComplete="off"
                                placeholder="Enter your address"
                                required
                                value={userRegistration.address}
                                onChange={handleInput} />
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label className="form-label" htmlFor="village"><strong>Village:</strong></label>
                                <input
                                    className="form-control "
                                    type="text"
                                    id="village"
                                    name="village"
                                    autoComplete="off"
                                    placeholder="Enter your city name"
                                    required
                                    value={userRegistration.city}
                                    onChange={handleInput}
                                />
                            </div>


                            <div className="col-md-6 mb-3">
                                <label className="from-label mb-2" htmlFor="taluka"><strong>Taluka:</strong></label>
                                <select
                                    type="text"
                                    id="taluka"
                                    name="taluka"
                                    className="form-control"
                                    value={userRegistration.taluka}
                                    onChange={handleInput}
                                    required>
                                    <option value="" hidden>Select Your Taluka</option>
                                    {talukas.map((taluka) => (
                                        <option key={taluka} value={taluka}>
                                            {taluka}
                                        </option>
                                    ))}
                                </select>
                            </div>


                            <div className="col-md-6">
                                <label className="from-label mb-2" htmlFor="district"><strong>District:</strong></label>
                                <select
                                    type="text"
                                    id="district"
                                    name="district"
                                    className="form-control"
                                    value={userRegistration.district}
                                    onChange={handleInput}
                                    required>
                                    <option value="" hidden>Select Your District</option>
                                    {districts.map((district) => (
                                        <option key={district} value={district}>
                                            {district}
                                        </option>
                                    ))}
                                </select>
                            </div>


                            <div className="col-md-6">
                                <label className="from-label mb-2" htmlFor="state"><strong>State:</strong></label>
                                <select
                                    id="state"
                                    name="state"
                                    required
                                    className="form-select"
                                    value={userRegistration.state}
                                    onChange={handleInput}>
                                    <option value="" hidden>Select Your State</option>
                                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                    <option value="Assam">Assam</option>
                                    <option value="Bihar">Bihar</option>
                                    <option value="Chhattisgarh">Chhattisgarh</option>
                                    <option value="Goa">Goa</option>
                                    <option value="Gujarat">Gujarat</option>
                                    <option value="Haryana">Haryana</option>
                                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                                    <option value="Jharkhand">Jharkhand</option>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="Kerala">Kerala</option>
                                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                                    <option value="Maharashtra">Maharashtra</option>
                                    <option value="Manipur">Manipur</option>
                                    <option value="Meghalaya">Meghalaya</option>
                                    <option value="Mizoram">Mizoram</option>
                                    <option value="Nagaland">Nagaland</option>
                                    <option value="Odisha">Odisha</option>
                                    <option value="Punjab">Punjab</option>
                                    <option value="Rajasthan">Rajasthan</option>
                                    <option value="Sikkim">Sikkim</option>
                                    <option value="Tamil Nadu">Tamil Nadu</option>
                                    <option value="Telangana">Telangana</option>
                                    <option value="Tripura">Tripura</option>
                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                    <option value="Uttarakhand">Uttarakhand</option>
                                    <option value="West Bengal">West Bengal</option>
                                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                    <option value="Chandigarh">Chandigarh</option>
                                    <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                    <option value="Ladakh">Ladakh</option>
                                    <option value="Lakshadweep">Lakshadweep</option>
                                    <option value="Puducherry">Puducherry</option>
                                </select>
                            </div>
                        </div>


                        <div className="mb-3">
                            <label className="form-label mb-2" htmlFor="pincode"><strong>Pin code:</strong></label>
                            <input
                                className="form-control"
                                type="text"
                                id="pincode"
                                name="pincode"
                                autoComplete="off"
                                minLength={6}
                                maxLength={9}
                                placeholder="Enter Your 6 to 9 digit pin-code"
                                pattern="\d{6,9}" // Regex to ensure only numbers and length between 6-9
                                required
                                value={userRegistration.pincode}
                                onChange={handleInput}
                            />
                        </div>



                        <div className="row">
                            <div className="mb-3 ">
                                <label className="from-label mb-2" htmlFor="photo"><strong>Passport-Size Photo (Recent Photo):</strong></label>
                                <input

                                    className="form-control"
                                    type="file"
                                    id="photo"
                                    name="photo"
                                    required
                                    // value={userRegistration.photo}
                                    onChange={handleInput}
                                />
                            </div>


                            <div className="mb-3 ">
                                <label className="from-label mb-2" htmlFor="kycvideo"><strong>Submit Your Video for KYC:</strong></label>
                                <input
                                    className="form-control"
                                    type="file"
                                    id="kycvideo"
                                    name="kycvideo"
                                    required
                                    // value={userRegistration.kycvideo}
                                    onChange={handleInput}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="mb-3 ">
                                <label className="from-label mb-2" htmlFor="kycdocument_1"><strong>Upload KYC Document-1:</strong></label>
                                <input
                                    className="form-control"
                                    type="file"
                                    id="kycdocument_1"
                                    name="kycdocument_1"
                                    required
                                    // value={userRegistration.kycdocument_1}
                                    onChange={handleInput}
                                />
                            </div>


                            <div className="mb-3  ">
                                <label className="from-label mb-2" htmlFor="kycdocument_2"><strong>Upload KYC Document-2:</strong></label>
                                <input
                                    className="form-control"
                                    type="file"
                                    id="kycdocument_2"
                                    name="kycdocument_2"
                                    required
                                    // value={userRegistration.kycdocument_2}
                                    onChange={handleInput}
                                />
                            </div>
                        </div>



                        <div className="row mb-3 ">
                            <div className="col-md-8 form-check-inline">
                                <label>
                                    <strong>Known Languages : </strong>
                                </label>
                                <div className="form-check-inline ms-3">
                                    <input
                                        type="checkbox"
                                        name="languages"
                                        value="English"
                                        onChange={handleInput}
                                        checked={userRegistration.languages.includes("English")}
                                        style={{ width: "20px", height: "20px" }}
                                    />
                                    <label className="ms-1"><b>English</b></label>
                                </div>
                                <div className="form-check-inline">
                                    <input
                                        type="checkbox"
                                        name="languages"
                                        value="Hindi"
                                        onChange={handleInput}
                                        checked={userRegistration.languages.includes("Hindi")}
                                        style={{ width: "20px", height: "20px" }}
                                    />
                                    <label className="ms-1"><b>Hindi</b></label>
                                </div>
                                <div className="form-check-inline">
                                    <input
                                        type="checkbox"
                                        name="languages"
                                        value="Marathi"
                                        onChange={handleInput}
                                        checked={userRegistration.languages.includes("Marathi")}
                                        style={{ width: "20px", height: "20px" }}
                                    />
                                    <label className="ms-1"><b>Marathi</b></label>
                                </div>
                            </div>
                        </div>
                        <hr />
<div className="border border-dark">
                        <div className="hover-button ms-1">
                            <h4 className="text-center">Terms & Conditions</h4>
                            <b>
                                <p>1) This website is designed, developed and maintained by National Informatics Centre Service Inc. and content provided by Chief Electoral Officer, Delhi..!</p>
                                <p>2) Once uploaded photo, video and document can't be changed again, fill those files carefully while uploading..!</p>
                            </b>
                        </div>
                        <br></br>

                        <div>
                            <input
                                className="m-1"
                                type="checkbox"
                                id="terms"
                                name="terms"
                                required
                                // value={userRegistration.terms}
                                checked={userRegistration.terms || false}
                                onChange={handleInput}
                                style={{ width: '20px', height: '20px' }}
                            />
                            <label className="mb-4" htmlFor="terms"><strong>Accept All Terms and Conditions..!</strong></label>
                        </div>
						</div>

                        {userRegistration.terms && (
                            <div className="d-flex justify-content-center align-items-center vh-10">
                                <div className="mb-4 col-md-5">
                                    <label className="form-label" htmlFor="username"><strong>Username:</strong></label>
                                    <input
                                        className="form-control mb-3"
                                        type="text"
                                        id="username"
                                        name="username"
                                        placeholder="Enter your username"
                                        required
                                        value={userRegistration.username}
                                        onChange={handleInput}
                                    />
                                    <label className="form-label" htmlFor="password"><strong>Password:</strong></label>
                                    <input
                                        className="form-control"
                                        type="password"
                                        id="password"
                                        placeholder="Enter your password (exactly 12 characters)"
                                        name="password"
                                        minLength={12}
                                        maxLength={12}
                                        required
                                        value={userRegistration.password}
                                        onChange={handleInput}
                                    />

                                </div>
                            </div>
                        )}

                        {/* <button className="button-55  mx-auto d-block" type="submit">Register Now</button> */}
                        <div className="mt-3">
                            <center>
                                <Button id='button1' type="submit" variant="primary" style={{ width: '15rem' }}>Register Now</Button>
                                {/*<Button id='button2' type="submit" variant="success" style={{ width: '15rem' }} >
                                    <a href='/Register' style={{ color: 'white' }} >
                                        Reset Form</a>
                                </Button>*/}
								</center>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
export default Register;