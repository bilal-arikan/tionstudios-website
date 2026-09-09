import { locales } from '../i18n'

export function SplitTitle({ before, accent, after, locale, accentClass = 'text-accent' }) {
  const gap = locales[locale]?.wordSpacing === false ? null : ' '
  return (
    <>
      {before}
      {gap}
      <span className={accentClass}>{accent}</span>
      {after ? <>{gap}{after}</> : null}
    </>
  )
}
