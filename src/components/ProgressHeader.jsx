import { StepContext } from '@/app/page';
import React, { useState } from 'react';
import { List, XLg } from 'react-bootstrap-icons';

const ProgressHeader = () => {
    const { step, appData } = React.useContext(StepContext);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="flex items-center"
            style={{
                height: 60,
                backgroundImage: 'url(' + './assets/headerBG.jpg' + ')',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="md:hidden bg-[#FFFFFF] text-black outline outline-offset-4 outline-gray-500 rounded-sm cursor-pointer ml-2">
                {isOpen ? <XLg onClick={() => setIsOpen(!isOpen)} /> : <List onClick={() => setIsOpen(!isOpen)} />}
            </div>

            {appData.steps.map((value, index) => {
                index += 1;
                let itemClass = 'flex justify-center items-center p-2 highlight rounded-md bg-[#6C757D] whitespace-no-wrap-text';
                let stepText = 'Step ' + index;

                if (index == step) {
                    itemClass = 'flex justify-center items-center p-2 highlight flex-grow rounded-md bg-[#212529] whitespace-no-wrap-text';
                    stepText += ' - ' + value.title;
                }
                return (
                    <div className={`${isOpen ? 'sm:flex' : 'sm:hidden'} md:flex ${itemClass}`} style={{ height: 30, margin: 10 }} key={index}>
                        <p className="text-[12px] text-white font-bold">{stepText}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default ProgressHeader;
