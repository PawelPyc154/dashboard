import Portal from '@reach/portal'
import { Children, cloneElement, isValidElement, ReactNode } from 'react'
import { Config, PopperOptions, usePopperTooltip } from 'react-popper-tooltip'
import 'react-popper-tooltip/dist/styles.css'

declare const top: 'top'
declare const bottom: 'bottom'
declare const right: 'right'
declare const left: 'left'

type BasePlacement = typeof top | typeof bottom | typeof right | typeof left

type VariationPlacement =
  | 'top-start'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-end'
  | 'right-start'
  | 'right-end'
  | 'left-start'
  | 'left-end'

type AutoPlacement = 'auto' | 'auto-start' | 'auto-end'

type Placement = AutoPlacement | BasePlacement | VariationPlacement

const colors = {
  white: '!bg-white',
  red: '!bg-red-600 !text-white font-medium red',
}

interface TooltipProps {
  trigger?: ReactNode
  children?: ReactNode
  config?: Config
  color?: keyof typeof colors
  popperOptions?: PopperOptions
  // hasPadding?: boolean
  offset?: [0 | 10 | 20 | number, number | 0 | 10 | 20]
  placement?: Placement
}

const Tooltip = ({
  trigger,
  children,
  config,
  popperOptions,
  color = 'white',
  // hasPadding = true,
  offset,
  placement = 'top',
  ...props
}: TooltipProps) => {
  const { getArrowProps, getTooltipProps, setTooltipRef, setTriggerRef, visible } = usePopperTooltip(
    { ...config, offset, placement },
    popperOptions,
  )

  return (
    <>
      {isValidElement(trigger) ? (
        cloneElement(Children.only(trigger), {
          ref: setTriggerRef,
        })
      ) : (
        <div ref={setTriggerRef} className="cursor-pointer ">
          {trigger}
        </div>
      )}

      {visible && children !== null && (
        <Portal>
          <div
            ref={setTooltipRef}
            {...getTooltipProps({
              className: `tooltip-container !border-0 !bg-white !text-xs !p-3 !py-2.5 !rounded-md  ${colors[color]}`,
              style: { borderRadius: 0, boxShadow: '0px 0px 14px #0000004e' },
            })}
            {...props}
          >
            <div
              {...getArrowProps({
                className: 'tooltip-arrow',
              })}
            />
            {children}
          </div>
        </Portal>
      )}
    </>
  )
}

export { Tooltip }
