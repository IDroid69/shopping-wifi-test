import React from 'react';

interface WifiLayoutProps {
  children: React.ReactNode;
}

export function WifiLayout({ children }: WifiLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-sans">
      {/* Header do Shopping */}
      <header className="bg-white border-b border-gray-200 py-4 px-6 flex justify-center items-center shadow-sm">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 mb-1">
             <div className="w-10 h-10 bg-[#008444] rounded-full flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                  <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z" />
                </svg>
             </div>
             <div className="flex flex-col">
                <span className="text-[#008444] font-bold text-xl leading-none">SHOPPING</span>
                <span className="text-gray-600 font-medium text-lg leading-none tracking-tighter">PRAÇA DA MOÇA</span>
             </div>
          </div>
          <div className="h-1 w-full bg-gradient-to-r from-orange-400 via-green-500 to-blue-500 rounded-full mt-1"></div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8">
        <div className="max-w-md w-full text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Wi-Fi Gratuito</h1>
          <p className="text-gray-600">
            Faça login no Instagram para ter acesso à rede Wi-Fi do Shopping Praça da Moça.
          </p>
        </div>

        <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          {children}
        </div>

        <div className="mt-8 text-center text-xs text-gray-400 max-w-xs">
          Ao conectar, você concorda com os nossos <a href="#" className="underline">Termos de Uso</a> e <a href="#" className="underline">Política de Privacidade</a>.
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 px-4 bg-white border-t border-gray-200 text-center">
        <p className="text-xs text-gray-500">
          &copy; 2026 Shopping Praça da Moça - Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
