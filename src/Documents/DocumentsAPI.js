import { HTTPGet } from '../Services'

export const GetDocuments = async (president, documentType, year) => {
    const yearFilter = year ? `conditions[publication_date][year]=${year}` : '';
    const url = `/api/v1/documents.json?conditions[correction]=0&conditions[presidential_document_type]=${documentType}&conditions[type][]=PRESDOCU&fields[]=citation&fields[]=document_number&fields[]=end_page&fields[]=html_url&fields[]=pdf_url&fields[]=type&fields[]=subtype&fields[]=publication_date&fields[]=signing_date&fields[]=start_page&fields[]=title&fields[]=disposition_notes&fields[]=executive_order_number&fields[]=full_text_xml_url&fields[]=body_html_url&fields[]=json_url&order=executive_order&per_page=1000&conditions[president]=${president}&${yearFilter}`;
    return await HTTPGet(url);
}