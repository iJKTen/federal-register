import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-gray-800 pt-10 sm:mt-10 pt-10">
            <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
                <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                    <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                        About
                    </div>
                    <a
                        href="/faq"
                        className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        FAQ
                    </a>
                    <a
                        target='_blank'
                        rel='nofollow noreferrer'
                        href="//github.com/iJKTen/federal-register"
                        className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Source code
                    </a>
                </div>
                <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                    <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                        Made With
                    </div>
                    <a
                        target='_blank'
                        rel='nofollow noreferrer'
                        href='//www.federalregister.gov/reader-aids/developer-resources/rest-api'
                        className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Federal Register
                    </a>
                    <a
                        target='_blank'
                        rel='nofollow noreferrer'
                        href='//tailwindcss.com'
                        className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Tailwindcss
                    </a>
                    <a
                        target='_blank'
                        rel='nofollow noreferrer'
                        href="//reactjs.com"
                        className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        React
                    </a>
                    <a
                        target='_blank'
                        rel='nofollow noreferrer'
                        href='//netlify.com'
                        className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Netlify
                    </a>
                    <a
                        target='_blank'
                        rel='nofollow noreferrer'
                        href='//www.happyhues.co'
                        className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Happy Hues
                    </a>
                </div>

                <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                    <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                        Other Projects
                    </div>
                    <a
                        target='_blank'
                        rel='nofollow noreferrer'
                        href="//CanIWashMyCar.netlify.app"
                        className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Can I wash my car?
                    </a>
                    <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Theme Configuration
            </a>
                    <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Breakpoints
            </a>
                    <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Customizing Colors
            </a>
                    <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Customizing Spacing
            </a>
                    <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Configuring Variants
            </a>
                    <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Plugins
            </a>
                </div>

                <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                    <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                        My Friend Jai
                    </div>
                    <a
                        target='_blank'
                        rel='nofollow noreferrer'
                        href="//MyFriendJai.com"
                        className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Website
                    </a>
                    <a
                        target='_blank'
                        rel='nofollow noreferrer'
                        href="//MusicFrom.MyFriendJai.com"
                        className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Music blog
                    </a>
                    <a
                        target='_blank'
                        rel='nofollow noreferrer'
                        href="//github.com/iJKTen"
                        className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        GitHub
                    </a>
                    <a
                        target='_blank'
                        rel='nofollow noreferrer'
                        href="//twitter.com/MyFriendJai"
                        className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Twitter
                    </a>
                </div>
            </div>
            <div className="pt-2">
                <div className="flex pb-5 px-3 m-auto pt-5 
            border-t border-gray-500 text-gray-400 text-sm 
            flex-col md:flex-row max-w-7xl">
                    <div className="mt-2">
                        &copy; Copyright 1998-year. All Rights Reserved.
                    </div>
                    <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                        <a
                            target='_blank'
                            rel='nofollow noreferrer'
                            href="//twitter.com/MyFriendJai"
                            className="w-6 mx-1">
                            <FontAwesomeIcon
                                icon={faTwitter}></FontAwesomeIcon>
                        </a>
                        <a href="#" className="w-6 mx-1">
                            <i className="uil uil-youtube"></i>
                        </a>
                        <a href="#" className="w-6 mx-1">
                            <i className="uil uil-linkedin"></i>
                        </a>
                        <a href="#" className="w-6 mx-1">
                            <i className="uil uil-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;