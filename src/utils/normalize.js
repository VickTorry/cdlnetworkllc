// src/utils/normalize.js
export function normalizeLead(p, ctx = {}) {
  const lead = { ...p };

  // Full name → firstname / lastname
  const [firstname, ...rest] = (lead.full_name || '').trim().split(/\s+/);
  lead.firstname = firstname || '-';
  lead.lastname = rest.join(' ') || '-';

  // Normalize phone (simple example; you can enhance later)
  lead.phone = lead.phone?.trim().replace(/[^\d+]/g, '') || '';

  // State → uppercase (e.g. "il" -> "IL")
  if (lead.state) {
    lead.state = lead.state.toUpperCase();
  }

  // CDL class normalization
  if (lead.cdl_class) {
    lead.cdl_class = lead.cdl_class.toUpperCase();
  }

  // Years of experience → number
  lead.years_exp = Number(lead.years_exp) || 0;

  // Attach context data if needed (IP, UTM, timestamp, etc.)
  lead.ip = ctx.ip || '';
  lead.timestamp = new Date().toISOString();

  return lead;
}
