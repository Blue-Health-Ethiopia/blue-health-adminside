import React from 'react';
import {
  CEUInput,
  HighlightInput,
  TextInput,
} from '../common/Inputs';
import {
  CaseIcon,
  LapTopIcon,
  LinkIcon,
  PersonIcon,
} from '../../assets/Icons/Icons';
import CEU from '../../assets/Icons/CEU.png';

export function SeminarForm({
  handleTitle,
  handlePresenter,
  highlightedWords,
  setHighlightedWords,
  handleCEU,
  handleLink,
}) {
  return (
    <>
      <TextInput
        onChange={(e) => handleTitle(e)}
        placeholder={'Virtual Seminar Title'}
        icon={<LapTopIcon />}
      />
      <TextInput
        onChange={(e) => handlePresenter(e)}
        placeholder={'Presenter Name'}
        icon={<PersonIcon />}
      />
      <HighlightInput
        highlightedWords={highlightedWords}
        setHighlightedWords={setHighlightedWords}
        placeholder={'Occupations'}
        icon={<CaseIcon />}
      />
      <CEUInput
        onChange={(e) => handleCEU(e)}
        placeholder={'CEU Point'}
        icon={<img className="w-5" src={CEU} alt="" />}
      />
      <TextInput
        onChange={(e) => handleLink(e)}
        placeholder={'Zoom Link'}
        icon={<LinkIcon />}
      />
    </>
  );
}
