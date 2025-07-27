import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Events = () => {
    const events = [
        {
            id: 1,
            date: '10',
            month: 'Nov',
            title: 'The Office Trivia',
            video: 'https://www.w3schools.com/html/mov_bbb.mp4',
        },
        {
            id: 2,
            date: '11',
            month: 'Nov',
            title: 'Live Band Night',
            video: 'https://www.w3schools.com/html/movie.mp4',
        },
        {
            id: 3,
            date: '12',
            month: 'Nov',
            title: 'Comedy Open Mic',
            video: 'https://www.w3schools.com/html/mov_bbb.mp4',
        },
        {
            id: 4,
            date: '13',
            month: 'Nov',
            title: 'Dance Party',
            video: 'https://www.w3schools.com/html/movie.mp4',
        },
        {
            id: 5,
            date: '14',
            month: 'Nov',
            title: 'Live Guitar Session',
            video: 'https://www.w3schools.com/html/mov_bbb.mp4',
        },
        {
            id: 6,
            date: '15',
            month: 'Nov',
            title: 'Karaoke Night',
            video: 'https://www.w3schools.com/html/movie.mp4',
        },
    ];

    return (
        <div className="container my-5">
            <h2 className="mb-4 text-center">Upcoming Events</h2>
            <div className="row g-4">
                {events.map((event) => (
                    <div className="col-md-4" key={event.id}>
                        <div className="card shadow-sm border-0 h-100">
                            <video
                                className="card-img-top"
                                controls
                                muted
                                autoPlay
                                loop
                                style={{ height: '180px', objectFit: 'cover' }}
                            >
                                <source src={event.video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <div className="text-center bg-light rounded p-2 me-3" style={{ minWidth: '50px' }}>
                                        <h5 className="mb-0">{event.date}</h5>
                                        <small className="text-muted">{event.month}</small>
                                    </div>
                                    <h6 className="mb-0">{event.title}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Events;
