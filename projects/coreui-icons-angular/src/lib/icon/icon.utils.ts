export function toCamelCase(value: string) {
  return value.replace(/([-_][a-z0-9])/ig, ($1: string) => {
    return $1.toUpperCase().replace('-', '');
  });
}

export function transformName(value: string) {
  return value && value.includes('-') ? toCamelCase(value) : value;
}

const ESCAPE_HTML_MAP: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;'
};

export function escapeHtml(value: string): string {
  return String(value).replace(/[&<>"']/g, (character) => ESCAPE_HTML_MAP[character]);
}
