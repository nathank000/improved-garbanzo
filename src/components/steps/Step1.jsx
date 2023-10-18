import { StepContext } from '@/app/page';
import { useContext } from 'react';
import BottomButtons from '../BottomButtons';
import LeftColumn from '../LeftColumn';
import ProgressHeader from '../ProgressHeader';

const Step1 = () => {
    const { step, appData } = useContext(StepContext);
    return (
        <div>
            <ProgressHeader />
                {/* hidden on larger screens  */}
                <div className="md:hidden">
                    this is on the smaller sdreen and hopefully goes across
                </div>
            
            <div className="flex flex-nowrap">

                {/* hidden on small screens */}
                <div className="hidden md:block">
                    <LeftColumn text={appData.steps[0].left_explainer_data} />
                </div>



                <div className="p-[1rem] bg-[#F8F9FA] flex flex-col flex-shrink-0 flex-1 whitespace-no-wrap-text">
                    <h1 className="text-[40px] font-medium leading-[48px] ">This is Step {step}</h1>
                    <h1 className="text-[40px] font-medium leading-[48px] my-[8px]">data = {appData.steps[0].title} </h1>
                    <h1 className="text-[40px] font-medium leading-[48px] my-[8px]">data = {appData.steps[0].main_data} </h1>
                    <BottomButtons />
                </div>
            </div>
        </div>
    );
};

export default Step1;