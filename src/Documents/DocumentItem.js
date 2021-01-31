const DocumentItem = ({ document }) => {
    return (
        <div className='mt-4 text-secondary'>
            <a
                className='text-primary font-bold'
                href={document.html_url}
                target='blank'
                rel='nofollow noreferrer noopener'>
                {document.title}
            </a>
            <div>
                {
                    document.executive_order_number ?
                        `${document.executive_order_number}, ` : ''
                }
                {
                    document.signing_date ?
                        document.signing_date : ''
                }
            </div>
            <div className='pb-3 pb-3'>
                {
                    document.disposition_notes ?
                        `Disposition notes: ${document.disposition_notes}` : ''
                }
            </div>
            <hr />
        </div >
    )
}

export default DocumentItem;
