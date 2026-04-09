export interface TherapistProfile {
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
  longDescription: string;
  qualifications: string[];
  specializations: string[];
  languages: string[];
  badge?: string;
}

const profiles: Record<string, TherapistProfile> = {
  "sarah-johnson": {
    id: "sarah-johnson",
    name: "Sarah Johnson",
    title: "Clinical Psychologist",
    specialty: "Anxiety & Stress",
    experience: "10 years",
    rating: 4.9,
    totalPatients: 1580,
    pricePerSession: 850,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800",
    description:
      "Specializing in anxiety disorders and stress management with cognitive behavioral therapy",
    longDescription:
      "Sarah Johnson is a licensed clinical psychologist with over 10 years of experience helping individuals overcome anxiety and stress-related challenges. She uses evidence-based approaches including CBT, mindfulness techniques, and stress management strategies to help clients achieve lasting change.",
    qualifications: ["PhD in Clinical Psychology", "Licensed Clinical Psychologist", "Certified CBT Practitioner"],
    specializations: [
      "Generalized Anxiety Disorder",
      "Panic Disorder",
      "Social Anxiety",
      "Stress Management",
      "Work-Life Balance",
    ],
    languages: ["English", "Hindi"],
    badge: "98%",
  },
  "david-lee": {
    id: "david-lee",
    name: "Dr. David Lee",
    title: "Relationship Therapist",
    specialty: "Relationship Therapy",
    experience: "8 years",
    rating: 4.8,
    totalPatients: 1245,
    pricePerSession: 750,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800",
    description: "Expert in couples counseling and interpersonal dynamics",
    longDescription:
      "Dr. David Lee specializes in relationship therapy, helping couples and individuals navigate interpersonal challenges. His approach combines emotionally focused therapy with practical communication strategies to strengthen relationships and resolve conflicts.",
    qualifications: ["MD in Psychiatry", "Certified Couples Therapist", "Emotionally Focused Therapy (EFT) Trained"],
    specializations: [
      "Couples Counseling",
      "Premarital Counseling",
      "Communication Skills",
      "Conflict Resolution",
      "Intimacy Issues",
    ],
    languages: ["English", "Mandarin", "Hindi"],
  },
  "anita-sharma": {
    id: "anita-sharma",
    name: "Anita Sharma",
    title: "Clinical Psychologist",
    specialty: "Depression & Trauma",
    experience: "12 years",
    rating: 4.9,
    totalPatients: 1890,
    pricePerSession: 900,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800",
    description: "Compassionate approach to trauma recovery and depression management",
    longDescription:
      "Anita Sharma brings 12 years of experience in treating depression and trauma-related disorders. She provides a safe, compassionate space for healing using trauma-informed approaches, EMDR, and evidence-based depression treatments.",
    qualifications: ["PhD in Clinical Psychology", "EMDR Certified Therapist", "Trauma-Informed Care Specialist"],
    specializations: ["Depression Treatment", "PTSD", "Childhood Trauma", "Grief & Loss", "Emotional Healing"],
    languages: ["English", "Hindi", "Gujarati"],
  },
  "maria-swetha": {
    id: "maria-swetha",
    name: "Ms. Maria Swetha",
    title: "Psychologist",
    specialty: "Adolescents, Educators & Families",
    experience: "7 years",
    rating: 4.9,
    totalPatients: 920,
    pricePerSession: 800,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800",
    description:
      "Counseling for students, parents, and teachers; experienced with adolescents and educators in college settings.",
    longDescription:
      "Maria Swetha is a skilled psychologist with over 7 years of experience. She began her career under the guidance of renowned psychiatrist Dr. Safiya and later transitioned to working with adolescents and educators at a college. Passionate about supporting teenagers and adults, she provides counseling to students, parents, and teachers alike. Maria holds a Master's degree in Psychology from Bangalore University and completed her counseling specialization at Montfort Institute of Advanced Studies. During her training, she accumulated over 250 hours of client sessions, building strong connections with those she worked with. She is an active participant in the Inward Change Conference (ICC), which focuses on developing leadership skills for corporate professionals. Maria has facilitated workshops on personal and professional growth at events in Maharashtra and Goa, organized by Sukrut. Currently, she advocates for mental health at HDFC School, raising awareness among parents, teachers, and adolescents. In addition to her work at the school, Maria provides therapy to clients from various organizations and offers remote sessions for overseas clients. Outside of her professional life, Maria is an avid mountaineer, fitness enthusiast, and baking lover, reflecting her diverse interests and dedication to a well-rounded lifestyle.",
    qualifications: [
      "M.A. Psychology — Bangalore University",
      "Counseling specialization — Montfort Institute of Advanced Studies",
      "250+ hours of supervised client sessions during training",
    ],
    specializations: [
      "Adolescents & young adults",
      "Students, parents & teachers",
      "College & school settings",
      "Workshops on personal & professional growth",
      "Remote / overseas clients",
    ],
    languages: ["English", "Hindi"],
  },
};

export function getTherapistProfile(id: string): TherapistProfile | null {
  return profiles[id] ?? null;
}

export function listTherapistProfileIds(): string[] {
  return Object.keys(profiles);
}
