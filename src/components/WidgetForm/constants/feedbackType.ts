import bugImageUrl from '../../../assets/bug.svg'
import ideaImageUrl from '../../../assets/idea.svg'
import thoughtImageUrl from '../../../assets/thought.svg'

export const FEEDBACKS_TYPES = {
  BUG: {
    title: 'bug.title',
    image: {
      source: bugImageUrl,
      alt: 'bug.image-alt',
    },
  },
  IDEA: {
    title: 'idea.title',
    image: {
      source: ideaImageUrl,
      alt: 'idea.image-alt',
    },
  },
  OTHER: {
    title: 'other.title',
    image: {
      source: thoughtImageUrl,
      alt: 'other.image-url',
    },
  },
}

export type FeedbackType = keyof typeof FEEDBACKS_TYPES
