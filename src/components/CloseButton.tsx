import { Popover } from '@headlessui/react'
import { useTranslations } from 'next-intl'
import { X } from 'phosphor-react'
import { FC } from 'react'

export const CloseButton: FC = () => {
  const t = useTranslations('components.close-button')

  return (
    <Popover.Button
      className="top-5 right-5 absolute text-zinc-400 hover:text-zinc-100"
      title={t('title')}
    >
      <X weight="bold" className="w-4 h-4" />
    </Popover.Button>
  )
}
