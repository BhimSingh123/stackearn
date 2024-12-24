import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import toast from "react-hot-toast";
import Listing from "../../Api/Listing";
import SubDashboard from "../components/SubDashboard";
import StudentSidebar from "../sidebar";
import { useNavigate, useParams } from "react-router-dom";

const AddBlog = () => {
  const { Id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [instructorDetails, setInstructorDetails] = useState({
    Image: "",
    content: "",
    title: "",
  });

  const fetchInstructorData = async () => {
    setLoading(true);
    try {
      const main = new Listing();
      const response = await main.BlogGetId(Id); // Fetch instructor by ID
      if (response?.data?.data) {
        setInstructorDetails(response.data.data);
      } else {
        toast.error("Failed to fetch instructor details.");
      }
    } catch (error) {
      console.error("Error fetching instructor data:", error);
      toast.error("Unable to load instructor data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (Id) fetchInstructorData();
  }, [Id]);

  // Handle text inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInstructorDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle rich-text input
  const handleBioChange = (value) => {
    setInstructorDetails((prevState) => ({
      ...prevState,
      content: value, // Save the rich-text content
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    const main = new Listing();

    try {
      let response;
      if (Id) {
        // Edit API call
        response = await main.blogupdate(instructorDetails);
      } else {
        // Add API call
        response = await main.BlogAdd(instructorDetails);
      }

      if (response?.data) {
        toast.success(response.data.message || "Operation successful");
        if (!Id) {
          // Clear form for new instructor
          setInstructorDetails({
            firstName: "",
            lastName: "",
            designation: "",
            lessions: "",
            students: "",
            Skill: "",
            email: "",
            phoneNumber: "",
            address: "",
            profileImage: "",
            bio: "",
            gender: "",
            rating: "",

          });
        }
      } else {
        toast.error(response?.data?.message || "Unexpected error occurred.");
      }

      setLoading(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      setLoading(false);
      toast.error(error?.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-wrapper">
      <SubDashboard title={"Add Instructor"} />

      {/* Page Content */}
      <div className="page-content mt-5">
        <div className="container">
          <div className="row">
            <StudentSidebar />

            <div className="col-xl-9 col-lg-9">
              <div className="settings-widget card-details">
                <div className="settings-menu p-2">
                  <div className="profile-heading">
                    <h3>Add Blog</h3>
                    <p>Please fill in the details to add an Blog</p>
                  </div>

                  {/* Add Instructor Form */}
                  <form onSubmit={handleSubmit} className="mt-5">
                    {/* First Name */}
                    <div className="form-group mt-5">
                      <label>Image</label>
                      <input
                        type="file"
                        name="image"
                        value={instructorDetails.image}
                        onChange={handleInputChange}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group mt-5">
                      <label>title</label>
                      <input
                        type="text"
                        name="title"
                        value={instructorDetails.title}
                        onChange={handleInputChange}
                        className="form-control"
                        required
                      />
                    </div>




                    {/* Rich Text Editor for Bio */}
                    <div className="form-group mt-5">
                      <label>Bio</label>
                      <ReactQuill
                        value={instructorDetails.content}
                        onChange={handleBioChange}
                        className="rich-text-editor"
                      />
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn btn-primary mt-5 mb-5  " disabled={loading}>
                      {loading ? "Saving..." : "Add Blog"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
