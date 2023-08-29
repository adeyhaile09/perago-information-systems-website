'use client';
import Copyright from './CopyrightBar';
import QuickLinks from './QuickLinks';
const Footer = () => {
  return (
    <div>
      <div className=" pb-5 mt-32 bg-[#55ba4a]">
        <QuickLinks />
      </div>
      <Copyright />
    </div>
  );
};

export default Footer;
