// Strip emoji characters from service names for display in cards
export function cleanName(name) {
  return name
    .replace(/[\u{1F000}-\u{1FFFF}]|[✀-➿]|[☀-⛿]|️/gu, '')
    .trim();
}
