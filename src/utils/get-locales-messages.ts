export async function getLocalesMessages(locale?: string) {
  return (await import(`../../languages/${locale}.json`)).default
}
