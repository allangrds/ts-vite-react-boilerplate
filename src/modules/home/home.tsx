import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export const Home = () => {
  const { t } = useTranslation()

  return (
    <>
      <Link to="/">{t('home_link')}</Link>
      <Link to="/expenses">{t('expense_link')}</Link>
    </>
  )
}
