import DocumentYearFilter from './DocumentYearFilter';
import SocialLink from './SocialLink';
import { faTwitter, faFacebook, faInstagram, faWikipediaW } from '@fortawesome/free-brands-svg-icons';
import { faBan } from '@fortawesome/free-solid-svg-icons';

const PresidentInfo = ({ president, className }) => {

    const yearsAsPresident = president.term.end - president.term.begin;
    const years = Array.from({ length: yearsAsPresident + 1 }, (_, index) => index + president.term.begin);
    const yearsPresident = ['All'].concat(years);

    return (
        <section className={`body-font ${className}`}>
            <div className="container flex flex-col items-center px-5 py-10 mx-auto lg:px-20 lg:py-10 md:flex-row">
                <div className="w-1/4">
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
                    <div>
                        <DocumentYearFilter
                            years={yearsPresident}
                        />
                    </div>
                    <div className="flex flex-wrap justify-between content-between w-1/2">
                        <SocialLink
                            title='Wikipedia'
                            link={president.social.wikipedia}
                            liveIcon={faWikipediaW}
                            bannedIcon={faBan}
                        />
                        <SocialLink
                            title='Twitter'
                            link={president.social.twitter}
                            liveIcon={faTwitter}
                            bannedIcon={faBan}
                        />
                        <SocialLink
                            title='Facebook'
                            link={president.social.facebook}
                            liveIcon={faFacebook}
                            bannedIcon={faBan}
                        />
                        <SocialLink
                            title='Instagram'
                            link={president.social.instagram}
                            liveIcon={faInstagram}
                            bannedIcon={faBan}
                        />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default PresidentInfo;
