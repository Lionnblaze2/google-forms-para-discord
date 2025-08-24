# Google Forms para Discord Webhook

Este repositório contém um script em Google Apps Script que envia respostas de um Google Form para um canal do Discord, utilizando um webhook.

---

## Configurações Básicas

### 1. Criar o Formulário
- Crie um formulário no Google Forms com as perguntas que desejar.
- Exemplos de perguntas comuns:
  - Nome completo
  - Nickname
  - Idade
  - Discord
  - Email

### 2. Abrir o Editor de Script
- No Google Forms, clique em **Mais (⋮) > Apps Script**.
- Apague o conteúdo existente e cole o conteúdo do arquivo `google-script.js`.

### 3. Configurar o Webhook do Discord
- No Discord, escolha o canal onde as respostas devem ser enviadas.
- Vá em **Configurações do canal > Integrações > Webhooks**.
- Crie um novo webhook e copie a URL.
- Substitua no código:
```js
const POST_URL = "WEBHOOK_URL_AQUI";
```

### 4. Pegar o ID do Formulário
- Abra o formulário no modo de edição.
- O ID aparece na URL, entre `/d/` e `/edit`.
- Exemplo:
  ```
  https://docs.google.com/forms/d/**1AbCDeFGhijkLmnOPqRSTuvWxYz1234567890**/edit
  ```
  
  > O que está em negrito pe o FORM_ID!

- Substitua no código:
```js
const FORM_ID = "FORM_ID_AQUI";
```

### 5. Criar o Trigger
- No editor de script, vá em **Editar > Acionadores do projeto atual**.
- Adicione um novo acionador:
  - Função: `onSubmit`
  - Evento: Ao enviar formulário

### 6. Testar
- Envie uma resposta de teste.
- Verifique se a mensagem chegou no canal do Discord.

---

## Customizações Opcionais

É possível alterar o formato da mensagem enviada para o Discord.

### Cor
A cor precisa ser um número decimal (não hexadecimal).
```json
"color": 16711680 (Vermelho)
```

### Autor
```json
"author": {
  "name": "Nome do Bot",
  "url": "https://forms.google.com",
  "icon_url": "https://link-do-icone.png"
}
```

### URL no título
```json
"url": "https://forms.google.com"
```

### Descrição
```json
"description": "Novo formulário enviado"
```

### Imagem
```json
"image": { "url": "https://link-da-imagem.png" }
```

### Thumbnail
```json
"thumbnail": { "url": "https://link-do-thumbnail.png" }
```

### Rodapé com ícone
```json
"footer": {
  "text": "Google Forms para Discord",
  "icon_url": "https://link-do-icone.png"
}
```

---

## Observações Importantes
- O Google Apps Script pode solicitar permissões na primeira execução.
- Se o formulário estiver configurado para coletar e-mails, esses dados também podem ser enviados para o Discord.
- O Discord tem limite de 6000 caracteres por mensagem. Caso seu formulário seja muito longo, pode ser necessário resumir as informações.

---

## Licença
Este projeto utiliza a licença MIT. Você pode usar, modificar e compartilhar livremente.
