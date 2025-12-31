/**
 * Collects the images of the current board members and populates a 2 column 
 * grid with their portraits and introductions  
 */

// Utilize Vite.js glob bundling/hashing to import headshots as a object
// containing each image
const images = import.meta.glob<{default: string}>(
    // Specify the path to headshots and add all relevant file extensions
    '../img/board/2025-2026/*.{jpg,jpeg,JPG,png}', 
    { eager: true }
  );

// Converting the object into the array, boardHeadshots where each image is 
// accessed by the name of the original file 
const boardHeadshots = Object.fromEntries(
    Object.entries(images).map(([path, module]) => {
        const fileName = path.split('/').pop();
        return [fileName, module.default];
    })
);

function Board() {
    return(
        <div id ="csa-board">
            <h2 id="csa-title">The CSA Board (2025 - 2026)</h2>
            <div id = "csa-people">
                <div className="csa-card">
                    <img className="csa-headshot"
                        alt="board picture"
                        src={boardHeadshots['Grace Carter.jpg']}
                        loading="lazy"
                    />
                    <h4 className="card-title">Grace Carter - President</h4>
                    <p className="card-desc">
                    Hi! My name is Grace and I am a third year student in 
                    Marshall collage. I am a pharm chem major and plan on 
                    going to pharmacy school after I graduate. In my free 
                    time I love to go to the beach, try new coffee shops, 
                    and binge watch TV shows. I am so excited to serve as 
                    this year's CSA president and hope to put on a lot of 
                    cool events and foster a great community of scholars!
                    </p>
                </div>
                <div className="csa-card">
                    <img className="csa-headshot"
                        alt="board picture"
                        src={boardHeadshots['Annie Tran.jpeg']}
                        loading="lazy"
                    />
                    <h4 className="card-title">Annie Tran - Vice President</h4>
                    <p className="card-desc">
                        Hi! I'm Annie, and I’m a third year studying human 
                        biology. I joined this org because I love meeting new 
                        people and helping plan events. Outside of school, I 
                        enjoy baking, watching movies, and exploring San Diego.
                    </p>
                </div>
                <div className="csa-card">
                    <img className="csa-headshot"
                        alt="board picture"
                        src={boardHeadshots['KristiLynn Effie.jpg']}
                        loading="lazy"
                    />
                    <h4 className="card-title">KristiLynn Effie - Vice President</h4>
                    <p className="card-desc">
                        Hello! My name is KristiLynn, and I’m excited to serve as one 
                        of this year’s Vice Presidents for the CSA. I am a fourth-year 
                        student at UC San Diego, majoring in Visual Arts (Studio) with 
                        a minor in Art History. I’ve been an active member of CSA since 
                        2022, and I’m grateful for the opportunity to continue supporting 
                        our campus and org this year.
                    </p>
                </div>
                <div className="csa-card">
                    <img className="csa-headshot"
                        alt="board picture"
                        src={boardHeadshots['Justin Phan.jpeg']}
                        loading="lazy"
                    />
                    <h4 className="card-title">Justin Phan - Secretary</h4>
                    <p className="card-desc">
                         Hi I'm Justin! I'm a second year Marine Biology major at 
                        Sixth College with plans to also major in Cognitive 
                        Behavioral Neuroscience. In my free time I like playing 
                        videogames, watching movies, going out with friends, and 
                        I love going to artist alleys to collect things and spend 
                        all my money. I also volunteer at the Birch Aquarium and 
                        you'll usually find me at the tidepool plaza some time 
                        every week!
                    </p>
                </div>
                <div className="csa-card">
                    <img className="csa-headshot"
                        alt="board picture"
                        src={boardHeadshots['Sirajam Munira.jpg']}
                        loading="lazy"
                    />
                    <h4 className="card-title">Sirajam Munira - Treasurer</h4>
                    <p className="card-desc">
                        Hello! My name is Sirajam Munira. I am a second-year Marshall
                        student, majoring in International Studies - International
                        Business. Fun fact about me: I love to play tennis and am a
                        perfectionist :)
                    </p>
                </div>
                <div className="csa-card">
                    <img className="csa-headshot"
                        alt="board picture"
                        src={boardHeadshots['Phuong Nguyen.jpeg']}
                        loading="lazy"
                    />
                    <h4 className="card-title">Phuong Nguyen - Peer Mentor Chair</h4>
                    <p className="card-desc">
                        Hey, I'm Phuong! I'm a 3rd year, Human bio major at 
                        Eighth college. I love everything anatomy and am pre-PT!
                        This is my second year on board for CSA and I've seen 
                        so much growth within the org since - this year, I'm 
                        hoping we can make it an even better and more engaging 
                        community :) Fun fact, I grew up in the Bay Area and 
                        have a dog at home!
                    </p>
                </div>
                <div className="csa-card">
                    <img className="csa-headshot"
                        alt="board picture"
                        src={boardHeadshots['Jason Dinh.jpeg']}
                        loading="lazy"
                    />
                    <h4 className="card-title">Jason Dinh - Peer Mentor Chair</h4>
                    <p className="card-desc">
                        Hey, my name is Jason and I am an 2nd year at Warren 
                        College. I am majoring Business Economics and plan on 
                        minoring in accounting. I am here to make the best of 
                        my experience at UCSD. 
                    </p>
                </div>
                <div className="csa-card">
                    <img className="csa-headshot"
                        alt="board picture"
                        src={boardHeadshots['Jonathan Mendoza.jpeg']}
                        loading="lazy"
                    />
                    <h4 className="card-title">Jonathan Mendoza - Fundraising Chair</h4>
                    <p className="card-desc">
                        I’m a Warren College student, looking to be a 
                        Software Engineer or take some sort of teaching 
                        position. I love playing soccer, swimming, 
                        listening to music specifically pop and rock, 
                        and playing video games. 
                    </p>
                </div>
                <div className="csa-card">
                    <img className="csa-headshot"
                        alt="board picture"
                        src={boardHeadshots['Tammy Bao.jpeg']}
                        loading="lazy"
                    />
                    <h4 className="card-title">Tammy Bao - Fundraising Chai</h4>
                    <p className="card-desc">
                        Hi, I'm Tammy, one of the Fundraising Chairs for 
                        CSA! I'm from the Bay Area, and I love 
                        collecting trinkets, going hiking, and 
                        journaling. I also really enjoy cafe hopping to 
                        find new places to study in San Diego.
                    </p>
                </div>
                <div className="csa-card">
                    <img className="csa-headshot"
                        alt="board picture"
                        src={boardHeadshots['Berleen Grewal.png']}
                        loading="lazy"
                    />
                    <h4 className="card-title">Berleen Grewal - Volunteer Chair</h4>
                    <p className="card-desc">
                        I like to crochet, try new foods, and discover 
                        new places! Excited to create initiatives 
                        encouraging CSA students to contribute their 
                        time to local efforts. 
                    </p>
                </div>
                <div className="csa-card">
                    <img className="csa-headshot"
                        alt="board picture"
                        src={boardHeadshots['Alondra Gutierrez.jpg']}
                        loading="lazy"
                    />
                    <h4 className="card-title">Alondra Gutierrez - Social Chair</h4>
                    <p className="card-desc">
                        Hi, I’m Alondra! I’m a second-year Pharmacological 
                        Chemistry major at UCSD and I’m excited to serve as 
                        CSA’s Social Co-Chair. In my free time, I enjoy 
                        volunteering, exploring San Diego, and spending time 
                        with friends. I can’t wait to help make this year full 
                        of great memories for everyone! 
                    </p>
                </div>
                <div className="csa-card">
                    <img className="csa-headshot"
                        alt="board picture"
                        src={boardHeadshots['Jocelyn Serrano-Gutierrez.jpg']}
                        loading="lazy"
                    />
                    <h4 className="card-title">Jocelyn Serrano - Social Chair</h4>
                    <p className="card-desc">
                        My name is Jocelyn Serrano I am a second year 
                        student from Muir College. I love going on 
                        coffee runs, shopping with friends, and meeting 
                        new people! I am excited to work with all of you!
                    </p>
                </div>
                <div className="csa-card">
                    <img className="csa-headshot"
                        alt="board picture"
                        src={boardHeadshots['Kaitlyn Tan.JPG']}
                        loading="lazy"
                    />
                    <h4 className="card-title">Kaitlyn Tan - Social Chair</h4>
                    <p className="card-desc">
                        hello! i am a third year marshall student planning to 
                        go into the health field. in my downtime, i enjoy romcoms 
                        and games. i am also a HUGE foodie and love making new 
                        friends over matcha :) 
                    </p>
                </div>
                <div className="csa-card">
                    <img className="csa-headshot"
                        alt="board picture"
                        src={boardHeadshots['Karen Lorenzo Villegas.jpeg']}
                        loading="lazy"
                    />
                    <h4 className="card-title">Karen Lorenzo - Publicity Chair</h4>
                    <p className="card-desc">
                        Hi my name is karen! I’m a second year CSP/CSA scholar 
                        and i’m really looking forward to meeting everyone! I’m 
                        from San Diego/Murrieta and I love to go get coffee and 
                        study ✨  I love listening to english rnb/pop music but 
                        also spanish pop/bachata! I plan to one day pursue a 
                        career in Speech Language Pathology/Audiology! Outside 
                        of academics, I have an on-campus job but still make 
                        time to go to the beach, museums, and amusement parks on 
                        weekends.  
                    </p>
                </div>
                <div className="csa-card">
                    <img className="csa-headshot"
                        alt="board picture"
                        src={boardHeadshots['Hillary.jpg']}
                        loading="lazy"
                    />
                    <h4 className="card-title">Hillary Chen - Publicity Chair</h4>
                    <p className="card-desc">
                        Hii!! I’m Hillary. I was born and raised in Sacramento, 
                        CA. Im a huge pet lover and I have a white Pomeranian of 
                        my own!  My hobbies are drawing, games, and experiencing 
                        different restaurants with my friends 
                        (I’m a huge foodie.) If I’m not doing classwork, I’m 
                        making artwork or working in a lab!
                    </p>
                </div>
                <div className="csa-card">
                    <img className="csa-headshot"
                        alt="board picture"
                        src={boardHeadshots['Aaron Delgado.jpg']}
                        loading="lazy"
                    />
                    <h4 className="card-title">Aaron Delgado - Webmaster</h4>
                    <p className="card-desc">
                        Hi, I'm Aaron. I am a second year computer 
                        engineering major from marshall college. I am 
                        very excited to be your webmaster co-chair for 
                        2025-2026. I love trying out new coffee shops 
                        and recipes. I have a hobby of trying out new 
                        baking recipes to make for friends. 
                    </p>
                </div>
                <div className="csa-card">
                    <img className="csa-headshot"
                        alt="board picture"
                        src={boardHeadshots['Tiger Liang.jpg']}
                        loading="lazy"
                    />
                    <h4 className="card-title">Tiger Liang - Webmaster</h4>
                    <p className="card-desc">
                        Hello, my name is Tiger. I am a second year electrical 
                        engineering major from seventh college. Looking forward 
                        to help creating the ideal experience for any incoming 
                        Chancellor Scholars students.
                    </p>
                </div>
                <div className="csa-card">
                    <img className="csa-headshot"
                        alt="board picture"
                        src={boardHeadshots['Jervic Aquino.jpeg']}
                        loading="lazy"
                    />
                    <h4 className="card-title">Jervic Aquino - Director-At-Large</h4>
                    <p className="card-desc">
                        Hi guys! I'm Jervic, a third-year Revelle student 
                        majoring in General Biology and planning on minoring in 
                        Bioethics. I'm interested in forensics and hoping to 
                        eventually work for a government agency. In my free 
                        time, I like to watch shows on Netflix and go on walks 
                        while listening to music.
                    </p>
                </div>
                <div className="csa-card">
                    <img className="csa-headshot"
                        alt="board picture"
                        src={boardHeadshots['Leyna Thai.jpeg']}
                        loading="lazy"
                    />
                    <h4 className="card-title">Leyna Thai - Director-At-Large</h4>
                    <p className="card-desc">
                        Hi! My name is Leyna, and I'm a second-year 
                        pre-med student in Revelle. In my free time, I 
                        like to journal, travel, go to the gym, bake, 
                        and shop. I also love hanging out with my friends 
                        and eating out!! Indian and Chinese cuisine are 
                        two of my absolute favorites. If I'm not doing 
                        those things, I can be seen attempting a sport 
                        (such as archery, ice skating, or indoor soccer) 
                        or trying to lock in for the 5th time in a day.
                    </p>
                </div>
                <div className="csa-card">
                    <img className="csa-headshot"
                        alt="board picture"
                        src={boardHeadshots['Ashley Nguyen.jpeg']}
                        loading="lazy"
                    />
                    <h4 className="card-title">Ashley Nguyen - Freshman Ambassador</h4>
                    <p className="card-desc">
                        Hiiii, I am Ashley! A little about myself, I love going out to 
                        the mall (I am a shopaholic! ) and trying new food. I also love 
                        the colour pink and anything associated with it. 
                    </p>
                </div>
                <div className="csa-card">
                    <img className="csa-headshot"
                        alt="board picture"
                        src={boardHeadshots['Sharon Li.jpeg']}
                        loading="lazy"
                    />
                    <h4 className="card-title">Sharon Li - Freshman Ambassador</h4>
                    <p className="card-desc">
                        Hi! My name is Sharon and I like to thrift, sew, 
                        draw, and spend time with my friends. I love 
                        cats and anything that is pink and cutesy, and 
                        I’m super excited to be one of CSA’s freshman 
                        ambassadors this year.
                    </p>
                </div>
            </div>
            
        </div>
        /*                    
                    {/*No longer Needed
                    
                    {/* Board Intern 
                    <div className="col-sm-6 animated fadeInUp">
                    <div className="board-image">
                        <img
                        alt="board picture"
                        className="lazy"
                        src={boardHeadshots['Alondra Gutierrez.jpg']}
                        loading="lazy"
                        />
                    </div>
                    <h4>Alondra Gutierrez - Board Intern</h4>
                    <div className="board-desc">
                        <p>
                        Hello! My name is Alondra and I am a first-year Pharmacological
                        Chemistry major. I am a part of seventh college and I enjoy
                        writing poetry, listening to music, and hanging out with my
                        friends.
                        </p>
                    </div>
                    </div>

                    {/* Board Intern 
                    <div className="col-sm-6 animated fadeInUp">
                    <div className="board-image">
                        <img
                        alt="board picture"
                        className="lazy"
                        src={boardHeadshots['Jenni Cruz.jpeg']}
                        loading="lazy"
                        />
                    </div>
                    <h4>Jenni Cruz - Board Intern</h4>
                    <div className="board-desc">
                        <p>
                        My name is Jenni, I am a freshman here at UCSD, I am majoring in
                        Psychology and I am in Seventh college!
                        </p>
                    </div>
                    </div>

                    {/* Board Intern 
                    <div className="col-sm-6 animated fadeInUp">
                    <div className="board-image">
                        <img
                        alt="board picture"
                        className="lazy"
                        src={boardHeadshots['Berleen Grewal.png']}
                        loading="lazy"
                        />
                    </div>
                    <h4>Berleen Grewal - Board Intern</h4>
                    <div className="board-desc">
                        <p>
                        Hey! My name is Berleen Grewal, and I'm a first year Electrical
                        Engineering student living in Sixth College. Some of my hobbies
                        include crocheting, painting, and watching Netflix shows. My
                        favorite show this year is definitely Gilmore Girls!
                        </p>
                    </div>
                    </div>

                    {/* Board Intern 
                    <div className="col-sm-6 animated fadeInUp">
                        <div className="board-image">
                            <img
                            alt="board picture"
                            className="lazy"
                            src={boardHeadshots['Mikey Nguyen.png']}
                            loading="lazy"
                            />
                        </div>
                        <h4>Mikey Nguyen - Board Intern</h4>
                        <div className="board-desc">
                            <p>
                            Hey y’all! I’m Mikey Nguyen, a first-year Computer Science major
                            from Eighth College. Fun fact about me is that I despise Seaside
                            now and don’t listen to Keshi.
                            </p>
                        </div>
                    </div>
                    }
            </div>
          
        */
        
    );
}

export default Board;
