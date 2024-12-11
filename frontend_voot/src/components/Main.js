import React, { useState } from "react";

function Main() {

  const talukas = ["Karveer", "Panhala", "Shanuwadi", "Kogal", "Hatkanangle", "Shirol", "Gadhinglaj", "Chandgad", "Ajra", "Bhudergad", "Radhanagari", "Gagan Bavda"]

  const districts = ["Ahmednagar", "Akola", "Amravati", "Chhatrapati Sambhajinagar", "Beed", "Bhandara", "Buldhana", "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai City", "Mumbai Suburban", "Nagpur", "Nanded", "Nandurbar", "Nashik", "Osmanabad", "Palghar", "Parbhani", "Pune", "Raigad", "Ratnagiri", "Sangli", "Satara", "Sindhudurg", "Solapur", "Thane", "Wardha", "Washim", "Yavatmal"]


  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    date_of_birth: "",
    email: "",
    mobile: "",
    alt_mobile: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    taluka: "",
    district: "",
    pin_code: "",
    id_photo: null,
    kyc_video: null,
    kyc_document_type_1: "",
    kyc_file_1: null,
    kyc_document_type_2: "",
    kyc_file_2: null,
    languages_known: [],
    username: "",
    password: "",
    agreed_terms: false,
  });

  const [isTermsChecked, setIsTermsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsTermsChecked(event.target.checked);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: files[0],
    }));
  };

  const handleLanguageChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevState) => {
      const updatedLanguages = checked
        ? [...prevState.languages_known, value]
        : prevState.languages_known.filter(language => language !== value);
      return { ...prevState, languages_known: updatedLanguages };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();

    // Append form data
    formDataToSend.append("first_name", formData.first_name);
    formDataToSend.append("last_name", formData.last_name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("mobileno", formData.mobile);
    formDataToSend.append("alt_mobile", formData.alt_mobile);
    formDataToSend.append("gender", formData.gender);
    formDataToSend.append("address", formData.address);
    formDataToSend.append("city", formData.city);
    formDataToSend.append("state", formData.state);
    formDataToSend.append("taluka", formData.taluka);
    formDataToSend.append("district", formData.district);
    formDataToSend.append("pin_code", formData.pin_code);
    formDataToSend.append("languages_known", formData.languages_known);
    formDataToSend.append("username", formData.username);
    formDataToSend.append("password", formData.password);
    formDataToSend.append("agreed_terms", formData.agreed_terms);

    // Append files
    if (formData.id_photo) {
      formDataToSend.append("id_photo", formData.id_photo);
    }
    if (formData.kyc_video) {
      formDataToSend.append("kyc_video", formData.kyc_video);
    }
    if (formData.kyc_file_1) {
      formDataToSend.append("kyc_file_1", formData.kyc_file_1);
    }
    if (formData.kyc_file_2) {
      formDataToSend.append("kyc_file_2", formData.kyc_file_2);
    }

    try {
      const response = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        body: formDataToSend, // Send form data (including files)
      });

      if (!response.ok) {
        throw new Error("Failed to register user");
      }

      const data = await response.json();
      console.log("User registered:", data);
      alert(data.message); // Display the response message
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Error during registration.");
    }
  };

  return (
    <>
      <div className=" text-center bg-dark p-5" style={{ color: "white" }}>
        <h1><b>Voter Registration Form</b></h1>
      </div>

      <div className="login template d-flex justify-content-center align-items-center bg-dark mt-0">

        <div className="col-md-8 col-sm-6 bg-white text-dark shadow p-4 mt-5 mb-5 border-secondary rounded">
          <form onSubmit={handleSubmit}>


            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label" htmlFor="first_name"><strong>First Name:</strong></label>
                <input
                  className="form-control"
                  type="text"
                  id="first_name"
                  name="first_name"
                  autoComplete="off"
                  // placeholder="Enter your full name"
                  required
                  value={formData.first_name}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label" htmlFor="last_name"><strong>Last Name:</strong></label>
                <input
                  className="form-control"
                  type="text"
                  id="last_name"
                  name="last_name"
                  autoComplete="off"
                  // placeholder="Enter your last name"
                  required
                  value={formData.last_name}
                  onChange={handleChange}
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
                  // placeholder="Enter your email address"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label" htmlFor="date_of_birth"><strong>Date Of Birth:</strong></label>
                <input
                  className="form-control col-md-12 mb-3"
                  type="date"
                  id="date_of_birth"
                  name="date_of_birth"
                  autoComplete="off"
                  required
                  value={formData.date_of_birth}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row g-3">
              <div className="form-group col md-6">
                <label htmlFor="mobile"><b>Mobile No:</b> </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  // placeholder="Enter Your Mobile Number"
                  className="form-control"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  title="Please enter a 10-digit mobile number"
                />
              </div>
              <div className="form-group col md-6">
                <label htmlFor="altMobile"><b>Alternate Mobile No:</b> </label>
                <input
                  type="tel"
                  id="altMobile"
                  name="alt_mobile"
                  // placeholder="Enter Your Mobile Number"
                  className="form-control"
                  value={formData.alt_mobile}
                  onChange={handleChange}
                  required
                  title="Please enter a 10-digit mobile number"
                />
              </div>
            </div>

            {/* <div className="form-group mb-3 mt-3">
            <label htmlFor="gender"><b>Gender:</b> </label>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                id="male"
                name="gender"
                className="form-check-input"
                value="Male"
                onChange={handleChange}
                required
              />
              <label htmlFor="male" className="form-check-label"><b>Male</b></label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                id="female"
                name="gender"
                value="Female"
                onChange={handleChange}
                className="form-check-input"
                required
              />
              <label htmlFor="female" className="form-check-label"><b>Female</b></label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                id="other"
                name="gender"
                value="other"
                onChange={handleChange}
                className="form-check-input"
                required
              />
              <label htmlFor="other" className="form-check-label"><b>Other</b></label>
            </div>
          </div> */}


            <div className="mt-3 mb-3">
              <label ><strong>Gender:</strong></label>
              <input className="ms-3" style={{ width: '20px', height: '20px' }} type="radio" id="male" name="gender" value="male" onChange={handleChange} /><strong className="ms-2">Male</strong>
              <input className="ms-3" style={{ width: '20px', height: '20px' }} type="radio" id="female" name="gender" value="female" onChange={handleChange} /><strong className="ms-2">Female</strong>
              <input className="ms-3" style={{ width: '20px', height: '20px' }} type="radio" id="other" name="gender" value="other" onChange={handleChange} /><strong className="ms-2">Other</strong>
            </div>



            <div className="mb-3">
              <label className="form-label" htmlFor="address"><strong>Address:</strong></label>
              <textarea
                className="form-control"
                type="textarea"
                id="address"
                name="address"
                autoComplete="off"
                // placeholder="Enter your address"
                required
                value={formData.address}
                onChange={handleChange} />
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label" htmlFor="village"><strong>City/Village:</strong></label>
                <input
                  className="form-control "
                  type="text"
                  id="city"
                  name="city"
                  autoComplete="off"
                  // placeholder="Enter your city name"
                  required
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>


              <div className="col-md-6 mb-3">
                <label className="from-label mb-2" htmlFor="taluka"><strong>Taluka:</strong></label>
                <select
                  type="text"
                  id="taluka"
                  name="taluka"
                  className="form-control"
                  value={formData.taluka}
                  onChange={handleChange}
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
                  value={formData.district}
                  onChange={handleChange}
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
                  value={formData.state}
                  onChange={handleChange}>
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

            <div className="form-group mb-3 mt-3">
              <label htmlFor="pincode"><b>Pin-Code:</b> </label>
              <input
                type="text"
                id="pincode"
                // placeholder="Enter Your Pin-Code"
                className="form-control"
                name="pin_code"
                value={formData.pin_code}
                onChange={handleChange}
                required
                title="The pin-code must be 6 digits"
              />
            </div>

            <div className="row">
              <div className=" col-md-6 form-group mb-3">
                <label htmlFor="idphoto"><b>ID-Photo:</b> </label>
                <input
                  type="file"
                  id="id_photo"
                  className="form-control"
                  name="id_photo"
                  onChange={handleFileChange}
                  required
                />
              </div>

              <div className="col-md-6 form-group mb-3">
                <label htmlFor="kycvideo"><b>KYC-Video:</b> </label>
                <input
                  type="file"
                  id="kyc_video"
                  className="form-control"
                  name="kyc_video"
                  onChange={handleFileChange}
                  required
                />
              </div>
            </div>

            <div className="row g-3">
              <div className="form-group col-md-6">
                <label htmlFor="kycDocumentType1"><b>KYC Document Type:</b></label>
                <select
                  id="kycDocumentType1"
                  className="form-control"
                  name="kyc_document_type_1"
                  value={formData.kyc_document_type_1}
                  onChange={handleChange}
                  required
                >
                  <option value="" hidden>Select Document Type Below</option>
                  <option value="aadhaar">Aadhaar Card</option>
                  <option value="pancard">PAN Card</option>
                  <option value="bankpassbook">Bank Passbook Xerox</option>
                  <option value="drivinglicense">Driving License</option>
                </select>
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="kycfile"><b>Upload File:</b> </label>
                <input
                  type="file"
                  id="kyc_file_1"
                  className="form-control"
                  name="kyc_file_1"
                  onChange={handleFileChange}
                  required
                />
              </div>
            </div>

            <div className="row g-3 mt-1">
              <div className="form-group col-md-6">
                <label htmlFor="kycDocumentType2"><b>KYC Document Type:</b></label>
                <select
                  id="kycDocumentType2"
                  className="form-control"
                  name="kyc_document_type_2"
                  value={formData.kyc_document_type_2}
                  onChange={handleChange}
                  required
                >
                  <option value="" hidden>Select Document Type Below</option>
                  <option value="aadhaar">Aadhaar Card</option>
                  <option value="pancard">PAN Card</option>
                  <option value="bankpassbook">Bank Passbook Xerox</option>
                  <option value="drivinglicense">Driving License</option>
                </select>
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="kycDocumentFile2"><b>Upload File:</b> </label>
                <input
                  type="file"
                  id="kycFile2"
                  className="form-control"
                  name="kyc_file_2"
                  onChange={handleFileChange}
                  required
                />
              </div>
            </div>

            <div className="form-group mb-2 mt-3">
              <label htmlFor="language"><b>Language Known:</b> </label>
              <div className="form-check form-check-inline ms-3">
                <input
                  type="checkbox"
                  id="english"
                  name="language"
                  value="English"
                  onChange={handleLanguageChange}
                  className="form-check-input"
                  style={{ width: '20px', height: '20px' }}
                />
                <label htmlFor="english" className="form-check-label"><b>English</b></label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  id="hindi"
                  name="language"
                  value="Hindi"
                  onChange={handleLanguageChange}
                  className="form-check-input"
                  style={{ width: '20px', height: '20px' }}
                />
                <label htmlFor="hindi" className="form-check-label"><b>Hindi</b></label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="checkbox"
                  id="marathi"
                  name="language"
                  value="marathi"
                  onChange={handleLanguageChange}
                  className="form-check-input"
                  style={{ width: '20px', height: '20px' }}
                />
                <label htmlFor="marathi" className="form-check-label"><b>Marathi</b></label>
              </div>
            </div>

            <div className="container">
              <div className="form-check form-check-inline text-black">
                <input
                  type="checkbox"
                  id="termsConditions"
                  name="termsConditions"
                  value="accepted"
                  className="form-check-input"
                  required
                  onChange={handleCheckboxChange}
                  style={{ width: '20px', height: '20px' }}
                />
                <label htmlFor="termsConditions" className="form-check-label">
                  <b>Accept All Terms and Conditions..!</b>
                </label>
              </div>

              {isTermsChecked && (
                <>
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
                                        value={formData.username}
                                        onChange={handleChange}
                                    />
                                    <label className="form-label" htmlFor="password"><strong>Password:</strong></label>
                                    <input
                                        className="form-control"
                                        type="password"
                                        id="password"
                                        placeholder="Enter your password"
                                        name="password"
                                        required
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                </>
              )}

              <button type="submit" className="btn btn-primary">
                <b>Register</b>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Main;

