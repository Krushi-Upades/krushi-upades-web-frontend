import { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa';

const FeedbackPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const feedbacks = [
        {
            id: 1,
            title: 'Excellent Service',
            content: 'The service was outstanding, and the support team was very helpful throughout the process.',
            name: 'Anjalee Fernando',
            picture: 'src/assets/images/profile.png',
            rating: 5,
        },
        {
            id: 2,
            title: 'Great Experience',
            content: 'I had a great experience using this platform. The resources provided were very useful.',
            name: 'Keshali Dhananjana',
            picture: 'src/assets/images/profile.png',
            rating: 4,
        },
        {
            id: 3,
            title: 'Very Satisfied',
            content: 'I am very satisfied with the service. The response time was quick and the information was accurate.',
            name: 'Viraji Dewmini',
            picture: 'src/assets/images/profile.png',
            rating: 4,
        },
        {
            id: 4,
            title: 'Highly Recommended',
            content: 'The platform exceeded my expectations. Great job on all fronts.',
            name: 'Ranuri Dissanayake',
            picture: 'src/assets/images/profile.png',
            rating: 3,
        },
        {
            id: 5,
            title: 'Impressive Support',
            content: 'Support was very responsive and helped resolve my issue quickly.',
            name: 'Senuri Bhagya',
            picture: 'src/assets/images/profile.png',
            rating: 5,
        },
        {
            id: 6,
            title: 'Fantastic Experience',
            content: 'Overall, a fantastic experience. The platform is user-friendly and efficient.',
            name: 'Senuri Bhagya',
            picture: 'src/assets/images/profile.png',
            rating: 5,
        },
    ];

    const handleNext = () => {
        if (currentIndex < feedbacks.length - 3) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const leftArrowClasses = currentIndex === 0 ? 'bg-gray-300 text-gray-400' : 'bg-gray-400 hover:bg-gray-600';
    const rightArrowClasses = currentIndex >= feedbacks.length - 3 ? 'bg-gray-300 text-gray-400' : 'bg-gray-400 hover:bg-gray-600';

    return (
        <div id="feedback" className="bg-green-50 flex flex-col justify-center items-center">
            {/* Feedback Title */}
            <h1 className="text-6xl font-bold text-green-700 mt-10 mb-8">Feedback</h1>

            <div className="flex items-center mb-20">
                {/* Left Arrow */}
                <button
                    onClick={handlePrev}
                    className={`${leftArrowClasses} p-2 rounded-full shadow focus:outline-none`}
                    disabled={currentIndex === 0}
                >
                    <FaArrowLeft size={24} />
                </button>

                {/* Feedback Cards */}
                <div className="flex space-x-6 mx-4">
                    {feedbacks.slice(currentIndex, currentIndex + 3).map(feedback => (
                        <div key={feedback.id} className="w-72 h-[400px] bg-white p-4 rounded-2xl shadow-2xl text-center flex flex-col">
                            <img
                                src={feedback.picture}
                                alt={feedback.name}
                                className="w-32 h-32 rounded-full mx-auto my-4"
                            />
                            <h2 className="text-lg font-bold mb-4">{feedback.name}</h2>
                            <h3 className="text-sm font-semibold mb-2">{feedback.title}</h3>
                            <p className="text-gray-700">{feedback.content}</p>
                            <div className="flex justify-center mt-auto">
                                {[...Array(5)].map((_, index) => (
                                    <FaStar
                                        key={index}
                                        size={20}
                                        className={index < feedback.rating ? 'text-yellow-400' : 'text-gray-300'}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Arrow */}
                <button
                    onClick={handleNext}
                    className={`${rightArrowClasses} p-2 rounded-full shadow focus:outline-none`}
                    disabled={currentIndex >= feedbacks.length - 3}
                >
                    <FaArrowRight size={24} />
                </button>
            </div>
        </div>
    );
};

export default FeedbackPage;
