import Image from 'next/image'
import { ArrowLeft } from 'phosphor-react'
import { FC, FormEvent, Fragment, useState } from 'react'
import { api } from '../../../services/api'
import { CloseButton } from '../../CloseButton'
import { Loading } from '../../Loading'
import { FEEDBACKS_TYPES, FeedbackType } from '../constants/feedbackType'
import { ScreenshotButton } from '../ScreenshotButton'

export interface FeedbackContentStepProps {
  feedbackType: FeedbackType
  onBackButtonPressed: () => void
  onFeedbackSent: () => void
}

export const FeedbackContentStep: FC<FeedbackContentStepProps> = (props) => {
  const [screenshot, setScreenshot] = useState<string | null>(null)
  const [comment, setComment] = useState('')
  const [isSendingFeedback, setIsSendingFeedback] = useState(false)

  const feedbackTypeInfo = FEEDBACKS_TYPES[props.feedbackType]

  const handleSubmitFeedback = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setIsSendingFeedback(true)

    await api.post('/feedbacks', {
      type: props.feedbackType,
      comment,
      screenshot,
    })

    setIsSendingFeedback(false)
    props.onFeedbackSent()
  }

  return (
    <Fragment>
      <header>
        <button
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
          onClick={props.onBackButtonPressed}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>

        <span className="text-xl leading-6 flex items-center gap-2">
          <Image
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
            className="w-6 h-6"
          />

          {feedbackTypeInfo.title}
        </span>

        <CloseButton />
      </header>

      <form className="my-4 w-full" onSubmit={handleSubmitFeedback}>
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm resize-none py-2 px-3
          placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md 
          focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none
          scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que está acontecendo..."
          onChange={(e) => setComment(e.target.value)}
        />

        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />

          <button
            type="submit"
            className="p-2 bg-brand-500 rounded border-transparent flex-1 transition-colors
            flex justify-center items-center text-sm hover:bg-brand-300
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500
            disabled:opacity-50 disabled:hover:bg-brand-500"
            disabled={!comment.trim() || isSendingFeedback}
          >
            {isSendingFeedback ? <Loading /> : 'Enviar feedback'}
          </button>
        </footer>
      </form>
    </Fragment>
  )
}
