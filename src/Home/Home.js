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
        <section>
            <div className="container px-8 pt-48 mx-auto lg:px-4">
                <div className="flex flex-wrap text-left">
                    <PresidentsList
                        presidents={presidents}
                        docTypes={DocumentTypes}>
                    </PresidentsList>
                </div>
            </div>
        </section>
    )
}

export default Home;
