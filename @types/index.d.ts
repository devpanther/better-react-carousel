import * as React from 'react'

declare namespace Carousel {
  interface CarouselProps extends React.HTMLProps<Carousel> {
    cols?: number
    rows?: number
    gap?: number
    loop?: boolean
    scrollSnap?: boolean
    hideArrow?: boolean
    showDots?: boolean
    autoplay?: any
    dotColorActive?: string
    dotColorInactive?: string
    responsiveLayout?: any
    mobileBreakpoint?: number
    arrowLeft?: any
    arrowRight?: any
    dot?: any
    containerClassName?: string
    containerStyle?: any
    children?: any
  }
  class Carousel extends React.Component<CarouselProps> {
    getParentElement(elem?: HTMLElement | null): HTMLElement | undefined | null
  }
  namespace Carousel {
    interface ItemProps extends React.HTMLProps<Item> {
      children?: any
    }

    class Item extends React.Component<ItemProps> {}
  }
}

export = Carousel.Carousel
