import "./style/ContectFlew.css"
export default function Foter(params) {
    return (<>

        <div className="foter">
            <div className="fotereContetn">
                {/* Social media links removed as requested */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    marginTop: '20px',
                    padding: '20px 0',
                    borderTop: '1px solid rgba(34, 229, 132, 0.15)'
                }}>
                    <p
                        onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = '0 0 8px rgba(15,110,74,0.6), 0 0 24px rgba(34,229,132,0.45)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = '0 0 0px rgba(11,95,63,0.0), 0 0 18px rgba(34,229,132,0.3)';
                        }}
                        style={{ 
                            margin: 0,
                            textAlign: 'center',
                            width: 'auto',
                            color: '#ffffff',
                            background: 'transparent',
                            padding: '8px 16px',
                            borderRadius: '20px',
                            border: '1px solid rgba(34, 229, 132, 0.25)',
                            boxShadow: '0 0 0px rgba(11,95,63,0.0), 0 0 8px rgba(34,229,132,0.15)',
                            transition: 'box-shadow .25s ease, background .25s ease, color .25s ease'
                        }}
                    >
                        All rights reserved to Ahmed Abdellah © 2025
                    </p>
                </div>
            </div>
        </div>
    </>)
}