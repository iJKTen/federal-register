import { useCallback } from 'react';
import { useParams } from "react-router-dom";
import { useHttp } from '../hooks';
import DocumentsList from './DocumentsList';
import { GetDocuments } from './DocumentsAPI';

const Documents = () => {
    const { president, documentType } = useParams();
    const memoizedFn = useCallback(() => {
        return GetDocuments(president, documentType)
    }, [president, documentType]);
    const documents = useHttp(memoizedFn);
    console.log(documents)
    return (
        <section>
            <div className="container px-8 pt-48 mx-auto lg:px-4">
                <h1 className='mb-3 text-lg font-bold text-gray-700 lg:text-2xl title-font'>
                    {documents.description}
                </h1>
                <hr className='mb-4' />
                <DocumentsList
                    documents={documents.results}>
                </DocumentsList>
            </div>
        </section>
    )
}

export default Documents;
