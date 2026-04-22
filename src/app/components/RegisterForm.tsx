import { useState } from 'react';

interface RegisterFormProps {
  onRegister: (email: string, password: string) => void;
  onSwitchToLogin: () => void;
}

export function RegisterForm({ onRegister, onSwitchToLogin }: RegisterFormProps) {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password || !fullName || !username) {
      setError('Por favor, preencha todos os campos');
      return;
    }

    if (password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres');
      return;
    }

    onRegister(email, password);
  };

  return (
    <div className="w-full bg-[#121212] p-8">
      <div className="flex flex-col items-center justify-center">
        <div className="w-full max-w-sm">
          <div className="mb-6 text-center">
            <img src="/Instagram.png" alt="Instagram" className="w-40 mx-auto brightness-200" />
            <p className="text-gray-400 font-semibold mt-4 text-sm">Cadastre-se para ver fotos e vídeos dos seus amigos.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            {error && (
              <div className="p-3 text-sm text-red-500 text-center bg-red-500/10 rounded-lg border border-red-500/20">
                {error}
              </div>
            )}

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 text-white text-sm bg-[#262626] border border-[#363636] rounded-xl focus:outline-none focus:border-gray-500 placeholder-gray-500"
              placeholder="Email"
              required
            />

            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-2.5 text-white text-sm bg-[#262626] border border-[#363636] rounded-xl focus:outline-none focus:border-gray-500 placeholder-gray-500"
              placeholder="Nome completo"
              required
            />

            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2.5 text-white text-sm bg-[#262626] border border-[#363636] rounded-xl focus:outline-none focus:border-gray-500 placeholder-gray-500"
              placeholder="Nome de usuário"
              required
            />

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2.5 text-white text-sm bg-[#262626] border border-[#363636] rounded-xl focus:outline-none focus:border-gray-500 placeholder-gray-500"
              placeholder="Senha"
              required
            />

            <button
              type="submit"
              className="w-full mt-4 px-4 py-3 bg-[#0095f6] text-white font-semibold text-sm rounded-xl hover:bg-[#1877f2] transition-colors disabled:opacity-50"
            >
              Cadastre-se
            </button>
          </form>

          <div className="mt-8">
            <button
              onClick={onSwitchToLogin}
              className="w-full text-[#0095f6] font-semibold text-sm py-3 border border-[#0095f6] rounded-xl hover:bg-[#0095f6]/10 transition-colors"
            >
              Tem uma conta? Conecte-se
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
