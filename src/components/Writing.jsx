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
                                text="<u>Summary:<u> For my final college thesis paper, I explore 
                                the rhetorical technique of the parallel usage of words, 
                                phrases, and images between Tarquin in the first half of the 
                                poem and Lucrece in the latter half, to show how Lucrece is 
                                an author of her own history, in that her mirrored language both 
                                laments a loss of power as well as reclaims this power.">
                                <button>Read Full Story</button>
                </WritingFrame> 

                <WritingFrame   name="Explosion"
                                text="Preview: “‘You hiding a bomb underneath that thing on your head?’ 
                                ‘You wanna come and check?’ What if I had actually said that to the 
                                guy on the empty train who uttered those words while I was minding 
                                my business trying to get to my first period Earth Science class?”">
                                <button>Read Full Story</button>
                </WritingFrame> 

                <WritingFrame   name="Sinking"
                                text="Preview: “Sinking. All I can think about is sinking. Drowning in the water. Drowning in my fears.
                                        Drowning in their hopes and dreams....
                                        My hands clung to the makeshift floaty that my family
                                        had made to help me learn how to swim. Empty water gallons tied to a rope and attached to my
                                        waist were to be my saviors, my entire lifeline....">
                                <button>Read Full Story</button>
                </WritingFrame>

                <WritingFrame   name="From the Bold. Beautiful. Barnard Blog"
                                text="Preview: “The college application process can be one of the most 
                                daunting things a high schooler can go through. To me, it felt like 
                                everything I had done in high school had built up to the moment where 
                                I would actually start my application and submit it. Coming from an 
                                immigrant household, college was the expectation from my parents.”">
                                <button>Read Full Story</button>
                </WritingFrame>  
            </div>
    </section>
    )
}