import { useState } from 'react';

interface TwoFactorFormProps {
  onVerify: (code: string) => void;
  onBackToLogin: () => void;
}

export function TwoFactorForm({ onVerify, onBackToLogin }: TwoFactorFormProps) {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (code.length < 6) {
      setError('Insira o código de 6 dígitos enviado para o seu dispositivo');
      return;
    }

    onVerify(code);
  };

  return (
    <div className="w-full bg-[#121212] p-8">
      <div className="flex flex-col items-center justify-center">
        <div className="w-full max-w-sm">
          <div className="mb-6 text-center">
             <div className="flex justify-center mb-4">
                <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center">
                    <svg aria-label="Segurança" className="_8-yf5 " color="#ffffff" fill="#ffffff" height="32" role="img" viewBox="0 0 24 24" width="32">
                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"></path>
                    </svg>
                </div>
             </div>
            <h2 className="text-white text-lg font-semibold mb-2">
              Insira o código de segurança
            </h2>
            <p className="text-gray-400 text-xs">
              Insira o código de 6 dígitos que enviamos para o seu dispositivo para concluir o login.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-3 text-sm text-red-500 text-center bg-red-500/10 rounded-lg border border-red-500/20">
                {error}
              </div>
            )}

            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
              className="w-full px-4 py-3 text-white text-base bg-[#121212] border border-[#363636] rounded-xl focus:outline-none focus:border-gray-500 placeholder-gray-500 text-center tracking-[0.5em] text-xl"
              placeholder="######"
              required
            />

            <button
              type="submit"
              className="w-full mt-2 px-4 py-3 bg-[#0095f6] text-white font-semibold text-sm rounded-xl hover:bg-[#1877f2] transition-colors disabled:opacity-50"
            >
              Confirmar
            </button>
          </form>

          <button 
            onClick={onBackToLogin}
            className="w-full text-[#0095f6] text-xs font-semibold text-center mt-6 hover:opacity-70 transition-opacity"
          >
            Voltar ao login
          </button>
        </div>
      </div>
    </div>
  );
}
