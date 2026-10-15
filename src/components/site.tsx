import { Link, useLocation } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { ArrowRight, ArrowUp, BookOpen, ChevronRight, GraduationCap, Mail, Menu, Phone, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { images } from '@/lib/education';
import sarkLogo from "../assets/logo/sark-logo.png";

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'Courses', to: '/courses' },
  { label: 'About Us', to: '/about' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'SARK ITI', to: '/sark-iti' }
] as const;

export function CompanyName() {
  return (
    <span className="company-name">
      <img
        src={sarkLogo}
        alt="SARK Education Logo"
        className="h-[5rem] w-[19rem] object-contain"
      />
      <span className="company-text">
        {/* <strong>
          SARK <span>EDUCATION</span>
        </strong>
        <small>PRIVATE LIMITED</small> */}
      </span>
    </span>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => { setOpen(false); }, [pathname]);
  return <>
    <div className="utility-bar">
      <div className="container utility-inner">
        <span>
          <GraduationCap size={15} /> Education. Skills. A brighter tomorrow.</span>
        <div>
          <Link to="/enquiry">Admission Guidance
            <ChevronRight size={13} /></Link>
          <span className="utility-divider" />
          <Link to="/courses">Find Your Course</Link>
        </div>
      </div>
    </div>
    <header className="site-header">
      <div className="container nav-inner">
        <Link to="/" aria-label="SARK Education home"><CompanyName /></Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map(item => <Link key={item.to} to={item.to}
            className={pathname === item.to ? 'active' : ''}>{item.label}</Link>)}
        </nav>
        <div className="header-actions">
          <Button variant="cta" asChild className="header-enquiry">
            <Link to="/enquiry">Enquire Now <ArrowRight />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="menu-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open} aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>{open && <nav className="mobile-nav container"
        id="mobile-navigation" aria-label="Mobile navigation">
        {navigation.map(item => <Link key={item.to} to={item.to}
          className={pathname === item.to ? 'active' : ''}>
          {item.label}<ChevronRight size={16} /></Link>)}
        <Button variant="cta" asChild>
          <Link to="/enquiry">Enquire Now <ArrowRight />
          </Link>
        </Button>
      </nav>}
    </header>
  </>;
}
export function SiteFooter() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const scroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', scroll);
    return () => window.removeEventListener('scroll', scroll);
  }, []);
  return <>
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link to="/">
            <CompanyName />
          </Link>
          <p>Connecting aspirations with education. Explore academic pathways, practical
            skills and guidance for your next step.</p>
          <span className="footer-tag">
            <BookOpen size={15} /> Learn. Grow. Move forward.</span>
        </div>
        <div>
          <h3>Quick Links</h3>
          {navigation.map(item => <Link key={item.to}
            to={item.to}>{item.label}</Link>)}
          <Link to="/enquiry">Enquiry</Link>
        </div>
        <div>
          <h3>Explore Courses</h3>
          {['ITI & Technical', 'Undergraduate & Postgraduate', 'Computer & Digital Skills',
            'Teacher Education', 'Paramedical & Healthcare'].map(text =>
              <Link key={text} to="/courses">{text}</Link>)}</div>
        <div>
          <h3>Get in Touch</h3>
          <span className="contact-placeholder">
            <Phone size={15} /> Phone: 87093 69850</span>
          <span className="contact-placeholder">
            <Mail size={15} /> Email: sarkeducationpvtltd@gmail.com</span>
          <Button variant="cta" asChild>
            <Link to="/enquiry">Send an Enquiry <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()}
          SARK Education Pvt. Ltd. All rights reserved.
        </span>
      </div>
    </footer>{visible &&
      <Button className="back-top" size="icon" aria-label="Back to top"
        onClick={() => window.scrollTo({
          top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ?
            'instant' : 'smooth'
        })}>
        <ArrowUp />
      </Button>}</>;
}
export function CTA() { return <section className="final-cta"><div className="container cta-inner"><div><span className="eyebrow">TAKE THE NEXT STEP</span><h2>Your Future Starts With<br className="desktop-break" /> the Right Education</h2><p>Discover your options. Ask your questions. Begin your journey.</p></div><div className="button-row"><Button variant="hero" size="lg" asChild><Link to="/courses">Explore Courses <ArrowRight /></Link></Button><Button variant="cta" size="lg" asChild><Link to="/enquiry">Send Enquiry <ArrowRight /></Link></Button></div></div></section>; }
export function PageHero(
  { eyebrow, title, description, image = images.campus }:
    { eyebrow: string; title: string; description: string; image?: string }) {
  return
  <section className="page-hero">
    <img src={image} alt="Illustrative education setting" width={1920} height={1024} />
    <div className="container">
      <div className="breadcrumbs">
        <Link to="/">Home</Link>
        <ChevronRight size={14} />
        <span>{eyebrow}</span>
      </div>
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  </section>;
}
export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) { return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{description && <p>{description}</p>}</div>; }
export function FAQ({ iti = false }: { iti?: boolean }) { const items = iti ? [['Which ITI trades can I enquire about?', 'Explore Electrician, Fitter, Welder, Surveyor, Refrigeration & Air Conditioning, COPA and Diesel Mechanic. Confirm current intake with SARK before applying.'], ['What are the eligibility requirements?', 'Eligibility, duration, fees and any recognition should be confirmed directly with SARK for the specific trade and institution.'], ['Does an ITI course guarantee a job?', 'No. Career outcomes depend on skills, employer requirements and available opportunities. Placement support is not a job guarantee.']] : [['How do I choose the right course?', 'Consider your interests, qualifications and career goals. Browse the directory and send an enquiry to discuss the options you are interested in.'], ['Where can I confirm fees, eligibility and duration?', 'These details vary by course and institution. Request current, official information before making an admission decision.'], ['Are all listed courses open for admission?', 'The directory reflects the supplied official course listing. Current availability and intake must be confirmed with SARK Education.'], ['Is the online enquiry connected to a receiving service?', 'Not yet. This website currently demonstrates the enquiry form only; information is not delivered or saved.']]; return <div className="faq-list">{items.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>; }