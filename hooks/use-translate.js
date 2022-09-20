import { useRouter } from 'next/router'
import en from "/locales/en";
import ja from "/locales/ja";

/* useRouterからからロケールを取得して翻訳ファイルから該当箇所をを返す */
/* hooksの命名規則 "use" から始める */

export const useTranslate = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : ja;
  return { locale, t };
}