export function toCamelCase(str: string) {
  return str.replace(/([-_][a-z0-9])/ig, ($1: string) => {
    return $1.toUpperCase().replace('-', '');
  });
}
