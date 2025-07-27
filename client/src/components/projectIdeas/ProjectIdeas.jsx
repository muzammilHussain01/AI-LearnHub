import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const dummyData = [
    {
        id: 1,
        title: 'Creative Landing',
        author: 'Simon Rasmusson',
        image: 'https://via.placeholder.com/300x200?text=Design+1',
        likes: 120,
        views: 345,
    },
    {
        id: 2,
        title: 'Dashboard UI',
        author: 'Zamkur',
        image: 'https://via.placeholder.com/300x200?text=Design+2',
        likes: 200,
        views: 670,
    },
    {
        id: 3,
        title: 'Minimal Portfolio',
        author: 'Klee Sousewitz',
        image: 'https://via.placeholder.com/300x200?text=Design+3',
        likes: 95,
        views: 230,
    },
    {
        id: 4,
        title: 'Analytics Tool',
        author: 'Bryan Golter',
        image: 'https://via.placeholder.com/300x200?text=Design+4',
        likes: 140,
        views: 510,
    },
    {
        id: 5,
        title: 'Flat Icon Set',
        author: 'Kyle Adams',
        image: 'https://via.placeholder.com/300x200?text=Design+5',
        likes: 85,
        views: 190,
    },
    {
        id: 6,
        title: 'Website Wireframe',
        author: 'Johannes Blum',
        image: 'https://via.placeholder.com/300x200?text=Design+6',
        likes: 110,
        views: 300,
    },
];

const ProjectIdeas = () => {
    return (
        <div className="container my-5">
            <div className="row">
                {dummyData.map((item) => (
                    <div className="col-md-4 mb-4" key={item.id}>
                        <div className="card h-100 shadow-sm border-0">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="card-img-top"
                                style={{ height: '200px', objectFit: 'cover' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title mb-1">{item.title}</h5>
                                <p className="text-muted mb-2">{item.author}</p>
                                <div className="d-flex justify-content-between text-muted small">
                                    <div><i className="bi bi-heart-fill text-danger me-1"></i> {item.likes}</div>
                                    <div><i className="bi bi-eye-fill me-1"></i> {item.views}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectIdeas;
