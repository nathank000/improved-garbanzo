import { StepContext } from '@/app/page';
// import 'aframe';
// import 'arjs';
import { useContext } from 'react';
import BottomButtons from '../BottomButtons';
import LeftColumn from '../LeftColumn';
import ProgressHeader from '../ProgressHeader';

function Step4() {
    const { step, appData } = useContext(StepContext);

    // Function to safely render HTML using dangerouslySetInnerHTML
    const renderHTML = html => {
        return { __html: html };
    };

    return (
        <div>
            {step === 4 && (
                <>
                    <div>
                        <ProgressHeader />
                        <div className="flex flex-nowrap">
                            <div>
                                <LeftColumn text={appData.steps[3].left_explainer_data} />
                            </div>

                            <div className="p-[1rem] bg-[#F8F9FA] flex flex-col flex-shrink-0 flex-1 whitespace-no-wrap-text">
                                <h1 className="text-[40px] font-medium leading-[48px]">This is Step {step}</h1>

                                <div className="text-[16px] font-medium leading-[24px] my-[8px]" dangerouslySetInnerHTML={renderHTML(appData.steps[3].main_data)} />

                                <div className="h-[220px]">
                                    <a-scene embedded>
                                        <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
                                        <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
                                        <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
                                        <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
                                        <a-sky color="#ECECEC"></a-sky>
                                    </a-scene>
                                </div>
                                <BottomButtons />
                            </div>
                        </div>
                    </div>

                    {/* <a-scene vr-mode-ui='enabled: false' arjs='sourceType: webcam; videoTexture: true; debugUIEnabled: false' renderer='antialias: true; alpha: true'>
          <a-camera gps-new-camera='gpsMinDistance: 5'></a-camera>
          <a-entity material='color: red' geometry='primitive: box' gps-new-entity-place="latitude: <your-lat>; longitude: <your-loon>" scale="10 10 10"></a-entity>
        </a-scene> */}
                </>
            )}
        </div>
    );
}

export default Step4;
