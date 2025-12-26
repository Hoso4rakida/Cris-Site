# Sobre

Esse é um site de venda de moveis de interiores onde usei Java no backend usando o Spring e no frontend foi usado react com tailwind.

Motodos de trabalho:

```replit
[[workflows.workflow]]
name = "Project"
mode = "parallel" # Isso é ótimo, mantém os dois ativos
author = "agent"

# Task 1: Backend Java Spring
[[workflows.workflow.tasks]]
name = "Backend"
task = "shell.exec"
args = "mvn spring-boot:run" # Comando padrão para iniciar o Spring

# Task 2: Frontend React
[[workflows.workflow.tasks]]
name = "Frontend"
task = "shell.exec"
args = "cd frontend/AnaSite && npm install && npm run dev"
waitForPort = 5173 # O Vite geralmente usa a 5173
```
