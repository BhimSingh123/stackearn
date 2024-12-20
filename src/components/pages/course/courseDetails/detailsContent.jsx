// import Collapse from 'react-bootstrap/Collapse';
import React from "react";
import { useState } from "react";
import { Chapter, Chart, Cloud, Icon1, Icon2, Import, Key, Mobile, People, Play, Teacher, Timer2, User1, Users, Video, Video2 } from "../../../imagepath";
import { Link } from 'react-router-dom';
import FeatherIcon from "feather-icons-react";
import PropTypes from "prop-types";
import { useRazorpay } from "react-razorpay";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Listing from "../../../Api/Listing";
const DetailsContent = ({ item }) => {
  const { Razorpay } = useRazorpay();
  const RAZOPAY_KEY = process.env.REACT_APP_RAZOPAY_KEY;
  console.log("RAZOPAY_KEY", process.env.REACT_APP_RAZOPAY_KEY)
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const handleSubmit = async () => {
    setLoading(true);
    const main = new Listing();
    const record = new FormData();
    record.append("amount", item?.discountPrice);
    record.append("currency", "INR");
    record.append("receipt", "receipt#1");
    try {
      const res = await main.AddCard(record);
      if (res && res.data && res.data.orderId) {
        const options = {
          key: RAZOPAY_KEY,
          amount: item?.discountPrice,
          currency: "INR",
          name: "Your Company Name",
          description: "Payment for services",
          order_id: res.data.orderId,
          handler: function (response) {
            toast.success("Payment Successful");
            localStorage.setItem("response", JSON.stringify(response));
            savePaymentDetails(
              response.razorpay_order_id,
              response.razorpay_payment_id,
              "success"
            ); // Pass 'success'
            navigate(`/success/${response.razorpay_payment_id}`);
          },
          prefill: {
            name: "Customer Name",
            email: "customer@example.com",
            contact: "1234567890",
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#F37254",
          },
        };

        const rzp = new Razorpay(options);
        rzp.on("payment.failed", function (response) {
          const error = response.error;
          const orderId = error?.metadata?.order_id;
          const paymentId = error?.metadata?.payment_id;
          if (orderId && paymentId) {
            savePaymentDetails(orderId, paymentId, "failed");
            navigate(`/cancel/${paymentId}`);
            // Pass 'failed'
          } else {
            console.error("Failed to retrieve Razorpay order or payment ID");
          }
        });
        rzp.open();
      } else {
        toast.error(res.data.message || "Failed to create order");
      }
    } catch (error) {
      toast.error("Error creating order");
      console.error("Order creation error:", error);
    } finally {
      setLoading(false);
    }
  };

  const savePaymentDetails = async (orderId, paymentId, payment_status) => {
    setLoading(true);
    try {
      const main = new Listing();
      const formdata = new FormData();
      formdata.append("order_id", orderId);
      formdata.append("payment_id", paymentId);
      formdata.append("amount", item?.discountPrice);
      formdata.append("currency", "INR");
      formdata.append("payment_status", payment_status); // Include payment status
      const response = await main.PaymentSave(formdata);

      if (response?.data?.status) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="page-content course-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {/* Overview */}
              <div className="card overview-sec">
                <div className="card-body">
                  <h5 className="subs-title">Overview</h5>
                  <h6>Course Description</h6>
                  <p>
                    {item?.description}
                  </p>
                  {/* <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry&apos;s
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                  <p>
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.
                  </p>
                  <h6>What you&apos;ll learn</h6>
                  <div className="row">
                    <div className="col-md-6">
                      <ul>
                        <li>Become a UX designer.</li>
                        <li>You will be able to add UX designer to your CV</li>
                        <li>Become a UI designer.</li>
                        <li>Build &amp; test a full website design.</li>
                        <li>Build &amp; test a full mobile app.</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul>
                        <li>
                          Learn to design websites &amp; mobile phone apps.
                        </li>
                        <li>You&apos;ll learn how to choose colors.</li>
                        <li>Prototype your designs with interactions.</li>
                        <li>Export production ready assets.</li>
                        <li>All the techniques used by UX professionals</li>
                      </ul>
                    </div>
                  </div>
                  <h6>Requirements</h6>
                  <ul className="mb-0">
                    <li>
                      You will need a copy of Adobe XD 2019 or above. A free
                      trial can be downloaded from Adobe.
                    </li>
                    <li>No previous design experience is needed.</li>
                    <li className="mb-0">
                      No previous Adobe XD skills are needed.
                    </li>
                  </ul> */}
                </div>
              </div>
              {/* /Overview */}
              {/* Course Content */}
              <div className="card content-sec">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-6">
                      <h5 className="subs-title">Course Content</h5>
                    </div>
                    <div className="col-sm-6 text-sm-end">
                      <h6>{item?.lectures?.length} Lectures 10:56:11</h6>
                    </div>
                  </div>
                  {item?.lectures?.map((item, index) => (

                    <div className="course-card" key={index}>
                      <h6 className="cou-title">
                        <Link className="collapsed" data-bs-toggle="collapse" to="#collapseOne" aria-expanded={open} onClick={() => setOpen(!open)} aria-controls="example-collapse-text">
                          {item?.name}
                        </Link>
                      </h6>

                      <div id="collapseOne" className="card-collapse collapse"  >
                        <ul>
                          <li>
                            <p>
                              <img src={item?.video || Play} alt="" className="me-2" />
                              {item?.subtitle}
                            </p>
                            <div>
                              <Link to="#">Preview</Link>
                              <span>02:53</span>
                            </div>
                          </li>
                        </ul>
                      </div>

                    </div>
                  ))}

                </div>
              </div>
              {/* /Course Content */}
              {/* Instructor */}
              <div className="card instructor-sec">
                <div className="card-body">
                  <h5 className="subs-title">About the instructor</h5>
                  <div className="instructor-wrap">
                    <div className="about-instructor">
                      <div className="abt-instructor-img">
                        <Link to="/instructor/instructor-profile">
                          <img
                            src={item?.InstrutorId?.profileImage || User1}
                            alt="img"
                            className="img-fluid"
                          />
                        </Link>
                      </div>
                      <div className="instructor-detail">
                        <h5>
                          <Link to="/instructor/instructor-profile">{item?.InstrutorId?.firstName} {item?.InstrutorId?.lastName}</Link>
                        </h5>
                        <p>{item?.InstrutorId?.designation}</p>
                      </div>
                    </div>
                    <div className="rating">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <i
                          key={index}
                          className={`fas fa-star ${index < item?.InstrutorId?.rating ? "filled" : ""}`}
                        ></i>
                      ))}
                      <span className="d-inline-block average-rating">
                        <span>{item?.InstrutorId?.rating} Instructor Rating</span>
                      </span>
                    </div>
                  </div>
                  <div className="course-info d-flex align-items-center">
                    <div className="cou-info">
                      <img src={Play} alt="" />
                      <p>5 Courses</p>
                    </div>
                    <div className="cou-info">
                      <img src={Icon1} alt="" />
                      <p>{item?.InstrutorId?.lessions} Lesson</p>
                    </div>
                    <div className="cou-info">
                      <img src={Icon2} alt="" />
                      <p>9hr 30min</p>
                    </div>
                    <div className="cou-info">
                      <img src={People} alt="" />
                      <p>{item?.InstrutorId?.students} students enrolled</p>
                    </div>
                  </div>
                  <p>
                    {item?.InstrutorId?.bio}
                  </p>
                </div>
              </div>
              {/* /Instructor */}
              {/* Reviews */}
              <div className="card review-sec">
                <div className="card-body">
                  <h5 className="subs-title">Reviews</h5>
                  <div className="instructor-wrap">
                    <div className="about-instructor">
                      <div className="abt-instructor-img">
                        <Link to="instructor-profile">
                          <img
                            src={User1}
                            alt="img"
                            className="img-fluid"
                          />
                        </Link>
                      </div>
                      <div className="instructor-detail">
                        <h5>
                          <Link to="/instructor/instructor-profile">Nicole Brown</Link>
                        </h5>
                        <p>UX/UI Designer</p>
                      </div>
                    </div>
                    <div className="rating">
                      <i className="fas fa-star filled me-1" />
                      <i className="fas fa-star filled me-1" />
                      <i className="fas fa-star filled me-1" />
                      <i className="fas fa-star filled me-1" />
                      <i className="fas fa-star me-1" />
                      <span className="d-inline-block average-rating">
                        4.5 Instructor Rating
                      </span>
                    </div>
                  </div>
                  <p className="rev-info">
                    “ This is the second Photoshop course I have completed with
                    Cristian. Worth every penny and recommend it highly. To get
                    the most out of this course, its best to to take the
                    Beginner to Advanced course first. The sound and video
                    quality is of a good standard. Thank you Cristian. “
                  </p>
                  <Link to="#" className=" btn-reply">
                    {/* <i className="feather-corner-up-left" /> */}
                    <FeatherIcon icon="corner-up-left" />
                    Reply
                  </Link>
                </div>
              </div>
              {/* /Reviews */}
              {/* Comment */}
              <div className="card comment-sec">
                <div className="card-body">
                  <h5 className="subs-title">Post A comment</h5>
                  <form action='#'>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="input-block">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Full Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-block">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="input-block">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Subject"
                      />
                    </div>
                    <div className="input-block">
                      <textarea
                        rows={4}
                        className="form-control"
                        placeholder="Your Comments"
                        defaultValue={""}
                      />
                    </div>
                    <div className="submit-section">
                      <button className=" submit-btn" type="submit">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              {/* /Comment */}
            </div>
            <div className="col-lg-4">
              <div className="sidebar-sec">
                {/* Video */}
                <div className="video-sec vid-bg">
                  <div className="card">
                    <div className="card-body">
                      <Link
                        to="https://www.youtube.com/embed/1trvO6dqQUI"
                        className="video-thumbnail"
                        data-fancybox=""
                      >
                        <div className="play-icon">
                          <i className="fa-solid fa-play" />
                        </div>
                        <img className="" src={Video} alt="" />
                      </Link>
                      <div className="video-details">
                        <div className="course-fee">
                          <h2>FREE</h2>
                          <p>
                            <span>{item?.discountPrice}</span> {item?.price}
                          </p>
                        </div>
                        <div className="row gx-2">
                          <div className="col-md-6 addHeart">
                            <Link
                              to="/course-wishlist"
                              className=" btn btn-wish w-100"
                            >
                              <i className="feather icon-heart me-2" />
                              Add to Wishlist
                            </Link>
                          </div>
                          <div className="col-md-6 addHeart">
                            <Link
                              to="#"
                              className="btn btn-wish w-100"
                            >
                              <i className="feather icon-share-2 me-2" />
                              Share
                            </Link>
                          </div>
                        </div>
                        <div
                          onClick={handleSubmit}
                          className="btn btn-enroll w-100"
                        >
                          {loading ? ("Loading...") : ("Enroll Now")}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Video */}
                {/* Include */}
                <div className="card include-sec">
                  <div className="card-body">
                    <div className="cat-title">
                      <h4>Includes</h4>
                    </div>
                    <ul>
                      <li>
                        <img
                          src={Import}
                          className="me-2"
                          alt=""
                        />{" "}
                        11 hours on-demand video
                      </li>
                      <li>
                        <img
                          src={Play}
                          className="me-2"
                          alt=""
                        />{" "}
                        69 downloadable resources
                      </li>
                      <li>
                        <img
                          src={Key}
                          className="me-2"
                          alt=""
                        />{" "}
                        Full lifetime access
                      </li>
                      <li>
                        <img
                          src={Mobile}
                          className="me-2"
                          alt=""
                        />{" "}
                        Access on mobile and TV
                      </li>
                      <li>
                        <img
                          src={Cloud}
                          className="me-2"
                          alt=""
                        />{" "}
                        Assignments
                      </li>
                      <li>
                        <img
                          src={Teacher}
                          className="me-2"
                          alt=""
                        />{" "}
                        Certificate of Completion
                      </li>
                    </ul>
                  </div>
                </div>
                {/* /Include */}
                {/* Features */}
                <div className="card feature-sec">
                  <div className="card-body">
                    <div className="cat-title">
                      <h4>Includes</h4>
                    </div>
                    <ul>
                      <li>
                        <img
                          src={Users}
                          className="me-2"
                          alt=""
                        />{" "}
                        Enrolled: <span>{item?.InstrutorId?.students} students</span>
                      </li>
                      <li>
                        <img
                          src={Timer2}
                          className="me-2"
                          alt=""
                        />{" "}
                        Duration: <span>20 hours</span>
                      </li>
                      <li>
                        <img
                          src={Chapter}
                          className="me-2"
                          alt=""
                        />{" "}
                        Chapters: <span>{item?.lectures?.length}</span>
                      </li>
                      <li>
                        <img
                          src={Video2}
                          className="me-2"
                          alt=""
                        />{" "}
                        Video:<span> 12 hours</span>
                      </li>
                      <li>
                        <img
                          src={Chart}
                          className="me-2"
                          alt=""
                        />{" "}
                        Level: <span>{item?.level}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* /Features */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};



DetailsContent.propTypes = {
  item: PropTypes.string.isRequired, // Ensures datarole is a required string
};

export default DetailsContent;
