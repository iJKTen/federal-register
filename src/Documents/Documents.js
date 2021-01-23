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

    return (
        <div>
            <DocumentsList
                documents={documents}>
            </DocumentsList>
        </div>
    )
}

export default Documents;
