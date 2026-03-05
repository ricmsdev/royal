/**
 * Commercial area types — Royal Yacht
 * Frontend-only, no backend.
 */

export type LeadType =
  | "college"
  | "party"
  | "promoter"
  | "another_house"
  | "has_house";

export type CommercialAssignee =
  | "ricardo"
  | "victor"
  | "tio_fernandes"
  | "third_person";

export type LeadStatus = "open" | "in_progress" | "closed";

export interface Lead {
  id: string;
  customerName: string;
  contact?: string;
  type: LeadType;
  assignee: CommercialAssignee;
  assigneeOther?: string; // when assignee is third_person
  status: LeadStatus;
  hasHouse: boolean;
  notes?: string;
  createdAt: string; // ISO
  updatedAt: string;
}

export interface Seller {
  id: string;
  name: string;
  contact?: string;
  assignee: CommercialAssignee;
  assigneeOther?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export const LEAD_TYPES: { value: LeadType; label: string }[] = [
  { value: "college", label: "Faculdade" },
  { value: "party", label: "Festa" },
  { value: "promoter", label: "Promoter" },
  { value: "another_house", label: "Outra casa" },
  { value: "has_house", label: "Tem casa" },
];

export const ASSIGNEES: { value: CommercialAssignee; label: string }[] = [
  { value: "ricardo", label: "Ricardo" },
  { value: "victor", label: "Victor" },
  { value: "tio_fernandes", label: "Tio Fernandes" },
  { value: "third_person", label: "Terceiro" },
];

export const LEAD_STATUSES: { value: LeadStatus; label: string }[] = [
  { value: "open", label: "Aberto" },
  { value: "in_progress", label: "Em andamento" },
  { value: "closed", label: "Fechado" },
];
