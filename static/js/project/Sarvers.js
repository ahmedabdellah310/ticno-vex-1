import CardProject from "./CradProject"
/* icons  */
import DEV from "../../media/Coding.213ace27a3ccedcff3b1.gif"
import dising from "../../media/Web Design.c5e37935fe6ac93fae40.gif";
import server from "../../media/customer-service.accaf63bd476957cb74e.png"
import seo from "../../media/seo.69dde25e376fafeef462.png"

export default function Projects(params) {
    const ContenProjects = {
        seo: "نُحسّن موقعك للظهور في نتائج البحث الأولى وجذب المزيد من الزوار.",
        TecSPPORT: "فريقنا جاهز لمساعدتك في أي وقت لضمان استمرار موقعك دون انقطاع.",
        dising: "نبتكر تصاميم واجهات جذابة وسهلة الاستخدام تعكس هوية مشروعك.",
        dev: "نستخدم أحدث التقنيات لبناء مواقع سريعة وآمنة تعمل على جميع الأجهزة."

    }
    return (<>
        
        <div
      id="Projects"
            className="Projects"
        >
            <div className="ProjectContetn">


                <h1>خدماتنا</h1>

                <div className="ProjectsCrads">
                    <CardProject ImgSrc={seo} Titel="Seo" spanContetn={ContenProjects.seo} Altimg="seo img" >  </CardProject>
                    <CardProject ImgSrc={server} Titel="SPPORT" spanContetn={ContenProjects.TecSPPORT} Altimg="seo img" >  </CardProject>
                    <CardProject ImgSrc={dising} Titel="dising" spanContetn={ContenProjects.dising} Altimg="seo img" >  </CardProject>
                    <CardProject ImgSrc={DEV} Titel="dev" spanContetn={ContenProjects.dev} Altimg="seo img" >  </CardProject>

                </div>
            </div>
        </div>
    </>)
}