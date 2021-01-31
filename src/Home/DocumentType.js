const DocumentType = (props) => {
    const data = props.docTypes.map((item, index) => {
        return (
            <li key={index}>
                <a
                    className='text-secondary'
                    title={`${props.president}'s ${item}`}
                    rel='nofollow noreferrer noopener'
                    href={`${props.president}/${item.toLowerCase().replaceAll(' ', '_')}`}>
                    {item} {props.documentsCount[item] !== null ? `(${props.documentsCount[item]})` : ''}
                </a>
            </li>
        )
    });

    return (
        <ul>{data}</ul>
    )
}

export default DocumentType;
