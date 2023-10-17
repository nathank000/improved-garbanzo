function LeftColumn({ text }) {
    return (
        <div
            className="flex flex-column p-4 bg-[#212529]"
            style={{
                width: '100%',
                height: '100%',
                backgroundImage: `url('./assets/future_waves.jpg')`
            }}
        >
            <p className="flex flex-col flex-shrink-0 text-white text-[16px] font-normal leading-6">{text}</p>
        </div>
    );
}

export default LeftColumn;
