import React, { useEffect, useState } from "react";
import AuthLayout from "../AuthLayout";
import SubDashboard from "../components/SubDashboard";
import StudentSidebar from "../sidebar";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import Listing from "../../Api/Listing";

const AddCourse = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [lectures, setLectures] = useState([]);

  const { Id } = useParams();

  const [courseDetails, setCourseDetails] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    discountPrice: "",
    level: "",
    courseImage: "",
    duration: "",
    InstrutorId: "",
    Id: Id,
    courseVideo :""
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

  const addLecture = () => {
    setLectures((prevLectures) => [
      ...prevLectures,
      { title: "", subtitles: [{ subtitle: "", videoLink: "" }] },
    ]);
  };

  const removeLecture = (lectureIndex) => {
    setLectures((prevLectures) =>
      prevLectures.filter((_, index) => index !== lectureIndex)
    );
  };

  const handleLectureChange = (index, field, value) => {
    const updatedLectures = [...lectures];
    updatedLectures[index][field] = value;
    setLectures(updatedLectures);
  };

  const addSubtitle = (lectureIndex) => {
    const updatedLectures = [...lectures];
    updatedLectures[lectureIndex]?.subtitles?.push({ subtitle: "", videoLink: "" });
    setLectures(updatedLectures);
  };

  const removeSubtitle = (lectureIndex, subtitleIndex) => {
    const updatedLectures = [...lectures];
    updatedLectures[lectureIndex].subtitles.splice(subtitleIndex, 1);
    setLectures(updatedLectures);
  };

  const handleSubtitleChange = (lectureIndex, subtitleIndex, field, value) => {
    const updatedLectures = [...lectures];
    updatedLectures[lectureIndex].subtitles[subtitleIndex][field] = value;
    setLectures(updatedLectures);
  };

  const fetchCourseData = async () => {
    setLoading(true);
    try {
      const main = new Listing();
      const response = await main.CourseGetId(Id);
      if (response?.data?.data) {
        console.log("response.data.data",response.data.data)
        setCourseDetails(response.data.data);
        if (response.data.data.lectures) {
          setLectures(response.data.data.lectures);
        }
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
      const payload = { ...courseDetails, lectures };
      const response = Id
        ? await main.Updatecourse(payload)
        : await main.CreateCourse(payload);

      if (response?.data) {
        navigate("/admin/course-list")
        toast.success(response.data.message || "Operation successful");
        if (!Id) {
          setCourseDetails({
            title: "",
            description: "",
            category: "",
            price: "",
            discountPrice: "",
            level: "",
            courseImage: "",
            duration: "",
            courseVideo:"",
          });
          setLectures([]);
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


  const [insturor, setinstrutor] = useState([]);


  const fetchInstrorLists = async () => {
    setLoading(true);
    try {
      const main = new Listing();
      const response = await main.InstrutorGet();
      setinstrutor(response?.data?.data?.Instructorget
      );
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInstrorLists();
  }, []);


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
                      {/* Course Title */}
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

                      {/* Description */}
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

                      {/* Category */}
                      <div className="mb-3">
                        <label className="form-label">Category</label>
                        <select
                          value={courseDetails?.category || ""}
                          onChange={(e) =>
                            setCourseDetails((prevState) => ({
                              ...prevState,
                              category: e.target.value,
                            }))
                          }
                          className="form-select"
                          required
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

                      {/* Level */}
                      <div className="mb-3">
                        <label className="form-label">Level</label>
                        <select
                          value={courseDetails?.level || ""}
                          onChange={(e) =>
                            setCourseDetails((prevState) => ({
                              ...prevState,
                              level: e.target.value,
                            }))
                          }
                          className="form-select"
                          required
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
                        <label className="form-label">Instructor </label>
                        <select
                          value={courseDetails?.InstrutorId || ""}
                          onChange={(e) =>
                            setCourseDetails((prevState) => ({
                              ...prevState,
                              InstrutorId: e.target.value,
                            }))
                          }
                          className="form-select"
                          required
                        >
                          <option value="" disabled>
                            Select Instrutor
                          </option>
                          {insturor.map((option) => (
                            <option key={option._id} value={option._id} >
                              {option.firstName}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Price */}
                      <div className="mb-3">
                        <label className="form-label">Base Price</label>
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

                      {/* Discount Price */}
                      <div className="mb-3">
                        <label className="form-label">Sale Price</label>
                        <input
                          type="number"
                          className="form-control"
                          name="discountPrice"
                          value={courseDetails.discountPrice}
                          onChange={handleInputChange}
                          placeholder="Enter Sale price"
                        />
                      </div>

                      {/* Duration */}
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

                      {/* Lectures Section */}


                      <div className="mb-3">
                        <label className="form-label">Lectures</label>
                        {lectures?.map((lecture, lectureIndex) => (
                          <div key={lectureIndex} className="mb-3 border p-3">
                            <div className="mb-2">
                              <label className="form-label">Lecture Title</label>
                              <input
                                type="text"
                                className="form-control"
                                value={lecture.title}
                                onChange={(e) =>
                                  handleLectureChange(
                                    lectureIndex,
                                    "title",
                                    e.target.value
                                  )
                                }
                                placeholder="Enter lecture title"
                                required
                              />
                            </div>
                            {lecture?.subtitles?.map(
                              (subtitle, subtitleIndex) => (
                                <div key={subtitleIndex} className="mb-3">
                                  <label className="form-label">
                                    Subtitle
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    value={subtitle.subtitle}
                                    onChange={(e) =>
                                      handleSubtitleChange(
                                        lectureIndex,
                                        subtitleIndex,
                                        "subtitle",
                                        e.target.value
                                      )
                                    }
                                    placeholder="Enter subtitle"
                                    required
                                  />
                                  <label className="form-label">
                                    Video Link
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    value={subtitle.videoLink}
                                    onChange={(e) =>
                                      handleSubtitleChange(
                                        lectureIndex,
                                        subtitleIndex,
                                        "videoLink",
                                        e.target.value
                                      )
                                    }
                                    placeholder="Enter video link"
                                  />
                                  <div className="d-flex justify-content-end mt-3">
                                    <button
                                      type="button"
                                      className="btn btn-danger mt-2"
                                      onClick={() =>
                                        removeSubtitle(
                                          lectureIndex,
                                          subtitleIndex
                                        )
                                      }
                                    >
                                      Remove Subtitle
                                    </button>
                                  </div>


                                </div>
                              )
                            )}
                            <div className="d-flex justify-content-between align-items-center mt-3">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={() => addSubtitle(lectureIndex)}
                              >
                                Add Subtitle
                              </button>
                              <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => removeLecture(lectureIndex)}
                              >
                                Remove Lecture
                              </button>
                            </div>


                          </div>
                        ))}
                        <div className="d-flex justify-content-end mt-3">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={addLecture}
                          >
                            Add Lecture
                          </button>
                        </div>


                      </div>
                      {/* Course Image */}
                      <div className="mb-3">
                        <label className="form-label">Course Image</label>
                        <input
                          type="file"
                          className="form-control"
                          name="courseImage"
                          onChange={(e) =>
                            setCourseDetails((prevState) => ({
                              ...prevState,
                              courseImage: e.target.files[0],
                            }))
                          }
                        />
                      </div>


                      <div className="mb-3">
                        <label className="form-label">Course Video</label>
                        <input
                          type="text"
                          className="form-control"
                          name="courseVideo"
                          onChange={(e) =>
                            setCourseDetails((prevState) => ({
                              ...prevState,
                              courseVideo: e.target.files[0],
                            }))
                          }
                        />
                      </div>
                      {/* Submit Button */}
                      <div className="mt-4">
                        <button
                          type="submit"
                          className="btn btn-primary cursor-pointer"
                          disabled={loading}
                        >
                          {Id
                            ? "Update Course"
                            : "Add Course"}
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
