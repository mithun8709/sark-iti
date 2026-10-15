import { createFileRoute } from '@tanstack/react-router';
import { BookOpen, CheckCircle2, Compass, GraduationCap, HeartHandshake, Target, UserRound } from 'lucide-react';
import { CTA, PageHero, SectionHeading } from '@/components/site';
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { images, pageHead } from '@/lib/education';
export const Route = createFileRoute('/about')
    ({ head: () => pageHead('About Us', 'Get to know SARK Education Pvt. Ltd. and its focus on academic pathways, skill development and student guidance.'), component: About });
function About() {
    return <>
        <PageHero eyebrow="ABOUT SARK EDUCATION" title="Connecting aspirations with education."
            description="Academic pathways. Practical skills. Informed choices for the journey ahead."
            image={images.sarkiti} />
        <section className="section">
            <div className="container split-layout">
                <div className="split-image">
                    <img src={images.sarkedu} width={1920} height={1024} loading="lazy" />
                </div>
                <div className="split-copy">
                    <span className="eyebrow">SARK EDUCATION PVT. LTD.</span>
                    <h2>A starting point for<br />your next chapter.</h2>
                    <p>SARK Education Pvt. Ltd. is a leading education and career guidance organization dedicated to empowering students with quality education, skill development, and professional career support. Our mission is to bridge the gap between education and employment by providing affordable, practical, and industry-oriented learning opportunities.</p>
                    <p>We offer admission guidance for various professional and academic programs, including ITI, Diploma, Undergraduate (UG), Postgraduate (PG), Skill Development Courses, and Career Counseling. Our experienced team is committed to helping students choose the right career path and achieve their educational goals.</p>
                    <p>At SARK Education Pvt. Ltd., we believe that every student deserves access to quality education and the right guidance. With a student-first approach, transparent admission support, and a focus on practical learning, we strive to build successful careers and a brighter future.</p>
                </div>
            </div>
        </section>
        <section className="section section-soft">
            <div className="container vision-grid">
                <div className="vision-item"><Compass />
                    <span className="eyebrow">OUR DIRECTION</span>
                    <h2>Vision</h2>
                    <p>To become one of India's most trusted education and career guidance organizations by delivering quality learning opportunities and empowering the next generation.</p>

                </div>
                <div className="vision-item"><Target />
                    <span className="eyebrow">OUR PURPOSE</span>
                    <h2>Mission</h2>
                    <p>Provide quality educational guidance and admission support.</p>
                    <p>Promote skill-based and career-oriented education.</p>
                    <p>Help students achieve academic and professional success.</p>
                    <p>Build a strong foundation for lifelong learning.</p>
                </div>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">

                    {/* Image: 4 Columns */}
                    <div className="md:col-span-4">
                        <div className="portrait-placeholder">
                            <img
                                src={images.director}
                                alt="Chairman of SARK Education Pvt. Ltd."
                                width={1920}
                                height={1024}
                                loading="lazy"
                                className="h-auto w-full rounded-xl object-cover"
                            />
                        </div>
                    </div>

                    {/* Content: 8 Columns */}
                    <div className="md:col-span-8">
                        <span className="eyebrow">FROM THE CHAIRMAN'S DESK</span>
                        <h2>Dear Students, Parents, and Well-Wishers</h2>
                        <p>Welcome to SARK Education Pvt. Ltd.</p>
                        <p>
                            At SARK Education, we believe that education is the foundation
                            of a successful future. Our mission is to provide quality
                            education, career guidance, and skill-based learning that
                            empower students to achieve their academic and professional
                            goals with confidence.
                        </p>
                        <p>
                            In today's competitive world, knowledge alone is not enough.
                            Success requires practical skills, the right guidance, and a
                            commitment to continuous learning. We are dedicated to creating
                            an environment where students can develop their potential,
                            strengthen their abilities, and prepare themselves for the
                            challenges of the future.
                        </p>
                        <p>
                            Our team is committed to maintaining high standards of
                            education and student support. Through innovative teaching
                            methods, career-focused programs, and personalized guidance,
                            we strive to help every student build a strong foundation
                            for lifelong success.
                        </p>
                        <p>
                            Thank you for placing your trust in SARK Education Pvt. Ltd.
                            We look forward to being a part of your journey toward success.
                        </p>
                    </div>

                </div>
            </div>
        </section>

        <section className="section section-soft">
            <div className="container">
                <SectionHeading eyebrow="OUR EDUCATIONAL FOCUS" title="Different pathways. Shared possibilities." />
                <div className="support-grid">
                    {[{
                        icon: GraduationCap,
                        title: 'Academic Pathways',
                        text: 'Undergraduate, postgraduate and diploma course information.'
                    },
                    {
                        icon: BookOpen,
                        title: 'Technical Education',
                        text: 'ITI trades and practical technical learning options.'
                    },
                    { icon: Target, title: 'Digital Skills', text: 'Computer and skill-development course information.' },
                    { icon: HeartHandshake, title: 'Student Support', text: 'Admission questions and education guidance.' },
                    { icon: Compass, title: 'Career Direction', text: 'Explore interests and possible next steps.' }].map(({ icon: Icon, title, text }) =>
                        <div className="support-item" key={title}><Icon />
                            <h3>{title}</h3>
                            <p>{text}</p>
                        </div>)}
                </div>
            </div>
        </section>
        <section className="section">
            <div className="container split-layout">
                <div className="split-copy">
                    <span className="eyebrow">WHY CHOOSE SARK</span>
                    <h2>Clarity for the choices<br />that shape your future.</h2>
                    <p>Explore diverse course categories, understand the questions to ask, and connect your interests with possible academic and skill-building pathways.</p>
                    <div className="check-grid">
                        {['Course diversity', 'Student guidance', 'Admission information', 'Skill development', 'Career support'].map(text => <span key={text}>
                            <CheckCircle2 />{text}</span>)}
                    </div>
                    <div className="">
                        <h3 className="mb-2 text-2xl font-bold text-gray-900">
                            Contact SARK Education
                        </h3>
                        <p className="mb-6 text-sm leading-6 text-gray-600">
                            Have questions about our courses or admissions? Contact us for
                            more information.
                        </p>
                        <div className="space-y-4">
                            {/* Phone */}
                            <a
                                href="tel:+918709369850"
                                className="group flex items-start gap-4 rounded-xl bg-gray-50 p-4 transition-colors hover:bg-blue-50"
                            >
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                                    <Phone size={21} />
                                </span>

                                <span className="min-w-0 flex-1">
                                    <span className="block text-sm text-gray-500">Call Us</span>
                                    <span className="mt-1 block break-words font-semibold text-gray-900">
                                        87093 69850
                                    </span>
                                </span>
                                <ArrowUpRight className="shrink-0 text-gray-400 transition-colors group-hover:text-blue-600" size={20} />
                            </a>

                            {/* Email */}
                            <a
                                href="mailto:sarkeducationpvtltd@gmail.com"
                                className="group flex items-start gap-4 rounded-xl bg-gray-50 p-4 transition-colors hover:bg-blue-50"
                            >
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                                    <Mail size={21} />
                                </span>

                                <span className="min-w-0 flex-1">
                                    <span className="block text-sm text-gray-500">Email Us</span>
                                    <span className="mt-1 block break-all font-semibold text-gray-900">
                                        sarkeducationpvtltd@gmail.com
                                    </span>
                                </span>

                                <ArrowUpRight className="shrink-0 text-gray-400 transition-colors group-hover:text-blue-600" size={20} />
                            </a>

                            {/* Address */}
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=2nd+floor%2C+Meena+complex%2C+Rewa+Rd%2C+Yadav+Nagar%2C+Bhagwanpur%2C+Muzaffarpur%2C+Bihar+843113"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-start gap-4 rounded-xl bg-gray-50 p-4 transition-colors hover:bg-blue-50"
                            >
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                                    <MapPin size={21} />
                                </span>

                                <span className="min-w-0 flex-1">
                                    <span className="block text-sm text-gray-500">Visit Us</span>
                                    <span className="mt-1 block text-sm font-medium leading-6 text-gray-900">
                                        2nd Floor, Meena Complex, Rewa Road, Near HP Petrol Pump,
                                        Yadav Nagar, Bhagwanpur, Muzaffarpur, Bihar – 843113
                                    </span>
                                    <span className="mt-2 inline-block text-sm font-semibold text-blue-700">
                                        View on Google Maps →
                                    </span>
                                </span>

                                <ArrowUpRight className="shrink-0 text-gray-400 transition-colors group-hover:text-blue-600" size={20} />
                            </a>
                        </div>
                    </div>

                </div>
                <div className="split-image">
                    <img src={images.computer} alt="Illustrative computer education and student guidance" width={1536} height={1024} loading="lazy" />
                </div>
            </div>
        </section>
        <CTA />
    </>;
}
