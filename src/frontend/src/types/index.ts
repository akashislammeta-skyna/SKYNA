export type ContactId = bigint;
export type Timestamp = bigint;

export interface ContactSubmission {
  id: ContactId;
  name: string;
  email: string;
  phone: string;
  message: string;
  service_interest: string;
  submitted_at: Timestamp;
}

export interface ContactInput {
  name: string;
  email: string;
  phone: string;
  message: string;
  service_interest: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  slug: string;
}
