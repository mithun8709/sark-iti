import { createFileRoute, Link } from '@tanstack/react-router';
import { useState } from 'react';
import { ArrowRight, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CTA, FAQ, PageHero, SectionHeading } from '@/components/site';
import { categoryDescriptions, categoryImage, courseGroups, courses, pageHead } from '@/lib/education';
export const Route = createFileRoute('/courses')
    ({
        head: () =>
            pageHead('Course Directory', 'Explore ITI, diploma, undergraduate, postgraduate, computer, teacher education and healthcare pathways at SARK Education.'),
        component: Courses
    });
function Courses() {
    const [query, setQuery] = useState('');
    const [category, setCategory] = useState('All Courses');
    const filtered = courses.filter(course => (category === 'All Courses' || course.category === category) && `${course.name} ${course.category}`.toLowerCase().includes(query.toLowerCase().trim()));
    return <>
        <PageHero eyebrow="COURSE DIRECTORY"
            title="Find the course. Shape your future." description="Explore academic, 
    technical and skill-development pathways, all in one place." />
        <section className="section">
            <div className="container">
                <SectionHeading eyebrow="A WORLD OF POSSIBILITIES" title="What would you like to learn?" />
                <div className="course-tools">
                    <label className="search-box">
                        <Search />
                        <input aria-label="Search courses" placeholder="Search courses, skills or a field of study…"
                            value={query} onChange={e => setQuery(e.target.value)} />
                    </label>
                    <div className="filter-row" aria-label="Course categories">
                        {['All Courses', ...Object.keys(courseGroups)].map(item => <Button key={item}
                            variant={category === item ? 'default' : 'outline'} aria-pressed={category === item}
                            onClick={() => setCategory(item)}>{item}
                        </Button>)}
                    </div>
                </div>
                <p className="results-line" aria-live="polite">{filtered.length}
                    {filtered.length === 1 ? 'option' : 'options'} to explore
                    {category !== 'All Courses' ? ` in ${category}` : ''}
                </p>
                <div className="course-grid">{filtered.map(course =>
                    <article className="course-card" key={`${course.category}-${course.name}`}>
                        <img src={categoryImage(course.category)}
                            alt={`Illustrative ${course.category} education`}
                            loading="lazy" width={1536} height={1024} />
                        <div className="course-card-content">
                            <span className="category-badge">{course.category}</span>
                            <h3>{course.name}</h3>
                            <p>{categoryDescriptions[course.category]}</p>
                            <Link to="/enquiry" search={{ course: course.name }}>Enquire Now <ArrowRight />
                            </Link>
                        </div>
                    </article>)}
                </div>{filtered.length === 0 &&
                    <div className="empty-state">
                        <h3>No matching courses</h3>
                        <p>Try another search or select a different category.</p>
                        <Button variant="outline"
                            onClick={() => { setQuery(''); setCategory('All Courses'); }}
                        >Clear Filters</Button>
                    </div>}
            </div>
        </section>
        <section className="section section-soft">
            <div className="container split-layout">
                <SectionHeading eyebrow="MAKE AN INFORMED CHOICE" title="Your interests. Your ambitions. Your next step." description="Think about your qualifications, preferred subjects and career goals. Ask for current course details and official admission requirements before deciding." />
                <div>
                    <h3>Not sure where to begin?</h3>
                    <p>Start with a course category that interests you and share your questions in an enquiry.</p>
                    <Button asChild>
                        <Link to="/enquiry">Ask About Your Options <ArrowRight />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
        <section className="section">
            <div className="container">
                <div className="center-heading">
                    <SectionHeading eyebrow="YOUR QUESTIONS, ANSWERED" title="Course & admission questions" />
                </div>
                <FAQ />
            </div>
        </section>
        <CTA />
    </>;
}
