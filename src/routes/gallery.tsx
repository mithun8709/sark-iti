import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Expand } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { CTA, PageHero, SectionHeading } from '@/components/site';
import { galleryImages, images, pageHead } from '@/lib/education';
export const Route = createFileRoute('/gallery')({head: () => pageHead('Gallery', 'Explore illustrative education, classroom, student and technical training imagery for SARK Education.'),component: Gallery});


function Gallery() {
    const [category, setCategory] = useState('All');
    const [selected, setSelected] = useState<number | null>(null);
    const filtered = galleryImages.filter(item => category === 'All' || item.category === category);
    const current = selected === null ? undefined : filtered[selected];
    const move = (direction: number) => setSelected(value => value === null ? 0 : (value + direction + filtered.length) % filtered.length);
    return <>
        <PageHero eyebrow="GALLERY"
            title="The many moments of learning."
            description="Explore education, collaboration and practical skills through illustrative images."
            image={images.library} />
        <section className="section">
            <div className="container">                
                <SectionHeading
                eyebrow="SARK ITI STUDY CENTRE GALLERY"
                title="A Glimpse of Learning & Skill Development"
                description="Explore moments of technical learning, practical training, and skill development at SARK ITI Study Centre. Discover our journey towards building knowledge, confidence, and career-ready skills."
                />
                <div className="filter-row mb-8" aria-label="Gallery categories">
                    {['All', 'Campus', 'Classrooms', 'Students', 'Activities',
                        'Events', 'Technical Training'].map(item =>
                            <Button key={item} variant={category === item ? 'default' : 'outline'}
                                aria-pressed={category === item} onClick={() => { setCategory(item); setSelected(null); }}>{item}</Button>)}
                </div>
                <div className="gallery-grid">{filtered.map((item, i) =>
                    <Button key={item.title} className="gallery-item"
                        aria-label={`View ${item.title}`}
                        onClick={() => setSelected(i)}><img src={item.image}
                            alt={`Illustrative: ${item.title}`} loading="lazy"
                            width={1536} height={1024} /><div className="gallery-overlay">
                            <Expand />
                            <span>{item.title}</span>
                        </div>
                    </Button>)}</div>
                
            </div>
        </section>
        <Dialog open={selected !== null}
            onOpenChange={open => { if (!open) setSelected(null); }}>
            <DialogContent className="lightbox-content max-w-4xl">
                <DialogTitle>{current?.title ?? 'Education gallery'}</DialogTitle>
                {current &&
                    <img className="lightbox-image" src={current.image}
                        alt={`Illustrative: ${current.title}`} width={1536} height={1024} />}
                <div className="lightbox-footer"><Button variant="outline" size="icon"
                    aria-label="Previous image" onClick={() => move(-1)}><ChevronLeft />
                </Button>
                    <span>{selected === null ? 0 : selected + 1} / {filtered.length} ·
                        {current?.category}</span>
                    <Button variant="outline" size="icon"
                        aria-label="Next image" onClick={() => move(1)}><ChevronRight />
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
        <CTA />
    </>;
}
