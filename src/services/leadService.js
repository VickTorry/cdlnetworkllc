import { leadSchema } from '../validation/leadSchema.js';
import { normalizeLead } from '../utils/normalize.js';
import { pushToHubSpot } from '../adapters/hubspotAdapter.js';

export async function createLead(raw, ctx = {}) {
  const input = leadSchema.parse(raw);                // throws on bad input
  const normalized = normalizeLead(input, ctx);
  const { id } = await pushToHubSpot(normalized);
  return { id };
}
