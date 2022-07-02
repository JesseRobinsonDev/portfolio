import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
  const location = useLocation();
  const homeSectionRef = useRef();
  const aboutSectionRef = useRef();
  const skillsSectionRef = useRef();
  const projectsSectionRef = useRef();

  useEffect(() => {
    scrollToComponent();
    introText();
  }, []);

  useEffect(() => {
    scrollToComponent();
  }, [location]);

  function scrollToComponent() {
    var headerOffset = 72;
    var elementPosition = 0;
    var offsetPosition = 0;
    switch (window.location.hash) {
      case "#about":
        elementPosition = aboutSectionRef.current.getBoundingClientRect().top;
        offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        break;
      case "#skills":
        elementPosition = skillsSectionRef.current.getBoundingClientRect().top;
        offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        break;
      case "#projects":
        elementPosition =
          projectsSectionRef.current.getBoundingClientRect().top;
        offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        break;
      default:
        elementPosition = homeSectionRef.current.getBoundingClientRect().top;
        offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        break;
    }
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  }
      <Header scroll={scrollToComponent} />
