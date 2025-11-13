import { HUBSPOT_TOKEN } from '../config.js';

export async function pushToHubSpot(p) {
  const payload = {
    properties: {
      firstname: p.full_name.split(' ')[0],
      lastname:  p.full_name.split(' ').slice(1).join(' ') || '-',
      phone:     p.phone,
      email:     p.email,
      cdl_class: p.cdl_class,
      state:     p.state,
      years_exp: p.years_exp,
    }
  };

  const r = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
    method: 'POST',
    headers: { Authorization: `Bearer ${HUBSPOT_TOKEN}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!r.ok) {
    const text = await r.text();
    const err = new Error('HubSpot failed'); err.code = 'UPSTREAM'; err.details = text;
    throw err;
  }
  const data = await r.json();
  return { id: data.id };
}
