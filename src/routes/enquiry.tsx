import { createFileRoute } from '@tanstack/react-router';
import { useState, type FormEvent } from 'react';
import { ArrowRight, BookOpen, CheckCircle2, MessageCircle, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageHero, SectionHeading } from '@/components/site';
import { validateEnquiry } from '@/lib/enquiry-validation';
import { courseGroups, courses, images, pageHead } from '@/lib/education';
export const Route = createFileRoute('/enquiry')({ validateSearch: (search: Record<string, unknown>): { course?: string } => typeof search['course'] === 'string' ? { course: search['course'] } : {}, head: () => pageHead('Student Enquiry', 'Ask about courses, admission guidance and your next education step with SARK Education. Demonstration enquiry form.'), component: Enquiry });
const uniqueNames = [...new Set(courses.map(course => course.name))];

function Enquiry() {
    const search = Route.useSearch();
    const initialCourse = uniqueNames.includes(search.course ?? '') ? (search.course ?? '') : '';
    const [course, setCourse] = useState(initialCourse);
    const [category, setCategory] = useState(courses.find(item => item.name === initialCourse)?.category ?? '');
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [submitted, setSubmitted] = useState(false);
    function submit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget;
        const data = new FormData(form);
        const values = Object.fromEntries([...data.entries()].map(([key, value]) => [key, String(value)]));
        const result = validateEnquiry(values, data.get('consent') === 'on'); setErrors(result); setSubmitted(false);
        if (Object.keys(result).length) {
            const first = Object.keys(result)[0];
            if (first) (form.elements.namedItem(first) as HTMLElement | null)?.focus();
            return;
        }
        setSubmitted(true);
    }
    const clear = () => { setCourse(''); setCategory(''); setErrors({}); setSubmitted(false); };
    const inputField = (label: string, name: string, type = 'text', required = false) =>
        <div className="form-field">
            <label htmlFor={name}>{label}{required ? ' *' : ''}</label>
            <input id={name} name={name} type={type} required={required}
                autoComplete={name === 'name' ? 'name' : name === 'mobile' ?
                    'tel' : name === 'email' ? 'email' : undefined}
                aria-invalid={Boolean(errors[name])}
                aria-describedby={errors[name] ? `${name}-error` : undefined} />
            {errors[name] && <span className="error" id={`${name}-error`}>
                {errors[name]}</span>}
        </div>;
    return <>
        <PageHero eyebrow="STUDENT ENQUIRY" title="Let’s talk about your next step."
            description="Share your interests and education goals. Start with the questions 
    that matter to you." image={images.library} />
        <section className="section">
            <div className="container enquiry-layout">
                <div>
                    <SectionHeading eyebrow="YOUR JOURNEY STARTS WITH A QUESTION" title="Student enquiry form" />
                    <p className="demo-note">This form is a demonstration only. No enquiry information is
                        delivered or saved. Fields marked * are required.</p>
                    <form noValidate onSubmit={submit} onReset={clear}>
                        <div className="form-grid">{inputField('Student Name', 'name', 'text', true)}
                            {inputField('Mobile Number', 'mobile', 'tel', true)}
                            {inputField('Email', 'email', 'email')}
                            {inputField('Date of Birth', 'dob', 'date')}
                            <div className="form-field">
                                <label htmlFor="gender">Gender</label>
                                <select id="gender" name="gender" defaultValue="">
                                    <option value="">Select gender</option>
                                    <option>Female</option>
                                    <option>Male</option>
                                    <option>Other</option>
                                    <option>Prefer not to say</option>
                                </select>
                            </div>
                            <div className="form-field">
                                <label htmlFor="qualification">Highest Qualification</label>
                                <select id="qualification" name="qualification" defaultValue="">
                                    <option value="">Select qualification</option>
                                    {['Class 8', 'Class 10', 'Class 12', 'Diploma', 'Undergraduate',
                                        'Postgraduate', 'Other'].map(value =>
                                            <option key={value}>{value}</option>)}
                                </select>
                            </div>
                            <div className="form-field">
                                <label htmlFor="course">Interested Course *</label>
                                <select id="course" name="course" required value={course}
                                    onChange={event => {
                                        setCourse(event.target.value);
                                        const found = courses.find(item => item.name === event.target.value);
                                        if (found) setCategory(found.category);
                                    }}
                                    aria-invalid={Boolean(errors['course'])}
                                    aria-describedby={errors['course'] ?
                                        'course-error' : undefined}>
                                    <option value="">Select a course or service</option>
                                    {uniqueNames.map(value =>
                                        <option key={value}>{value}</option>)}
                                </select>{errors['course'] &&
                                    <span className="error" id="course-error">{errors['course']}
                                    </span>}
                            </div>
                            <div className="form-field">
                                <label htmlFor="category">Course Category</label>
                                <select id="category" name="category" value={category}
                                    onChange={event => setCategory(event.target.value)}>
                                    <option value="">Select category</option>
                                    {Object.keys(courseGroups).map(value =>
                                        <option key={value}>{value}</option>)}
                                </select>
                            </div>{inputField('City', 'city')}{inputField('State', 'state')}
                            <div className="form-field full-field">
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message"
                                    placeholder="Tell us about your interests or questions…" />
                            </div>
                        </div>
                        <label className="consent-label">
                            <input name="consent" type="checkbox" required
                                aria-invalid={Boolean(errors['consent'])}
                                aria-describedby={errors['consent'] ? 'consent-error' : undefined} />
                            <span>I consent to sharing my details for enquiry purposes and understand that this
                                demonstration does not send or save my information. *</span>
                        </label>{errors['consent'] &&
                            <p className="consent-error" id="consent-error">{errors['consent']}</p>}
                        <div className="button-row">
                            <Button variant="cta" size="lg" type="submit">Submit Enquiry <ArrowRight />
                            </Button>
                            <Button variant="outline" size="lg" type="reset">
                                <RotateCcw />Reset Form</Button>
                        </div>{submitted &&
                            <div className="form-status" role="status">
                                <strong>Form validated — demonstration only.</strong>
                                <br />Your enquiry has not been delivered or saved.
                                This form is not connected to an enquiry receiving service.
                            </div>}
                    </form>
                </div>
                <aside>
                    <img src={images.library} alt="Illustrative students discussing education choices"
                        width={1536} height={1024} loading="lazy" />
                    <h2>A little clarity.<br />
                        A world of possibilities.</h2>
                    <p>Before choosing a course, consider what you enjoy,
                        your current qualifications and where you would like to go.</p>
                    <div className="feature-list">
                        {[{
                            icon: BookOpen, title: 'Explore your options',
                            text: 'Browse academic, technical and skill-based pathways.'
                        },
                        {
                            icon: MessageCircle, title: 'Ask the right questions',
                            text: 'Confirm eligibility, fees, duration and institution details.'
                        },
                        {
                            icon: CheckCircle2, title: 'Make an informed choice',
                            text: 'Request official information before admission.'
                        }].map(({
                            icon: Icon, title, text }) =>
                            <div key={title}><Icon />
                                <div>
                                    <h3>{title}</h3>
                                    <p>{text}</p>
                                </div></div>)}
                    </div>
                    <div className="contact-block"></div>
                </aside>
            </div>
        </section>
    </>;
}
