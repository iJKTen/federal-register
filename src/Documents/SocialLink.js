import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialLink = ({ title, link, liveIcon, bannedIcon }) => {
    if (link === 'banned') {
        return (
            <FontAwesomeIcon
                icon={bannedIcon}
                size='4x'
            />
        )
    }

    return <a
        title={title}
        className='w-1/4 text-center'
        target='_blank'
        rel='nofollow noreferrer'
        href={link}>
        <FontAwesomeIcon
            icon={liveIcon}
            size='4x'
        />
    </a>
}

export default SocialLink;
