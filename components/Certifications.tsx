// components/Certifications.tsx
import type { Metadata } from 'next';
import { Spotlight } from '@/components/ui/spotlight'

interface Certification {
  id: number;
  courseName: string;
  issuedBy: string;
  completionDate: string;
  category: string;
}

// Sample data (replace with your actual certifications or fetch from an API)
const certifications: Certification[] = [
  { id: 1, courseName: 'JavaScript Basics', issuedBy: 'Coursera', completionDate: '2023-01-15', category: 'Programming' },
  { id: 2, courseName: 'Full Stack Development Bootcamp', issuedBy: 'Udemy, Angela Yu', completionDate: '2023-06-20', category: 'Programming' },
  { id: 3, courseName: 'UI Design Fundamentals', issuedBy: 'IBM', completionDate: '2023-03-10', category: 'UI/UX' },
  { id: 4, courseName: 'Figma for Designers', issuedBy: 'Skillshare', completionDate: '2023-08-05', category: 'UI/UX' },
  // { id: 5, courseName: 'Business Strategy 101', issuedBy: 'Harvard Online', completionDate: '2023-04-25', category: 'Strategy' },
  { id: 6, courseName: 'Strategic Thinking', issuedBy: 'IBM', completionDate: '2023-09-12', category: 'Strategy' },
  { id: 7, courseName: 'Customer Service Excellence', issuedBy: 'Fiverr Learning', completionDate: '2023-02-18', category: 'Customer Service' },
  // { id: 8, courseName: 'Advanced Customer Support', issuedBy: 'Zendesk', completionDate: '2023-07-30', category: 'Customer Service' },
  { id: 9, courseName: 'React Development', issuedBy: 'freeCodeCamp', completionDate: '2023-11-10', category: 'Programming' },
  // { id: 10, courseName: 'UX Research Methods', issuedBy: 'Nielsen Norman Group', completionDate: '2023-12-01', category: 'UI/UX' },
];

export default function Certifications() {
  // Group certifications by category
  const groupedCertifications = certifications.reduce((acc: { [key: string]: Certification[] }, cert) => {
    acc[cert.category] = acc[cert.category] || [];
    acc[cert.category].push(cert);
    return acc;
  }, {});

  return (
    <div className="flex flex-col space-y-2 gap-2">
      {Object.entries(groupedCertifications).map(([category, certs]) => (
        <div key={category} className="rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30">
          <Spotlight
            className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
            size={64}
          />

          <ul className="relative flex flex-col gap-2 h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950 space-y-2">
            <h4>{category}</h4>
            {certs.map((cert) => (
              <li key={cert.id} className="flex flex-col gap-1 border-b border-zinc-300/20 pb-2 last:border-b-0 last:pb-0">
                <p>{cert.courseName}</p>
                <small>
                  Issued by: {cert.issuedBy}
                </small>
                <small className='hidden'>
                  Completed: {new Date(cert.completionDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </small>
              </li>
            ))}
          </ul>
        </div>
      ))}
      {Object.keys(groupedCertifications).length === 0 && (
        <p>No certifications found.</p>
      )}
    </div>
  );
}