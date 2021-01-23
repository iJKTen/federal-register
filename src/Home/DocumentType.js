const DocumentType = (props) => {
    const data = props.docTypes.map((item, index) => (
        <a
            key={index}
            rel='nofollow noreferrer noopener'
            href={`${props.president}/${item.toLowerCase().replaceAll(' ', '_')}`}>
            {item}
        </a>
    ));

    return (
        <div>{data}</div>
    )
}

export default DocumentType;
