import { StepContext } from '@/app/page';
import { useContext } from 'react';
import BottomButtons from '../BottomButtons';
import LeftColumn from '../LeftColumn';
import ProgressHeader from '../ProgressHeader';

function Step2() {
    const { step, userRegion, appData } = useContext(StepContext);

    // Define the handleChange function
    // const handleChange = e => {
    //     console.log('Input changed: hit', e.target.value);
    // };

    // Function to safely render HTML using dangerouslySetInnerHTML
    const renderHTML = html => {
        return { __html: html };
    };

    return (
        <div>
            {step === 2 && (
                <div>
                    <ProgressHeader />
                    <div className="flex flex-nowrap">
                        <div>
                            <LeftColumn text={appData.steps[1].left_explainer_data} />
                        </div>

                        <div className="p-[1rem] bg-[#F8F9FA] flex flex-col flex-shrink-0 flex-1 whitespace-no-wrap-text">
                            <h1 className="text-[40px] font-medium leading-[48px] mb-[.5rem]">This is Step {step}</h1>

                            <div dangerouslySetInnerHTML={renderHTML(appData.steps[1].main_data)} />

                            <p className="text-[19px] font-light leading-[31px] py-3">
                                welcome to the <strong>{userRegion}</strong> region
                            </p>
                            <BottomButtons />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Step2;
