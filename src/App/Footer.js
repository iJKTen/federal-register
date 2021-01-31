import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className='bg-primary pt-10 pt-10'>
            <div className='max-w-6xl m-auto flex flex-wrap justify-left'>
                <div className='p-5 w-1/2 sm:w-4/12 md:w-3/12'>
                    <div className='text-xs font-bold uppercase text-white font-medium mb-6'>
                        About
                    </div>
                    <a
                        title='faq'
                        href='/faq'
                        className='my-3 block text-color-one text-sm font-medium duration-700'>
                        FAQ
                    </a>
                    <a
                        title='Source code'
                        target='_blank'
                        rel='nofollow noreferrer'
                        href='//github.com/iJKTen/federal-register'
                        className='my-3 block text-color-one text-sm font-medium duration-700'>
                        Source code
                    </a>
                </div>
                <div className='p-5 w-1/2 sm:w-4/12 md:w-3/12'>
                    <div className='text-xs font-bold uppercase text-white font-medium mb-6'>
                        Made With
                    </div>
                    <a
                        title='Federal Register'
                        target='_blank'
                        rel='nofollow noreferrer'
                        href='//www.federalregister.gov/reader-aids/developer-resources/rest-api'
                        className='my-3 block text-color-one text-sm font-medium duration-700'>
                        Federal Register
                    </a>
                    <a
                        title='Tailwindcss'
                        target='_blank'
                        rel='nofollow noreferrer'
                        href='//tailwindcss.com'
                        className='my-3 block text-color-one text-sm font-medium duration-700'>
                        Tailwindcss
                    </a>
                    <a
                        title='React'
                        target='_blank'
                        rel='nofollow noreferrer'
                        href='//reactjs.com'
                        className='my-3 block text-color-one text-sm font-medium duration-700'>
                        React
                    </a>
                    <a
                        title='Netlify'
                        target='_blank'
                        rel='nofollow noreferrer'
                        href='//netlify.com'
                        className='my-3 block text-color-one text-sm font-medium duration-700'>
                        Netlify
                    </a>
                    <a
                        title='Happy Hues'
                        target='_blank'
                        rel='nofollow noreferrer'
                        href='//www.happyhues.co/palettes/17'
                        className='my-3 block text-color-one text-sm font-medium duration-700'>
                        Happy Hues
                    </a>
                </div>

                <div className='p-5 w-1/2 sm:w-4/12 md:w-3/12'>
                    <div className='text-xs font-bold uppercase text-white font-medium mb-6'>
                        Other Projects
                    </div>
                    <a
                        title='Can I wash my car?'
                        target='_blank'
                        rel='nofollow noreferrer'
                        href='//CanIWashMyCar.netlify.app'
                        className='my-3 block text-color-one text-sm font-medium duration-700'>
                        Can I wash my car?
                    </a>
                </div>

                <div className='p-5 w-1/2 sm:w-4/12 md:w-3/12'>
                    <div className='text-xs font-bold uppercase text-white font-medium mb-6'>
                        My Friend Jai
                    </div>
                    <a
                        title="My friend Jai's Website"
                        target='_blank'
                        rel='nofollow noreferrer'
                        href='//MyFriendJai.com'
                        className='my-3 block text-color-one text-sm font-medium duration-700'>
                        Website
                    </a>
                    <a
                        title="My friend jai's Music blog"
                        target='_blank'
                        rel='nofollow noreferrer'
                        href='//MusicFrom.MyFriendJai.com'
                        className='my-3 block text-color-one text-sm font-medium duration-700'>
                        Music blog
                    </a>
                    <a
                        title="My friend Jai's Github"
                        target='_blank'
                        rel='nofollow noreferrer'
                        href='//github.com/iJKTen'
                        className='my-3 block text-color-one text-sm font-medium duration-700'>
                        GitHub
                    </a>
                    <a
                        title="My friend Jai's Twitter"
                        target='_blank'
                        rel='nofollow noreferrer'
                        href='//twitter.com/MyFriendJai'
                        className='my-3 block text-color-one text-sm font-medium duration-700'>
                        Twitter
                    </a>
                </div>
            </div>
            <div className='pt-2'>
                <div className='flex pb-5 px-3 m-auto pt-5 
            border-t border-gray-500 text-white text-sm 
            flex-col md:flex-row max-w-7xl'>
                    <div className='mt-2'>
                        &copy; Copyright 2021. All Rights Reserved.
                    </div>
                    <div className='md:flex-auto md:flex-row-reverse mt-2 flex-row flex'>
                        <a
                            title="My friend Jai's Twitter"
                            target='_blank'
                            rel='nofollow noreferrer'
                            href='//twitter.com/MyFriendJai'
                            className='w-6 mx-1'>
                            <FontAwesomeIcon
                                icon={faTwitter}></FontAwesomeIcon>
                        </a>
                        <a
                            title="My friend Jai's Github"
                            target='_blank'
                            rel='nofollow noreferrer'
                            href='//github.com/iJKTen'
                            className='w-6 mx-1'>
                            <FontAwesomeIcon
                                icon={faGithub}></FontAwesomeIcon>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
