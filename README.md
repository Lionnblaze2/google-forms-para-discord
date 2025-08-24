# google-forms-para-discord

Este script permite que respostas de um **Google Forms** sejam automaticamente enviadas para um canal do **Discord** usando um webhook.

---

## 🚀 Configuração Básica

### 1. Criar Formulário
- Crie um **Google Formulário** com as perguntas que quiser.
- Exemplo de perguntas:
  - Nome completo
  - Nickname
  - Idade
  - Discord:
  - Email

### 2. Abrir o Editor de Script
- No Google Forms, clique em **Mais (⋮) > Script editor**.
- Apague tudo e cole o conteúdo de `google-script.js`.

### 3. Configurar o Webhook do Discord
- Vá no canal do Discord onde deseja receber as respostas.
- Clique em **Configurações do canal > Integrações > Webhooks**.
- Crie um novo webhook e copie a **URL**.
- No código, substitua:

```js
const POST_URL = "WEBHOOK_URL_AQUI";
```

### 4. Pegar o ID do Formulário
- Abra seu formulário no editor.
- O ID estará na URL, entre `/d/` e `/edit`.
- Exemplo:
  ```
  https://docs.google.com/forms/d/1AbCDeFGhijkLmnOPqRSTuvWxYz1234567890/edit
                                ^^^^^^^^^^^^^^^^^^^^^^^^^
                                Este é o FORM_ID
  ```
- No código, substitua:

```js
const FORM_ID = "FORM_ID_AQUI";
```

### 5. Criar Trigger
- No editor de script, vá em **Editar > Current project's triggers**.
- Crie um trigger com as opções:
  - Função: `onSubmit`
  - Evento: `On form submit`

### 6. Testar
- Envie uma resposta de teste no formulário.
- Veja se a mensagem aparece no Discord.

---

## 🎨 Opções Extras (Customizações)

### Cor
```json
"color": 16711680 // Vermelho
```

### Autor
```json
"author": {
  "name": "Google Forms Bot",
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
"description": "Novo formulário enviado!"
```

### Imagem
```json
"image": { "url": "https://link-da-imagem.png" }
```

### Thumbnail
```json
"thumbnail": { "url": "https://link-do-thumbnail.png" }
```

### Footer com ícone
```json
"footer": {
  "text": "Google Forms → Discord",
  "icon_url": "https://link-do-icone.png"
}
```

---

## 📌 Observações
- O Google Apps Script pode exigir permissões extras na primeira execução.
- Certifique-se de que seu formulário permite **coletar e-mails** se quiser o campo automático de e-mail.
- O Discord tem limite de **6000 caracteres por mensagem**. Se seu formulário for muito longo, pode precisar resumir.

---

## 📜 Licença
MIT – Use, modifique e compartilhe livremente.
