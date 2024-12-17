import React, { useEffect, useState } from "react";
import AuthLayout from "../AuthLayout";
import SubDashboard from "../components/SubDashboard";
import StudentSidebar from "../sidebar";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import Listing from "../../Api/Listing";

const AddCourse = () => {
  const [category, setCategory] = useState(null);
  const [level, setLevel] = useState(null);
  const [loading, setLoading] = useState(false);

  const { Id } = useParams();

  const [courseDetails, setCourseDetails] = useState({
    title: "",
    description: "",
    category: category || "",
    price: "",
    level: level || "",
    courseImage: "",
    duration: "",
    Id: Id,
  });

  const categoryOptions = [
    { value: "web-dev", label: "Web Development" },
    { value: "data-science", label: "Data Science" },
    { value: "design", label: "Design" },
    { value: "marketing", label: "Marketing" },
  ];

  const levelOptions = [
    { value: "Beginner", label: "Beginner" },
    { value: "Intermediate", label: "Intermediate" },
    { value: "Advanced", label: "Advanced" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCategoryChange = (selectedOption) => {
    setCategory(selectedOption);
    setCourseDetails((prevState) => ({
      ...prevState,
      category: selectedOption?.value || "",
    }));
  };

  const handleLevelChange = (selectedOption) => {
    setLevel(selectedOption);
    setCourseDetails((prevState) => ({
      ...prevState,
      level: selectedOption?.value || "",
    }));
  };

  const fetchCourseData = async () => {
    setLoading(true);
    try {
      const main = new Listing();
      const response = await main.CourseGetId(Id);
      if (response?.data?.data) {
        setCourseDetails(response.data.data);
      } else {
        toast.error("Failed to fetch course details.");
      }
    } catch (error) {
      console.error("Error fetching course data:", error);
      toast.error("Unable to load course data.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    const main = new Listing();

    try {
      const response = Id
        ? await main.Updatecourse(courseDetails)
        : await main.CreateCourse(courseDetails);

      if (response?.data) {
        toast.success(response.data.message || "Operation successful");
        if (!Id) {
          setCourseDetails({
            title: "",
            description: "",
            category: "",
            price: "",
            level: "",
            courseImage: "",
            duration: "",
          });
        }
      } else {
        toast.error(response?.data?.message || "Unexpected error occurred.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(error?.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (Id) fetchCourseData();
  }, [Id]);

  return (
    <AuthLayout>
      <div className="main-wrapper">
        <SubDashboard />
        <section className="page-content course-sec mt-5">
          <div className="container">
            <div className="row">
                <StudentSidebar />
              <div className="col-md-9">
                <div className="card shadow">
                  <div className="card-header bg-primary text-white">
                    <h3>{Id ? "Edit Course" : "Add Course"}</h3>
                  </div>
                  <div className="card-body">
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label className="form-label">Course Title</label>
                        <input
                          type="text"
                          className="form-control"
                          name="title"
                          value={courseDetails.title}
                          onChange={handleInputChange}
                          placeholder="Enter course title"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Description</label>
                        <textarea
                          className="form-control"
                          name="description"
                          value={courseDetails.description}
                          onChange={handleInputChange}
                          placeholder="Enter course description"
                          rows="4"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Category</label>
                        <select
                          value={category?.value || ""}
                          onChange={(e) => handleCategoryChange({ value: e.target.value, label: e.target.options[e.target.selectedIndex].text })}
                          className="form-select"
                        >
                          <option value="" disabled>
                            Select category
                          </option>
                          {categoryOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Level</label>
                        <select
                          value={level?.value || ""}
                          onChange={(e) => handleLevelChange({ value: e.target.value, label: e.target.options[e.target.selectedIndex].text })}
                          className="form-select"
                        >
                          <option value="" disabled>
                            Select level
                          </option>
                          {levelOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Price</label>
                        <input
                          type="number"
                          className="form-control"
                          name="price"
                          value={courseDetails.price}
                          onChange={handleInputChange}
                          placeholder="Enter course price"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">courseImage</label>
                        <input
                          type="file"
                          className="form-control"
                          name="courseImage"
                          value={courseDetails.courseImage}
                          onChange={handleInputChange}
                          placeholder="Enter course Image"
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Duration (in hours)</label>
                        <input
                          type="text"
                          className="form-control"
                          name="duration"
                          value={courseDetails.duration}
                          onChange={handleInputChange}
                          placeholder="Enter course duration"
                          required
                        />
                      </div>

                      <div className="text-end">
                        <button
                          type="submit"
                          className="btn btn-primary"
                          disabled={loading}
                        >
                          {loading ? "Processing..." : Id ? "Update" : "Add"}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </AuthLayout>
  );
};

export default AddCourse;
