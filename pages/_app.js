//tailwind
import "../scss/tailwind.scss";
import "../scss/icons.scss";
// scroll bar
import "simplebar/src/simplebar.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// highlight
import "../utils/highlight";

// editor
import "react-quill/dist/quill.snow.css";
import "mapbox-gl/dist/mapbox-gl.css";
// lazy image
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "react-lazy-load-image-component/src/effects/black-and-white.css";

import PropTypes from "prop-types";
import cookie from "cookie";
// next
import App from "next/app";
// utils
import { getSettings } from "../utils/settings";
//react-toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// contexts
import { SettingsProvider } from "../contexts/SettingsContext";
import { CollapseDrawerProvider } from "../contexts/CollapseDrawerContext";
// theme
import ThemeProvider from "../theme";
// components
// import Settings from '../components/settings';
import RtlLayout from "../components/RtlLayout";
import ProgressBar from "../components/ProgressBar";
import ThemeColorPresets from "../components/ThemeColorPresets";
import MotionLazyContainer from "../components/animate/MotionLazyContainer";
import Script from "next/script";
import { DefaultSeo, LocalBusinessJsonLd } from "next-seo";

// ----------------------------------------------------------------------

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
  settings: PropTypes.object,
};

//there is a meta tag change
export default function MyApp(props) {
  const { Component, pageProps, settings } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <DefaultSeo
        title="Angela Danielle Crowe | Financial Advisor | Family Wealth Advisor"
        description="Angela Danielle Crowe: Expert guidance for secure financial futures. Specializing in Retirement, Investing, Family Wealth, Business Planning, Philanthropy, and Financial Wellness."
        openGraph={{
          type: "website",
          locale: "en-GB",
          url: "https://advisor.angeladaniellecrowe.com",
          siteName: "Angela Danielle Crowe Portfolio website",
          profile: {
            firstName: "Angela Danielle Crowe",
            lastName: "Crowe",
            gender: "female",
          },
          images: [
            {
              url: "/img/666x1122.jpg",
              alt: "https://advisor.angeladaniellecrowe.com - site",
            },
          ],
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "angela danielle crowe, Angela, Danielle, Crowe, Angela Danielle, Angela Danielle Crowe, angeladaniellecrowe, North Rodney, Parham , Wealth Management, Wealth Management, Financial goals, Retirement, Investing, Family planning, Business planning, Philanthropy, Financial wellness",
          },
          // {
          //   name: "google-site-verification",
          //   content: "zElf0lEx7sIag7jmbsi1DbGcFRRpzg0em8yY1khoLYE",
          // },
        ]}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/favicon.ico",
          },
        ]}
      />

      <LocalBusinessJsonLd
        type="Family Wealth Advisor"
        id="https://advisor.angeladaniellecrowe.com"
        name="Angela Danielle Crowe - Financial Advisor - Family Wealth Advisor"
        description="Angela Danielle Crowe can help you achieve your financial goals. Learn about Retirement, Investing, Family, Business Planning, Philanthropy, and Financial Wellness."
        url=""
        telephone="+14242793916"
        address={{
          streetAddress:
            "2200 North Rodney Parham Road Suite 100, Little Rock, AR 72212",
          addressLocality: "2200 North Rodney Parham ",
          addressRegion: " DC",
          postalCode: "34688",
          addressCountry: "US",
        }}
        geo={{
          //34.769321, -92.267174
          latitude: "34.769321",
          longitude: "-92.267174",
        }}
        images={["/img/666x1122.png"]}
        openingHours={[
          {
            opens: "08:00",
            closes: "17:59",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
          },
        ]}
      />
      <Script src="/js/easy_background.js" strategy="beforeInteractive" />
      <Script strategy="beforeInteractive" src="/js/feather.min.js" />
      <CollapseDrawerProvider>
        <SettingsProvider defaultSettings={settings}>
          <ThemeProvider>
            <MotionLazyContainer>
              <ThemeColorPresets>
                <RtlLayout>
                  <ProgressBar />
                  {getLayout(<Component {...pageProps} />)}
                  <ToastContainer
                    position="top-right"
                    autoClose={4000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    theme="colored"
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                  />
                </RtlLayout>
              </ThemeColorPresets>
            </MotionLazyContainer>
          </ThemeProvider>
        </SettingsProvider>
      </CollapseDrawerProvider>
      <Script>{`feather.replace();`}</Script>
      {/* <Script
        src="//code.tidio.co/ryxghgdiucqlkgswdprdkwlolpygakwf.js"
        async
      ></Script>
      <Script>
        {`
        document.querySelectorAll('a.scroll[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
              e.preventDefault();
              document.querySelector(this.getAttribute('href')).scrollIntoView({
                  behavior: 'smooth'
              });
          });
      });
        `}
      </Script> */}

      {/* <Script src="//eu.fw-cdn.com/12579744/608161.js" chat="true" /> */}

      <Script
        id="hs-script-loader"
        async
        defer
        src="//js-na1.hs-scripts.com/45839955.js"
      />
    </>
  );
}

// ----------------------------------------------------------------------

MyApp.getInitialProps = async (context) => {
  const appProps = await App.getInitialProps(context);

  const cookies = cookie.parse(
    context.ctx.req ? context.ctx.req.headers.cookie || "" : document.cookie
  );

  const settings = getSettings(cookies);

  return {
    ...appProps,
    settings,
  };
};
