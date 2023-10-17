'use client';
import Welcome from '@/components/Welcome';
import Step1 from '@/components/steps/Step1';
import Step2 from '@/components/steps/Step2';
import Step3 from '@/components/steps/Step3';
import Step4 from '@/components/steps/Step4';
import Step5 from '@/components/steps/Step5';
import Step6 from '@/components/steps/Step6';
import Step7 from '@/components/steps/Step7';
import { createContext, useEffect, useState } from 'react';
import Data from '../../data/app_info';
import Script from 'next/script';

export const StepContext = createContext();

export default function Home() {
    const [step, setStep] = useState(0);
    const [name, setName] = useState('');
    const [userRegion, setUserRegion] = useState('Northeast');
    const [appData, setAppData] = useState({});

    useEffect(() => {
        //load the app data on component load
        setAppData(Data);
    }, [appData]);

    const renderStep = stepNumber => {
        switch (stepNumber) {
            case 0:
                return <Welcome />;
            case 1:
                return <Step1 />;
            case 2:
                return <Step2 />;
            case 3:
                return <Step3 />;
            case 4:
                return <Step4 />;
            case 5:
                return <Step5 />;
            case 6:
                return <Step6 />;
            case 7:
                return <Step7 />;
            default:
                return <Welcome />;
        }
    };
    return (
        <StepContext.Provider value={{ step, setStep, userRegion, setUserRegion, appData, setAppData, name, setName }}>
            <Script src="https://aframe.io/releases/1.3.0/aframe.min.js"></Script>
            <Script src="https://unpkg.com/aframe-look-at-component@0.8.0/dist/aframe-look-at-component.min.js"></Script>
            <Script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js"></Script>

            <div>{renderStep(step)}</div>
        </StepContext.Provider>
    );
}
