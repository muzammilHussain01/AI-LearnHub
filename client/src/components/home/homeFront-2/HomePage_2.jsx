import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import 'animate.css';

const HomePage_2 = () => {
    const [activeStep, setActiveStep] = useState(null);

    const steps = [
        { id: 1, title: "What is AI?", description: "Understanding the basics of Artificial Intelligence", content: "Artificial Intelligence (AI) is a branch of computer science focused on building systems and machines capable of performing tasks that typically require human intelligence. These tasks include reasoning, learning, problem-solving, understanding natural language, and perception. AI has evolved from theoretical concepts into real-world applications that are now part of our everyday lives—think virtual assistants like Siri and Alexa, recommendation engines on Netflix and YouTube, or even self-driving cars.\n" +
                "\n" +
                "At its core, AI is about creating intelligent agents—software or machines that can perceive their environment, interpret data, and take actions to achieve specific goals. These systems rely on algorithms, especially those in the field of machine learning, which enable them to improve their performance over time without being explicitly programmed for every scenario.\n" +
                "\n" +
                "There are different types and levels of AI. Narrow AI, also known as weak AI, is designed to handle a specific task—such as facial recognition, spam filtering, or voice commands. These systems are powerful but limited to the scope of their programming. General AI, or strong AI, is a more advanced concept that refers to machines that possess the ability to understand, learn, and apply knowledge in a wide variety of tasks, similar to a human being. This level of AI does not yet exist and remains a subject of active research and philosophical debate.\n" +
                "\n" +
                "AI applications are powered by massive datasets and computational power. When you interact with AI—by asking a chatbot a question or using Google Translate—you’re benefiting from algorithms trained on millions of examples. These systems detect patterns and correlations that allow them to generate intelligent outputs. For instance, in natural language processing (NLP), AI can understand context, semantics, and syntax to translate text or respond to queries accurately.\n" +
                "\n" +
                "The significance of AI lies in its potential to revolutionize virtually every industry. In healthcare, AI can analyze medical images and assist in diagnosing diseases. In finance, it helps detect fraudulent transactions and predict stock market trends. In education, it powers personalized learning systems that adapt to each student’s pace and style.\n" +
                "\n" +
                "However, while AI presents numerous opportunities, it also raises important ethical and societal questions. Issues like data privacy, algorithmic bias, job displacement, and the potential misuse of AI technologies must be addressed to ensure that AI serves the greater good. Organizations and researchers are actively working on frameworks for trustworthy AI that emphasize fairness, transparency, accountability, and safety.\n" +
                "\n" +
                "In conclusion, Artificial Intelligence is transforming how we live, work, and interact with the world. While we are still far from achieving human-level intelligence in machines, the rapid pace of innovation means AI will continue to be an essential part of the digital landscape. For beginners, understanding AI is not just about technology—it’s about being informed and prepared for the changes it will bring across all aspects of life.\n" +
                "\n", difficulty: "Beginner", estimatedTime: "10 min" },
        { id: 2, title: "Machine Learning Fundamentals", description: "How machines learn patterns", content: "Machine Learning is a subset of Artificial Intelligence that allows systems to learn from data and make decisions without explicit programming. It uses algorithms to identify patterns, improve over time, and adapt to new information. The three main types are supervised learning (with labeled data), unsupervised learning (with unlabeled data), and reinforcement learning (learning through rewards and penalties). Machine learning is widely used in applications like recommendation systems, image recognition, fraud detection, and voice assistants. Beginners should understand concepts like data preprocessing, model training, and evaluation. With growing data, machine learning offers powerful tools for solving real-world problems efficiently.\n" +
                "\n", difficulty: "Beginner", estimatedTime: "15 min" },
        { id: 3, title: "Deep Learning Basics", description: "Explore neural networks", content: "Deep Learning is a subset of Machine Learning that uses artificial neural networks with multiple layers to model complex patterns in data. Inspired by the human brain, these networks consist of interconnected nodes (neurons) that process input and adjust weights during training. Deep learning excels at tasks like image recognition, natural language processing, and speech recognition. It requires large datasets and powerful computational resources, but can achieve remarkable accuracy. Key concepts include activation functions, backpropagation, and optimization algorithms. Understanding how these layers work together is essential for building effective deep learning models and advancing in the AI field.", difficulty: "Intermediate", estimatedTime: "20 min" },
        { id: 4, title: "Natural Language Processing", description: "How AI understands language", content: "Natural Language Processing (NLP) is a field of AI that focuses on the interaction between computers and human language. It enables machines to understand, interpret, and generate human language in a meaningful way. NLP powers applications like chatbots, virtual assistants, language translators, and sentiment analysis tools. Core tasks include tokenization, part-of-speech tagging, named entity recognition, and syntactic parsing. Modern NLP often uses deep learning models like transformers (e.g., BERT, GPT) for state-of-the-art performance. Understanding NLP is essential for developing AI systems that can effectively process and respond to human language in real-world applications.", difficulty: "Intermediate", estimatedTime: "25 min" },
        { id: 5, title: "Computer Vision", description: "How AI sees the world", content: "Computer Vision is a field of AI that enables machines to interpret and understand visual information from the world, such as images and videos. It combines techniques from image processing, deep learning, and pattern recognition to detect, classify, and track objects. Common applications include facial recognition, self-driving cars, medical image analysis, and security systems. Deep learning models like convolutional neural networks (CNNs) play a key role in extracting features from visual data. Understanding how AI processes visual input is essential for building systems that can recognize, analyze, and respond to real-world environments accurately and efficiently.", difficulty: "Intermediate", estimatedTime: "30 min" },
        { id: 6, title: "AI Ethics & Future", description: "Responsible AI development", content: "AI Ethics focuses on the responsible development and use of artificial intelligence, ensuring systems are fair, transparent, and aligned with human values. Key concerns include data privacy, algorithmic bias, accountability, and the societal impact of automation. Ethical AI promotes inclusivity, avoids discrimination, and encourages explainability in decision-making. As AI becomes more powerful, discussions around regulation, human oversight, and long-term risks become increasingly important. The future of AI depends not just on technical progress but also on addressing moral, legal, and social challenges. Understanding these issues is crucial for developing trustworthy AI that benefits all of humanity.", difficulty: "Advanced", estimatedTime: "35 min" },
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
