import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import Header from "../header";
import {
  Blog1,
  Blog2,
  Blog3,
  Blog8,
  Icon22,
  Icon23,
} from "../imagepath";
import Header from "../header";
import { Footer4 } from "../footer4";
import Listing from "../Api/Listing";
import LoadingPage from "../../LoadingPage";

const BlogGrid = () => {
  const [loading, setLoading] = useState(false);
  const [listing, setListing] = useState([]);
  console.log("listing", listing)
  const fetchBlogList = async () => {
    setLoading(true);
    try {
      const main = new Listing();
      const response = await main.BlogGet();
      console.log("response", response)
      setListing(response?.data?.data
      );
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogList();
  }, []);
  return (
    <>
      <div className="main-wrapper">
        <Header />
        <div className="breadcrumb-bar">
          <div className="container mt-4">
            <div className="row">
              <div className="col-md-12 col-12">
                <div className="breadcrumb-list">
                  <nav aria-label="breadcrumb" className="page-breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/home">Home</Link>
                      </li>
                      <li className="breadcrumb-item" aria-current="page">
                        Pages
                      </li>
                      <li className="breadcrumb-item" aria-current="page">
                        Blog Grid
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="course-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 col-md-12">
                <div className="row">
                  {loading ? (
                    <LoadingPage />
                  ) :
                    (listing && listing?.map((item, index) => (
                      <div className="col-md-6 col-sm-12">
                        {/* Blog Post */}
                        <div className="blog grid-blog">
                          <div className="blog-image">
                            <Link to={`/blog-details/${item?._id}`}>
                              <img
                                className="img-fluid"
                                src={Blog8 || item?.Image}
                                alt="Post Image"
                              />
                            </Link>
                          </div>
                          <div className="blog-grid-box">

                            <h3 className="blog-title">
                              <Link to={`/blog-details/${item?._id}`}>
                                {item?.title}
                              </Link>
                            </h3>
                            <div className="blog-content blog-read">
                              <div
                                className="data-limit"
                                dangerouslySetInnerHTML={{ __html: item.content }}
                                style={{ marginTop: "1rem" }}
                              />
                              <Link
                                to={`/blog-details/${item?._id}`}
                                className="read-more btn btn-primary mt-5"
                              >
                                Read More
                              </Link>
                            </div>
                          </div>
                        </div>
                        {/* /Blog Post */}
                      </div>
                    ))
                    )}

                </div>
                {/* Blog pagination */}
                <div className="row">
                  <div className="col-md-12">
                    <ul className="pagination lms-page">
                      <li className="page-item prev">
                        <Link className="page-link" to=" #" >
                          <i className="fas fa-angle-left" />
                        </Link>
                      </li>
                      <li className="page-item first-page active">
                        <Link className="page-link" to=" #">
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to=" #">
                          2
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to=" #">
                          3
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to=" #">
                          4
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to=" #">
                          5
                        </Link>
                      </li>
                      <li className="page-item next">
                        <Link className="page-link" to=" #">
                          <i className="fas fa-angle-right" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* /Blog pagination */}
              </div>
              {/* Blog Sidebar */}
              <div className="col-lg-3 col-md-12 sidebar-right theiaStickySidebar">
                <div className="stickysidebar">
                  {/* Search */}
                  <div className="card search-widget blog-search blog-widget">
                    <div className="card-body">
                      <form className="search-form">
                        <div className="input-group">
                          <input
                            type="text"
                            placeholder="Search..."
                            className="form-control"
                          />
                          <button type="submit" className="btn btn-primary">
                            <i className="fa fa-search" />
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* /Search */}
                  {/* Latest Posts */}
                  <div className="card post-widget blog-widget">
                    <div className="card-header">
                      <h4 className="card-title">Recent Posts</h4>
                    </div>
                    <div className="card-body">
                      <ul className="latest-posts">
                        <li>
                          <div className="post-thumb">
                            <Link to="/blog-details">
                              <img className="img-fluid" src={Blog1} alt="" />
                            </Link>
                          </div>
                          <div className="post-info">
                            <h4>
                              <Link to="/blog-details">
                                Learn Webs Applications Development from Experts
                              </Link>
                            </h4>
                            <p>
                              <img className="img-fluid" src={Icon22} alt="" />
                              Jun 14, 2024
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="post-thumb">
                            <Link to="/blog-details">
                              <img className="img-fluid" src={Blog2} alt="" />
                            </Link>
                          </div>
                          <div className="post-info">
                            <h4>
                              <Link to="/blog-details">
                                Expand Your Career Opportunities With Python
                              </Link>
                            </h4>
                            <p>
                              <img className="img-fluid" src={Icon22} alt="" />3
                              Dec 2019
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="post-thumb">
                            <Link to="/blog-details">
                              <img className="img-fluid" src={Blog3} alt="" />
                            </Link>
                          </div>
                          <div className="post-info">
                            <h4>
                              <Link to="/blog-details">
                                Complete PHP Programming Career Guideline
                              </Link>
                            </h4>
                            <p>
                              <img className="img-fluid" src={Icon22} alt="" />3
                              Dec 2019
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* /Latest Posts */}
                  {/* Categories */}
                  <div className="card category-widget blog-widget">
                    <div className="card-header">
                      <h4 className="card-title">Categories</h4>
                    </div>
                    <div className="card-body">
                      <ul className="categories">
                        <li>
                          <Link to=" #">
                            <i className="fas fa-angle-right" /> Business
                          </Link>
                        </li>
                        <li>
                          <Link to=" #">
                            <i className="fas fa-angle-right" /> Courses
                          </Link>
                        </li>
                        <li>
                          <Link to=" #">
                            <i className="fas fa-angle-right" /> Education
                          </Link>
                        </li>
                        <li>
                          <Link to=" #">
                            <i className="fas fa-angle-right" /> Graphics Design
                          </Link>
                        </li>
                        <li>
                          <Link to=" #">
                            <i className="fas fa-angle-right" /> Programming
                          </Link>
                        </li>
                        <li>
                          <Link to=" #">
                            <i className="fas fa-angle-right" /> Web Design
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* /Categories */}
                  {/* Archives Categories */}
                  <div className="card category-widget blog-widget">
                    <div className="card-header">
                      <h4 className="card-title">Archives</h4>
                    </div>
                    <div className="card-body">
                      <ul className="categories">
                        <li>
                          <Link to=" #">
                            <i className="fas fa-angle-right" /> January 2024
                          </Link>
                        </li>
                        <li>
                          <Link to=" #">
                            <i className="fas fa-angle-right" /> February 2024
                          </Link>
                        </li>
                        <li>
                          <Link to=" #">
                            <i className="fas fa-angle-right" /> April 2024
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* /Archives Categories */}
                  {/* Tags */}
                  <div className="card tags-widget blog-widget tags-card">
                    <div className="card-header">
                      <h4 className="card-title">Latest Tags</h4>
                    </div>
                    <div className="card-body">
                      <ul className="tags">
                        <li>
                          <Link to=" #" className="tag">
                            HTML
                          </Link>
                        </li>
                        <li>
                          <Link to=" #" className="tag">
                            Java Script
                          </Link>
                        </li>
                        <li>
                          <Link to=" #" className="tag">
                            Css
                          </Link>
                        </li>
                        <li>
                          <Link to=" #" className="tag">
                            Jquery
                          </Link>
                        </li>
                        <li>
                          <Link to=" #" className="tag">
                            Java
                          </Link>
                        </li>
                        <li>
                          <Link to=" #" className="tag">
                            React
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* /Tags */}
                </div>
              </div>
              {/* /Blog Sidebar */}
            </div>
          </div>
        </section>
        <Footer4 />
      </div>
    </>
  );
};

export default BlogGrid;
