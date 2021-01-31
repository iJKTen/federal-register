const FAQ = () => {
    return (
        <section>
            <div class="bg-white mx-auto p-6">
                <div class="mb-4">
                    <div class="flex items-center justify-between bg-gray-200 pl-3 pr-2 py-3 w-full rounded text-gray-600 font-bold cursor-pointer hover:bg-gray-300">
                        Why did you make this site?
                    </div>
                    <div class="p-3">
                        <p class="text-gray-600 mb-3">
                            I wanted to build a React site which would connect to an external data source and display data. The federal register
                            provides an API which returns all the documents signed by presidents since 1994 and it seemed like a good data source.
                        </p>
                    </div>
                </div>
                <div class="mb-4">
                    <div class="flex items-center justify-between bg-gray-200 pl-3 pr-2 py-3 w-full rounded text-gray-600 font-bold cursor-pointer hover:bg-gray-300">
                        Why do some document types for a president have numbers next to them?
                    </div>
                    <div class="p-3">
                        <p class="text-gray-600 mb-3">
                            It is the number of documents signed by a president. The current president doesn't have a
                            number because they are expected to sign additional documents until their term ends.
                        </p>
                    </div>
                </div>
                <div class="mb-4">
                    <div class="flex items-center justify-between bg-gray-200 pl-3 pr-2 py-3 w-full rounded text-gray-600 font-bold cursor-pointer hover:bg-gray-300">
                        The current president signed a document but it does not show up here, why?
                    </div>
                    <div class="p-3">
                        <p class="text-gray-600 mb-3">
                            The document is signed and then sent to the federal register and it takes some time for the Federal Register to add it to the site.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQ;
