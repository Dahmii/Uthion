import { useEffect, useState, useRef } from 'react';
import { Mail } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
const PHRASES = [
'We architect growth across every facet of your business',
'Business Strategy & Transformation',
'Funding Support & Investor Readiness',
'Corporate Finance & Deal Advisory',
'Performance Improvement & Operational Excellence',
'Governance, Structure & Organization Design',
'Market Entry & Growth Advisory',
'Research, Insights & Thought Leadership',
'Startup & Venture Advisory'];

const TYPING_SPEED = 55;
const DELETING_SPEED = 28;
const PAUSE_AFTER_TYPING = 1600;
const PAUSE_AFTER_DELETING = 350;
export function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  });
  // As the hero scrolls away, a white semi-circle sweeps upward to reveal the next section.
  const domeHeight = useTransform(scrollYProgress, [0, .85], ['14%', '150%']);
  const domeRadius = useTransform(scrollYProgress, [0, .85], ['100%', '200%']);
  // Subtle parallax + fade on the headline so it recedes as the reveal happens.
  const contentY = useTransform(scrollYProgress, [0, 0.6], [0, -60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  useEffect(() => {
    const currentPhrase = PHRASES[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!isDeleting && displayedText === currentPhrase) {
      timeout = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPING);
    } else if (isDeleting && displayedText === '') {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
      }, PAUSE_AFTER_DELETING);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayedText((prev) =>
          isDeleting ?
          currentPhrase.slice(0, prev.length - 1) :
          currentPhrase.slice(0, prev.length + 1)
          );
        },
        isDeleting ? DELETING_SPEED : TYPING_SPEED
      );
    }
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, phraseIndex]);
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);
  return (
    <section
      ref={sectionRef}
      className="relative bg-[#3300FF] min-h-screen flex flex-col overflow-hidden">
      
      {/* Navigation */}
      <nav className="w-full px-6 md:px-12 py-6 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3 cursor-pointer group">
    
    <img 
      src="/ulogo2.jpg" 
      alt="Utheon Logo" 
      className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-105"
    />
  </div>

        <button
          className="text-white hover:opacity-80 transition-opacity"
          aria-label="Contact us">
          
          <Mail className="w-6 h-6 md:w-7 md:h-7" />
        </button>
      </nav>

      {/* Hero Content */}
      <motion.div
        style={{
          y: contentY,
          opacity: contentOpacity
        }}
        className="flex-1 flex items-center justify-center px-6 md:px-12 pb-32 relative z-10">
        
        <div className="max-w-5xl w-full">
          <h1
            className="font-montserrat text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-center min-h-[3.5em] md:min-h-[2.5em] flex items-center justify-center"
            aria-label="We architect growth across every facet of your business">
            
            <span>
              {displayedText}
              <span
                className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100 font-light`}>
                
                |
              </span>
            </span>
          </h1>
        </div>
      </motion.div>

      {/* Scroll-driven semi-circle reveal of the next section */}
      <div
        className="absolute bottom-0 left-0 w-full h-[40vh] z-10 pointer-events-none overflow-hidden"
        aria-hidden="true">
        
        <motion.div
          style={{
            height: domeHeight,
            borderTopLeftRadius: domeRadius,
            borderTopRightRadius: domeRadius
          }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[180vw] bg-white" />
        
      </div>
    </section>);

}