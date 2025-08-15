import "./style/GlobelStyle.css"
export default function Pope({ alt, text, src, statue, fuction, color, box }) {
    return (<>

        {statue ? (<div className="Ppoe">
            <div className="PopeContent" style={{ boxShadow: `0px 0px 20px ${box}` }}>
                <div className="Ppoeimg">

                    <img alt={alt} src={src} ></img>
                </div>
                <div className="Popetext">

                    <h3 style={{ color: (color) }}>{text}</h3>
                </div>
                <b>Ticno VEX</b>
                <button
                    onClick={() => fuction()}
                    style={{
                        background: 'linear-gradient(45deg, #8B0000, #660000)',
                        color: 'white',
                        border: '2px solid rgba(255, 255, 255, 0.2)',
                        padding: '12px 30px',
                        borderRadius: '30px',
                        fontSize: '16px',
                        fontFamily: 'inherit',
                        cursor: 'pointer',
                        marginTop: '15px',
                        transition: '0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        boxShadow: 'rgba(139, 0, 0, 0.4) 0px 6px 20px',
                        position: 'relative',
                        overflow: 'hidden',
                        transform: 'translateY(0px) scale(1)',
                        willChange: 'transform, box-shadow',
                        zIndex: 1
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-3px) scale(1.02)';
                        e.target.style.boxShadow = '0 10px 22px rgba(139, 0, 0, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0) scale(1)';
                        e.target.style.boxShadow = 'rgba(139, 0, 0, 0.4) 0px 6px 20px';
                        e.target.style.background = 'linear-gradient(45deg, #8B0000, #660000)';
                    }}
                    onMouseDown={(e) => {
                        e.target.style.transform = 'translateY(2px) scale(0.98)';
                        e.target.style.boxShadow = '0 2px 8px rgba(139, 0, 0, 0.3)';
                    }}
                    onMouseUp={(e) => {
                        e.target.style.transform = 'translateY(-3px) scale(1.02)';
                        e.target.style.boxShadow = '0 10px 22px rgba(139, 0, 0, 0.5)';
                    }}
                >
                    إغلاق
                </button>
            </div>

        </div>) : ""}

    </>)
}