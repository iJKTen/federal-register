import PresidentsList from './PresidentsList';
import { Presidents, DocumentTypes } from '../Data';

const Home = () => {

    return (
        <section className='bg-color-one'>
            <div className="container px-8 pt-10 mx-auto lg:px-4">
                <div className="flex flex-wrap text-left">
                    <PresidentsList
                        presidents={Presidents}
                        docTypes={DocumentTypes}>
                    </PresidentsList>
                </div>
            </div>
        </section>
    )
}

export default Home;
