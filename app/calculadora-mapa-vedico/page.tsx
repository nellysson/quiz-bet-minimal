export default function CalculadoraMapaVedico() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Calculadora de Mapa Védico</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="mb-4">
          Bem-vindo à Calculadora de Mapa Védico. Preencha o formulário abaixo para gerar seu mapa astrológico védico
          personalizado.
        </p>
        <form className="space-y-4">
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
              Nome
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Seu nome completo"
            />
          </div>
          <div>
            <label htmlFor="dataNascimento" className="block text-sm font-medium text-gray-700">
              Data de Nascimento
            </label>
            <input
              type="date"
              id="dataNascimento"
              name="dataNascimento"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="horaNascimento" className="block text-sm font-medium text-gray-700">
              Hora de Nascimento
            </label>
            <input
              type="time"
              id="horaNascimento"
              name="horaNascimento"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="cidade" className="block text-sm font-medium text-gray-700">
              Cidade de Nascimento
            </label>
            <input
              type="text"
              id="cidade"
              name="cidade"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Cidade onde você nasceu"
            />
          </div>
          <div>
            <label htmlFor="pais" className="block text-sm font-medium text-gray-700">
              País
            </label>
            <input
              type="text"
              id="pais"
              name="pais"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="País onde você nasceu"
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Gerar Mapa Védico
          </button>
        </form>
      </div>
    </div>
  )
}
