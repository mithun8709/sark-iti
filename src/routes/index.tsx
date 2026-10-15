import { createFileRoute, Link } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import {
    ArrowRight, BookOpen, BriefcaseBusiness, CheckCircle2, ChevronLeft, ChevronRight,
    Compass, GraduationCap, HandHeart, HeartPulse, Laptop, Lightbulb, MessageCircle, Monitor,
    ShieldCheck, Target, UserRound, Users, Wrench
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CTA, SectionHeading } from '@/components/site';
import {
    categoryDescriptions, categoryImage, courseGroups, galleryImages, images, pageHead,
    type Category
} from '@/lib/education';

export const Route = createFileRoute('/')({
    head: () =>
        pageHead('Education, Skills & Your Next Chapter', 'Discover academic courses, ITI trades, digital skills and admission guidance with SARK Education Pvt. Ltd.'),
    component: Home
});
const slides = [
    {
        eyebrow: 'WELCOME TO SARK EDUCATION PVT. LTD.',
        first: 'The right education.',
        second: 'A brighter future.',
        description: 'Discover academic pathways, practical skills and the guidance to take your next step with confidence.',
        image: images.sarkbanner
    },
    // {
    //     eyebrow: 'WELCOME TO SARK EDUCATION PVT. LTD.',
    //     first: 'The right education.',
    //     second: 'A brighter future.',
    //     description: 'Discover academic pathways, practical skills and the guidance to take your next step with confidence.',
    //     image: images.campus
    // },
    {
        eyebrow: 'SARK ITI & TECHNICAL EDUCATION',
        first: 'Build your skills.',
        second: 'Shape your future.',
        description: 'Explore technical trades and practical learning pathways that turn your interests into valuable skills.',
        image: images.technical
    },
    { eyebrow: 'ACADEMIC PATHWAYS', first: 'New possibilities.', second: 'Your next chapter.', description: 'Explore undergraduate, postgraduate and diploma courses. Find a direction that matches your aspirations.', image: images.library },
    { eyebrow: 'COMPUTER & SKILL DEVELOPMENT', first: 'Learn for today.', second: 'Prepare for tomorrow.', description: 'Discover computer courses and digital skills for an increasingly connected world.', image: images.computer },
    { eyebrow: 'STUDENT & CAREER GUIDANCE', first: 'Your aspirations.', second: 'A clear direction.', description: 'Make informed choices with course information, admission guidance and a focus on your goals.', image: images.campus },
];
const categoryIcons = [Wrench, BookOpen, GraduationCap, GraduationCap, Laptop, Users, HeartPulse, BriefcaseBusiness];
const highlights = [{ icon: BookOpen, title: 'Diverse Course Options', description: 'Find the pathway that fits you' }, { icon: Target, title: 'Career-Focused Learning', description: 'Connect learning with your goals' }, { icon: Users, title: 'Student Guidance', description: 'Clarity at every next step' }, { icon: Lightbulb, title: 'Skill Development', description: 'Build skills. Open possibilities.' }];
const support = [{ icon: Compass, title: 'Career Counseling', text: 'Explore interests and possible career directions.' }, { icon: GraduationCap, title: 'Admission Guidance', text: 'Understand your options and the next steps.' }, { icon: HandHeart, title: 'Scholarship Information', text: 'Ask about opportunities and eligibility.' }, { icon: MessageCircle, title: 'Education Consultancy', text: 'Make informed education decisions.' }, { icon: BriefcaseBusiness, title: 'Placement Support', text: 'Discuss career preparation and opportunities.' }];
function Home() {
    const [slide, setSlide] = useState(0); const [paused, setPaused] = useState(false);
    useEffect(() => { if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return; const timer = window.setInterval(() => setSlide(value => (value + 1) % slides.length), 6500); return () => clearInterval(timer); }, [paused]);
    const current = slides[slide]; if (!current) return null;
    const advance = (direction: number) => { setSlide(value => (value + direction + slides.length) % slides.length); setPaused(true); };
    return <>
        <section className="home-hero" aria-roledescription="carousel" aria-label="Education pathways" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)}>
            <img className="hero-image" src={current.image} width={1920} height={1024} fetchPriority="high" />
            <div className="container hero-content">
                <span className="eyebrow">{current.eyebrow}</span>
                <h1>{current.first}<br />
                    <em>{current.second}</em>
                </h1><p>{current.description}</p>
                <div className="button-row">
                    <Button variant="cta" size="lg" asChild>
                        <Link to="/courses">Explore Courses <ArrowRight />
                        </Link>
                    </Button>
                    <Button variant="hero" size="lg" asChild>
                        <Link to="/enquiry">Enquire Now <ArrowRight />
                        </Link>
                    </Button>
                </div>
            </div>
            <div className="container hero-bottom">
                <div className="hero-pagination"><div className="hero-dots">{slides.map((item, i) => <Button key={item.eyebrow} className={slide === i ? 'selected' : ''} aria-label={`Show slide ${i + 1}`} aria-pressed={slide === i} onClick={() => { setSlide(i); setPaused(true); }} />)}</div>
                </div>
                <div className="hero-arrows">
                    <Button variant="hero" size="icon" aria-label="Previous slide" onClick={() => advance(-1)}><ChevronLeft /></Button><Button variant="hero" size="icon" aria-label="Next slide" onClick={() => advance(1)}><ChevronRight /></Button></div></div>
        </section>
        <section className="highlights"><div className="container highlight-grid">{highlights.map(({ icon: Icon, title, description }) => <div className="highlight-item" key={title}><span className="highlight-icon"><Icon /></span><div className="min-w-0"><h3>{title}</h3><p>{description}</p></div></div>)}</div></section>
        <section className="section"><div className="container split-layout"><div className="split-image"><img src={images.library} alt="Illustrative students learning together in a library" width={1536} height={1024} loading="lazy" /><div className="image-label"><GraduationCap size={30} /><div><strong>Education with a purpose</strong><small>Guiding aspirations. Opening possibilities.</small></div></div></div><div className="split-copy"><span className="eyebrow">GET TO KNOW SARK</span><h2>More than a course.<br />A step towards your future.</h2><p>SARK Education Pvt. Ltd. brings together course information and student guidance across academic, technical and skill-development pathways.</p><p>From your first question to your next education decision, explore options that align with your interests and ambitions.</p><div className="check-grid">{['Academic & technical pathways', 'Student-first guidance', 'Practical skill development', 'Informed admission choices'].map(text => <span key={text}><CheckCircle2 />{text}</span>)}</div><Button asChild><Link to="/about">Discover SARK Education <ArrowRight /></Link></Button></div></div></section>
        <section className="section section-soft"><div className="container"><div className="section-top"><SectionHeading eyebrow="EXPLORE YOUR POSSIBILITIES" title="Find your path. Follow your passion." description="From academic foundations to practical skills, discover a direction that feels right for you." /><Button variant="link" asChild><Link to="/courses">View All Courses <ArrowRight /></Link></Button></div><div className="category-grid">{(Object.keys(courseGroups) as Category[]).map((category, i) => { const Icon = categoryIcons[i] ?? BookOpen; return <article className="category-card" key={category}><span className="category-icon"><Icon /></span><h3>{category === 'UG' ? 'Undergraduate' : category === 'PG' ? 'Postgraduate' : category}</h3><p>{categoryDescriptions[category]}</p><Link to="/courses">Explore Courses <ArrowRight /></Link></article>; })}</div></div></section>
        <section className="section">
            <div className="container">
                <div className="section-top">
                    <SectionHeading eyebrow="DISCOVER YOUR NEXT STEP" title="Courses to explore" description="A selection of pathways from the SARK course directory." /><Button variant="link" asChild><Link to="/courses">Explore the Directory <ArrowRight /></Link></Button></div><div className="course-grid home-featured">{[{ name: 'Electrician', category: 'ITI' }, { name: 'BCA', category: 'UG' }, { name: 'DCA', category: 'Computer' }, { name: 'ANM', category: 'Paramedical & Healthcare' }].map(course => <article className="course-card" key={course.name}><img src={categoryImage(course.category)} alt={`Illustrative ${course.category} learning`} loading="lazy" width={1536} height={1024} /><div className="course-card-content"><span className="category-badge">{course.category}</span><h3>{course.name}</h3><p>Explore your options. Confirm current admission details.</p><Link to="/enquiry" search={{ course: course.name }}>Enquire About This Course <ArrowRight /></Link></div></article>)}</div>
            </div>
        </section>
        <section className="section section-soft">
            <div className="container split-layout">
                <div className="split-copy">
                    <span className="eyebrow">WHY CHOOSE SARK</span>
                    <h2>A clearer path to<br />what comes next.</h2>
                    <div className="feature-list">
                        {[{ icon: BookOpen, title: 'Course Diversity', text: 'Explore academic, vocational and skill-based pathways.' }, { icon: Users, title: 'Student Guidance', text: 'Put your interests and aspirations at the centre.' }, { icon: BriefcaseBusiness, title: 'Career Support', text: 'Connect education choices with possible career directions.' }, { icon: Lightbulb, title: 'Skill Development', text: 'Discover learning that builds practical capabilities.' }, { icon: ShieldCheck, title: 'Admission Information', text: 'Ask for the details you need to make informed decisions.' }].map(({ icon: Icon, title, text }) => <div key={title}><Icon /><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></div><div className="split-image"><img src={images.computer} alt="Illustrative students receiving computer learning guidance" loading="lazy" width={1536} height={1024} /></div></div></section>
        <section className="iti-band"><div className="container iti-inner"><div className="iti-copy"><span className="eyebrow">SARK ITI · SKILLS THAT MATTER</span><h2>Hands-on learning.<br />Real-world possibilities.</h2><p>Discover trades in electrical, mechanical, computer and technical fields. Explore the SARK ITI pathway and find the skill that interests you.</p><Button variant="cta" size="lg" asChild><Link to="/sark-iti">Explore SARK ITI <ArrowRight /></Link></Button></div><img src={images.technical} alt="Illustrative electrical workshop training" loading="lazy" width={1536} height={1024} /></div></section>
        <section className="section"><div className="container"><SectionHeading eyebrow="GUIDANCE FOR YOUR JOURNEY" title="Support for the decisions that matter" description="Explore these areas of student support with SARK. Opportunities and outcomes depend on individual eligibility and availability." /><div className="support-grid">{support.map(({ icon: Icon, title, text }) => <div className="support-item" key={title}><Icon /><h3>{title}</h3><p>{text}</p></div>)}</div></div></section>
        <section className="section section-soft">
            <div className="container">
                <div className="section-top">
                    <SectionHeading eyebrow="LEARNING. COLLABORATION. POSSIBILITIES." title="A glimpse into the world of learning" /><Button variant="link" asChild><Link to="/gallery">Explore Gallery <ArrowRight /></Link></Button></div><div className="gallery-grid">{galleryImages.map(item => <Link className="gallery-item" to="/gallery" key={item.title}><img src={item.image} alt={`Illustrative: ${item.title}`} loading="lazy" width={1536} height={1024} /><div className="gallery-overlay"><span>{item.title}</span><ArrowRight /></div></Link>)}</div>
            </div>
        </section>
        <section className="section">
            <div className="container chairman-section">
                <div className="portrait-placeholder">
                    <UserRound />
                </div>
                <div>
                    <span className="eyebrow">FROM THE CHAIRMAN’S DESK</span>
                    <h2>A message from our leadership</h2>
                    <p>At SARK Education, we believe that education is the foundation of a successful future. Our mission is to provide quality education, career guidance, and skill-based learning that empower students to achieve their academic and professional goals with confidence.</p>
                    
                </div>
            </div>
        </section>
        <CTA />
    </>;
}
