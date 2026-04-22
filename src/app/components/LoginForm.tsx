import { useState } from 'react';

interface LoginFormProps {
  onLogin: (email: string, password: string) => void;
  onSwitchToRegister: () => void;
}

export function LoginForm({ onLogin, onSwitchToRegister }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Por favor, preencha todos os campos');
      return;
    }

    if (password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres');
      return;
    }

    onLogin(email, password);
  };

  return (
    <div className="w-full bg-[#121212] p-8">
      <div className="flex flex-col items-center justify-center">
        <div className="w-full max-w-sm">
          <div className="mb-10 text-center">
            <img src="/Instagram.png" alt="Instagram" className="w-40 mx-auto brightness-200" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-3 text-sm text-red-500 text-center bg-red-500/10 rounded-lg border border-red-500/20">
                {error}
              </div>
            )}

            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 text-white text-sm bg-[#262626] border border-[#363636] rounded-xl focus:outline-none focus:border-gray-500 placeholder-gray-500"
              placeholder="Número de celular, nome de usuário ou email"
              required
            />

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 text-white text-sm bg-[#262626] border border-[#363636] rounded-xl focus:outline-none focus:border-gray-500 placeholder-gray-500"
              placeholder="Senha"
              required
            />

            <button
              type="submit"
              className="w-full mt-4 px-4 py-3 bg-[#0095f6] text-white font-semibold text-sm rounded-xl hover:bg-[#1877f2] transition-colors disabled:opacity-50"
            >
              Entrar
            </button>
          </form>

          <button className="w-full text-white text-xs text-center mt-6 hover:opacity-70 transition-opacity">
            Esqueceu a senha?
          </button>

          <div className="mt-8">
            <button
              onClick={onSwitchToRegister}
              className="w-full text-[#0095f6] font-semibold text-sm py-3 border border-[#0095f6] rounded-xl hover:bg-[#0095f6]/10 transition-colors"
            >
              Criar nova conta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
