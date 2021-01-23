import DocumentType from './DocumentType';

const PresidentList = ({ presidents, docTypes }) => {
    const data = presidents.map((item, index) => (
        <div
            key={index}>
            {item.displayName}
            <DocumentType
                president={item.url}
                docTypes={docTypes}
            ></DocumentType>
        </div>
    ));

    return (
        <div>{data}</div>
    )
}

export default PresidentList;
