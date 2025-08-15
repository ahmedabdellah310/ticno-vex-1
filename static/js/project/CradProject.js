export default function CardProject({ImgSrc, Altimg,Titel,spanContetn}) {
    return (
        <>
            <div className="card" style={{textAlign:"center"}}>
                <img     src={ImgSrc} alt={Altimg}    ></img>
                <h2> {Titel} </h2>
                <span>  {spanContetn} </span>
            </div>

        </>)
}