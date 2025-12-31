import  { useState } from 'react';
import { spotlightScholars } from "../data/spotlightScholars";

const images = import.meta.glob<{default: string}>(
    '../img/spotlight/*.{jpg,jpeg,png}', // Specify the path to headshots and add all relevant file extensions
    { eager: true }
);


const spotlightHeadshots = Object.fromEntries(
    Object.entries(images).map(([path, module]) => {
        const fileName = path.split('/').pop();
        return [fileName, module.default];
    })
);

function Spotlight() {
    const [activeId, setActiveId] = useState<string | null>(null);

    return(
        <div id="spotlight">
            <h2 id="spotlight-title"> Spotlight </h2>
            <p id="spotlight-desc"> 
                During their time at the university, 
                our scholars have developed diverse, 
                unique experiences as they begin their 
                careers. Navigate your own university experience 
                with insight from our scholars on university 
                academics, research, and industry. As always, 
                if you have any questions for our scholars, be 
                sure to <a href="mailto:cscholarsall@ucsd.edu"> 
                send the Chancellor's Scholars' Alliance an email. </a>
            </p>
            {spotlightScholars.map((scholar) => (
            <div className="spotlight-scholar" key={scholar.id}>
                <div className="spotlight-main">
                <img
                    className="spotlight-headshot"
                    src={spotlightHeadshots[scholar.headshot]}
                    alt="board picture"
                />

                <div className="spotlight-desc">
                    <h4><b>{scholar.name}</b></h4>
                    <p>{scholar.cohort}</p>
                    <p><b>{scholar.major}</b></p>

                    <button
                    className="spotlight-btn"
                    onClick={() =>
                        setActiveId((prev) =>
                        prev === scholar.id ? null : scholar.id
                        )
                    }
                    >
                    {scholar.buttonText}
                    </button>
                </div>

                <div className="spotlight-brief">
                    <p>"{scholar.brief}"</p>
                </div>
                </div>

                <div
                id={scholar.id}
                className={
                    activeId === scholar.id
                    ? "spotlight-tab-content visibile"
                    : "spotlight-tab-content hidden"
                }
                >
                {scholar.content}
                </div>
            </div>
        ))}
        </div>
        /*
        <div className="container csa-board text-center">
            <h2> Spotlight </h2>
            <hr />
            <div className="row">
                <p> 
                    During their time at the university, our scholars have developed diverse, unique experiences as they begin their careers. Navigate your own university experience with insight from our scholars on university academics, research, and industry. As always, if you have any questions for our scholars, be sure to <a href="mailto:cscholarsall@ucsd.edu"> send the Chancellor's Scholars' Alliance an email. </a>
                </p>

                <div>
                {/* TEMPLATE
                <div className="spotlight-scholar">
                    <div className="col-sm-4 peer-mentoring-image">
                    <img alt="board picture" className="lazy" src="" />
                    </div>
                    <div className="col-sm-3 spotlight-desc">
                        <h4> <b> STUDENT_FIRST_NAME STUDENT_LAST_NAME </b> </h4>
                        <p> Cohort </p>
                        <p> <b> MAJOR </b> </p>
                        <button className="spotlight-btn" data-toggle="collapse" data-target="#STUDENT_FIRST_NAME-text"> Read About STUDENT_FIRST_NAME's Experience </button>
                    </div>
                    <div className="col-sm-5 spotlight-brief">
                    <p> "" </p>
                    </div>
                    <div id="STUDENT_FIRST_NAME-text" className="collapse col-sm-12 spotlight-tab-content">
                    <p><b>  </b></p>
                    <p>  </p>
                    </div>
                </div>  }
                
            </div>
        </div>
        */
    );
}

export default Spotlight;