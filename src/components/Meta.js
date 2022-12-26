import Head from 'next/head'
import { server } from '../../config';
const Meta = ({ title, keywords, description }) => {

  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/assets/Favicon.png' />
      <title>{title}</title>
      {/* Add hreflang links */}
      <link rel="alternate" href={server} hrefLang="x-default" />
      <link rel="alternate" href={server} hrefLang="ar" />
      <link rel="alternate" href={`${server}en`} hrefLang="en" />
    </Head>
  )
}

  Meta.defaultProps = {
    title: 'ahrufedu',
    keywords: `فصول تعليمية اونلاين, خدمات تعليمية متنوعة`,
    description: 'يقدم الخدمات التعليمية المتنوعة بنظام الكورسات والفصول',
  }



export default Meta;
