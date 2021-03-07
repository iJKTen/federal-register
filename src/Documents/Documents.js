import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import DocumentsList from './DocumentsList';
import { GetDocuments } from './DocumentsAPI';
import PresidentHeader from './PresidentHeader';
import { Presidents } from '../Data';
import { useQuery } from 'react-query';

const Documents = () => {
    const { president, documentType, year } = useParams();

    const currentPresident = Presidents.filter(p => p.url === president)[0];

    const { status, data, error } = useQuery(['GetDocuments', president, documentType, year],
        async () => await GetDocuments(president, documentType, year));

    if (status === 'loading') {
        return (
            <div>Loading...</div>
        )
    }

    if (status === 'error') {
        return (
            <div>{error.message}</div>
        )
    }

    const PresidentHeaderComponent = <PresidentHeader
        currentPresident={currentPresident}
        description={data.description} />;

    if (data.count === 0) {
        return (
            <Fragment>
                {PresidentHeaderComponent}
            </Fragment>
        )
    }

    return (
        <section>
            <div>
                {PresidentHeaderComponent}
                <section className='bg-color-two'>
                    <div className='container px-8 mx-auto lg:px-4'>
                        <hr className='mb-4' />
                        <DocumentsList
                            documents={data.results}>
                        </DocumentsList>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default Documents;
