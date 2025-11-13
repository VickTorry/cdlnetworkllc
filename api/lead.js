// api/lead.js
import { withCors } from '../src/utils/cors.js';
import { createLead } from '../src/services/leadService.js';

export default withCors(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST' });
  }

  try {
    const ip =
      req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
      req.socket?.remoteAddress ||
      null;

    const result = await createLead(req.body, { ip });

    return res.status(200).json({
      status: 'ok',
      hubspot_id: result.id,
    });
  } catch (e) {
    const code =
      e.code === 'VALIDATION'
        ? 400
        : e.code === 'UPSTREAM'
        ? 502
        : 500;

    return res.status(code).json({
      error: e.message || 'Unexpected error',
      details: e.details || null,
    });
  }
});
