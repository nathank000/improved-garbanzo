import { StepContext } from '@/app/page';
import { useContext } from 'react';
import BottomButtons from '../BottomButtons';
import LeftColumn from '../LeftColumn';
import ProgressHeader from '../ProgressHeader';

function Step7() {
    const { step, appData, name } = useContext(StepContext);

    const renderHTML = html => {
        return { __html: html };
    };

    return (
        <div>
            {step === 7 && (
                <div>
                    <ProgressHeader />
        
                        {/* hidden on larger screens  */}
                        <div className="md:hidden">
                            this is on the smaller sdreen and hopefully goes across
                        </div>
                    
                        <div className="flex flex-nowrap">

                        {/* hidden on small screens */}
                        <div className="hidden md:block">
                            <LeftColumn text={appData.steps[6].left_explainer_data} />
                        </div>

                        <div className="p-[1rem] bg-[#F8F9FA] flex flex-col flex-shrink-0 flex-1 whitespace-no-wrap-text">
                            <h1 className="text-[40px] font-medium leading-[48px]">This is Step {step}</h1>
                            <p className="text-[19px] font-light leading-[31px] py-3">Hello, {name}!</p>

                            <div className="text-[16px] font-normal leading-[24px] my-[8px]" dangerouslySetInnerHTML={renderHTML(appData.steps[6].main_data)} />

                            <BottomButtons />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Step7;
