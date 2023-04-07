import { VariantProps, cva } from 'class-variance-authority'
import { ButtonHTMLAttributes, FC, forwardRef } from 'react'
import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

export const buttonVariants = cva('active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-color focus:outline-none focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900', {
    variants: {
        variant: {
            default: 'bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100',
            outline: 'bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100 border-slate-200 hover:bg-slate-100 dark:border-slate-700',
            ghost: 'bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-400 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent',
            link: 'bg-transparant dark:bg-transparant underline-offer-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparant dark:hover:bg-transparant'
        },
        size: {
            default: 'h-1- py-2 px-4',
            sm: 'h-9 px-2 rounded-md',
            lg: 'h-11 px-8 rounded-md',
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
})

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants>{
    isLoading?: boolean
}
const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
    ({
    className, children, variant, isLoading, size, ...props
}, ref) => {
  return <button 
  className={cn(buttonVariants({variant, size, className}))} 
  ref={ref} 
  disabled={isLoading} 
  {...props}>
    {isLoading ? <Loader2 className='mr-2 h-4 w-4 animate-spin'/> : null}
    {children}
  </button>
})

Button.displayName = 'Button'
export default Button