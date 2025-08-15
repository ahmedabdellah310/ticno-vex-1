
import "./style/GlobelStyle.css"
export default function MenuListPage({ Statue }) {
    return (<>

        {Statue ? (<div className="Menu">
            <div className="MeuConten">
                <div className="links">
                    <ul>
                        <a href="#HomeFace"><li > الصفحة الرئيسية</li></a>
                        <a  href="#Projects"><li> الخدمات  </li></a>
                        <a   href="#About"><li>من نحن</li></a>
                        <a href="#Contects"><li >تواصل معنا</li>  </a>
                    </ul>
                </div>
            </div>
        </div>) : <></>}

    </>)
}