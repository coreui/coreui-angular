export function toCamelCase(value: string) {
  return value.replace(/([-_][a-z0-9])/ig, ($1: string) => {
    return $1.toUpperCase().replace('-', '');
  });
}

export function transformName(value: string) {
  return value && value.includes('-') ? toCamelCase(value) : value;
}
