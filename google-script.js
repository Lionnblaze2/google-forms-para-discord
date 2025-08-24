// Substitua com o Webhook do Discord (criado no canal desejado)
const POST_URL = "WEBHOOK_URL_AQUI";

// Substitua com o ID do seu formulário (encontrado na URL do editor do Google Forms)
const FORM_ID = "FORM_ID_AQUI";

function onSubmit(e) {
  const response = e.response.getItemResponses();
  let items = [];

  for (const responseAnswer of response) {
    const question = responseAnswer.getItem().getTitle();
    const answer = responseAnswer.getResponse();

    if (!answer) continue;

    let displayName = question;

    // Exemplo: renomear campos para deixar a mensagem mais limpa no Discord
    if (question === "Qual seu nome completo?") displayName = "Nome completo:";
    if (question === "Qual seu nickname?") displayName = "Nickname:";
    if (question === "Qual é a sua idade?") displayName = "Idade:";
    if (question === "Discord:") displayName = "Discord:";
    if (question === "Email") displayName = "Email:";

    items.push({
      "name": displayName,
      "value": String(answer),
      "inline": false
    });
  }

  // Pega o email automático (se o formulário coleta)
  const email = e.response.getRespondentEmail();
  if (email) {
    items.push({
      "name": "Email (automático):",
      "value": email,
      "inline": false
    });
  }

  const responsesUrl = `https://docs.google.com/forms/d/${FORM_ID}/edit#responses`;
  const form = FormApp.openById(FORM_ID);
  const count = form.getResponses().length;

  items.push({
    "name": "\u200B",
    "value": `[Clique aqui para abrir a página de respostas](${responsesUrl})`,
    "inline": false
  });

  const options = {
    "method": "post",
    "headers": {
      "Content-Type": "application/json",
    },
    "payload": JSON.stringify({
      "embeds": [{
        "title": `Nova resposta recebida! (#${count})`,
        "color": 3447003,
        "description": `Uma nova resposta foi enviada. Esta é a **#${count}** na lista de envios.\n\u200B`,
        "fields": items,
        "footer": {
          "text": "Google Forms para Discord"
        },
        "timestamp": new Date().toISOString()
      }]
    })
  };

  UrlFetchApp.fetch(POST_URL, options);
}
