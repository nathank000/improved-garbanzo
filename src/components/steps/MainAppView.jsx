import { StepContext } from '@/app/page';
import { Tab, Tabs } from '@nextui-org/react';
import Image from 'next/image';
import { useContext } from 'react';
import { BellFill, CashCoin, ChatLeftHeartFill, CompassFill, HouseDoorFill, Safe, WalletFill } from 'react-bootstrap-icons';

function MainAppView() {
    const { step, setStep } = useContext(StepContext);

    return (
        <div id="MainAppView_holder" className="MainAppView_holder">
            {true && (
                <div className="flex justify-center py-2">
                    <div className="w-10/12">
                        <Tabs defaultSelectedKey="wallet" size="md" fullWidth={true}>
                            <Tab
                                className="bg-transparent"
                                size="lg"
                                variant="light"
                                key="home"
                                title={
                                    <span className="flex justify-center items-center">
                                        <HouseDoorFill className="m-2" /> Home
                                    </span>
                                }
                            >
                                Welcome
                            </Tab>
                            <Tab
                                className="bg-transparent"
                                size="lg"
                                variant="light"
                                title={
                                    <span className="flex justify-center items-center">
                                        <WalletFill className="m-2" /> Wallet
                                    </span>
                                }
                                key="wallet"
                            >
                                <div className="grid grid-cols-2">
                                    <div className="flex border bg-gray-100 p-1">
                                        <Image
                                            src="https://images.pexels.com/photos/437345/pexels-photo-437345.jpeg?auto=compress&cs=tinysrgb&w=60"
                                            alt="Picture of the author"
                                            width={60}
                                            height={47}
                                        />
                                        <button
                                            className="bg-[#2FD2F2] hover:bg-[#2cd6f8] py-1 px-2 rounded m-2 flex justify-center items-center"
                                            onClick={() => setStep(step + 1)}
                                        >
                                            &nbsp; Mint to ETH s
                                            <Safe className="m-2" />
                                        </button>
                                    </div>
                                    <div className="flex border bg-gray-100 p-1">
                                        <Image
                                            src="https://images.pexels.com/photos/437345/pexels-photo-437345.jpeg?auto=compress&cs=tinysrgb&w=60"
                                            alt="Picture of the author"
                                            width={60}
                                            height={47}
                                        />
                                        <button
                                            className="bg-[#2FD2F2] hover:bg-[#2cd6f8] py-1 px-2 rounded m-2 flex justify-center items-center"
                                            onClick={() => setStep(step + 1)}
                                        >
                                            &nbsp; Mint to ETH
                                            <Safe className="m-2" />
                                        </button>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="flex border bg-gray-100 p-1">
                                        <Image
                                            src="https://images.pexels.com/photos/437345/pexels-photo-437345.jpeg?auto=compress&cs=tinysrgb&w=60"
                                            alt="Picture of the author"
                                            width={60}
                                            height={47}
                                        />
                                        <button
                                            className="bg-[#2FD2F2] hover:bg-[#2cd6f8] py-1 px-2 rounded m-2 flex justify-center items-center"
                                            onClick={() => setStep(step + 1)}
                                        >
                                            &nbsp; Mint to ETH
                                            <Safe className="m-2" />
                                        </button>
                                    </div>
                                    <div className="flex border bg-gray-100 p-1">
                                        <Image
                                            src="https://images.pexels.com/photos/437345/pexels-photo-437345.jpeg?auto=compress&cs=tinysrgb&w=60"
                                            alt="Picture of the author"
                                            width={60}
                                            height={47}
                                        />
                                        <button
                                            className="bg-[#2FD2F2] hover:bg-[#2cd6f8] py-1 px-2 rounded m-2 flex justify-center items-center"
                                            onClick={() => setStep(step + 1)}
                                        >
                                            &nbsp; Mint to ETH
                                            <Safe className="m-2" />
                                        </button>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="flex border bg-gray-100 p-1">
                                        <Image
                                            src="https://images.pexels.com/photos/437345/pexels-photo-437345.jpeg?auto=compress&cs=tinysrgb&w=60"
                                            alt="Picture of the author"
                                            width={60}
                                            height={47}
                                        />
                                        <button
                                            className="bg-[#2FD2F2] hover:bg-[#2cd6f8] py-1 px-2 rounded m-2 flex justify-center items-center"
                                            onClick={() => setStep(step + 1)}
                                        >
                                            &nbsp; Mint to ETH
                                            <Safe className="m-2" />
                                        </button>
                                    </div>
                                    <div className="flex border bg-gray-100 p-1">
                                        <Image
                                            src="https://images.pexels.com/photos/437345/pexels-photo-437345.jpeg?auto=compress&cs=tinysrgb&w=60"
                                            alt="Picture of the author"
                                            width={60}
                                            height={47}
                                        />
                                        <button
                                            className="bg-[#2FD2F2] hover:bg-[#2cd6f8] py-1 px-2 rounded m-2 flex justify-center items-center"
                                            onClick={() => setStep(step + 1)}
                                        >
                                            &nbsp; Mint to ETH
                                            <Safe className="m-2" />
                                        </button>
                                    </div>
                                </div>
                            </Tab>
                            <Tab
                                className="bg-transparent"
                                size="lg"
                                variant="light"
                                key="navigator"
                                title={
                                    <span className="flex justify-center items-center">
                                        Navigator <CompassFill className="m-2" />
                                    </span>
                                }
                            />
                            <Tab
                                className="bg-transparent"
                                size="lg"
                                variant="light"
                                key="community"
                                title={
                                    <span className="flex justify-center items-center">
                                        Community <ChatLeftHeartFill className="m-2" />
                                    </span>
                                }
                            />
                            <Tab
                                className="bg-transparent"
                                size="lg"
                                variant="light"
                                key="updates"
                                title={
                                    <span className="flex justify-center items-center">
                                        Updates <BellFill className="m-2" />
                                    </span>
                                }
                            />
                            <Tab
                                className="bg-transparent"
                                size="lg"
                                variant="light"
                                key="redeem"
                                title={
                                    <span className="flex justify-center items-center">
                                        Redeem <CashCoin className="m-2" />
                                    </span>
                                }
                            />
                        </Tabs>
                    </div>
                    <div className="w-1/12">
                        <svg
                            className="bd-placeholder-img rounded-full"
                            width="80"
                            height="80"
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            aria-label="Placeholder"
                            preserveAspectRatio="xMidYMid slice"
                            focusable="false"
                        >
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
                        </svg>
                    </div>
                </div>
            )}
        </div>
    );
}

//export
export default MainAppView;
