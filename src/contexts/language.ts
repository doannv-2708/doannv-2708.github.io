import { createContext } from 'react';

export interface LocaleProps {
  value: 'en' | 'vi';
  change: (lang: 'en' | 'vi') => void;
}

const LanguageContext = createContext<LocaleProps>({
  value: 'en',
  change: lang => {},
});

export default LanguageContext;
