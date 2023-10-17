import { StepContext } from '@/app/page';
import { Button } from '@nextui-org/button';
import { useContext } from 'react';

import { ArrowLeftCircleFill, ArrowRightCircleFill, WalletFill } from 'react-bootstrap-icons';

function BottomButtons() {
    const { step, setStep } = useContext(StepContext);
    return (
        <div className="flex m-2">
            {step !== 1 && (
                <Button
                    className="focus:outline-none text-white bg-[#6c757d] hover:bg--gray-300  text-[14px] leading-[21px] font-normal py-[5px] px-[8px] rounded my-1 flex justify-center items-center mr-[16px]"
                    onClick={() => setStep(step - 1)}
                >
                    <ArrowLeftCircleFill className="m-2" />
                    Previous Step &nbsp;
                </Button>
            )}

            {step !== 7 && (
                <Button
                    type="button"
                    className="focus:outline-none text-white bg-[#198754] hover:bg-[#157347]  text-[14px] leading-[21px] font-normal py-[5px] px-[8px] rounded mr-2 my-1 flex justify-center items-center"
                    onClick={() => setStep(step + 1)}
                >
                    &nbsp; Next Step
                    <ArrowRightCircleFill className="m-2" />
                </Button>
            )}

            {step === 7 && (
                <Button
                    type="button"
                    className="focus:outline-none text-white bg-[#198754] hover:bg-[#157347] text-[14px] leading-[21px] font-normal py-[5px] px-[8px] rounded mr-2 my-1 flex justify-center items-center"
                    onClick={() => setStep(step + 1)}
                >
                    &nbsp; Go to your Wallet
                    <WalletFill className="m-2" />
                </Button>
            )}
        </div>
    );
}

export default BottomButtons;
