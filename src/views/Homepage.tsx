import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { fetchEventData } from "../scripts/event-script";
import { EventData } from "../types";
import EventsGrid from "../components/EventsGrid";

type AboutImage = {
  src: string;
  alt: string;
};

function Homepage() {
  const [events, setEvents] = useState<EventData[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const [aboutImages, setAboutImages] = useState<AboutImage[]>([]);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    fetchEventData()
      .then((data: EventData[]) => {
        setEvents(data);
        setIsLoaded(true);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    fetch("/about-images.json")
      .then((res) => res.json())
      .then((data: AboutImage[]) => setAboutImages(data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (aboutImages.length <= 4) return;

    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % aboutImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [aboutImages]);

  const visibleImages =
    aboutImages.length === 0
      ? []
      : Array.from({ length: Math.min(4, aboutImages.length) }, (_, i) => {
          return aboutImages[(startIndex + i) % aboutImages.length];
        });

  return (
    <div id="homepage">
      <div id="home-banner">
        <h1
          id="homepage-title"
          style={{
            textShadow:
              "3px 3px 7px #25291C, -3px -3px 7px #25291C, -3px 3px 7px #25291C, 3px -3px 7px #25291C",
            color: "#fff",
          }}
        >
          Chancellor&apos;s Scholars Alliance at UC San Diego
        </h1>

        <div id="contact-button">
          <NavLink to="/contact">Contact Us!</NavLink>
        </div>
      </div>

      <div id="about">
        <div className="about-section" id="about-text">
          <h2 id="about-title">About Us</h2>
          <p id="about-par">
            As the Chancellor&apos;s Scholar&apos;s Alliance, a nonprofit,
            student run organization, we intend to serve as a resource for
            current and future students and to welcome UCSD&apos;s newest
            scholars to our community. We seek to equip and empower scholars to
            become the world&apos;s next generation of leaders by providing them
            with mentoring networks, bonding socials, and service outreaches in
            order to build unity, teamwork, and purpose.
          </p>
          <NavLink to="/about" id="about-link">
            More about us...
          </NavLink>
        </div>

        <div className="about-section" id="about-images">
          {visibleImages.map((image, index) => (
            <div className="about-image-card" key={`${image.src}-${index}`}>
              <img
                src={image.src}
                alt={image.alt}
                className="about-image"
              />
            </div>
          ))}
        </div>
      </div>

      <div id="event">
        <div className="container text-center" id="event-cards">
          <h1 id="event-title">Events</h1>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {isLoaded ? (
              events.length > 0 ? (
                <EventsGrid events={events} />
              ) : (
                <p style={{ padding: "40px" }}>No events coming up...</p>
              )
            ) : (
              <p style={{ padding: "40px" }}>Loading events...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;