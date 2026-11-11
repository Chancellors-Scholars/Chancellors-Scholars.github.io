/**
 * Collects the images of the current board members and populates a 2 column 
 * grid with their portraits and introductions  
 */

// Utilize Vite.js glob bundling/hashing to import headshots as a object
// containing each image
const images = import.meta.glob<{default: string}>(
    // Specify the path to headshots and add all relevant file extensions
    '../img/board/2026-2027/*.{jpg,jpeg,JPG,png}', 
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
                        src={boardHeadshots['Aaron Delgado.jpg']}
                        loading="lazy"
                    />
                    <h4 className="card-title">Aaron Delgado - President</h4>
                    <p className="card-desc">
                    Hey Everyone, I'm Aaron, I'm third year engineering major
                    whose also a Marshall student. I really looking forward 
                    to this new year we got a lot of events plan and I can't 
                    wait to meet everyone. I like to go out and do cafe 
                    hopping trying out new places. I also crochet. 
                    </p>
                </div>
                <div className="csa-card">
                    <img className="csa-headshot"
                        alt="board picture"
                        src={boardHeadshots['Karen Lorenzo Villegas.jpg']}
                        loading="lazy"
                    />
                    <h4 className="card-title">Karen Lorenzo - Vice President External</h4>
                    <p className="card-desc">
                    Hi! I’m Karen, a third year double majoring in psychology 
                    and linguistics. Something about me is that I love finding 
                    time to unwind. I love to hangout with my friends and have a
                    good laugh with the people that I’m around. I’m looking 
                    forward to being able to make memories with my friends and 
                    peers. I’m excited to attend CSA related events because 
                    they’re always fun to come to! I love to go shopping for 
                    cute purses and accessories! Building lego sets are 
                    something I enjoy doing with my friends. When possible I 
                    also like to go try different coffee shops and see what 
                    places have good iced chai’s! I work a part time job so that
                    I can afford and fund myself for these types of activities :) 
                    </p>
                </div>
                 <div className="csa-card">
                    <img className="csa-headshot"
                        alt="board picture"
                        src={boardHeadshots['Alondra Gutierrez.jpg']}
                        loading="lazy"
                    />
                    <h4 className="card-title">Alondra Gutierrez - Vice President Internal</h4>
                    <p className="card-desc">
                        Hi, I'm really looking forward to taking new classes, 
                        making new friends and spending time with old ones! I 
                        enjoy writing poetry and spending money I don't have
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
                        Hi I'm Justin! I'm a 3rd year Marine Biology major and 
                        I'm from San Diego! I am very interested in marine 
                        science and animal behavior. I work in the Lovett-Barron
                        Lab where I get to study social behavior in micro-glass
                        fish. I'm looking forward to taking more fun classes, 
                        collecting more art and stuff, and continuing to serve 
                        the board! I enjoy going out thrifting, going to the 
                        swap meet, and also visiting artist alleys. I also enjoy 
                        playing games and cooking and making fun drinks. My 
                        favorite animal is the scalloped hammerhead shark! I was 
                        studying crabs and shrimp in Malaysia for the summer. My
                        favorite Pokémonis clodsire."
                    </p>
                </div>
                <div className="csa-card">
                    <img className="csa-headshot"
                        alt="board picture"
                        src={boardHeadshots['Jacky Tian.jpg']}
                        loading="lazy"
                    />
                    <h4 className="card-title">Jacky Tian - Treasurer</h4>
                    <p className="card-desc">
                        Hi! My name is Jacky and l'm a second year chemical 
                        engineer at Warren College. I am looking forward to meet
                        new people and excited for the experiences this year 
                        will bring! I like fishing, playing badminton, and 
                        listening to music!
                    </p>
                </div>
                 <div className="csa-card">
                    <img className="csa-headshot"
                        alt="board picture"
                        src={boardHeadshots['Aayush Bhambi.jpeg']}
                        loading="lazy"
                    />
                    <h4 className="card-title">Aayush Bhambi - Treasurer</h4>
                    <p className="card-desc">
                        I am Ayush, an incoming second year student living at 
                        Revelle and I look forward to providing my ideas and 
                        efforts to Chancellor's Scholar Alliance to better the 
                        program with more opportunities! I enjoy trying new 
                        restaurants, hanging out with friends, and watching 
                        romcoms! I love playing basketball and my favorite team 
                        is the Lakers! I love meeting new people! My favorite 
                        video game of all time is Minecraft!
                    </p>
                </div>
                <div className="csa-card">
                    <img className="csa-headshot"
                        alt="board picture"
                        src={boardHeadshots['Cherie Cai.jpeg']}
                        loading="lazy"
                    />
                    <h4 className="card-title">Cherie Cai - Peer Mentor Chair</h4>
                    <p className="card-desc">
                        Hello! My name is Cherie and I'm a second year studying 
                        Pharmacological Chemistry. I love to do various things 
                        during my free time such as playing games and hanging 
                        out with friends doing everything and anything. This 
                        year I'm looking forward to building new connections and 
                        locking in on my classes! In my free time I like to read,
                        vlog, cook, and journal. Fun fact: I love potatoes <3
                    </p>
                </div>
                <div className="csa-card">
                    <img className="csa-headshot"
                        alt="board picture"
                        src={boardHeadshots['Blanca Chavarin.jpeg']}
                        loading="lazy"
                    />
                    <h4 className="card-title">Blanca Chavarin - Peer Mentor Chair</h4>
                    <p className="card-desc">
                        My name is Blanca! I'm a second year college 
                        student who is majoring in Aerospace Engineering my 
                        hometown is San Bernardino in the Inland Empire. My 
                        interest in the science began in high school and I love 
                        a challenge so I chose engineering as a major. This year 
                        I am looking forward to creating new connections with 
                        incoming students and providing as much guidance to 
                        hopefully ease their transition to college as much as 
                        possible. Some of my hobbies are painting and binge 
                        watching movies/tv shows. Some fun facts about myself 
                        are that I know 5 languages and I'm allergic to animals 
                        but have had a total of 12 pets growing up.
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
                        I'm Jonathan Mendoza! I’m a Warren College student, looking to be a 
                        Software Engineer or take some sort of teaching 
                        position. I’m looking forward to making as much money as 
                        possible for CSA while also getting to know the people 
                        within the program better. My hobbies are playing video 
                        games, rock climbing, swimming, and taking random walks. 
                        Fun facts about me are that I’m left handed and I’m a 
                        fraternal twin.
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
                        src={boardHeadshots['Samira Granados.png']}
                        loading="lazy"
                    />
                    <h4 className="card-title">Samira Granados - Volunteer Chair</h4>
                    <p className="card-desc">
                        I’m Samira! I’m a second year Biochemistry major at Muir
                        College and I am looking forward to making the most out 
                        of the year and helping the community through volunteer 
                        work! My hobbies include painting, reading, and going to 
                        concerts! 
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
                        Hey guys! I’m Jocelyn I'm a third year international 
                        business student with a minor in accounting. What I'm 
                        looking forward to this year is making more fun memories 
                        with CSA and to be able to host successful events all 
                        quarter round.
                    </p>
                </div>
                <div className="csa-card">
                    <img className="csa-headshot"
                        alt="board picture"
                        src={boardHeadshots['Tairan Sun.JPG']}
                        loading="lazy"
                    />
                    <h4 className="card-title">Tairan Sun - Social Chair</h4>
                    <p className="card-desc">
                        Hello! I'm Ty! I'm currently finding a balance between 
                        school, family, and social life. I like basketball, chess, 
                        working out, pool, and piano.
                    </p>
                </div>
                <div className="csa-card">
                    <img className="csa-headshot"
                        alt="board picture"
                        src={boardHeadshots['Thomas Do.jpeg']}
                        loading="lazy"
                    />
                    <h4 className="card-title">Thomas Do - Social Chair</h4>
                    <p className="card-desc">
                        Hi I'm Thomas! I keep to myself a lot but that doesn't 
                        mean you shouldn't reach out. It's my goal this year 
                        to become more connected with my community and join some 
                        more clubs. It will be exciting to have more people to 
                        talk to that share my same interests! I enjoy playing 
                        tennis, cooking, hiking, and playing video games! One 
                        time when I went on a hike, I slipped and fell off a 
                        waterfall and scarred my leg. Thankfully, I can walk on 
                        it but it's a little uncomfortable to work out on.
                    </p>
                </div>
                <div className="csa-card">
                    <img className="csa-headshot"
                        alt="board picture"
                        src={boardHeadshots['Ricardo Bustamente.jpg']}
                        loading="lazy"
                    />
                    <h4 className="card-title">Ricardo Bustamente - Publicity Chair</h4>
                    <p className="card-desc">
                        What's up I'm Ricardo! I'm a second year biochem major 
                        and I hope to be less of a chud I guess. I like playing 
                        video games, favorite animal is a chimpanzee, love to 
                        doom scroll and be a chud.
                    </p>
                </div>
                <div className="csa-card">
                    <img className="csa-headshot"
                        alt="board picture"
                        src={boardHeadshots['Ashley Nguyen.jpg']}
                        loading="lazy"
                    />
                    <h4 className="card-title">Ashley Nguyen - Publicity Chair</h4>
                    <p className="card-desc">
                        Hiii, I’m Ashley! I’m a pre-med student majoring in 
                        neurobiology, dreaming of becoming a neurosurgeon one 
                        day. I love shopping, trying new food spots, and 
                        anything that lets me have a little fun. Pink is my 
                        absolute favorite colour! I’m super spontaneous and 
                        always down for last-minute plans and new adventures ✨ 
                        I am a huge shopaholic and love visiting new boba shops 
                        with my friends. I am looking forward to meeting the new 
                        members of our program and getting to know everyone. 
                    </p>
                </div>
                <div className="csa-card">
                    <img className="csa-headshot"
                        alt="board picture"
                        src={boardHeadshots['Ryan Lee.jpg']}
                        loading="lazy"
                    />
                    <h4 className="card-title">Ryan Lee - Webmaster</h4>
                    <p className="card-desc">
                        What's up! I'm Ryan, I'm a second year computer science 
                        major. This year, I'm looking forward to meeting new 
                        people and going out more often! I do breakdancing! I 
                        also enjoy cooking even though I'm not the best at it.
                    </p>
                </div>
                <div className="csa-card">
                    <img className="csa-headshot"
                        alt="board picture"
                        src={boardHeadshots['Dongfeng Li.jpg']}
                        loading="lazy"
                    />
                    <h4 className="card-title">Dongfeng Li - Webmaster</h4>
                    <p className="card-desc">
                        Hi! My name is Dongfeng and I am a second year 
                        electrical engineering major. I'm looking forward to 
                        going to all the Chancellor's Scholar's events and 
                        meeting new people. I like playing tennis, reading, and 
                        watching movies.
                    </p>
                </div>
                <div className="csa-card">
                    <img className="csa-headshot"
                        alt="board picture"
                        src={boardHeadshots['Jason Dinh.jpeg']}
                        loading="lazy"
                    />
                    <h4 className="card-title">Jason Dinh - Director-At-Large</h4>
                    <p className="card-desc">
                        My name is Jason! I’m a third year at Warren College 
                        studying Business Economics, Accounting, and History. I 
                        am looking forward to improving On CSA’s success from 
                        last year, forming new relationships, having fun, 
                        providing mentorship, and any other opportunities 
                        that may occur through out the year. (And collecting 
                        more Pokemon Cards) 😊. I’ll be a summer intern for Baker 
                        Tilly in 2027. 
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
                        Hi! My name is Leyna, and I'm a third-year 
                        pre-med student in Revelle. I'm from Sacramento, CA, 
                        where I often spent my summers traveling abroad with my 
                        family. I'm on the pre-med track, and I have a part-time 
                        job as a lab assistant! Alongside my job, I began 
                        volunteering as an undergraduate researcher at the 
                        Sanchez-Lopez Lab, where I always look forward to 
                        working with the mice. I also recently took a beginning 
                        ballet class at UCSD (TDMV 1) and although I felt like 
                        I've been through the depths of hell on a unicorn's 
                        back, I really enjoyed it and I'm looking forward to 
                        taking barre and ballet REC classes this school year!
                        I love to travel and make myself steak. As a fun fact, I 
                        have a freckle in my left eye! 
                    </p>
                </div>
                <div className="csa-card">
                    <img className="csa-headshot"
                        alt="board picture"
                        src={boardHeadshots['Christopher Attisha.jpeg']}
                        loading="lazy"
                    />
                    <h4 className="card-title">Christopher Attisha - Freshman Ambassador</h4>
                    <p className="card-desc">
                        Hi, I’m Christopher Attisha, a Data Science major at 
                        UCSD! As a first year, I’m looking forward to meeting 
                        new friends and exploring La Jolla staples (especially 
                        Ho Chi Minh Trail). I would describe myself as an 
                        ambitious person who’s always looking to try something 
                        new and exciting. This year, I hope to achieve the best 
                        grades possible and enjoy my first touch at college. On 
                        my free time, I love to play pick-up basketball on
                        campus and go out hiking near Mission Trails with 
                        friends. If I’m not doing that, I’m working the library 
                        shelving books.  
                    </p>
                </div>
                <div className="csa-card">
                    <img className="csa-headshot"
                        alt="board picture"
                        src={boardHeadshots['.jpeg']}
                        loading="lazy"
                    />
                    <h4 className="card-title">Vincent Nguyen - Freshman Ambassador</h4>
                    <p className="card-desc">
                        Hello I am Vincent and I am a San Diegan local! I love 
                        expressing my creativity from planning unique events, 
                        photography, to oil pastels. I always like giving back 
                        to friends and peers in unique and personalized forms of 
                        gifts, hence my art hobby. I tested a lot of art medium: 
                        photography, oil pastels, sketching, pixelated digital 
                        art in the form of Minecraft texture packs, and I'm 
                        still finding a medium that speaks to me. I played a lot 
                        of video games, used to be an unhealthy amount on the 
                        daily. My biggest interest are designing keyboards and 
                        building my 1997 Acura Integra GS project car! I built 
                        eight keyboards and hoping to manual-swap my car. I am a 
                        tech-heavy pal, so most of my friends come to me for 
                        either gaming peripheral or PC parts advice. I am 
                        looking forward to designing events and fun activities 
                        for my CSP peers to all enjoy, bond over, and make 
                        life-long friends. Most importantly, I am hoping to 
                        create memories with CSA and the CSP community that we 
                        can all look back after we graduate! 
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
