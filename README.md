# Pipeline de Integração Contínua (CI) - Testes Automatizados

Este repositório contém a implementação de um fluxo de Integração Contínua (CI) utilizando **GitHub Actions**. O objetivo do projeto é automatizar a execução de testes de software e garantir a publicação dos relatórios de execução diretamente na plataforma.

## 🚀 Conceitos Utilizados

A arquitetura da pipeline foi baseada em três níveis de maturidade de testes contínuos:

- **Disparo Manual (Workflow Dispatch):** Permite que qualquer membro do time execute os testes sob demanda através da interface do GitHub.
- **Disparo por Evento (Push):** Garante o conceito central de CI, executando a suite de testes a cada nova alteração enviada para a branch `master`.
- **Disparo Agendado (Schedule/Cron):** Configurado para rodar testes de regressão de forma periódica, garantindo a saúde do projeto de forma automatizada (configurado para rodar diariamente à meia-noite).

## ⚙️ Estrutura da Pipeline

O arquivo de configuração localiza-se em `.github/workflows/ci.yml` e segue as seguintes etapas:

1. **Ambiente:** Inicializa um container virtualizado utilizando `ubuntu-latest`.
2. **Checkout:** Realiza a clonagem do código-fonte do repositório para o ambiente virtualizado.
3. **Setup Node.js:** Configura o runtime do Node.js na versão estável 24.x.
4. **Instalação:** Instala as dependências de desenvolvimento do projeto através do gerenciador `npm`.
5. **Execution:** Executa a suite de testes unitários e direciona a saída dos resultados para um arquivo físico de texto.
6. **Artifact Upload:** Captura a pasta de relatórios gerada e disponibiliza o download do artefato diretamente no painel da pipeline no GitHub, utilizando a diretiva `if: ${{ always() }}` para garantir a publicação mesmo em cenários de falhas de teste.

## 🛠️ Como Executar Manualmente

1. Acesse a aba **Actions** no repositório do GitHub.
2. No menu lateral esquerdo, selecione a pipeline **"CI - Testes Automatizados"**.
3. Clique no menu flutuante **Run workflow**.
4. Selecione a branch desejada e clique no botão verde **Run workflow**.
