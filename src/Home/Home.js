import PresidentsList from './PresidentsList';

const DocumentTypes = ['Determination', 'Executive Order', 'Memorandum', 'Notice',
    'Proclamation', 'Presidential Order'];

const presidents = [
    {
        url: 'william-j-clinton',
        displayName: 'Bill Clinton'
    },
    {
        url: 'george-w-bush',
        displayName: 'George W Bush'
    },
    {
        url: 'barack-obama',
        displayName: 'Barack Obama'
    },
    {
        url: 'donald-trump',
        displayName: 'Orange Baby'
    },
    {
        url: 'joe-biden',
        displayName: 'Joe Biden'
    }
];

const Home = () => {

    return (
        <div>
            <PresidentsList
                presidents={presidents}
                docTypes={DocumentTypes}>
            </PresidentsList>
        </div>
    )
}

export default Home;
