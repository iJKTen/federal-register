const DocumentItem = ({ document }) => {
    return (
        <div>
            <a
                href={document.html_url}
                target='blank'
                rel='nofollow noreferrer noopener'>
                {document.title}
            </a>
            {document.signing_date}
            {document.disposition_notes}
            {document.executive_order_number}
        </div>
    )
}

export default DocumentItem;
