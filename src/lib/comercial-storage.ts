/**
 * Commercial storage — localStorage helpers
 * Frontend-only persistence for leads and sellers.
 */

import type { Lead, Seller } from "@/types/comercial";

const LEADS_KEY = "royal_comercial_leads";
const SELLERS_KEY = "royal_comercial_sellers";

function safeParse<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function safeSet(key: string, value: unknown): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // ignore
  }
}

export function getLeads(): Lead[] {
  return safeParse<Lead[]>(LEADS_KEY, []);
}

export function setLeads(leads: Lead[]): void {
  safeSet(LEADS_KEY, leads);
}

export function getSellers(): Seller[] {
  return safeParse<Seller[]>(SELLERS_KEY, []);
}

export function setSellers(sellers: Seller[]): void {
  safeSet(SELLERS_KEY, sellers);
}

export function addLead(lead: Omit<Lead, "id" | "createdAt" | "updatedAt">): Lead {
  const leads = getLeads();
  const now = new Date().toISOString();
  const newLead: Lead = {
    ...lead,
    id: crypto.randomUUID(),
    createdAt: now,
    updatedAt: now,
  };
  leads.push(newLead);
  setLeads(leads);
  return newLead;
}

export function updateLead(id: string, updates: Partial<Lead>): Lead | null {
  const leads = getLeads();
  const idx = leads.findIndex((l) => l.id === id);
  if (idx < 0) return null;
  const updated: Lead = {
    ...leads[idx],
    ...updates,
    id: leads[idx].id,
    createdAt: leads[idx].createdAt,
    updatedAt: new Date().toISOString(),
  };
  leads[idx] = updated;
  setLeads(leads);
  return updated;
}

export function deleteLead(id: string): boolean {
  const leads = getLeads().filter((l) => l.id !== id);
  if (leads.length === getLeads().length) return false;
  setLeads(leads);
  return true;
}

export function addSeller(seller: Omit<Seller, "id" | "createdAt" | "updatedAt">): Seller {
  const sellers = getSellers();
  const now = new Date().toISOString();
  const newSeller: Seller = {
    ...seller,
    id: crypto.randomUUID(),
    createdAt: now,
    updatedAt: now,
  };
  sellers.push(newSeller);
  setSellers(sellers);
  return newSeller;
}

export function updateSeller(id: string, updates: Partial<Seller>): Seller | null {
  const sellers = getSellers();
  const idx = sellers.findIndex((s) => s.id === id);
  if (idx < 0) return null;
  const updated: Seller = {
    ...sellers[idx],
    ...updates,
    id: sellers[idx].id,
    createdAt: sellers[idx].createdAt,
    updatedAt: new Date().toISOString(),
  };
  sellers[idx] = updated;
  setSellers(sellers);
  return updated;
}

export function deleteSeller(id: string): boolean {
  const sellers = getSellers().filter((s) => s.id !== id);
  if (sellers.length === getSellers().length) return false;
  setSellers(sellers);
  return true;
}
