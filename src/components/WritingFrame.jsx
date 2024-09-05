
export default function WritingFrame({name, text, fullButton}) {
    return(
        <div className="writing-frame">
            <h3>{name}</h3>
            <p>{text}</p>

            <div className="button-div">
                {fullButton}
            </div>

        </div>

        

    )    
}