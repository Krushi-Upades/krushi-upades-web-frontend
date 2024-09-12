import Navbar from "./Navbar.tsx";

const Category = () => {
    // Sample data for vegetables
    const vegetables = [
        {
            name: 'කැරට්',
            image: '/src/assets/images/carrot.png',
        },
        {
            name: 'බෝංචි',
            image: '/src/assets/images/beans.png',
        },
        {
            name: 'තක්කාලි',
            image: 'src/assets/images/tomato.png',
        },
        {
            name: 'ලීක්ස්',
            image: '/src/assets/images/leeks.png',
        },
        {
            name: 'ගෝවා',
            image: '/src/assets/images/cabbage.png',
        },
        {
            name: 'වම්බටු',
            image: '/src/assets/images/eggplant.png',
        },
        {
            name: 'බණ්ඩක්කා',
            image: '/src/assets/images/bandakka.png',
        },
        {
            name: 'මෑකරල්',
            image: '/src/assets/images/makaral.png',
        },
        {
            name: 'අමු මිරිස්',
            image: '/src/assets/images/amumiris.png',
        },
        {
            name: 'මාලු මිරිස්',
            image: '/src/assets/images/malumiris.png',
        },
        {
            name: 'නිවිති',
            image: '/src/assets/images/nivithi.png',
        },
        {
            name: 'මුකුණුවැන්න',
            image: '/src/assets/images/mukunuwanna.png',
        }
    ];

    return (
        <div className="bg-green-50 min-h-screen">
            <Navbar /> {/* Include your navbar here */}
            <div className="py-10">
                <h1 className="text-center text-3xl font-bold mb-10">Vegetable Categories</h1>

                {/* Cards container */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-20">
                    {vegetables.map((vegetable, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center"
                        >
                            {/* Vegetable Image */}
                            <img
                                src={vegetable.image}
                                alt={vegetable.name}
                                className="w-32 h-32 object-cover mb-4"
                            />
                            {/* Vegetable Name */}
                            <h2 className="text-xl font-semibold">{vegetable.name}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Category;
