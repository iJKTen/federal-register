import { useCallback } from 'react';
import { useParams } from "react-router-dom";
import { useHttp } from '../hooks';
import DocumentsList from './DocumentsList';
import { GetDocuments } from './DocumentsAPI';
import PresidentInfo from './PresidentInfo';
import { Presidents } from '../Data';

const Documents = () => {
    const { president, documentType } = useParams();
    const memoizedFn = useCallback(() => {
        return GetDocuments(president, documentType)
    }, [president, documentType]);
    const documents = useHttp(memoizedFn);

    const currentPresident = Presidents.filter(p => p.url === president)[0];
    //<div className="container px-8 mx-auto lg:px-4">
    return (
        <section>
            <div>
                <PresidentInfo
                    className='bg-color-one'
                    president={currentPresident}
                />
                <section className='bg-color-two pt-8'>
                    <div className='container px-8 mx-auto lg:px-4'>
                        <h1 className='mb-3 text-lg font-bold text-primary lg:text-2xl title-font'>
                            {documents.description}
                        </h1>
                        <hr className='mb-4' />
                        <DocumentsList
                            documents={documents.results}>
                        </DocumentsList>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default Documents;
