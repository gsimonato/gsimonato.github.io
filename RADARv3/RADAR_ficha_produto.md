# RADAR — Ficha Técnica do Produto
**Uso:** documento de referência factual sobre o produto. Não contém preço, garantia, estratégia de conteúdo, avatar de marketing ou decisões de posicionamento — isso fica nos arquivos de contexto de sessão (`contexto_gssimonato_RXX.md` / `contexto_lowticket_RXX.md`).

---

## 1. O que é

**Nome:** RADAR — Rastreio Automático de Demandas, Atividades e Responsáveis
**Formato:** planilha Google Sheets + Google Apps Script (done-for-you, sem instalação de software externo)
**Como roda:** inteiramente dentro da conta Google do próprio usuário — não depende de servidor externo, banco de dados externo ou serviço de terceiros para funcionar
**Distribuição:** cópia individual da planilha (cada comprador recebe seu próprio arquivo)

---

## 2. Funcionalidades

### 2.1 Controle de tarefas
- Tabela central (`TAREFAS`) com cliente/projeto, entrada, engenheiro responsável, prazo, tarefa, responsável secundário, comentários e data de entrega
- Cálculo automático de **STATUS PRAZO** (Atrasado / Entrega hoje / Em breve / No prazo / Sem prazo) a cada edição, sem fórmula manual
- **STATUS** (andamento) com cores automáticas — dropdown configurável pelo usuário, com ordenação própria (coluna ORDEM)
- Formatação condicional nativa alertando linhas com dado incompleto (cliente/responsável preenchido sem status)
- Colunas variáveis (6 colunas extras configuráveis) para campos específicos do escritório

### 2.2 Dashboard
- 3 visões consolidadas, atualizadas automaticamente:
  - Carga por contato (engenheiro e/ou responsável)
  - Por projeto/prazo (breakdown de urgência)
  - Por projeto/status (breakdown de andamento)
- Ordenação automática por total decrescente a cada atualização
- Ordenação manual alternativa via menu, por qualquer coluna

### 2.3 Notificações
- **Email individual:** cada pessoa recebe apenas as tarefas dela — não uma lista com o time inteiro. Conteúdo ordenado por severidade (mais urgente primeiro). Inclui link direto de WhatsApp para o cliente/responsável da tarefa
- **Telegram (opcional):** mesmo resumo, agrupado por severidade, para quem prefere canal de grupo a email
- Horário e frequência de envio configuráveis

### 2.4 Backup e exportação
- Exportação periódica automática (intervalo configurável, padrão 14 dias) das abas TAREFAS, CONFIGS, CONTATOS e arquivo de tarefas arquivadas, em CSV, enviada por email
- Exportação manual sob demanda via menu
- Backup automático de segurança antes de qualquer operação em massa na planilha (proteção contra colagem acidental que apagaria dados)

### 2.5 Configuração
- Painel único (`CONFIGS`) dividido em **básico** (email, dias de envio, limiar de prazo, conclusão automática, dashboard, WhatsApp) e **avançado** (status/cores, colunas variáveis, cargos, Telegram, export CSV) — o mesmo arquivo serve tanto para uso individual simples quanto para configuração mais granular de equipe
- Dropdowns dinâmicos (status, cargos, tipo de contato) — todos editáveis pelo próprio usuário, sem precisar mexer em código

### 2.6 Cadastro de contatos
- Aba própria (`CONTATOS`) com nome, nome completo, tipo, email, WhatsApp, telefone e empresa — alimenta os dropdowns de responsável/engenheiro e os links automáticos de WhatsApp

---

## 3. Segurança e privacidade

- Roda 100% dentro da conta Google do usuário — nenhum dado trafega para servidor de terceiros, incluindo o desenvolvedor do produto
- Usa apenas escopos de permissão não-sensíveis do Google (ex: `MailApp` em vez de `GmailApp`, acesso restrito à própria planilha) — não exige tela de "aplicativo não verificado" do Google na ativação
- Envio de backup por email não usa integração com Google Drive (decisão técnica para manter esse padrão de permissão mínima)

---

## 4. Diferenciais frente a alternativas

| Alternativa comum | Limitação típica | Como o RADAR se posiciona tecnicamente |
|---|---|---|
| Planilha manual sem automação | Ninguém atualiza, dado fica desatualizado, exige cobrança manual | Cálculo de status, cores e notificação são automáticos — não dependem de disciplina manual contínua |
| Cobrança por WhatsApp/grupo | Sem histórico, sem visão consolidada, fácil esquecer alguém | Notificação individual programada + dashboard consolidado substituem a cobrança manual |
| Sistemas completos de gestão (Monday, ClickUp e similares) | Curva de aprendizado, exige migração de ferramenta, mensalidade | Roda dentro da ferramenta que o escritório já usa (Google Sheets); pagamento único, sem mensalidade; não exige treinamento de equipe em interface nova |
| Sistemas com armazenamento em nuvem de terceiros | Dado sai do controle do usuário | Dado permanece inteiramente na conta Google do próprio usuário |

---

## 5. Público-alvo (funcional)

Escritórios pequenos ou profissionais autônomos que:
- Gerenciam mais de um projeto/cliente simultaneamente
- Não têm sistema de gestão formal implantado
- Já usam ou estão dispostos a usar Google Sheets
- Precisam de controle de prazo e responsável sem depender de reunião ou cobrança manual

Não indicado para quem:
- Já usa e está satisfeito com um sistema de gestão completo (Monday, ClickUp, etc.)
- Precisa de aplicativo mobile nativo (o RADAR é web — navegador ou app do Google Sheets)

---

## 6. Facilidade de uso

- Não exige conhecimento de programação — uso é limitado a preencher a planilha normalmente
- Não exige treinamento de equipe — mecânica de preenchimento é a mesma de qualquer planilha
- Configuração inicial é única (não precisa repetir a cada novo projeto/tarefa)
- Cresce de uso individual para uso em equipe sem trocar de arquivo ou ferramenta

---

## 7. Requisitos técnicos

- Conta Google (Gmail/Workspace) com acesso ao Google Sheets
- Acesso à internet (roda como Web App do Google, não offline)
- Navegador ou aplicativo do Google Sheets (mobile ou desktop)

---

## 8. Status de desenvolvimento

Versão atual: v2.5.3f (build R24). Funcionalidades descritas acima refletem o estado atual do script. Pendências de teste de instalação, gravação de vídeos e ajustes de material de apoio são tratadas nos arquivos de contexto de sessão, não nesta ficha.
