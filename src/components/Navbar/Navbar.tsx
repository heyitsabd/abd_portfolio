import { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleScroll = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    };

    // Add shadow when scrolling
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
            <h2 className="logo">Abdullah</h2>

            {/* Hamburger */}
            <div
                className={`hamburger ${menuOpen ? "open" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className={`nav-links ${menuOpen ? "active" : ""}`}>
                <a onClick={() => handleScroll("about")}>About</a>
                <a onClick={() => handleScroll("experience")}>Experience</a>
                <a onClick={() => handleScroll("projects")}>Projects</a>
                <a onClick={() => handleScroll("skills")}>Skills</a>
                <a onClick={() => handleScroll("contact")} className="contact-btn">
                    Contact
                </a>
            </div>
        </nav>
    );
};

export default Navbar;