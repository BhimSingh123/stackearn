import React, { useState } from "react";
import Header from "../../header";
import { Footer3 } from "../../footer3";
import { Icon03, Join, Icon02, Icon01, Icon04 } from "../../imagepath";
import toast from "react-hot-toast";
import Listing from "../../Api/Listing";

const Support = () => {

  const [Regs, setRegs] = useState({
    name: "",
    email: "",
    role: 'support',
    message: "",
    subject: '',
    phone_number: ''
  });
  const handleInputs = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setRegs((prevState) => ({ ...prevState, [name]: value }));
  };

  const [loading, setLoading] = useState(false);

  const handleForms = async (e) => {
    e.preventDefault();
    if (loading) return;

    if (!Regs.name || !Regs.email || !Regs.phone_number || !Regs.subject || !Regs.message) {
      toast.error("Please fill out all fields.");
      return;
    }

    setLoading(true);
    const main = new Listing();
    try {
      const response = await main.contact(Regs);
      console.log("response",response)
      if (response?.data?.status) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="main-wrapper">

        <Header activeMenu="Support" />


        <section className="section master-skill">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12">
                <div className="section-header aos" data-aos="fade-up">
                  <div className="section-sub-head">
                    <span>What’s New</span>
                    <h2>Master the skills to drive your career</h2>
                  </div>
                </div>
                <div className="section-text aos" data-aos="fade-up">
                  <p>
                    Get certified, master modern tech skills, and level up your
                    career — whether you’re starting out or a seasoned pro. 95%
                    of eLearning learners report our hands-on content directly
                    helped their careers.
                  </p>
                </div>
                <div className="career-group aos" data-aos="fade-up">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 d-flex">
                      <div className="certified-group blur-border d-flex">
                        <div className="get-certified d-flex align-items-center">
                          <div className="blur-box">
                            <div className="certified-img ">
                              <img src={Icon01} alt="" className="img-fluid" />
                            </div>
                          </div>
                          <p>Stay motivated with engaging instructors</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 d-flex">
                      <div className="certified-group blur-border d-flex">
                        <div className="get-certified d-flex align-items-center">
                          <div className="blur-box">
                            <div className="certified-img ">
                              <img src={Icon02} alt="" className="img-fluid" />
                            </div>
                          </div>
                          <p>Keep up with in the latest in cloud</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 d-flex">
                      <div className="certified-group blur-border d-flex">
                        <div className="get-certified d-flex align-items-center">
                          <div className="blur-box">
                            <div className="certified-img ">
                              <img src={Icon03} alt="" className="img-fluid" />
                            </div>
                          </div>
                          <p>Get certified with 100+ certification courses</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 d-flex">
                      <div className="certified-group blur-border d-flex">
                        <div className="get-certified d-flex align-items-center">
                          <div className="blur-box">
                            <div className="certified-img ">
                              <img src={Icon04} alt="" className="img-fluid" />
                            </div>
                          </div>
                          <p>Build skills your way, from labs to courses</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 d-flex align-items-end">
                <div className="career-img aos" data-aos="fade-up">
                  <img src={Join} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="page-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-8 mx-auto">
                <div className="support-wrap">
                  <h5>Submit a Request</h5>
                  <form action="#">
                    <div className="input-block">
                      <label>First Name</label>
                      <input
                        type="text"
                        name="name"
                        value={Regs?.name}
                        onChange={handleInputs}

                        className="form-control"
                        placeholder="Enter your first Name"
                      />
                    </div>
                    <div className="input-block">
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        value={Regs?.email}
                        onChange={handleInputs}

                        className="form-control"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div className="input-block">
                      <label>Phone Number</label>
                      <input
                        type="tel"
                        name="phone_number"
                        value={Regs?.phone_number}
                        onChange={handleInputs}
                        className="form-control"
                        placeholder="Enter your phone number"
                        pattern="[0-9]{10}"
                        title="Please enter a valid 10-digit phone number"
                      />

                    </div>
                    <div className="input-block">
                      <label>Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={Regs?.subject}
                        onChange={handleInputs}

                        className="form-control"
                        placeholder="Enter your Subject"
                      />
                    </div>
                    <div className="input-block">
                      <label>Description</label>
                      <textarea
                        className="form-control"
                        placeholder="Write down here"
                        rows={4}
                        onChange={handleInputs}
                        value={Regs?.message}
                        name="message"
                      />
                    </div>
                    <button
                      className="btn-submit"
                      onClick={handleForms}
                      disabled={loading}
                    >
                      {loading ? "Loading..." : "Submit"}
                    </button>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-three">

          <Footer3 />
        </div>
      </div>
    </>
  );
};

export default Support;
