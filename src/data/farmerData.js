const farmerData = {
    id: 1,
    name: 'Rajesh Kumar',
    location: '45 MG Road, Patna, India',
    bio: 'I have been farming for 15 years and specialize in growing organic fruits and vegetables. My farm uses traditional and sustainable practices to ensure that our produce is healthy and fresh.',
    crops: [
        {
            id: 1,
            name: 'Mangoes',
            quantity: 1500,
            price: 50.00, // price per kg in INR
            image: 'https://example.com/mangoes.jpg'
        },
        {
            id: 2,
            name: 'Spinach',
            quantity: 800,
            price: 20.00, // price per bunch in INR
            image: 'https://example.com/spinach.jpg'
        },
        {
            id: 3,
            name: 'Cucumbers',
            quantity: 600,
            price: 25.00, // price per kg in INR
            image: 'https://example.com/cucumbers.jpg'
        }
    ],
    reviews: [
        {
            id: 1,
            reviewerName: 'Aarti Sharma',
            rating: 5,
            comment: "Rajesh's produce is always fresh and of great quality!"
        },
        {
            id: 2,
            reviewerName: 'Vikram Singh',
            rating: 4,
            comment: 'I appreciate the organic methods Rajesh uses. His fruits and vegetables are top-notch!'
        }
    ]
}
