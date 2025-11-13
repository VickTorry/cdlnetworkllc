export const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || '*';
export const HUBSPOT_TOKEN  = must('HUBSPOT_TOKEN');
function must(key){ const v=process.env[key]; if(!v){const e=new Error(`Missing ENV ${key}`); e.code='CONFIG'; throw e;} return v; }
