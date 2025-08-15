
import "./style/GlobelStyle.css"
// Direct path to the SVG file
const logo = '/static/js/project/icon/undraw_programming_65t2.svg';
import ConetctFlew from "./ContectFlew"
import WebBackground from "./components/WebBackground"
export default function HomeFace(params) {


    return (
        <>
            <WebBackground />
            <div className="HomeFace" id="HomeFace" style={{ position: 'relative', zIndex: 1 }}>
                <div className="HomeFaceContent">
                    <div className="HomeLogo">
                        <img
                            alt="logo home face"
                            src="./static/media/homelogo.svg"
                            style={{ width: "400px" }}
                        />
                    </div>
                    <div className="HomeTxt">
                        <h1>أبني موقع يعبر عنك و عن شركتك  ويميزها عن غيرها</h1>

                        <div className="HometxtSecend">
                            <p> :نقدم</p>
                            <span>تحسين محركات البحث</span>
                            , <span>تطوير مواقع</span>
                            , <span>تصميم مواقع</span>
                        </div>
                    </div>
                </div>
                <ConetctFlew></ConetctFlew>
            </div>
        </>
    )
}