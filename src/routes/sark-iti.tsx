import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowRight, CheckCircle2, Cog, Laptop, ShieldCheck, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CTA, FAQ, PageHero, SectionHeading } from '@/components/site';
import { courseGroups, images, pageHead } from '@/lib/education';
export const Route = createFileRoute('/sark-iti')
    ({
        head: () => pageHead('SARK ITI — Build Skills for Your Future',
            'Explore Electrician, Fitter, Welder, Surveyor, RAC, COPA and Diesel Mechanic trade pathways with SARK ITI.'),
        component: SarkITI
    });
function SarkITI() {
    return <><PageHero eyebrow="SARK ITI" title="SARK ITI — Build Skills for Your Future"
        description="Explore technical trades and take the next step towards practical, 
        career-focused skills." image={images.sarkiti} />
        <section className="section">
            <div className="container split-layout">
                <div className="split-copy">
                    <span className="eyebrow">From Skills to Career – Start Your Bright Future!</span>
                    <h2>Discover the value<br />of learning by doing.</h2>
                    <p>SARK ITI Study Centre is a dedicated technical and vocational education centre that helps students prepare for different ITI trades. We provide technical knowledge, exam preparation, and career guidance to help students build a successful future.</p>
                    <p>Our goal is to provide every student with quality technical education, proper guidance, and better career opportunities.</p>
                    <br />
                    <h6>SARK ITI Study Centre – Your Skills, Our Guidance, Your Bright Future!</h6>
                    <hr />
                    <br />
                    <div className="button-row">
                        <Button asChild>
                            <a href="#iti-courses">Explore ITI Courses <ArrowRight />
                            </a>
                        </Button>
                        <Button variant="cta" asChild>
                            <Link to="/enquiry">Enquire Now <ArrowRight />
                            </Link>
                        </Button>
                    </div>
                </div>
                <div className="split-image">
                    <img src={images.sarkiti}
                        alt="Illustrative practical electrical training with an instructor"
                        loading="lazy" className="h-[35rem] w-full object-cover" />
                </div>
            </div>
        </section>
        <section className="section section-soft" id="iti-courses">
            <div className="container">
                <SectionHeading eyebrow="FIND YOUR TECHNICAL PATH" title="Explore ITI trades"
                />
                <div className="course-grid">
                    {courseGroups.ITI.map(name => <article key={name}
                        className="course-card">
                        <img src={name === 'COPA' ? images.computer : images.technical}
                            alt="Illustrative vocational training" loading="lazy" width={1536}
                            height={1024} />
                        <div className="course-card-content">
                            <span className="category-badge">ITI</span>
                            <h3>{name}</h3>
                            <p>Discover practical skills and trade-focused learning.</p>
                            <Link to="/enquiry" search={{ course: name }}>Enquire About This Trade <ArrowRight />
                            </Link>
                        </div>
                    </article>)}
                </div>
            </div>
        </section>
        <section className="section">
            <div className="container split-layout">
                <div className="split-image">
                    <img src={images.computer} alt="Illustrative computer skills training"
                        loading="lazy" width={1536} height={1024} />
                </div>
                <div className="split-copy">
                    <span className="eyebrow">SKILLS FOR REAL-WORLD APPLICATION</span>
                    <h2>Practical learning.<br />A strong foundation.</h2>
                    <div className="feature-list">
                        {[{
                            icon: Wrench, title: 'Trade-specific capabilities',
                            text: 'Explore the tools, methods and skills associated with your chosen trade.'
                        },
                        {
                            icon: ShieldCheck, title: 'Safety awareness',
                            text: 'Understand why safe work practices matter in technical fields.'
                        },
                        {
                            icon: Cog, title: 'Technical problem-solving',
                            text: 'Discover how practical knowledge connects to real-world tasks.'
                        },
                        {
                            icon: Laptop, title: 'Digital skills',
                            text: 'Explore computer operations and related technical applications.'
                        }].map(({ icon: Icon, title, text }) =>
                            <div key={title}>
                                <Icon />
                                <div>
                                    <h3>{title}</h3>
                                    <p>{text}</p>
                                </div>
                            </div>)}
                    </div>
                </div>
            </div>
        </section>
        <section className="section section-soft">
            <div className="container vision-grid">
                <div className="vision-item">
                    <h2>Facilities & training information</h2>
                    <p className="text-justify">
                        SARK ITI Study Centre focuses on technical education, skill
                        development, and career preparation for students enrolled in
                        different ITI trades.
                    </p>
                    <p className="text-justify">
                        Students can get information about classroom learning, practical
                        training, study materials, workshops, and equipment related to
                        their selected trade.
                    </p>
                    <p className="text-justify">
                        Our learning approach aims to help students understand technical
                        concepts, improve their problem-solving abilities, and prepare
                        for ITI examinations.
                    </p>
                    <p className="text-justify">
                        We also guide students with course-related questions, study
                        planning, and career options in technical and vocational fields.
                    </p>
                    <p className="text-justify">
                        Students and parents are welcome to contact SARK ITI Study Centre
                        for details about available facilities, class schedules,
                        admission procedures, and training arrangements.
                    </p>
                </div>

                <div className="vision-item">
                    <h2>Why Choose SARK ITI Study Centre?</h2>

                    <p>
                        We focus on quality technical education, practical skills, and career
                        guidance to help students prepare for a better future. Our goal is to
                        build students' knowledge, confidence, and technical abilities.
                    </p>

                    <div className="check-grid">
                        <span>
                            <CheckCircle2 /> Guidance from experienced and qualified teachers
                        </span>

                        <span>
                            <CheckCircle2 /> Theory and practical-based learning
                        </span>

                        <span>
                            <CheckCircle2 /> Better preparation for examinations
                        </span>

                        <span>
                            <CheckCircle2 /> Regular classes and study materials
                        </span>

                        <span>
                            <CheckCircle2 /> Career Guidance & Counselling
                        </span>

                        <span>
                            <CheckCircle2 /> Special focus on students' future
                        </span>
                    </div>
                </div>
            </div>
        </section>
        {/* <section className="section">
            <div className="container">
                <div className="center-heading">
                    <SectionHeading eyebrow="BEFORE YOU TAKE THE NEXT STEP" title="ITI questions, answered" />
                </div>
                <FAQ iti />
                <div className="contact-block">
                </div>
            </div>
        </section> */}
        
<section className="section">
  <div className="container">
    <div className="center-heading mb-8">
      <SectionHeading
        eyebrow="SARK ITI STUDY CENTRE"
        title="Start Your ITI Journey With Confidence"
      />
      <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
        Find answers to your questions and connect with SARK ITI
        Study Centre for course and admission information.
      </p>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

      {/* Left Column: FAQ */}
      <div className="lg:col-span-6">
        <div className="center-heading">
          <SectionHeading
            eyebrow="BEFORE YOU TAKE THE NEXT STEP"
            title="ITI questions, answered"
          />
        </div>

        <FAQ iti />
      </div>

      {/* Right Column: Google Form */}
      <div className="lg:col-span-6">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-2xl font-bold">
            Interested in ITI Admission?
          </h2>

          <p className="mb-6 text-gray-600">
            Fill out our Google Form to share your details and get
            information about ITI trades, courses, and admission
            procedures at SARK ITI Study Centre.
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScOzm4ZzuFdHXWB5_UK_TXG04WRpaDkF9bypkQhTxH-RYdrLw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Apply for ITI Admission
          </a>
        </div>
      </div>

    </div>
  </div>
</section>

        <CTA />
    </>;
}
