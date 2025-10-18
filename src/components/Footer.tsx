
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={{ backgroundColor: '#192E4D' }} className="py-8 border-t border-gray-800">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-4">
            <h3 className="text-white text-xl font-bold">Discovery One</h3>
            <p className="text-gray-400 text-sm">A brand of</p>
            <h4 className="text-white font-semibold">Mars Planet Technologies</h4>
          </div>
          
          <div className="text-gray-400 text-sm space-y-1 mb-4">
            <p>Via Dalmine 10a, 24035 - Curno BG, Italy</p>
            <p>Tel. +39 035 0167428 | <a href="mailto:info@marsplanet.org" className="hover:text-primary transition-colors">info@marsplanet.org</a></p>
            <p>
              <a href="https://marsplanet.org/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                www.marsplanet.org
              </a>
            </p>
          </div>
          
          <div className="pt-4 border-t border-gray-700">
            <p className="text-gray-500 text-xs">
              © {currentYear} Mars Planet Technologies. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
