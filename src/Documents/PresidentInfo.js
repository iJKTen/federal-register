import DocumentYearFilter from './DocumentYearFilter';
import SocialLink from './SocialLink';
import { faTwitter, faFacebook, faInstagram, faWikipediaW } from '@fortawesome/free-brands-svg-icons';
import { faBan } from '@fortawesome/free-solid-svg-icons';

const PresidentInfo = ({ president }) => {

    const yearsAsPresident = president.term.end - president.term.begin;
    const years = Array.from({ length: yearsAsPresident + 1 }, (_, index) => index + president.term.begin);
    const yearsPresident = ['All'].concat(years);

    const socialLinks = president.social.map(item => {
        const key = Object.keys(item)[0];
        let icon = null;
        switch (key) {
            case 'wikipedia':
                icon = faWikipediaW;
                break;
            case 'twitter':
                icon = faTwitter;
                break;
            case 'facebook':
                icon = faFacebook;
                break;
            case 'instagram':
                icon = faInstagram;
                break;
            default:
                break;
        }

        return (
            <SocialLink
                key={key}
                title={key}
                link={item[key]}
                liveIcon={icon}
                bannedIcon={faBan}
            />
        )
    })

    return (
        <div className='container flex flex-col items-center px-5 py-10 mx-auto lg:px-20 lg:py-10 md:flex-row'>
            <div className='w-1/4'>
                <img
                    className='object-cover object-center rounded'
                    alt={president.displayName}
                    src={president.imgUrl}
                />
            </div>
            <div
                className='flex flex-col items-center text-secondary text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left'>
                <h1
                    className={`mb-8 text-${president.party} text-2xl font-bold tracking-tighter text-center lg:text-left lg:text-5xl title-font`}>
                    {president.displayName}
                </h1>
                <p className='mb-2 font-bold'>
                    Term: {president.term.begin} - {president.term.end}
                </p>
                <p className='mb-8 text-base leading-relaxed text-center ray-700 lg:text-left lg:text-1xl'>
                    {president.bio}
                </p>
                <DocumentYearFilter
                    years={yearsPresident}
                />
                <div className='flex flex-wrap justify-between content-between w-1/2'>
                    {socialLinks}
                </div>
            </div>
        </div>
    )
}

export default PresidentInfo;
