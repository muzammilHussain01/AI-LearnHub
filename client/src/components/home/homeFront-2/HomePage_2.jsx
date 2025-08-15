import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import 'animate.css';
import { getApi } from "../../helper/helper.js";

// StepCard component to avoid hook order changes
const StepCard = ({ step, index, activeStep, setActiveStep }) => {
    const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });
    const isActive = activeStep === step.id;

    const getDifficultyBadgeClass = (difficulty) => {
        switch (difficulty) {
            case 'Beginner': return 'bg-success';
            case 'Intermediate': return 'bg-warning';
            case 'Advanced': return 'bg-danger';
            default: return 'bg-secondary';
        }
    };

    const getStepIcon = (id) => {
        const icons = ['💻', '🖌️', '⚡', '🌐', '🗄️', '🚀', '📦', '🗃️', '🔒', '🚀', '📱', '🖥️'];
        return icons[id - 1] || '📚';
    };

    return (
        <div ref={ref} className={`row position-relative ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
            <div className="col-md-5">
                <div
                    className={`card shadow-sm border-0 card-custom ${isActive ? 'active shadow-lg' : ''} ${inView ? 'animate__animated animate__fadeInUp' : ''}`}
                    onClick={() => setActiveStep(isActive ? null : step.id)}
                    style={{ cursor: 'pointer' }}
                >
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-start mb-1">
              <span
                  className="badge rounded-circle text-white fw-bold position-absolute ladder-badge d-flex align-items-center justify-content-center"
                  style={{
                      right: index % 2 === 0 ? '-12px' : 'auto',
                      left: index % 2 !== 0 ? '-12px' : 'auto',
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

                        <div className="mb-1">
                            <span className="fs-3 me-2">{getStepIcon(step.id)}</span>
                            <h5 className="card-title text-primary d-inline-block">{step.title}</h5>
                        </div>

                        <p className="card-text text-muted lh-sm">{step.description}</p>

                        {isActive && (
                            <div className="content-area text-dark">
                                <h6 className="text-primary fw-bold mb-1">📖 What you'll learn:</h6>
                                <p className="mb-0 lh-sm">{step.content}</p>
                            </div>
                        )}

                        <div className="text-end mt-1">
                            <button className="btn btn-outline-primary btn-sm fw-semibold">
                                {isActive ? '📖 Collapse' : '🚀 Learn More'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-2 d-flex justify-content-center align-items-start pt-2">
                <div
                    className="rounded-circle ladder-circle"
                    style={{ backgroundColor: isActive ? '#0d6efd' : '#ccc' }}
                ></div>
            </div>

            <div className="col-md-5"></div>
        </div>
    );
};

const HomePage_2 = () => {
    const [activeStep, setActiveStep] = useState(null);
    const [steps, setSteps] = useState([]);

    useEffect(() => {
        const fetchSteps = async () => {
            try {
                const response = await getApi("ladderSteps");
                setSteps(response.data?.data.sort((a,b)=>a.id - b.id) || []);
            } catch (error) {
                console.error("Error fetching ladder steps:", error);
                setSteps([]);
            }
        };
        fetchSteps();
    }, []);

    return (
        <div className="bg-pattern">
            <style>{`
        .card-custom { transition: transform 0.3s ease; margin-bottom: 12px; }
        .card-custom.active { transform: scale(1.02); }
        .card-body { padding: 0.8rem !important; }
        .card-title { margin-bottom: 0.3rem !important; }
        .card-text { margin-bottom: 0.3rem !important; }
        .content-area { margin-top: 0.5rem !important; padding: 0.5rem !important; }
        .ladder-badge { font-size: 0.85rem; width: 32px; height: 32px; top: -10px !important; }
        .ladder-circle { width: 18px; height: 18px; }
      `}</style>

            <div className="container py-4">
                <div className="text-center mb-4">
                    <h6 className="display-6 fw-bold mb-2">Start your Web Development Journey</h6>
                    <div>
                        <span className="badge bg-primary text-white me-2 px-3 py-2">Interactive</span>
                        <span className="badge bg-success text-white me-2 px-3 py-2">Step by Step</span>
                        <span className="badge bg-warning text-white px-3 py-2">Beginner Friendly</span>
                    </div>
                </div>

                <div className="row justify-content-center position-relative">
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
                        <StepCard
                            key={step.id}
                            step={step}
                            index={index}
                            activeStep={activeStep}
                            setActiveStep={setActiveStep}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomePage_2;
