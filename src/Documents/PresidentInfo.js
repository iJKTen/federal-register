import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faWikipediaW } from '@fortawesome/free-brands-svg-icons';

const PresidentInfo = ({ president, className }) => {
    return (
        <section className={`body-font ${className}`}>
            <div className="container flex flex-col items-center px-5 py-10 mx-auto lg:px-20 lg:py-10 md:flex-row">
                <div className="w-1/5">
                    <img
                        className="object-cover object-center rounded"
                        alt={president.displayName}
                        src={president.imgUrl}
                    />
                </div>
                <div
                    className="flex flex-col items-center text-secondary text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left">
                    <h1
                        className={`mb-8 text-${president.party} text-2xl font-bold tracking-tighter text-center lg:text-left lg:text-5xl title-font`}>
                        {president.displayName}
                    </h1>
                    <p className='mb-2 font-bold'>
                        Term: {president.term.begin} - {president.term.end}
                    </p>
                    <p className="mb-8 text-base leading-relaxed text-center ray-700 lg:text-left lg:text-1xl">
                        {president.bio}
                    </p>
                    <div className="flex flex-wrap justify-between content-between w-1/2">
                        <a
                            title='Wikipedia'
                            className='w-1/4 text-center'
                            target='_blank'
                            rel='nofollow noreferrer'
                            href={president.social.wikipedia}>
                            <FontAwesomeIcon
                                icon={faWikipediaW}
                                size='4x'
                            />
                        </a>
                        <a
                            title='Twitter'
                            className='w-1/4 text-center'
                            target='_blank'
                            rel='nofollow noreferrer'
                            href={president.social.twitter}>
                            <FontAwesomeIcon
                                icon={faTwitter}
                                size='4x'
                            />
                        </a>
                        <a
                            title='Facebook'
                            className='w-1/4 text-center'
                            target='_blank'
                            rel='nofollow noreferrer'
                            href={president.social.facebook}>
                            <FontAwesomeIcon
                                icon={faFacebook}
                                size='4x'
                            />
                        </a>
                        <a
                            title='Instagram'
                            className='w-1/4 text-center'
                            target='_blank'
                            rel='nofollow noreferrer'
                            href={president.social.instagram}>
                            <FontAwesomeIcon
                                icon={faInstagram}
                                size='4x'
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default PresidentInfo;
