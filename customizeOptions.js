export const fonts = {
  INTER: 'Inter',
  IBM_PLEX_MONO: 'IBM Plex Mono',
  // Obsolote: unmodified IBM Plex Mono
  // IBM_PLEX_MONO_MOD: 'IBM Plex Mono (modified)',
  // IBM_PLEX_MONO: 'IBM Plex Mono (default)',
  OPEN_SANS: 'Open Sans',
  POPPINS: 'Poppins',
  DSEG7: 'DSEG7 7-Segment Display',
  DSEG14: 'DSEG14 14-Segment Display',
  INDIE_FLOWER: 'Indie Flower',
  BALSAMIQ_SANS: 'Balsamiq Sans',
  BALOO_2: 'Baloo 2',
  PRESS_START_2P: 'Press Start 2P',
  CUTIVE_MONO: 'Cutive Mono',
  UBUNTU_MONO: 'Ubuntu Mono',
}

export const fontWeights = {
  LIGHT: 300,
  REGULAR: 400,
  MEDIUM: 500,
  SEMIBOLD: 600,
  BOLD: 700,
}

export const fontSizes = {
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
}

export const textStyles = {
  DEFAULT: 'TEXT_STYLE_DEFAULT',
  OUTLINE: 'TEXT_STYLE_OUTLINE',
  SHADOW: 'TEXT_STYLE_SHADOW',
}

export const textAlignments = {
  TOP: 'top',
  CENTER: 'center',
  BOTTOM: 'bottom',
}

export const backgrounds = {
  CUSTOM: 'BG_CUSTOM',
  DEFAULT: 'BG_DEFAULT',
  TRANSPARENT: 'BG_TRANSPARENT',
  CROWD: '/assets/customize/background-crowd-1920.jpg',
  CITY: '/assets/customize/background-new-york-1920.jpg',
  STARS: '/assets/customize/background-stars-1920.jpg',
  PENCILS: '/assets/customize/background-pencils-1920.jpg',
  STREET: '/assets/customize/background-street-1920.jpg',
  BLUE: '/assets/customize/background-blue-1920.jpg',
  PARCHMENT: '/assets/customize/background-parchment-1920.jpg',
}

export const headerFooterPositions = {
  HEADER: 'HEADER',
  FOOTER: 'FOOTER',
  NONE: 'NONE',
}

export const logoPosition = {
  TOP_LEFT: 'topLeft',
  TOP_CENTER: 'topCenter',
  TOP_RIGHT: 'topRight',
  CENTER_LEFT: 'centerLeft',
  CENTER: 'center',
  CENTER_RIGHT: 'centerRight',
  BOTTOM_LEFT: 'bottomLeft',
  BOTTOM_CENTER: 'bottomCenter',
  BOTTOM_RIGHT: 'bottomRight',
}

export const progressTypes = {
  BAR_TOP: 'BAR_TOP',
  BAR_BOTTOM: 'BAR_BOTTOM',
  RING: 'RING',
  NONE: 'NONE',
}

export const themeNames = {
  CUSTOM: 'CUSTOM',
  DEFAULT: 'DEFAULT',
  LIGHT: 'LIGHT',
  CONTRAST_LIGHT: 'CONTRAST_LIGHT',
  CONTRAST_DARK: 'CONTRAST_DARK',
  CANDY: 'CANDY',
  MATRIX: 'MATRIX',
  MONOKAI: 'MONOKAI',
  GRUVBOX: 'GRUVBOX',
}

export const themeObjects = {
  [themeNames.CUSTOM]: {
    header: '#38BDF8',
    footer: '#38BDF8',
    countdown: '#FFFFFF',
    tod: '#FFFFFF',
    message: '#FFFFFF',
    progress: ['#22C55D', '#F59E0C', '#EF4444'],
    bg: '#1C1918',
    textStyle: textStyles.DEFAULT,
  },
  [themeNames.DEFAULT]: {
    header: '#38BDF8',
    footer: '#38BDF8',
    countdown: '#FFFFFF',
    tod: '#FFFFFF',
    message: '#FFFFFF',
    progress: ['#22C55D', '#F59E0C', '#EF4444'],
    bg: '#1C1918',
    textStyle: textStyles.DEFAULT,
  },
  [themeNames.LIGHT]: {
    header: '#0891B2',
    footer: '#0891B2',
    countdown: '#262626',
    tod: '#262626',
    message: '#262626',
    progress: ['#16A34A', '#F59E0B', '#DC2626'],
    bg: '#F5F5F5',
    textStyle: textStyles.DEFAULT,
  },
  [themeNames.CONTRAST_DARK]: {
    header: '#FFFFFF',
    footer: '#FFFFFF',
    countdown: '#FFFFFF',
    tod: '#FFFFFF',
    message: '#FFFFFF',
    progress: ['#39E039', '#F2C420', '#FF3838'],
    bg: '#000000',
    textStyle: textStyles.DEFAULT,
  },
  [themeNames.CONTRAST_LIGHT]: {
    header: '#000000',
    footer: '#000000',
    countdown: '#000000',
    tod: '#000000',
    message: '#000000',
    progress: ['#00C600', '#F5B206', '#EA0000'],
    bg: '#FFFFFF',
    textStyle: textStyles.DEFAULT,
  },
  [themeNames.CANDY]: {
    header: '#81F1FD',
    footer: '#81F1FD',
    countdown: '#FFFFFF',
    tod: '#FFFFFF',
    message: '#FFFFFF',
    progress: ['#59EE85', '#FC9091', '#FA6CBD'],
    bg: '#24252F',
    textStyle: textStyles.DEFAULT,
  },
  [themeNames.MATRIX]: {
    header: '#0D7C1C',
    footer: '#0D7C1C',
    countdown: '#71F080',
    tod: '#71F080',
    message: '#71F080',
    progress: ['#15BF2D', '#E4AC1D', '#B23D40'],
    bg: '#0D0D0D',
    textStyle: textStyles.DEFAULT,
  },
  [themeNames.MONOKAI]: {
    header: '#A193EB',
    footer: '#A193EB',
    countdown: '#FDF8F2',
    tod: '#FDF8F2',
    message: '#FDF8F2',
    progress: ['#A0D774', '#FB8E62', '#FE577D'],
    bg: '#272528',
    textStyle: textStyles.DEFAULT,
  },
  [themeNames.GRUVBOX]: {
    header: '#8EC07C',
    footer: '#8EC07C',
    countdown: '#EBDBB2',
    tod: '#EBDBB2',
    message: '#EBDBB2',
    progress: ['#B8BB26', '#FABD2F', '#FB4934'],
    bg: '#282828',
    textStyle: textStyles.DEFAULT,
  },
}

export const DEFAULT_TIMER_SIZE = 90
export const DEFAULT_MESSAGE_SIZE = 75
export const DEFAULT_LOGO_SIZE = 20
