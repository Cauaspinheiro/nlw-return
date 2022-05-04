import { FC } from 'react'
import {
  FeedbackContentStep,
  FeedbackContentStepProps,
} from './Steps/FeedbackContentStep'
import {
  FeedbackSuccessStep,
  FeedbackSuccessStepProps,
} from './Steps/FeedbackSuccessStep'
import {
  FeedbackTypeStep,
  FeedbackTypeStepProps,
} from './Steps/FeedbackTypeStep'

type FeedbackStepsProps = FeedbackTypeStepProps &
  FeedbackContentStepProps &
  FeedbackSuccessStepProps

export interface StepsDisplayProps extends FeedbackStepsProps {
  feedbackSent: boolean
}

export const StepsDisplay: FC<StepsDisplayProps> = (props) => {
  if (props.feedbackSent) {
    return (
      <FeedbackSuccessStep
        onFeedbackRestartRequested={props.onFeedbackRestartRequested}
      />
    )
  }

  if (!props.feedbackType) {
    return (
      <FeedbackTypeStep
        onFeedbackTypeItemPressed={props.onFeedbackTypeItemPressed}
      />
    )
  }

  return (
    <FeedbackContentStep
      onBackButtonPressed={props.onBackButtonPressed}
      feedbackType={props.feedbackType}
      onFeedbackSent={props.onFeedbackSent}
    />
  )
}
