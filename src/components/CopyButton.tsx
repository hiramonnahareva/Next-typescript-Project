"use client"

import { ButtonHTMLAttributes, FC } from "react"
import Button from "./ui/Button"
import { toast } from "./ui/Toast"

interface CopyButtonProps extends ButtonHTMLAttributes<HTMLElement> {
  valueToCopy: string
}

const CopyButton: FC<CopyButtonProps> = ({
    valueToCopy,
    className,
    ...props
}) => {
  return <Button {...props} onClick={() => {
    navigator.clipboard.writeText(valueToCopy)

    toast({
        title: 'copied!',
        message: 'API key copied to clipboard',
        type: 'success'
        })
  }}
           
  variant='ghost'
  className={className}
  >
    
    <Copy className='h-5 w-5'/>
    </Button>
}

export default CopyButton
