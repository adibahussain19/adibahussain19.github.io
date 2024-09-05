import WritingFrame from "./WritingFrame.jsx"

export default function Writing(){
    return(
        <section id="writing">
        <h1 className="section-heading"> Writing </h1>

        <div id="writing-intro">
            <p>In addition to my technical side, expressing my creativity through writing has always intrigued me. <br /> 
                <br />
                As a first generation American, I fell in love with writing and the power words hold. 
                I aspire to be able to tell my story through different mediums and platforms and share 
                my experiences to others. <br />
                <br />
                Here are a few writing samples: 
            </p>
        </div>

        <div id="frame-div">
            <WritingFrame   name="Mirrored Language in Shakespeare’s The Rape of Lucrece"
                            text="Summary: For my final college thesis paper, I explore 
                            the rhetorical technique of the parallel usage of words, 
                            phrases, and images between Tarquin in the first half of the 
                            poem and Lucrece in the latter half, to show how Lucrece is 
                            an author of her own history, in that her mirrored language both 
                            laments a loss of power as well as reclaims this power.">
                            <button>Read Full Story</button>
             </WritingFrame> 
             
             
        </div>
    </section>
    )
}