// Import React (if not using JSX transformation)
import React, { useState } from 'react';
import Navbar from "./Navbar.tsx";

const Prices = () => {
    // Set default district as 'Colombo'
    const [selectedDistrict, setSelectedDistrict] = useState('Colombo');

    const handleDistrictChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedDistrict(e.target.value);
    };

    // Data for categories, prices, and images per district
    const pricesPerDistrict: Record<string, { category: string; price: string; image: string }[]> = {
        Colombo: [
            { category: 'කැරට්', price: '50', image: '/src/assets/images/carrot.png' },
            { category: 'බෝංචි', price: '40', image: '/src/assets/images/beans.png' },
            { category: 'ගෝවා', price: '30', image: '/src/assets/images/cabbage.png' },
            { category: 'බණ්ඩක්කා', price: '20', image: '/src/assets/images/bandakka.png' },
            { category: 'තක්කාලි', price: '25', image: '/src/assets/images/tomato.png' },
            { category: 'ලීක්ස්', price: '35', image: '/src/assets/images/leeks.png' },
            { category: 'වම්බටු', price: '45', image: '/src/assets/images/eggplant.png' },
            { category: 'මෑකරල්', price: '15', image: '/src/assets/images/makaral.png' },
            { category: 'අමු මිරිස්', price: '60', image: '/src/assets/images/amumiris.png' },
            { category: 'මාලු මිරිස්', price: '70', image: '/src/assets/images/malumiris.png' },
            { category: 'නිවිති', price: '60', image: '/src/assets/images/nivithi.png' },
            { category: 'මුකුණුවැන්න', price: '70', image: '/src/assets/images/mukunuwanna.png' }
        ],
        Galle: [
            { category: 'කැරට්', price: '48', image: '/src/assets/images/carrot.png' },
            { category: 'බෝංචි', price: '42', image: '/src/assets/images/beans.png' },
            { category: 'ගෝවා', price: '32', image: '/src/assets/images/cabbage.png' },
            { category: 'බණ්ඩක්කා', price: '22', image: '/src/assets/images/bandakka.png' },
            { category: 'තක්කාලි', price: '27', image: '/src/assets/images/tomato.png' },
            { category: 'ලීක්ස්', price: '36', image: '/src/assets/images/leeks.png' },
            { category: 'වම්බටු', price: '43', image: '/src/assets/images/eggplant.png' },
            { category: 'මෑකරල්', price: '17', image: '/src/assets/images/makaral.png' },
            { category: 'අමු මිරිස්', price: '58', image: '/src/assets/images/amumiris.png' },
            { category: 'මාලු මිරිස්', price: '68', image: '/src/assets/images/malumiris.png' },
            { category: 'නිවිති', price: '60', image: '/src/assets/images/nivithi.png' },
            { category: 'මුකුණුවැන්න', price: '70', image: '/src/assets/images/mukunuwanna.png' }
        ],
        Kandy: [
            { category: 'කැරට්', price: '50', image: '/src/assets/images/carrot.png' },
            { category: 'බෝංචි', price: '40', image: '/src/assets/images/beans.png' },
            { category: 'ගෝවා', price: '30', image: '/src/assets/images/cabbage.png' },
            { category: 'බණ්ඩක්කා', price: '20', image: '/src/assets/images/bandakka.png' },
            { category: 'තක්කාලි', price: '25', image: '/src/assets/images/tomato.png' },
            { category: 'ලීක්ස්', price: '35', image: '/src/assets/images/leeks.png' },
            { category: 'වම්බටු', price: '45', image: '/src/assets/images/eggplant.png' },
            { category: 'මෑකරල්', price: '15', image: '/src/assets/images/makaral.png' },
            { category: 'අමු මිරිස්', price: '60', image: '/src/assets/images/amumiris.png' },
            { category: 'මාලු මිරිස්', price: '70', image: '/src/assets/images/malumiris.png' },
            { category: 'නිවිති', price: '60', image: '/src/assets/images/nivithi.png' },
            { category: 'මුකුණුවැන්න', price: '70', image: '/src/assets/images/mukunuwanna.png' }
        ],
        Jaffna: [
            { category: 'කැරට්', price: '48', image: '/src/assets/images/carrot.png' },
            { category: 'බෝංචි', price: '42', image: '/src/assets/images/beans.png' },
            { category: 'ගෝවා', price: '32', image: '/src/assets/images/cabbage.png' },
            { category: 'බණ්ඩක්කා', price: '22', image: '/src/assets/images/bandakka.png' },
            { category: 'තක්කාලි', price: '27', image: '/src/assets/images/tomato.png' },
            { category: 'ලීක්ස්', price: '36', image: '/src/assets/images/leeks.png' },
            { category: 'වම්බටු', price: '43', image: '/src/assets/images/eggplant.png' },
            { category: 'මෑකරල්', price: '17', image: '/src/assets/images/makaral.png' },
            { category: 'අමු මිරිස්', price: '58', image: '/src/assets/images/amumiris.png' },
            { category: 'මාලු මිරිස්', price: '68', image: '/src/assets/images/malumiris.png' },
            { category: 'නිවිති', price: '60', image: '/src/assets/images/nivithi.png' },
            { category: 'මුකුණුවැන්න', price: '70', image: '/src/assets/images/mukunuwanna.png' }
        ],
        Anuradhapura: [
            { category: 'කැරට්', price: '50', image: '/src/assets/images/carrot.png' },
            { category: 'බෝංචි', price: '40', image: '/src/assets/images/beans.png' },
            { category: 'ගෝවා', price: '30', image: '/src/assets/images/cabbage.png' },
            { category: 'බණ්ඩක්කා', price: '20', image: '/src/assets/images/bandakka.png' },
            { category: 'තක්කාලි', price: '25', image: '/src/assets/images/tomato.png' },
            { category: 'ලීක්ස්', price: '35', image: '/src/assets/images/leeks.png' },
            { category: 'වම්බටු', price: '45', image: '/src/assets/images/eggplant.png' },
            { category: 'මෑකරල්', price: '15', image: '/src/assets/images/makaral.png' },
            { category: 'අමු මිරිස්', price: '60', image: '/src/assets/images/amumiris.png' },
            { category: 'මාලු මිරිස්', price: '70', image: '/src/assets/images/malumiris.png' },
            { category: 'නිවිති', price: '60', image: '/src/assets/images/nivithi.png' },
            { category: 'මුකුණුවැන්න', price: '70', image: '/src/assets/images/mukunuwanna.png' }
        ],
    };

    // Dummy districts for dropdown
    const districts = ['Colombo', 'Galle', 'Kandy', 'Jaffna', 'Anuradhapura'];

    // Function to alternate items between two tables
    const alternateItems = (items: { category: string; price: string; image: string }[]) => {
        const leftTableItems: { category: string; price: string; image: string }[] = [];
        const rightTableItems: { category: string; price: string; image: string }[] = [];

        items.forEach((item, index) => {
            if (index % 2 === 0) {
                leftTableItems.push(item);
            } else {
                rightTableItems.push(item);
            }
        });

        return { leftTableItems, rightTableItems };
    };

    const { leftTableItems, rightTableItems } = alternateItems(pricesPerDistrict[selectedDistrict]);

    return (
        <div className="bg-green-50 min-h-screen">
            <Navbar />
            <div className="px-20 py-10 bg-green-50">
                {/* Topic and Dropdown in one horizontal line */}
                <div className="flex justify-center items-center mb-10">
                    <h1 className="text-3xl font-bold mx-10">Prices per District</h1>
                    <select
                        value={selectedDistrict}
                        onChange={handleDistrictChange}
                        className="px-4 py-2 mx-10 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                    >
                        {districts.map((district, index) => (
                            <option key={index} value={district}>
                                {district}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Layout for two tables */}
                <div className="flex justify-between mt-10">
                    {/* Left Table */}
                    <div className="w-1/2 px-2">
                        <div className="overflow-x-auto">
                            <table className="min-w-full table-auto bg-white shadow-md rounded-2xl">
                                <thead>
                                <tr className="bg-gray-100">
                                    <th className="px-4 py-2 text-left">Image</th>
                                    <th className="px-4 py-2 text-left">Category</th>
                                    <th className="px-4 py-2 text-left">Price (per 1kg)</th>
                                </tr>
                                </thead>
                                <tbody>
                                {leftTableItems.map((item, index) => (
                                    <tr key={index}>
                                        <td className="px-4 py-2">
                                            <img src={item.image} alt={item.category} className="w-16 h-16 object-cover" />
                                        </td>
                                        <td className="px-4 py-2">{item.category}</td>
                                        <td className="px-4 py-2">{item.price} LKR</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Right Table */}
                    <div className="w-1/2 px-2">
                        <div className="overflow-x-auto">
                            <table className="min-w-full table-auto bg-white shadow-md rounded-2xl">
                                <thead>
                                <tr className="bg-gray-100">
                                    <th className="px-4 py-2 text-left">Image</th>
                                    <th className="px-4 py-2 text-left">Category</th>
                                    <th className="px-4 py-2 text-left">Price (per 1kg)</th>
                                </tr>
                                </thead>
                                <tbody>
                                {rightTableItems.map((item, index) => (
                                    <tr key={index}>
                                        <td className="px-4 py-2">
                                            <img src={item.image} alt={item.category} className="w-16 h-16 object-cover" />
                                        </td>
                                        <td className="px-4 py-2">{item.category}</td>
                                        <td className="px-4 py-2">{item.price} LKR</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Prices;
