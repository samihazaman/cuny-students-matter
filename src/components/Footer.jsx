import {
    FiFacebook,
    FiInstagram,
    FiYoutube,
    FiLinkedin
} from "react-icons/fi";


const socialLinks = [
    {
        id: 1,
        icon: <FiFacebook />,
        url: "https://www.facebook.com/CUNYedu",
    },
    {
        id: 2,
        icon: <FiInstagram />,
        url: "https://www.instagram.com/cunyedu/",
    },
    {
        id: 3,
        icon: <FiYoutube />,
        url: "https://www.youtube.com/user/CUNYMedia",
    },
    {
        id: 4,
        icon: <FiLinkedin />,
        url: "https://www.linkedin.com/company/city-university-of-new-york/",
    },
];


  

const Footer = () => {
    return (
        <div className="container mx-auto">
            <div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark bg-customBlue">
                {/* Footer social links */}
                <div className="font-general-regular flex flex-col justify-center items-center mb-4 sm:mb-8">
                    <ul className="flex gap-4 sm:gap-8">
                        {socialLinks.map((link) => (
                            <a
                                href={link.url}
                                target="__blank"
                                key={link.id}
                                className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
                            >
                                <i className="text-xl sm:text-2xl md:text-3xl">{link.icon}</i>
                            </a>
                        ))}
                    </ul>
                </div>
                {/* Copyright text */}
                <div className="text-center text-gray-500 dark:text-gray-400 mt-4">
                    <p>© 2024 CUNY Students Matter. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};


export default Footer;
