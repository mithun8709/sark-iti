import campus from '@/assets/campus-students.jpg';
import technical from '@/assets/technical-training.jpg';
import sarkiti from '@/assets/logo/sark-iti.png';
import computer from '@/assets/computer-lab.jpg'; 
import library from '@/assets/library-learning.jpg';
import sarkbanner from '@/assets/sark-banner.jpeg';
import sarkedu from '@/assets/about.jpg';
import director from '@/assets/director.jpg';
// gallery
import image1 from '@/assets/gallery/img1.jpeg';
import image2 from '@/assets/gallery/img2.jpeg';
import image3 from '@/assets/gallery/img3.jpeg';
import image4 from '@/assets/gallery/img4.jpeg';

export const images = { campus, technical, computer, library,sarkbanner,sarkiti,sarkedu,director };
export const courseGroups = {
  ITI: ['Electrician', 'Fitter', 'Welder', 'Surveyor', 'Refrigeration & Air Conditioning (RAC)'],
  Diploma: ['Polytechnic / Engineering Diploma (All Branches)', 'Pharmacy Diploma (D.Pharm)', 'Hotel Management Diploma', 'Computer Diploma'],
  UG: ['B.A.', 'B.Sc.', 'B.Com.', 'BCA', 'BBA', 'B.Lib.I.Sc.', 'B.Ed.', 'B.Tech.', 'B.Pharm.'],
  PG: ['M.A.', 'M.Sc.', 'M.Com.', 'MCA', 'MBA', 'M.Lib.I.Sc.', 'M.Ed.', 'M.Tech.'],
  Computer: ['PGDCA', 'DCA', 'ADCA', 'Tally with GST', 'Advanced Excel', 'MS Office', 'CCC', 'Web Designing', 'Graphic Designing'],
  'Teacher Education': ['D.El.Ed.', 'B.Ed.', 'M.Ed.'],
  'Paramedical & Healthcare': ['ANM', 'GNM', 'B.Sc. Nursing', 'DMLT', 'CMLT', 'Operation Theatre Technology (OTT)', 'X-Ray Technician'],
  'Career Services': ['Career Counseling', 'Admission Guidance', 'Scholarship Information', 'Education Consultancy', 'Placement Support'],
};
export type Category = keyof typeof courseGroups;
export const courses = Object.entries(courseGroups).flatMap(([category, names]) => names.map(name => ({ name, category: category as Category })));
export const categoryDescriptions: Record<Category, string> = {
  ITI: 'Practical trades. Real-world skills.', Diploma: 'Build a strong technical foundation.', UG: 'Your next chapter in higher education.', PG: 'Take your academic journey further.', Computer: 'Digital skills for a changing world.', 'Teacher Education': 'Inspire the next generation.', 'Paramedical & Healthcare': 'Explore a future in healthcare.', 'Career Services': 'Find clarity in your next step.',
};
export const categoryImage = (category: string) => category === 'ITI' || category === 'Diploma' ? technical : category === 'Computer' ? computer : category === 'UG' || category === 'Career Services' ? campus : library;
export const galleryImages = [
  { image: image1, title: 'Student', category: 'Students' },
  { image: image2, title: 'Student', category: 'Students' },
  { image: image3, title: 'Student', category: 'Students' },
  { image: image4, title: 'Student', category: 'Students' },
  { image: computer, title: 'Learning in the digital age', category: 'Classrooms' },
  { image: library, title: 'Learning together', category: 'Students' },
  { image: technical, title: 'Skills in action', category: 'Technical Training' },
  { image: library, title: 'Ideas and collaboration', category: 'Activities' },
  { image: campus, title: 'The student experience', category: 'Events' },
];
export function pageHead(title: string, description: string) {
  return { meta: [{ title: `${title} | SARK Education Pvt. Ltd.` }, { name: 'description', content: description }, { property: 'og:title', content: `${title} | SARK Education` }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] };
}