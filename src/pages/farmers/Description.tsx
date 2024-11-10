import { useParams } from 'react-router-dom';
import Navbar from './Navbar.tsx';

const Description = () => {
    const { name } = useParams();  // Get the vegetable name from the URL

    // Sample data for vegetables (can be replaced by an API call or context)
    const vegetables = [
        {
            name: 'කැරට්',
            description: 'Carrot is rich in beta carotene and is known for its health benefits.',
            image: '/src/assets/images/carrot.png',
        },
        {
            name: 'බෝංචි',
            description: 'Beans are high in protein and fiber, making them a healthy vegetable choice.',
            image: '/src/assets/images/beans.png',
        },
        {
            name: 'තක්කාලි',
            description: 'Tomato is rich in vitamins and is widely used in cooking.',
            image: '/src/assets/images/tomato.png',
        },
        {
            name: 'ලීක්ස්',
            description: 'Leeks are similar to onions and are used in a variety of dishes.',
            image: '/src/assets/images/leeks.png',
        },
        {
            name: 'ගෝවා',
            description: 'Cabbage is low in calories and high in nutrients.',
            image: '/src/assets/images/cabbage.png',
        },
        {
            name: 'වම්බටු',
            description: 'Eggplant is a versatile vegetable with a variety of health benefits.',
            image: '/src/assets/images/eggplant.png',
        },
        {
            name: 'බණ්ඩක්කා',
            description: 'Bandakka is known for its rich source of fiber and vitamins.',
            image: '/src/assets/images/bandakka.png',
        },
        {
            name: 'මෑකරල්',
            description: 'Makaral is a delicious vegetable commonly used in Sri Lankan cuisine.',
            image: '/src/assets/images/makaral.png',
        },
        {
            name: 'අමු මිරිස්',
            description: 'Green chili peppers are used to add spice and flavor to dishes.',
            image: '/src/assets/images/amumiris.png',
        },
        {
            name: 'මාලු මිරිස්',
            description: 'Malumiris is a type of chili pepper used in Sri Lankan food.',
            image: '/src/assets/images/malumiris.png',
        },
        {
            name: 'නිවිති',
            description: 'Nivithi is a type of vegetable used in a variety of dishes.',
            image: '/src/assets/images/nivithi.png',
        },
        {
            name: 'මුකුණුවැන්න',
            description: 'Mukunuwanna is a leafy vegetable often used in traditional dishes.',
            image: '/src/assets/images/mukunuwanna.png',
        },
    ];

    // Find the vegetable based on the name from the URL
    const vegetable = vegetables.find(veg => veg.name === name);

    if (!vegetable) {
        return <div>Vegetable not found!</div>;  // Display if vegetable is not found
    }

    return (
        <div className="min-h-screen">
            <Navbar />
            <div className="py-10">
                <div className="flex justify-center items-center">
                    <div className="max-w-4xl bg-white shadow-lg rounded-lg p-8">
                        <img
                            src={vegetable.image}
                            alt={vegetable.name}
                            className="w-64 h-64 object-cover mx-auto mb-6"
                        />
                        <h2 className="text-2xl font-bold mb-4">{vegetable.name}</h2>
                        <p className="text-gray-700">{vegetable.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Description;
