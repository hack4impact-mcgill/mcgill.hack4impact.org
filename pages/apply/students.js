import ApplicationProcess from '../../components/apply/applicationProcess';
import Quote from '../../components/quote';
import FAQ from '../../components/faq';
import GradientBanner from '../../components/gradientBanner';
import Head from '../../components/head';
import Nav from '../../components/nav';
import Footer from '../../components/footer';
import data from '../../data/studentApplyData';

const Students = () => (
  <div>
    <Head title="H4I Apply | Students" />
    <Nav navType="otherNav" />
    <GradientBanner
      color="#252956"
      title={data.title}
      subHeadline={data.subHeadline}
      buttonText="Applications Closed"
      buttonLink={data.applicationLink}
    />
    <ApplicationProcess
      closedText={data.closedText}
      processes={data.studentProcess}
      titleDetail={data.applicationDetail}
      closed
    />
    <Quote
      quote={data.quote.text}
      source={data.quote.source}
      sourceTitle={data.quote.sourceTitle}
    />
    <FAQ questions={data.faq} />
    <Footer />
  </div>
);

export default Students;
