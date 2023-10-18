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
            <p style={{color: "#ffffff"}}>{text}</p>
        </div>
    );
}

export default LeftColumn;
