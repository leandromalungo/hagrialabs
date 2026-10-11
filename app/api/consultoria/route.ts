import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      nome,
      perfil,
      cargo,
      organizacao,
      sector,
      email,
      telefone,
      localizacao,
      area,
      assunto,
      prazo,
      modalidade,
      mensagem,
    } = body;

    if (!nome || !email || !telefone || !assunto || !mensagem) {
      return NextResponse.json(
        {
          ok: false,
          error: "Por favor, preencha todos os campos obrigatórios.",
        },
        { status: 400 }
      );
    }

    // Attempt server-side delivery via FormSubmit to lmalungo@outlook.com
    let relayDelivered = false;
    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/lmalungo@outlook.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            _subject: `[Hagriia Labs — Consultoria] ${assunto}`,
            _template: "table",
            _replyto: email,
            Nome: nome,
            "Quem é / Perfil": perfil || "Não especificado",
            "Cargo / Função": cargo || "Não especificado",
            "Empresa / Instituição": organizacao || "Não especificado",
            "Sector de Actividade": sector || "Não especificado",
            "E-mail": email,
            "Telefone / Contacto": telefone,
            "Localização": localizacao || "Não especificado",
            "Área Tecnológica": area || "Não especificado",
            "Prazo Estimado": prazo || "Não especificado",
            "Modalidade de Reunião": modalidade || "Não especificado",
            Assunto: assunto,
            "Descrição do Projecto / Desafio": mensagem,
          }),
        }
      );

      if (response.ok) {
        relayDelivered = true;
      }
    } catch {
      // Fallback handled on client via mailto link
      relayDelivered = false;
    }

    return NextResponse.json({
      ok: true,
      relayDelivered,
      recipient: "lmalungo@outlook.com",
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error: "Não foi possível processar o pedido no momento.",
      },
      { status: 500 }
    );
  }
}
