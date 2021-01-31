import { useParams } from "react-router-dom";

const DocumentYearFilter = ({ years }) => {

    const { president, documentType } = useParams();
    const urlPath = `/${president}/${documentType.toLowerCase().replaceAll(' ', '_')}`;

    const htmlInYears = years.map(year => {
        if (year === 'All') {
            return (
                <a
                    className='px-1'
                    title={`Filter document by ${year}`}
                    key={year}
                    href={`${urlPath}`}>
                    {year}
                </a>
            )
        }

        return (
            <a
                className='px-1'
                title={`Filter document by ${year}`}
                key={year}
                href={`${urlPath}/${year}`}>
                {year}
            </a>
        )
    });

    return (
        <div className='mb-4'>
            <h3 className='mb-2 font-bold'>Filter documents by selecting a year</h3>
            {htmlInYears}
        </div>
    )
}

export default DocumentYearFilter;
