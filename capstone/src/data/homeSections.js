import natureRestaurant from "../assets/images/nature_restaurant.jpg";
import menuImage from "../assets/images/menu.jpg";
import reservationImage from "../assets/images/restaurantreservationgroup.jpg";

export const homeSections = [
    {
        id: 1,
        title: "Where Nature Meets Refined Dining",
        text: "Arbor Oasis was created as a retreat where refined dining and the beauty of nature exist in perfect balance. Inspired by the calm elegance of luxury resorts, our space invites guests to step away from the pace of everyday life and settle into an atmosphere that feels both sophisticated and welcoming. Our culinary approach centers on seasonal ingredients, thoughtful preparation, and elegant presentation that allows the character of each dish to shine. Whether you are joining us for an intimate dinner or a special gathering, every visit is designed to feel restful, memorable, and deeply connected to the natural world.",
        image: natureRestaurant,
        alt: "picture of restaurant",
        buttonText: null,
        buttonLink: null,
    },
    {
        id: 2,
        title: "Explore Our Offerings",
        text: "Our menu celebrates the meeting of refined technique and the natural beauty of fresh, seasonal ingredients. From vibrant garden-inspired starters to carefully prepared entrées and indulgent desserts, each dish is crafted to highlight flavor, balance, and elegance. Locally sourced produce, premium cuts, and thoughtfully selected seafood come together in a dining experience that feels elevated, fresh, and grounded in nature.",
        image: menuImage,
        alt: "picture of menu and food",
        buttonText: "Menu",
        buttonLink: "/menu",
    },
    {
        id: 3,
        title: "Plan Your Visit",
        text: "A visit to Arbor Oasis is designed to feel effortless from the moment you reserve your table. Whether you are planning a romantic evening, celebrating a special occasion, or gathering with friends and family, our team prepares each detail with care so you can simply arrive, relax, and enjoy. Surrounded by warm hospitality, refined cuisine, and a setting inspired by nature, every reservation becomes the beginning of a memorable experience.",
        image: reservationImage,
        alt: "picture of group in restaurant",
        buttonText: "Reservations",
        buttonLink: "/reservations",
    },
];