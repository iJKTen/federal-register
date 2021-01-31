import { Fragment } from 'react';
import DocumentType from './DocumentType';

const PresidentList = ({ presidents, docTypes }) => {
    const data = presidents.map((item, index) => (
        <div
            className="px-8 py-6 lg:w-1/4 md:w-full"
            key={index}>
            <h2 className={` ${item.party === 'Democrat' ? 'text-blue-900' : 'text-red-900'} mb-3 text-lg font-semibold text-gray-700 lg:text-2xl title-font`}>
                {item.displayName}
            </h2>
            <DocumentType
                documentsCount={item.documentsCount}
                president={item.url}
                docTypes={docTypes}
            ></DocumentType>
        </div>
    ));

    return (
        <Fragment>
            {data}
        </Fragment>
    )
}

export default PresidentList;
