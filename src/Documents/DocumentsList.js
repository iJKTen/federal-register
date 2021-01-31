import DocumentItem from './DocumentItem';

const DocumentsList = ({ documents }) => {
    console.log(documents)
    const documentsData = documents.map((item, index) => (
        <DocumentItem
            key={index}
            document={item}
        />
    ));

    return (
        <div>{documentsData}</div>
    )
}

export default DocumentsList;
