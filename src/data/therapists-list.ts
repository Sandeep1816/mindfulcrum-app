export interface BookingTherapist {
  id: string;
  name: string;
  title: string;
  specialty: string;
  experience: string;
  rating: number;
  totalPatients: number;
  pricePerSession: number;
  image: string;
  description: string;
  badge?: string;
}

/** Shared list for therapy booking page and home “Meet Our Experts”. */
export const BOOKING_THERAPISTS: BookingTherapist[] = [
  {
    id: "sarah-johnson",
    name: "Dr. Sarah Johnson",
    title: "Clinical Psychologist",
    specialty: "Anxiety & Stress",
    experience: "10 years",
    rating: 4.9,
    totalPatients: 1580,
    pricePerSession: 850,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400",
    description: "Specializes in cognitive behavioral therapy for anxiety disorders.",
    badge: "98%",
  },
  {
    id: "david-lee",
    name: "Dr. David Lee",
    title: "Relationship Therapist",
    specialty: "Relationship Therapy",
    experience: "8 years",
    rating: 4.8,
    totalPatients: 1245,
    pricePerSession: 750,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400",
    description: "Expert in couples counseling and interpersonal dynamics.",
  },
  {
    id: "anita-sharma",
    name: "Dr. Anita Sharma",
    title: "Clinical Psychologist",
    specialty: "Depression & Trauma",
    experience: "12 years",
    rating: 4.9,
    totalPatients: 1890,
    pricePerSession: 900,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400",
    description: "Compassionate approach to trauma recovery and depression management.",
  },
  {
    id: "maria-swetha",
    name: "Ms. Maria Swetha",
    title: "Psychologist",
    specialty: "Adolescents, Educators & Families",
    experience: "7 years",
    rating: 4.9,
    totalPatients: 920,
    pricePerSession: 800,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
    description:
      "Counseling for students, parents, and teachers; workshops on growth; advocacy at HDFC School and remote sessions for clients worldwide.",
  },
];

export function getTherapistById(id: string): BookingTherapist | undefined {
  return BOOKING_THERAPISTS.find((t) => t.id === id);
}
