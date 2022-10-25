import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/logo.png' />
      <title>{title}</title>
      {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0/css/all.min.css" integrity="sha512-c93ifPoTvMdEJH/rKIcBx//AL1znq9+4/RmMGafI/vnTFe/dKwnn1uoeszE2zJBQTS1Ck5CqSBE+34ng2PthJg==" crossOrigin="anonymous" referrerpolicy="no-referrer"/> */}
    </Head>
  )
}

Meta.defaultProps = {
  title: 'ahrufedu',
  keywords: ` مواقع وتطبيقات, تصميم متاجر الاكترونية`,
  description: 'أفضل شركة تصميم المواقع الإلكترونية و تطبيقات الجوال',
}

export default Meta
