import React from 'react';
import Footer from './components/Footer'; // Ajuste o caminho conforme necessário
import './globals.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Central de Relacionamento Giusepe" />
        <meta name="author" content="Pedro Giusepe" />
        <meta name="keywords" content="Central, Relacionamento, Giusepe, Contato, Suporte" />
        <title>Estação Central - Central de Relacionamento Giusepe</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <header style={headerStyle}>
          <h1 style={titleStyle}>Bem-vindo à Central de Relacionamento Giusepe</h1>
        </header>

        {/* O conteúdo dinâmico da página */}
        <main style={mainStyle}>{children}</main>

        {/* Rodapé fixo */}
        <Footer />
      </body>
    </html>
  );
};

// Estilos embutidos para personalização
const headerStyle = {
  backgroundColor: '#333',
  color: 'white',
  padding: '1rem',
  textAlign: 'center' as const,
};

const titleStyle = {
  margin: 0,
  fontSize: '1.8rem',
};

const mainStyle = {
  padding: '2rem',
  minHeight: '80vh',
  backgroundColor: '#f4f4f4',
};

export default Layout;
