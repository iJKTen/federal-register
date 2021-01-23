const DocumentType = (props) => {
    const data = props.docTypes.map((item, index) => (
        <li key={index}>
            <a
                title={`${props.president}'s ${item}`}
                rel='nofollow noreferrer noopener'
                href={`${props.president}/${item.toLowerCase().replaceAll(' ', '_')}`}>
                {item}
            </a>
        </li>
    ));

    return (
        <ul>{data}</ul>
    )
}

export default DocumentType;
