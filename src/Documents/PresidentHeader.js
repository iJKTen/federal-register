import PresidentInfo from './PresidentInfo';

const PresidentHeader = ({ currentPresident, description }) => {
    return (
        <section>
            <div>
                <section className='body-font bg-color-one'>
                    <PresidentInfo
                        president={currentPresident}
                    />
                </section>
                <section className='bg-color-two pt-8'>
                    <div className='container px-8 mx-auto lg:px-4'>
                        <h1 className='pb-3 text-lg font-bold text-primary lg:text-2xl title-font'>
                            {description}
                        </h1>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default PresidentHeader;
