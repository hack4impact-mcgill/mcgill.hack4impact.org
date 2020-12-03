import React from "react";
import Banner from "../components/homepage/banner";
import OurWorkSection from "../components/homepage/ourWork";
import InvolveSection from "../components/homepage/involveSection";
import PartnerSection from "../components/homepage/partnerSection";
import OtherChapters from "../components/homepage/otherChapters";
import { ToastContainer, toast } from "react-toastify";
import ToastText from "../components/toastText";
import Head from "../components/head";
import Nav from "../components/nav";
import Footer from "../components/footer";

class Home extends React.Component {
  componentDidMount() {
    // uncomment this when student applications are open to get a nice popup
    // toast(<ToastText text="Student Applications are Open!" />, {
    //   className: "announcement",
    //   bodyClassName: "announcement-body"
    // });
  }

  render() {
    return (
      <div>
        <Head title="Hack4Impact McGill" />
        <Nav navType="mainNav" />
        <ToastContainer />
        <Banner />
        <OurWorkSection />
        <InvolveSection />
        <PartnerSection />
        <OtherChapters />
        <Footer />
      </div>
    );
  }
}

export default Home;
