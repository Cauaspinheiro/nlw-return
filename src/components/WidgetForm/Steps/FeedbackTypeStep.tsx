import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { FC, Fragment } from 'react'
import { CloseButton } from '../../CloseButton'
import { FEEDBACKS_TYPES, FeedbackType } from '../constants/feedbackType'
import { useFeedbacksTypesTranslations } from '../hooks/use-feedbacks-types-translations'

export interface FeedbackTypeStepProps {
  onFeedbackTypeItemPressed: (feedbackType: FeedbackType) => void
}

export const FeedbackTypeStep: FC<FeedbackTypeStepProps> = (props) => {
  const t = useTranslations('components.widget-form.type-step')
  const feedbacksTypesT = useFeedbacksTypesTranslations()

  return (
    <Fragment>
      <header>
        <span className="text-xl leading-6">{t('header-text')}</span>

        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        {Object.entries(FEEDBACKS_TYPES).map(([key, value]) => (
          <button
            key={key}
            onClick={() => props.onFeedbackTypeItemPressed(key as FeedbackType)}
            className="bg-zinc-800 rounded-lg py-5 w-full md:w-24 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
          >
            <Image
              src={value.image.source}
              alt={feedbacksTypesT(value.image.alt as never)}
            />

            <span>{feedbacksTypesT(value.title as never)}</span>
          </button>
        ))}
      </div>
    </Fragment>
  )
}
