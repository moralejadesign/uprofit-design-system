declare module '@iconscout/react-unicons/icons/*' {
  import { FC, SVGProps } from 'react'
  const Icon: FC<SVGProps<SVGSVGElement> & { size?: string | number; color?: string }>
  export default Icon
}

declare module '@iconscout/react-unicons' {
  import { FC, SVGProps } from 'react'
  type IconComponent = FC<SVGProps<SVGSVGElement> & { size?: string | number; color?: string }>
  const icons: Record<string, IconComponent>
  export = icons
}

declare module '@iconscout/react-unicons-solid' {
  import { FC, SVGProps } from 'react'
  type IconComponent = FC<SVGProps<SVGSVGElement> & { size?: string | number; color?: string }>
  const icons: Record<string, IconComponent>
  export = icons
}

declare module '@iconscout/react-unicons-solid/icons/*' {
  import { FC, SVGProps } from 'react'
  const Icon: FC<SVGProps<SVGSVGElement> & { size?: string | number; color?: string }>
  export default Icon
}
