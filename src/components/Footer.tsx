const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 bg-white border-t border-mxmo-light/30">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm text-mxmo-dark/60">
          © {currentYear} MXMO | Todos os direitos reservados |{" "}
          <a 
            href="#" 
            className="text-mxmo-primary hover:underline"
          >
            Política de Privacidade
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;