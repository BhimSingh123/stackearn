import React from 'react';

const events = [
  {
    date: '20',
    monthYear: 'May , 2027',
    title: 'Coding Challenge Championship',
    time: '10.00AM - 12.00PM',
    location: 'Jeddah',
    link: 'https://getmasum.com/themes-wp/edutec/events/coding-challenge-championship/',
  },
  {
    date: '22',
    monthYear: 'August , 2024',
    title: 'Electrical Engineering new event',
    time: '10.00AM - 12.00PM',
    location: 'Jeddah',
    link: 'https://getmasum.com/themes-wp/edutec/events/electrical-engineering-new-event/',
  },
  {
    date: '28',
    monthYear: 'June , 2028',
    title: 'World Famous Talented Teachers',
    time: '10.00AM - 12.00PM',
    location: 'Jeddah',
    link: 'https://getmasum.com/themes-wp/edutec/events/world-famous-talented-teachers/',
  },
];

const EventsSection = () => {
  return (
    <section className="events section-padding mt-5 mb-5">
    <div className="container-xxl">
      <div className="container">
        <div className="text-center mt-3 mb-3" data-aos="zoom-in">
          {/* <h6 className={`${styles.section_title}`}>Event</h6> */}
          <h1 className="h1 mb-5 ">Join our Upcoming Events</h1>
        </div>
      </div>
    </div>
    <div className="container mt-4">
      {/* Responsive Layout */}
      <div className="row g-4">
        {/* Event List */}
        <div className="col-lg-8 mt-2 mb-3">
          <div className="event-list">
            {events.map((event, index) => (
              <div className="event-item mb-5 " key={index}>
                <div className="d-flex align-items-center justify-content-between p-3 bg-white border rounded gap-3">
                  {/* Left: Date */}
                  <div className="d-flex flex-column align-items-center me-4 border-end pe-4">
                    <div className="date evlb border border-dashed border-primary p-2 rounded-circle">
                      <div className="day text-primary  p-2 fw-bold fs-4">
                        {event.date}
                      </div>
                    </div>
                    <div className="myear text-muted mt-2">{event.monthYear}</div>
                  </div>
                  {/* Middle: Event Content */}
                  <div className="ev-content flex-grow-1 border-end pe-4">
                    <h4 className="fs-5 fw-semibold text-center text-dark text-truncate">
                      <a href={event.link} className="text-decoration-none text-dark hover-text-primary">
                        {event.title}
                      </a>
                    </h4>
                    <div className="evtime-loc d-flex flex-column flex-md-row justify-content-center align-items-center gap-2 mt-2 text-muted">
                      {/* Time Section */}
                      <span className="d-flex align-items-center">
                        <i className="fa-regular fa-clock me-2 text-primary"></i>
                        {event.time}
                      </span>
                      {/* Location Section */}
                      <span className="d-flex align-items-center">
                        <i className="fa-solid fa-map-location-dot me-2 text-primary"></i>
                        {event.location}
                      </span>
                    </div>
                  </div>
                  {/* Right: Join Now Button */}
                  <div className="text-end">
                    <a
                      href={event.link}
                      className="btn btn-primary d-inline-flex align-items-center"
                    >
                      Join Now
                      <i className="fa-solid fa-arrow-right-long ms-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Video Section */}
        <div className="col-lg-4">
          <div className="position-relative">
            <img
              src="https://getmasum.com/themes-wp/edutec/wp-content/uploads/2024/09/video-bg.jpg"
              alt="video"
              className="img-fluid rounded shadow w-full h-[280px]"
            />
            <a
              href="https://www.youtube.com/watch?v=AnQ7XZHnxvk"
              className="position-absolute top-50 start-50 translate-middle bg-danger text-white p-4 rounded-circle d-flex justify-content-center align-items-center shadow hover-bg-pink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-solid fa-play fs-3"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default EventsSection;


