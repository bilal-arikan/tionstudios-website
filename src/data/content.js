import { Blocks, Code2, Globe2, Layers3, MonitorSmartphone, Palette, ShieldCheck, Smartphone } from 'lucide-react'
import { pathFor } from '../i18n'
import { games } from './games'

export const NAV_PAGES = ['services', 'games', 'about', 'contact']

export const SERVICE_ICONS = [Palette, Globe2, Smartphone, Blocks]

export const SERVICE_ACCENTS = ['cyan', 'violet', 'blue', 'lime']

export const PRINCIPLE_ICONS = [Layers3, Code2, MonitorSmartphone, ShieldCheck]

export const projectArchive = games.filter((game) => !game.featured).slice(0, 3)

export const technologyList = ['React', 'TypeScript', 'Node.js', 'Cloud', '.NET', 'Unity', 'PostgreSQL', 'REST API']

export function buildServices(t) {
  return (t('services.items') || []).map((item, index) => ({
    ...item,
    number: String(index + 1).padStart(2, '0'),
    icon: SERVICE_ICONS[index] ?? SERVICE_ICONS[0],
    accent: SERVICE_ACCENTS[index] ?? SERVICE_ACCENTS[0],
  }))
}

export function buildProcessSteps(t) {
  return (t('process.steps') || []).map((step, index) => ({
    ...step,
    number: String(index + 1).padStart(2, '0'),
  }))
}

export function buildPrinciples(t) {
  return (t('about.principles') || []).map((item, index) => ({
    ...item,
    icon: PRINCIPLE_ICONS[index] ?? PRINCIPLE_ICONS[0],
  }))
}

export function buildNavigation(t, locale) {
  return NAV_PAGES.map((page) => ({
    page,
    label: t(`nav.${page}`),
    href: pathFor(page, locale),
  }))
}
