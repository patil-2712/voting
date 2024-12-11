import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';

const Edit_Profile = () => {
    const talukas = ["Karveer", "Panhala", "Shanuwadi", "Kogal", "Hatkanangle", "Shirol", "Gadhinglaj", "Chandgad", "Ajra", "Bhudergad", "Radhanagari", "Gagan Bavda"];
    const districts = ["Ahmednagar", "Akola", "Amravati", "Chhatrapati Sambhajinagar", "Beed", "Bhandara", "Buldhana", "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai City", "Mumbai Suburban", "Nagpur", "Nanded", "Nandurbar", "Nashik", "Osmanabad", "Palghar", "Parbhani", "Pune", "Raigad", "Ratnagiri", "Sangli", "Satara", "Sindhudurg", "Solapur", "Thane", "Wardha", "Washim", "Yavatmal"];

    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        dob: '',
        email: '',
        mobileno: '',
        altmobileno: '',
        gender: '',
        address: '',
        village: '',
        taluka: '',
        district: '',
        state: '',
        pincode: '',
        photo: null,
    });

    // Fetch user data from localStorage when component loads
    useEffect(() => {
        const loggedInUser = JSON.parse(localStorage.getItem('user'));
        if (loggedInUser) {
            setUser(loggedInUser);
            setFormData({
                firstname: loggedInUser.firstname || '',
                lastname: loggedInUser.lastname || '',
                dob: loggedInUser.dob ? new Date(loggedInUser.dob).toISOString().split('T')[0] : '',
                email: loggedInUser.email || '',
                mobileno: loggedInUser.mobileno || '',
                altmobileno: loggedInUser.altmobileno || '',
                gender: loggedInUser.gender || '',
                address: loggedInUser.address || '',
                village: loggedInUser.village || '',
                taluka: loggedInUser.taluka || '',
                district: loggedInUser.district || '',
                state: loggedInUser.state || '',
                pincode: loggedInUser.pincode || '',
                photo: loggedInUser.photo || null,
            });
        } else {
            navigate('/'); // Redirect to login if no user is logged in
        }
    }, [navigate]);

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === 'file' ? files[0] : value
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.firstname || !formData.lastname) {
            setError('Please fill in all required fields.');
            return;
        }
        setError('');
        const updatedUser = { ...user, ...formData };
        localStorage.setItem('user', JSON.stringify(updatedUser));
        alert("Data udate Successfully..!")
        navigate('/Home'); // Redirect to Home page after successful update
    };

    if (!user) return <div>Loading...</div>;

    return (
        <>
            <Navbar />
            <h1 className="text-center m-0 bg-dark pt-5" style={{ color: 'white' }}><strong>Edit Your Profile</strong></h1>
            <div className="bg-dark text-light  d-flex justify-content-center  align-items-center ">
                <div className="col-md-8 col-sm-6 bg-white text-dark shadow p-4 mt-5 mb-5 border-secondary rounded">
                    <form onSubmit={handleSubmit}>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label className="form-label" htmlFor="firstname"><strong>First Name:</strong></label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="firstname"
                                    name="firstname"
                                    autoComplete="off"
                                    required
                                    value={formData.firstname}
                                    onChange={handleInputChange}
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
                                    required
                                    value={formData.lastname}
                                    onChange={handleInputChange}
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
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="col-md-6 mb-3">
                                <label className="form-label" htmlFor="dob"><strong>Date Of Birth:</strong></label>
                                <input
                                    className="form-control col-md-12 mb-3"
                                    type="date"
                                    id="dob"
                                    name="dob"
                                    autoComplete="off"
                                    required
                                    value={formData.dob}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label className="form-label" htmlFor="mobileno"><strong>Mobile No:</strong></label>
                                <input
                                    className="form-control"
                                    type="number"
                                    id="mobileno"
                                    name="mobileno"
                                    autoComplete="off"
                                    required
                                    value={formData.mobileno}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label mb-2" htmlFor="altmobileno"><strong>Alternate Mobile No:</strong></label>
                                <input
                                    className="form-control"
                                    type="number"
                                    id="altmobileno"
                                    name="altmobileno"
                                    autoComplete="off"
                                    required
                                    value={formData.altmobileno}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="mt-1 mb-3">
                            <label><strong>Gender:</strong></label>
                            <input className="ms-3" style={{ width: '20px', height: '20px' }} type="radio" id="male" name="gender" value="male" onChange={handleInputChange} checked={formData.gender === 'male'} /><strong className="ms-2">Male</strong>
                            <input className="ms-3" style={{ width: '20px', height: '20px' }} type="radio" id="female" name="gender" value="female" onChange={handleInputChange} checked={formData.gender === 'female'} /><strong className="ms-2">Female</strong>
                            <input className="ms-3" style={{ width: '20px', height: '20px' }} type="radio" id="other" name="gender" value="other" onChange={handleInputChange} checked={formData.gender === 'other'} /><strong className="ms-2">Other</strong>
                        </div>

                        <div className="mb-3">
                            <label className="form-label" htmlFor="address"><strong>Address:</strong></label>
                            <textarea
                                className="form-control"
                                id="address"
                                name="address"
                                autoComplete="off"
                                required
                                value={formData.address}
                                onChange={handleInputChange} />
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label className="form-label" htmlFor="village"><strong>Village:</strong></label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="village"
                                    name="village"
                                    autoComplete="off"
                                    required
                                    value={formData.village}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="col-md-6 mb-3">
                                <label className="from-label mb-2" htmlFor="taluka"><strong>Taluka:</strong></label>
                                <select
                                    id="taluka"
                                    name="taluka"
                                    className="form-control"
                                    value={formData.taluka}
                                    onChange={handleInputChange}
                                    required>
                                    <option value="" hidden>Select Your Taluka</option>
                                    {talukas.map((taluka) => (
                                        <option key={taluka} value={taluka}>{taluka}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="col-md-6">
                                <label className="from-label mb-2" htmlFor="district"><strong>District:</strong></label>
                                <select
                                    id="district"
                                    name="district"
                                    className="form-control"
                                    value={formData.district}
                                    onChange={handleInputChange}
                                    required>
                                    <option value="" hidden>Select Your District</option>
                                    {districts.map((district) => (
                                        <option key={district} value={district}>{district}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="col-md-6">
                                <label className="from-label mb-2" htmlFor="state"><strong>State:</strong></label>
                                <select
                                    id="state"
                                    name="state"
                                    className="form-select"
                                    value={formData.state}
                                    onChange={handleInputChange}
                                    required>
                                    <option value="" hidden>Select Your State</option>
                                    
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

                        <div className="row">
                            <div className="mb-3 col-md-6">
                                <label className="form-label mb-2" htmlFor="pincode"><strong>Pin Code:</strong></label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="pincode"
                                    name="pincode"
                                    required
                                    value={formData.pincode}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mb-3 col-md-6">
                                <label className="form-label mb-2" htmlFor="photo"><strong>Passport-Size Photo:</strong></label>
                                <input
                                    className="form-control"
                                    type="file"
                                    id="photo"
                                    name="photo"
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        {error && <div className="alert alert-danger">{error}</div>}

                        <div className="text-center mt-5"> 
                            <Button id='button1' type="submit" variant="success" style={{ width: '15rem' }}><b>Update</b></Button>
                            <Button id='button2' type="submit" variant="danger" style={{ width: '15rem', color: 'white'  }}>
 
                                    <b>Delete</b>
                                 </Button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
};

export default Edit_Profile;





//                             <center>
//                                 <Button id='button1' type="submit" variant="success" style={{ width: '15rem' }}>Update</Button>
//                                 <Button id='button2' type="submit" variant="danger" style={{ width: '15rem' }}>
//                                     <a href='/Edit_Profile' style={{ color: 'white' }}>
//                                         Reset Form</a>
//                                 </Button></center>
