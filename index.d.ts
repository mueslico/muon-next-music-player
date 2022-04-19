import * as React from 'react'

export interface ReactMuOnMusicPlayerAudioInfo {
  cover: string
  currentTime: number
  duration: number
  ended: boolean
  musicSrc: string
  muted: boolean
  name: string
  networkState: number
  paused: boolean
  played: any
  readyState: number
  startDate: any
  volume: number
  lyric: string
  currentLyric: string
  playIndex: number
  __PLAYER_KEY__: string
  [key: string]: any
}

export type ReactMuOnMusicPlayerTheme = 'dark' | 'light' | 'auto'
export type ReactMuOnMusicPlayerMode = 'mini' | 'full'
export type ReactMuOnMusicPlayerPlayMode =
  | 'order'
  | 'orderLoop'
  | 'singleLoop'
  | 'shufflePlay'

export interface ReactMuOnMusicPlayerAudioListProps {
  name: React.ReactNode
  musicSrc: (() => Promise<string>) | string
  singer?: React.ReactNode
  cover?: string
  lyric?: string
  duration?: number
  [key: string]: any
}

export interface ReactMuOnMusicPlayerInstance extends HTMLAudioElement {
  destroy?: () => void
  updatePlayIndex?: (index: number) => void
  playByIndex?: (index: number) => void
  playNext?: () => void
  playPrev?: () => void
  togglePlay?: () => void
  clear?: () => void
  sortable?: any
}

export interface ReactMuOnMusicPlayerIcon {
  pause?: React.ReactNode
  play?: React.ReactNode
  destroy?: React.ReactNode
  close?: React.ReactNode
  delete?: React.ReactNode
  download?: React.ReactNode
  toggle?: React.ReactNode
  lyric?: React.ReactNode
  volume?: React.ReactNode
  mute?: React.ReactNode
  next?: React.ReactNode
  prev?: React.ReactNode
  playLists?: React.ReactNode
  reload?: React.ReactNode
  loop?: React.ReactNode
  order?: React.ReactNode
  orderLoop?: React.ReactNode
  shuffle?: React.ReactNode
  loading?: React.ReactNode
}

export interface ReactMuOnMusicPlayerCustomLocale {
  playModeText: {
    order: React.ReactNode
    orderLoop: React.ReactNode
    singleLoop: React.ReactNode
    shufflePlay: React.ReactNode
  }
  openText: React.ReactNode
  closeText: React.ReactNode
  emptyText: React.ReactNode
  clickToPlayText: React.ReactNode
  clickToPauseText: React.ReactNode
  nextTrackText: React.ReactNode
  previousTrackText: React.ReactNode
  reloadText: React.ReactNode
  volumeText: React.ReactNode
  playListsText: React.ReactNode
  toggleLyricText: React.ReactNode
  toggleMiniModeText: React.ReactNode
  destroyText: React.ReactNode
  downloadText: React.ReactNode
  lightThemeText: React.ReactNode
  darkThemeText: React.ReactNode
  switchThemeText: React.ReactNode
  removeAudioListsText: React.ReactNode
  clickToDeleteText: (name: string) => React.ReactNode
  controllerTitle: React.ReactNode
  emptyLyricText: React.ReactNode
}

export type ReactMuOnMusicPlayerLocale =
  | 'zh_CN'
  | 'en_US'
  | ReactMuOnMusicPlayerCustomLocale

export interface TransformedDownloadAudioInfo {
  src: string
  filename?: string
  mimeType?: string
}

