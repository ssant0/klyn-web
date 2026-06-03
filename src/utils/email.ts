import { config } from "../data/config";

export function hydrateEmail(): void {
  const email = atob(config.email);
  document.querySelectorAll<HTMLAnchorElement>("[data-email-href]").forEach(el => {
    const params = el.dataset.emailParams ?? "";
    el.href = `mailto:${email}${params}`;
  });
  document.querySelectorAll<HTMLElement>("[data-email-text]").forEach(el => {
    el.textContent = email;
  });
}
