import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Blog14, Blog15, Blog16, Blog17, Blog18, Blog19, Icon22, Icon24 } from '../imagepath';
import Header from '../header';
import { Footer4 } from '../footer4';
import Listing from '../Api/Listing';
import LoadingPage from '../../LoadingPage';
const BlogModern = () => {
    const [loading, setLoading] = useState(false);
    const [listing, setListing] = useState([]);
    const fetchBlogList = async () => {
        setLoading(true);
        try {
            const main = new Listing();
            const response = await main.BlogGet();
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
            <div className='main-wrapper'>
                <Header />
                <section className="course-content">
                    <div className="container mt-4">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="row">
                                    {loading ? (
                                        <LoadingPage />
                                    ) : (
                                        listing &&
                                        listing.map((item, index) => (
                                            <div className="col-md-4 col-sm-12" key={index}>
                                                {/* Blog Post */}
                                                <div className="blog grid-modern">
                                                    <div className="blog-image">
                                                        <Link to="/blog-details">
                                                            <img
                                                                className="img-fluid"
                                                                src={item?.image || Blog14} // Use a fallback image if `item?.image` is undefined
                                                                alt={item?.title || "Blog Image"} // Use the item's title as the alt text
                                                            />
                                                        </Link>
                                                    </div>
                                                    <div className="blog-modern-box">
                                                        <h3 className="blog-title">
                                                            <Link to="/blog-details">{item?.title || "Default Blog Title"}</Link>
                                                        </h3>
                                                        <div className="blog-info clearfix mb-0">
                                                            <div
                                                                className="data-limit"
                                                                dangerouslySetInnerHTML={{ __html: item.content }}
                                                                style={{ marginTop: "1rem" }}
                                                            />
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
                                                <Link
                                                    className="page-link"
                                                    to=" #"

                                                >
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
                        </div>
                    </div>
                </section>
                <Footer4 />
            </div>
        </>
    )
}

export default BlogModern;