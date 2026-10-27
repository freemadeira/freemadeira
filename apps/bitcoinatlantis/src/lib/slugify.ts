/** An id for a heading, so pills and other pages can link to its section. */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replaceAll(/[̀-ͯ]/gu, "")
    .replaceAll(/[“”]/gu, "")
    .replaceAll(" ", "-");
}
