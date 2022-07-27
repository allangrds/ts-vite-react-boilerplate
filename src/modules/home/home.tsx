import { Link } from 'react-router-dom'
import { useTranslation, Trans } from 'react-i18next'

export function Home () {
  const { t } = useTranslation()

  return (
    <>
      <Link to="/">
        {t('home_link')}
      </Link>
      <Link to="/expenses">
        {t('expense_link')}
      </Link>
    </>
  )
}
