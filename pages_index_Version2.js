import Head from "next/head";
import Image from "next/image";

const produtos = [
  {
    nome: "Sousplat de Crochê",
    preco: "R$ 80,00 (conjunto com 4)",
    descricao: "Ideal para sua mesa posta. Feito 100% à mão.",
    imagem: "/sousplat.jpg",
  },
  {
    nome: "Amigurumi Ursinho",
    preco: "R$ 45,00",
    descricao: "Ursinho feito em crochê, perfeito para presentear.",
    imagem: "/amigurumi.jpg",
  },
  {
    nome: "Tapete Redondo",
    preco: "R$ 120,00",
    descricao: "Tapete decorativo em crochê, diâmetro 1m.",
    imagem: "/tapete.jpg",
  },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Crochê da Ana — Peças Feitas à Mão</title>
        <meta name="description" content="Loja de peças de crochê feitas à mão" />
      </Head>
      <main>
        <h1>Crochê da Ana</h1>
        <p>Peças exclusivas feitas à mão com muito carinho.</p>
        <h2>Nossos Produtos</h2>
        <div className="produtos">
          {produtos.map((item, idx) => (
            <div key={idx} className="produto">
              <Image src={item.imagem} width={200} height={200} alt={item.nome} />
              <h3>{item.nome}</h3>
              <p>{item.descricao}</p>
              <p><strong>{item.preco}</strong></p>
            </div>
          ))}
        </div>
        <h2>Contato</h2>
        <form action="https://formsubmit.co/seuemail@exemplo.com" method="POST" className="formulario">
          <input type="text" name="name" placeholder="Seu nome" required />
          <input type="email" name="email" placeholder="Seu e-mail" required />
          <textarea name="message" placeholder="Sua mensagem" required />
          <button type="submit">Enviar</button>
        </form>
      </main>
      <style jsx>{`
        main {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
        }
        .produtos {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .produto {
          background: #f8f8f8;
          padding: 1rem;
          border-radius: 8px;
          width: 220px;
          text-align: center;
        }
        .formulario {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 2rem;
        }
        input, textarea {
          padding: 0.5rem;
          border-radius: 4px;
          border: 1px solid #ccc;
        }
        button {
          background: #e17e94;
          color: white;
          padding: 0.7rem;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}