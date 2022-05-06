import { useTranslations } from 'next-intl'

export const useFeedbacksTypesTranslations = () => {
  const t = useTranslations('components.widget-form.feedbacks-types')

  return t
}
