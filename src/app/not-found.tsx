import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center bg-[#faf8f5] px-5 text-center">
      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#4a3160]">
        Página no encontrada
      </p>
      <h1 className="font-display text-5xl tracking-tight text-[#2c2c2c] sm:text-6xl">
        404
      </h1>
      <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-[#8a8078] sm:text-lg">
        Lo sentimos, la página que buscas no existe o fue movida.
      </p>
      <Link
        href="/"
        className="btn-liquid btn-liquid--primary mt-8 px-6 py-3 text-sm font-medium"
      >
        Volver al inicio
      </Link>
    </main>
  );
}
