import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { useGetUser } from '../../hooks'

export const Home = () => {
  const { t } = useTranslation()
  const { data } = useGetUser()

  return (
    <>
      <Link to="/">{t('home_link')}</Link>
      <Link to="/expenses">{t('expense_link')}</Link>
      <p>
        ID:
        {' '}
        {data?.id}
      </p>
      <p>
        Title:
        {' '}
        {data?.title}
      </p>
    </>
  )
}
