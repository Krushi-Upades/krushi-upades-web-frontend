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

    const districts = ['Colombo', 'Galle', 'Kandy', 'Jaffna', 'Anuradhapura'];

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
        <div className="min-h-screen">
            <Navbar />
            <div className="px-20 py-10">
                <div className="flex flex-col items-center">
                    <div className="w-1/2 mb-8">
                        <label htmlFor="district-select" className="block text-lg font-bold mb-2">Select District:</label>
                        <select
                            id="district-select"
                            className="w-full p-2 border border-gray-300 rounded"
                            value={selectedDistrict}
                            onChange={handleDistrictChange}
                        >
                            {districts.map(district => (
                                <option key={district} value={district}>
                                    {district}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="flex justify-center w-full">
                        {/* Left Table */}
                        <table className="table-auto bg-white border border-gray-200 mr-10 w-1/2">
                            <thead>
                            <tr>
                                <th className="px-4 py-2 border bg-gray-100">Category</th>
                                <th className="px-4 py-2 border bg-gray-100">Price (LKR)</th>
                                <th className="px-4 py-2 border bg-gray-100">Image</th>
                            </tr>
                            </thead>
                            <tbody>
                            {leftTableItems.map((item, index) => (
                                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                                    <td className="border px-4 py-2">{item.category}</td>
                                    <td className="border px-4 py-2">{item.price}</td>
                                    <td className="border px-4 py-2">
                                        <img src={item.image} alt={item.category} className="w-14 h-14" />
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>

                        {/* Right Table */}
                        <table className="table-auto bg-white border border-gray-200 w-1/2">
                            <thead>
                            <tr>
                                <th className="px-4 py-2 border bg-gray-100">Category</th>
                                <th className="px-4 py-2 border bg-gray-100">Price (LKR)</th>
                                <th className="px-4 py-2 border bg-gray-100">Image</th>
                            </tr>
                            </thead>
                            <tbody>
                            {rightTableItems.map((item, index) => (
                                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                                    <td className="border px-4 py-2">{item.category}</td>
                                    <td className="border px-4 py-2">{item.price}</td>
                                    <td className="border px-4 py-2">
                                        <img src={item.image} alt={item.category} className="w-14 h-14" />
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Prices;
