import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import 'animate.css';

const HomePage_2 = () => {
    const [activeStep, setActiveStep] = useState(null);

    const steps = [
        { id: 1, title: "What is AI?", description: "Understanding the basics of Artificial Intelligence", content: "AI simulates human intelligence...", difficulty: "Beginner", estimatedTime: "10 min" },
        { id: 2, title: "Machine Learning Fundamentals", description: "How machines learn patterns", content: "Machine Learning is a subset of AI...", difficulty: "Beginner", estimatedTime: "15 min" },
        { id: 3, title: "Deep Learning Basics", description: "Explore neural networks", content: "Deep Learning uses multi-layered networks...", difficulty: "Intermediate", estimatedTime: "20 min" },
        { id: 4, title: "Natural Language Processing", description: "How AI understands language", content: "NLP powers chatbots and translators...", difficulty: "Intermediate", estimatedTime: "25 min" },
        { id: 5, title: "Computer Vision", description: "How AI sees the world", content: "Computer Vision interprets visual data...", difficulty: "Intermediate", estimatedTime: "30 min" },
        { id: 6, title: "AI Ethics & Future", description: "Responsible AI development", content: "Ensuring fair, transparent AI...", difficulty: "Advanced", estimatedTime: "35 min" },
    ];

    const getDifficultyBadgeClass = (difficulty) => {
        switch (difficulty) {
            case 'Beginner': return 'bg-success';
            case 'Intermediate': return 'bg-warning';
            case 'Advanced': return 'bg-danger';
            default: return 'bg-secondary';
        }
    };

    const getStepIcon = (id) => {
        const icons = ['🤖', '🧠', '🔍', '💬', '👁️', '🌟'];
        return icons[id - 1] || '📚';
    };

    const handleStepClick = (stepId) => {
        setActiveStep(activeStep === stepId ? null : stepId);
    };

    const LadderStep = ({ step, isActive, onClick, isLeft }) => {
        const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });

        return (
            <div ref={ref} className={`row position-relative mb-5 ${isLeft ? '' : 'flex-row-reverse'}`}>
                <div className="col-md-5">
                    <div
                        className={`card shadow-sm border-0 card-custom ${isActive ? 'active shadow-lg' : ''} ${inView ? 'animate__animated animate__fadeInUp' : ''}`}
                        onClick={onClick}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="card-body p-4">
                            <div className="d-flex justify-content-between align-items-start mb-3">
                <span
                    className="badge rounded-circle text-white fw-bold position-absolute d-flex align-items-center justify-content-center"
                    style={{
                        top: '-15px',
                        right: isLeft ? '-15px' : 'auto',
                        left: isLeft ? 'auto' : '-15px',
                        fontSize: '1rem',
                        width: '40px',
                        height: '40px',
                        background: '#0d6efd'
                    }}
                >
                  {step.id}
                </span>
                                <div className="ms-auto">
                                    <span className={`badge ${getDifficultyBadgeClass(step.difficulty)} me-2`}>{step.difficulty}</span>
                                    <small className="text-muted fw-semibold">⏱️ {step.estimatedTime}</small>
                                </div>
                            </div>

                            <div className="mb-3">
                                <span className="fs-2 me-2">{getStepIcon(step.id)}</span>
                                <h5 className="card-title text-primary mb-2 d-inline-block">{step.title}</h5>
                            </div>

                            <p className="card-text text-muted mb-3 lh-base">{step.description}</p>

                            {isActive && (
                                <div className="content-area mt-4 p-3">
                                    <h6 className="text-primary fw-bold mb-2">📖 What you'll learn:</h6>
                                    <p className="mb-0 text-dark lh-base">{step.content}</p>
                                </div>
                            )}

                            <div className="text-end mt-3">
                                <button className="btn btn-outline-primary btn-sm fw-semibold">
                                    {isActive ? '📖 Collapse' : '🚀 Learn More'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-2 d-flex justify-content-center align-items-start pt-4">
                    <div
                        className={`rounded-circle ${isActive ? 'active' : ''}`}
                        style={{
                            width: '24px',
                            height: '24px',
                            backgroundColor: isActive ? '#0d6efd' : '#ccc'
                        }}
                    ></div>
                </div>

                <div className="col-md-5"></div>
            </div>
        );
    };

    return (
        <div className="bg-pattern">
            {/* Internal styles */}
            <style>{`
        .card-custom {
          transition: transform 0.3s ease;
        }
        .card-custom.active {
          transform: scale(1.02);
        }
      `}</style>

            <div className="container py-5">
                <div className="text-center mb-5">
                    <h6 className="display-6 fw-bold mb-3">Embark on your AI journey</h6>
                    <div>
                        <span className="badge bg-primary text-white me-2 px-3 py-2">Interactive</span>
                        <span className="badge bg-success text-white me-2 px-3 py-2">Step by Step</span>
                        <span className="badge bg-warning text-white px-3 py-2">Beginner Friendly</span>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="position-relative">
                            <div
                                className="position-absolute"
                                style={{
                                    left: '50%',
                                    top: '0',
                                    bottom: '0',
                                    width: '6px',
                                    background: '#e5e7eb',
                                    transform: 'translateX(-50%)',
                                    zIndex: 1
                                }}
                            ></div>

                            {steps.map((step, index) => (
                                <LadderStep
                                    key={step.id}
                                    step={step}
                                    isActive={activeStep === step.id}
                                    onClick={() => handleStepClick(step.id)}
                                    isLeft={index % 2 === 0}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage_2;
