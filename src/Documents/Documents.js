import { useParams } from "react-router-dom";
import { useHttp } from '../hooks';
import DocumentsList from './DocumentsList';

const Documents = () => {
    const { president, document_type } = useParams();
    const documents = useHttp(president, document_type);

    return (
        <div>
            <DocumentsList
                documents={documents}>
            </DocumentsList>
        </div>
    )
}

export default Documents;
