export default function PatientsModal() {
    return (
        <form className="flex flex-col w-[380px] gap-6">
            <h1 className="font-bold text-xl text-center">Cadastrar paciente</h1>
            <label className="flex flex-col">
                Nome
                <input
                    className="py-2 px-3 rounded-lg text-black"
                    type="text"
                    placeholder="Nome completo"
                />
            </label>
            <div className="flex items-center justify-between gap-6">
                <label className="flex flex-col w-2/5">
                    Data de nascimento
                    <input
                        className="py-2 px-3 rounded-lg text-black"
                        type="date"
                    />
                </label>
                <label className="flex flex-col w-3/5">
                    Gênero
                    <select className="py-2 px-3 rounded-lg text-black">
                        <option disabled selected value />
                        <option>Masculino</option>
                        <option>Feminino</option>
                        <option>Não informado</option>
                    </select>
                </label>
            </div>
            <label className="flex flex-col">
                CPF
                <input
                    className="py-2 px-3 rounded-lg text-black"
                    type="number"
                    placeholder="Apenas números"
                />
            </label>
            <label className="flex flex-col">
                Endereço
                <input
                    className="py-2 px-3 rounded-lg text-black"
                    type="text"
                    placeholder="Logradouro"
                />
            </label>
            <div className="flex items-center justify-between gap-6">
                <label className="flex flex-col w-3/5">
                    CEP
                    <input
                        className="py-2 px-3 rounded-lg text-black"
                        type="number"
                        placeholder="Apenas números"
                    />
                </label>
                <label className="flex flex-col w-2/5">
                    Número
                    <input
                        className="py-2 px-3 rounded-lg text-black"
                        type="number"
                        placeholder="N °"
                    />
                </label>

            </div>
            <button
                className="w-32 py-2 mb-8 rounded-lg self-center text-white font-semibold bg-[#40c4ff] hover:bg-[#00a7ef]"
            >
                Adicionar
            </button>
        </form>
    )
}