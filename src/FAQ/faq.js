const FAQ = () => {
    return (
        <section className='bg-color-one'>
            <div className='mx-auto p-6 container px-8 pt-10 mx-auto lg:px-4'>
                <div className='mb-4'>
                    <div className='flex items-center justify-between pl-3 pr-2 py-2 w-full rounded text-primary font-bold'>
                        Why did you make this site?
                    </div>
                    <div className='px-3'>
                        <p className='text-secondary mb-3'>
                            I wanted to build a React site which would connect to an external data source and display data. The federal register
                            provides an API which returns all the documents signed by presidents since 1994 and it seemed like a good data source.
                        </p>
                    </div>
                </div>
                <div className='mb-4'>
                    <div className='flex items-center justify-between pl-3 pr-2 py-2 w-full rounded text-primary font-bold'>
                        Why do some document types for a president have numbers next to them?
                    </div>
                    <div className='px-3'>
                        <p className='text-secondary mb-3'>
                            It is the number of documents signed by a president. The current president doesn't have a
                            number because they are expected to sign additional documents until their term ends.
                        </p>
                    </div>
                </div>
                <div className='mb-4'>
                    <div className='flex items-center justify-between pl-3 pr-2 py-2 w-full rounded text-primary font-bold'>
                        The current president signed a document but it does not show up here, why?
                    </div>
                    <div className='px-3'>
                        <p className='text-secondary mb-3'>
                            The document is signed and then sent to the federal register and it takes some time for the Federal Register to add it to the site.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQ;
