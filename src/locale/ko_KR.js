import React from 'react'
import { FaHeadphonesIcon } from '../components/Icon'

export default {
  playModeText: {
    order: '기본 재생',
    orderLoop: '전체 반복 재생',
    singleLoop: '한곡 반복 재생',
    shufflePlay: '랜덤 재생',
  },
  openText: '열기',
  closeText: '닫기',
  emptyText: '곡 없음',
  clickToPlayText: '재생',
  clickToPauseText: '일시정지',
  nextTrackText: '다음곡',
  previousTrackText: '이전곡',
  reloadText: '새로고침',
  volumeText: '소리',
  playListsText: '플레이리스트',
  toggleLyricText: '가사',
  toggleMiniModeText: '미니모드',
  destroyText: '종료',
  downloadText: '다운로드',
  lightThemeText: 'L',
  darkThemeText: 'D',
  switchThemeText: '다크/화이트 모드',
  removeAudioListsText: '전체 삭제',
  clickToDeleteText: (name) => `${name} 곡 삭제`,
  controllerTitle: <FaHeadphonesIcon />,
  emptyLyricText: '가사 없음',
  loadingText: '로딩',
}
