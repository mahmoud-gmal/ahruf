import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/assets/logo.png' />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'ahrufedu',
  keywords: ` مواقع وتطبيقات, تصميم متاجر الاكترونية`,
  description: 'أفضل شركة تصميم المواقع الإلكترونية و تطبيقات الجوال',
}

export default Meta;
