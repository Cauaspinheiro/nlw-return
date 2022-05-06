import { useTranslations } from 'next-intl'
import { FC, useState } from 'react'

import { FeedbackType } from './constants/feedbackType'
import { StepsDisplay } from './StepsDisplay'

export const WidgetForm: FC = () => {
  const t = useTranslations('components.widget-form.footer')

  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false)

  const handleRestartFeedback = () => {
    setFeedbackSent(false)
    setFeedbackType(null)
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <StepsDisplay
        feedbackType={feedbackType as FeedbackType}
        onBackButtonPressed={handleRestartFeedback}
        onFeedbackSent={() => setFeedbackSent(true)}
        onFeedbackTypeItemPressed={setFeedbackType}
        feedbackSent={feedbackSent}
        onFeedbackRestartRequested={handleRestartFeedback}
      />

      <footer className="text-xs text-neutral-400">
        {t('made-by-prefix')}
        <a
          className="underline underline-offset-2"
          href="https://rocketseat.com.br"
        >
          Rocketseat
        </a>
      </footer>
    </div>
  )
}
