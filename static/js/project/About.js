
export default function About(params) {

    return (
        <>
            <div className="About" id="About">
                <div className="AboutContent">
                    <div className="AboutImg" style={{
                        width: '100%',
                        maxWidth: '500px',
                        margin: '0 auto',
                        padding: '20px',
                        boxSizing: 'border-box'
                    }}>
                        <img
                            src="./static/media/ticno-vex.png"
                            alt="Ticno Logo"
                            style={{
                                width: '100%',
                                height: 'auto',
                                display: 'block',
                                maxWidth: '100%',
                                objectFit: 'contain'
                            }}
                        />
                    </div>
                    <div className="AboutTxt">

                        <h2>

                            Ticno VEX ♥️
                            <br></br>
                            متخصصه في تصميم وتطوير المواقع
                            <br></br>
                            ندمج الإبداع بالتقنية لنمنحك تجربة رقمية لا تُني


                        </h2>
                        <div style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: '12px'
                        }}>
                            <button
                                aria-label="اذهب إلى موقع Ticno"
                                onClick={() => {
                                    window.location.href = 'https://ahmedabdellah310.github.io/Ticno/';
                                }}
                                style={{
                                    background: 'linear-gradient(45deg, #0d0d0d, #1a1a1a)',
                                    color: '#ffffff',
                                    border: '1px solid rgba(255,255,255,0.25)',
                                    padding: '10px 24px',
                                    borderRadius: '26px',
                                    fontSize: '16px',
                                    cursor: 'pointer',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    boxShadow: '0 0 0px rgba(255,255,255,0.0), 0 0 22px rgba(255,255,255,0.2)',
                                    transition: 'transform .25s ease, box-shadow .25s ease, background .25s ease, color .25s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = '0 0 10px rgba(255,255,255,0.6), 0 0 28px rgba(255,255,255,0.35)';
                                    e.currentTarget.style.background = 'linear-gradient(45deg, #1a1a1a, #262626)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 0 0px rgba(255,255,255,0.0), 0 0 22px rgba(255,255,255,0.2)';
                                    e.currentTarget.style.background = 'linear-gradient(45deg, #0d0d0d, #1a1a1a)';
                                }}
                                onMouseDown={(e) => {
                                    e.currentTarget.style.transform = 'translateY(2px) scale(0.98)';
                                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(255,255,255,0.2)';
                                }}
                                onMouseUp={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = '0 10px 22px rgba(255,255,255,0.35)';
                                }}
                            >
                                <img
                                    src="./static/media/ticno-vex.png"
                                    alt="Ticno icon"
                                    style={{ width: '20px', height: '20px', objectFit: 'contain' }}
                                />
                                <span>أذهب لـــ</span>
                            </button>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}