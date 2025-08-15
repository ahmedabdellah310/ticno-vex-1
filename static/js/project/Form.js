import { useState } from "react"
import imglogo from "../../media/Coding.213ace27a3ccedcff3b1.gif"
import Pope from "./Pope";

export default function Form() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [vewstate, setvew] = useState({
        VewKey: false,
        Message: "جاري ارسال طلبكم",
        color: "rgb(255, 230, 0)",
        boxShadow: "",
        background: "#0b1120"
    });

    const realform = {
        VewKey: false,
        Message: "جاري ارسال طلبكم",
        color: "rgb(255, 230, 0)",
        boxShadow: "",
        background: "#0b1120"
    }

    // State for form data and submission status
    const [FormDtat, SetFormDatat] = useState({
        Name: "",
        Phone: "",
        Email: "",
        Message: ""
    })
    const { Name, Phone, Email, Message } = FormDtat;

    // Form submission handler
    const PushDtat = async (e) => {
        e.preventDefault();
        if (Name.length > 3 && Message.length > 5 && Phone.length === 10) {
            setIsSubmitting(true);
            //ftech 
            setvew({ ...vewstate, VewKey: true })

            await fetch("https://script.google.com/macros/s/AKfycbwdSbpzdCx9qJNWc2BtYPB8wprcXHNGWVWYnWeD-PLRKHF9He09vOpgRqx_GpxWVOM2/exec", {
                method: 'POST',
                body: JSON.stringify(FormDtat)
            })
                .then(res => res.text())
                .then(response => {
                    SetFormDatat({ Name: '', Phone: '', Email: '', Message: '' });
                    setvew({ ...vewstate, Message: "تم الإرسال بنجاح", color: 'rgb(12, 201, 69)', VewKey: true, boxShadow: "rgb(12, 201, 69)" });
                    setIsSubmitting(false);

                })
                .catch(err => {
                    setvew({ ...vewstate, Message: "حدث خطأ ولم يتم الإرسال", color: "red", VewKey: true, boxShadow: "red" });
                    setIsSubmitting(false);
                });

        }
        else {
            setvew({ ...vewstate, Message: '⚠️ عذراً حدث خطأ اثناء ارسال رسالتك', VewKey: true, boxShadow: "red" })
        }

    }


    function HendelPopePage(value) {

        setvew({ ...realform })
    }


    return (<>
        <div className="formsection">
            <h1 style={{ textAlign: "center" }}>تواصل معنا</h1>
            <form onSubmit={(e) => PushDtat(e)}>

                <div className="FormInputs" id="Contects">
                    <div>
                        <label>Full Name</label>
                        <input type="txt" value={Name}
                            onChange={(ev) => SetFormDatat({ ...FormDtat, Name: ev.target.value })} ></input>
                    </div>
                    <div>
                        <label>Phone</label>
                        <input type="number" value={Phone} onChange={(ev) => SetFormDatat({ ...FormDtat, Phone: ev.target.value })} ></input>
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" value={Email} onChange={(ev) => SetFormDatat({ ...FormDtat, Email: ev.target.value })} ></input>
                    </div>
                    <div>
                        <label>Message</label>
                        <textarea style={{ width: "400px", height: "50px" }}
                            value={Message}
                            onChange={(ev) => SetFormDatat({ ...FormDtat, Message: ev.target.value })} >
                        </textarea>
                    </div>
                    <div className="buutonHomeFace">
                        {!isSubmitting ? (
                            <button 
                                type="submit"
                                style={{
                                    background: "linear-gradient(45deg, rgb(11, 95, 63), rgb(15, 110, 74))",
                                    color: "#fff",
                                    border: "1px solid rgba(11, 95, 63, 0.6)",
                                    padding: "14px 35px",
                                    borderRadius: "30px",
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                    cursor: "pointer",
                                    transition: "all 0.3s ease",
                                    boxShadow: "0 0 15px rgba(34, 229, 132, 0.3)",
                                    position: "relative",
                                    overflow: "hidden"
                                }}
                                onMouseDown={(e) => {
                                    e.target.style.transform = 'translateY(2px)';
                                    e.target.style.boxShadow = '0 2px 8px rgba(11,95,63,0.3)';
                                }}
                                onMouseUp={(e) => {
                                    e.target.style.transform = 'translateY(0)';
                                    e.target.style.boxShadow = '0 0 15px rgba(34, 229, 132, 0.3)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = 'translateY(0)';
                                    e.target.style.boxShadow = '0 0 15px rgba(34, 229, 132, 0.3)';
                                }}
                                onClick={PushDtat}
                            >
                                <span style={{
                                    position: 'relative',
                                    zIndex: 2
                                }}>إرسال</span>
                            </button>
                        ) : (
                            <div style={{
                                padding: "14px 35px",
                                color: "#fff",
                                textAlign: "center",
                                fontSize: "16px"
                            }}>
                                جاري الإرسال...
                            </div>
                        )}
                    </div>
                </div>
            </form>
        </div >
        <Pope statue={vewstate.VewKey} fuction={HendelPopePage} src={imglogo} alt={"img"} text={vewstate.Message}
            key={1} color={vewstate.color} box={vewstate.boxShadow} >


        </Pope>


    </>)
}
