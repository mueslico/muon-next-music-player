import React from 'react'
import { FaHeadphonesIcon } from '../components/Icon'

export default {
  playModeText: {
    order: '반복없음',
    orderLoop: '전체 반복',
    singleLoop: '한곡 반복',
    shufflePlay: '무작위',
  },
  openText: '열기',
  closeText: '닫기',
  emptyText: '음악없음',
  clickToPlayText: '재생',
  clickToPauseText: '일시정지',
  nextTrackText: '다음 곡',
  previousTrackText: '이전 곡',
  reloadText: '다시 불러오기',
  volumeText: '볼륨',
  playListsText: '플레이리스트',
  toggleLyricText: '가사',
  toggleMiniModeText: '최소화',
  destroyText: '삭제',
  downloadText: '다운로드',
  lightThemeText: 'X', // 밝게
  darkThemeText: 'O', // 어둡게
  switchThemeText: '다크모드',
  removeAudioListsText: '플레이리스트 삭제',
  clickToDeleteText: (name) => `${name} 곡 삭제`,
  controllerTitle: <FaHeadphonesIcon />,
  emptyLyricText: '가사 없음',
  loadingText: '로딩',
}