export interface ReactMuOnMusicPlayerProps {
  style?: React.CSSProperties
  className?: string
  audioLists: Array<ReactMuOnMusicPlayerAudioListProps>
  locale?: ReactMuOnMusicPlayerLocale
  icon?: ReactMuOnMusicPlayerIcon
  theme?: ReactMuOnMusicPlayerTheme
  mode?: ReactMuOnMusicPlayerMode
  defaultPlayMode?: ReactMuOnMusicPlayerPlayMode
  playMode?: ReactMuOnMusicPlayerPlayMode
  drag?: boolean
  seeked?: boolean
  autoPlay?: boolean
  defaultPosition?: {
    top?: number | string
    left?: number | string
    right?: number | string
    bottom?: number | string
  }
  responsive?: boolean
  quietUpdate?: boolean
  onAudioPlay?: (audioInfo: ReactMuOnMusicPlayerAudioInfo) => void
  onAudioPause?: (audioInfo: ReactMuOnMusicPlayerAudioInfo) => void
  onAudioEnded?: (
    currentPlayId: string,
    audioLists: Array<ReactMuOnMusicPlayerAudioListProps>,
    audioInfo: ReactMuOnMusicPlayerAudioInfo,
  ) => void
  onAudioAbort?: (
    currentPlayId: string,
    audioLists: Array<ReactMuOnMusicPlayerAudioListProps>,
    audioInfo: ReactMuOnMusicPlayerAudioInfo,
  ) => void
  onAudioVolumeChange?: (volume: number) => void
  onAudioError?: (
    error: any,
    currentPlayId: string,
    audioLists: Array<ReactMuOnMusicPlayerAudioListProps>,
    audioInfo: ReactMuOnMusicPlayerAudioInfo,
  ) => void
  onAudioProgress?: (audioInfo: ReactMuOnMusicPlayerAudioInfo) => void
  onAudioSeeked?: (audioInfo: ReactMuOnMusicPlayerAudioInfo) => void
  onAudioDownload?: (
    audioInfo: ReactMuOnMusicPlayerAudioInfo,
    transformedDownloadAudioInfo: TransformedDownloadAudioInfo,
  ) => void
  onAudioReload?: (audioInfo: ReactMuOnMusicPlayerAudioInfo) => void
  onThemeChange?: (theme: ReactMuOnMusicPlayerTheme) => void
  onAudioListsChange?: (
    currentPlayId: string,
    audioLists: Array<ReactMuOnMusicPlayerAudioListProps>,
    audioInfo: ReactMuOnMusicPlayerAudioInfo,
  ) => void
  onPlayModeChange?: (playMode: ReactMuOnMusicPlayerPlayMode) => void
  onModeChange?: (mode: ReactMuOnMusicPlayerMode) => void
  onAudioListsPanelChange?: (panelVisible: boolean) => void
  onAudioPlayTrackChange?: (
    currentPlayId: string,
    audioLists: Array<ReactMuOnMusicPlayerAudioListProps>,
    audioInfo: ReactMuOnMusicPlayerAudioInfo,
  ) => void
  onAudioListsSortEnd?: (oldIndex: number, newIndex: number) => void
  showDownload?: boolean
  showPlay?: boolean
  showReload?: boolean
  showPlayMode?: boolean
  showThemeSwitch?: boolean
  showMiniModeCover?: boolean
  showDestroy?: boolean
  showMediaSession?: boolean
  toggleMode?: boolean
  once?: boolean
  extendsContent?: React.ReactNode
  defaultVolume?: number
  playModeShowTime?: number
  bounds?: React.ReactNode
  showMiniProcessBar?: boolean
  loadAudioErrorPlayNext?: boolean
  preload?: boolean | 'auto' | 'metadata' | 'none'
  glassBg?: boolean
  remember?: boolean
  remove?: boolean
  defaultPlayIndex?: number
  playIndex?: number
  lyricClassName?: string
  showLyric?: boolean
  getContainer?: () => HTMLElement
  getAudioInstance?: (instance: ReactMuOnMusicPlayerInstance) => void
  autoHiddenCover?: boolean
  onBeforeAudioDownload?: (
    audioInfo: ReactMuOnMusicPlayerAudioInfo,
  ) => Promise<TransformedDownloadAudioInfo>
  clearPriorAudioLists?: boolean
  autoPlayInitLoadPlayList?: boolean
  spaceBar?: boolean
  onBeforeDestroy?: (
    currentPlayId: string,
    audioLists: Array<ReactMuOnMusicPlayerAudioListProps>,
    audioInfo: ReactMuOnMusicPlayerAudioInfo,
  ) => Promise<void>
  onDestroyed?: (
    currentPlayId: string,
    audioLists: Array<ReactMuOnMusicPlayerAudioListProps>,
    audioInfo: ReactMuOnMusicPlayerAudioInfo,
  ) => Promise<void>
  customDownloader?: (downloadAudioInfo: TransformedDownloadAudioInfo) => void
  onCoverClick?: (
    mode: ReactMuOnMusicPlayerMode,
    audioLists: Array<ReactMuOnMusicPlayerAudioListProps>,
    audioInfo: ReactMuOnMusicPlayerAudioInfo,
  ) => void
  onPlayIndexChange?: (playIndex: number) => void
  renderAudioTitle?: (
    audioInfo: ReactMuOnMusicPlayerAudioInfo,
    isMobile: boolean,
  ) => React.ReactNode
  mobileMediaQuery?: string
  volumeFade?: {
    fadeIn?: number
    fadeOut?: number
  }
  restartCurrentOnPrev?: boolean
  sortableOptions?: object
}

export default class ReactMuOnMusicPlayer extends React.PureComponent<
  ReactMuOnMusicPlayerProps,
  any
> {}
