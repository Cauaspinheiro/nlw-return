import { Camera, Trash } from 'phosphor-react'
import { FC, useState } from 'react'
import html2canvas from 'html2canvas'
import { Loading } from '../Loading'

export interface ScreenshotButtonProps {
  onScreenshotTook(screenshot: string | null): void
  screenshot: string | null
}

export const ScreenshotButton: FC<ScreenshotButtonProps> = (props) => {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

  const handleTakeScreenshot = async () => {
    setIsTakingScreenshot(true)

    const canvas = await html2canvas(document.querySelector('html')!)

    const base64Image = canvas.toDataURL('image/png')

    setIsTakingScreenshot(false)
    props.onScreenshotTook(base64Image)
  }

  if (props.screenshot) {
    return (
      <button
        type="button"
        className="p-1 w-10 h-10 border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
        style={{
          backgroundImage: `url(${props.screenshot})`,
          backgroundPosition: 'right bottom',
          backgroundSize: 100,
        }}
        onClick={() => props.onScreenshotTook(null)}
      >
        <Trash weight="fill" />
      </button>
    )
  }

  return (
    <button
      type="button"
      className="p-2 bg-zinc-800 rounded border-transparent hover:bg-zinc-700 transition-colors
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
      onClick={handleTakeScreenshot}
    >
      {isTakingScreenshot ? (
        <Loading />
      ) : (
        <Camera className="w-6 h-6 text-zinc-100" />
      )}
    </button>
  )
}
