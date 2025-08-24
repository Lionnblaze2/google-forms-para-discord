# google-forms-para-discord

# Google Forms → Discord Webhook

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
