import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="h-screen w-screen bg-zinc-950 flex items-center justify-center text-white flex-col">
      <h2>Página não encontrada</h2>
      <Link href="/" className="underline">
        Voltar para a página principal.
      </Link>
    </div>
  )
}
