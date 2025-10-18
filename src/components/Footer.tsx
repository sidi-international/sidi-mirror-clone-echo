
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-sidi-black py-12 border-t border-gray-800">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-white text-2xl font-bold mb-2">Discovery One</h3>
            <p className="text-gray-400 mb-1">A brand of</p>
            <h4 className="text-white text-xl font-semibold mb-4">Mars Planet Technologies</h4>
          </div>
          
          <div className="text-gray-400 space-y-2 mb-8">
            <p>Via Dalmine 10a</p>
            <p>24035 - Curno BG</p>
            <p>Italy</p>
            <p className="mt-4">Tel. +39 035 0167428</p>
            <p>
              <a href="mailto:info@marsplanet.org" className="hover:text-primary transition-colors">
                info@marsplanet.org
              </a>
            </p>
            <p>
              <a href="https://marsplanet.org/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                www.marsplanet.org
              </a>
            </p>
          </div>
          
          <div className="pt-8 border-t border-gray-800">
            <p className="text-gray-500 text-sm">
              © {currentYear} Mars Planet Technologies. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
