import { useCallback } from 'react';
import { useIntl,getLocale } from 'umi';

export default function useTranslationLanguage(){
  const language = getLocale()
  const intl = useIntl()
  const t = useCallback(
    (key:string, params: Record<string, any> = {}) => {
      let value = intl.formatMessage({
        id:key
      },params)
      return value
    },[language]
  )
  return { t, language}
}
