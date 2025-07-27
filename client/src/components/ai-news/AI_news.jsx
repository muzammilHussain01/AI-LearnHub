import React, { useState } from "react";
import { Clock } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const AI_News = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const news = [
        {
            title: "OpenAI Releases GPT-5 with Better Reasoning",
            description:
                "The new model shows significant improvements in mathematical reasoning and code generation.",
            tag: "AI Models",
            time: "3 min read",
            image:
                "https://cdn.pixabay.com/photo/2024/06/18/15/26/ai-generated-8838283_1280.jpg",
        },
        {
            title: "Google DeepMind Achieves Breakthrough in Protein Folding",
            description:
                "New AI system can predict protein structures 50% faster than previous models.",
            tag: "Research",
            time: "4 min read",
            image:
                "https://cdn.pixabay.com/photo/2024/05/23/15/26/brain-8772433_1280.jpg",
        },
        {
            title: "AI Chip Market Expected to Reach $200B by 2025",
            description:
                "Growing demand for AI computing power drives unprecedented growth in the specialized chip development.",
            tag: "Industry",
            time: "2 min read",
            image:
                "https://cdn.pixabay.com/photo/2017/08/10/07/32/motherboard-2617437_1280.jpg",
        },
    ];

    const filteredNews = news.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container py-5">
            <h2 className="mb-4 fw-bold text-primary d-flex align-items-center">
                <i className="bi bi-newspaper me-2 fs-3"></i> Trending AI News
            </h2>

            <div className="mb-4">
                <input
                    type="text"
                    className="form-control shadow-sm rounded-pill px-4 py-2 border-primary"
                    placeholder="Search AI news..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="row g-4">
                {filteredNews.map((item, index) => (
                    <div className="col-md-4" key={index}>
                        <div
                            className="card border-0 shadow-lg h-100 transition rounded-4"
                            style={{ transition: "all 0.3s ease-in-out" }}
                        >
                            <img
                                src={item.image}
                                className="card-img-top rounded-top-4"
                                alt={item.title}
                                style={{ height: "200px", objectFit: "cover" }}
                            />
                            <div className="card-body d-flex flex-column p-4">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="badge bg-primary px-3 py-2 rounded-pill">
                    {item.tag}
                  </span>
                                    <small className="text-muted d-flex align-items-center">
                                        <Clock size={16} className="me-1" />
                                        {item.time}
                                    </small>
                                </div>
                                <h5 className="card-title fw-semibold mb-2">{item.title}</h5>
                                <p className="card-text text-muted">{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AI_News;
