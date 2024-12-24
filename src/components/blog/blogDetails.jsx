import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { Blog1, Blog2, Blog3, BlogBanner, Icon22, Icon23, User } from '../imagepath';
import Header from '../header';
import { Footer4 } from '../footer4';
import Listing from '../Api/Listing';
import LoadingPage from '../../LoadingPage';

const BlogDetails = () => {
  const [loading, setLoading] = useState(false);

  const { Id } = useParams();
  const [listing, setListing] = useState("");

  const fetchBlogListId = async () => {
    setLoading(true);
    try {
      const main = new Listing();
      const response = await main.BlogGetId(Id); // Fetch instructor by ID
      if (response?.data?.data) {
        setListing(response.data.data);
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
    fetchBlogListId();
  }, []);
  // activeMenu={"Details"}
  return (
    <>
      <div className='main-wrapper'>
        <Header />
        {loading ? (<LoadingPage />) : (

          <section className="course-content">
            <div className="container mt-4">
              <div className="row">
                <div className="col-lg-9 col-md-12">
                  {/* Blog Post */}
                  <div className="blog">
                    <div className="blog-image">
                      <Link to="/blog-details">
                        <img
                          className="img-fluid"
                          src={BlogBanner || listing?.Image}
                          alt="Post Image"
                        />
                      </Link>
                    </div>

                    <h3 className="blog-title">
                      <Link to=" /blog-details">
                        {listing?.title}
                      </Link>
                    </h3>
                    <div className="blog-content">
                      <div
                        dangerouslySetInnerHTML={{ __html: listing.content }}
                        style={{ marginTop: "1rem" }}
                      />
                    </div>
                  </div>
                  {/* /Blog Post */}
                </div>
                {/* Blog Sidebar */}
                <div className="col-lg-3 col-md-12 sidebar-right theiaStickySidebar">
                  {/* Search */}
                  <div className='stickysidebar'>
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
                              <Link to=" /blog-details">
                                <img
                                  className="img-fluid"
                                  src={Blog1}
                                  alt=""
                                />
                              </Link>
                            </div>
                            <div className="post-info">
                              <h4>
                                <Link to=" /blog-details">
                                  Learn Webs Applications Development from Experts
                                </Link>
                              </h4>
                              <p>
                                <img
                                  className="img-fluid"
                                  src={Icon22}
                                  alt=""
                                />
                                Jun 14, 2024
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="post-thumb">
                              <Link to=" /blog-details">
                                <img
                                  className="img-fluid"
                                  src={Blog2}
                                  alt=""
                                />
                              </Link>
                            </div>
                            <div className="post-info">
                              <h4>
                                <Link to=" /blog-details">
                                  Expand Your Career Opportunities With Python
                                </Link>
                              </h4>
                              <p>
                                <img
                                  className="img-fluid"
                                  src={Icon22}
                                  alt=""
                                />
                                3 Dec 2019
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="post-thumb">
                              <Link to=" /blog-details">
                                <img
                                  className="img-fluid"
                                  src={Blog3}
                                  alt=""
                                />
                              </Link>
                            </div>
                            <div className="post-info">
                              <h4>
                                <Link to=" /blog-details">
                                  Complete PHP Programming Career Guideline
                                </Link>
                              </h4>
                              <p>
                                <img
                                  className="img-fluid"
                                  src={Icon22}
                                  alt=""
                                />
                                3 Dec 2019
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
        )}

        <Footer4 />

      </div>
    </>
  )
}

export default BlogDetails;