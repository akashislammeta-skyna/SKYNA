import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactInput {
    service_interest: string;
    name: string;
    email: string;
    message: string;
    phone: string;
}
export type Timestamp = bigint;
export type ContactId = bigint;
export interface ContactSubmission {
    id: ContactId;
    service_interest: string;
    name: string;
    email: string;
    message: string;
    phone: string;
    submitted_at: Timestamp;
}
export interface backendInterface {
    listContactSubmissions(): Promise<Array<ContactSubmission>>;
    submitContactForm(input: ContactInput): Promise<ContactSubmission>;
}
