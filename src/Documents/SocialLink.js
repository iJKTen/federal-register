import { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialLink = ({ title, link, liveIcon, bannedIcon }) => {
    const html = link === 'banned' ?
        (<FontAwesomeIcon
            icon={bannedIcon}
            size='4x'
        />) :
        (<a
            title={title}
            className='w-1/4 text-center'
            target='_blank'
            rel='nofollow noreferrer'
            href={link}>
            <FontAwesomeIcon
                icon={liveIcon}
                size='4x'
            />
        </a>);

    return (
        <Fragment>
            {html}
        </Fragment>
    )
}

export default SocialLink;
